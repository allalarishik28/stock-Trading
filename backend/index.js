const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("./model/user");
const { StocksModel } = require("./model/StocksModel");
const { TransactionsModel } = require("./model/TransactionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

app.use(cors());
app.use(bodyParser.json());

/* Middleware to Authenticate JWT Token */
const authenticate = (req, res, next) => {
    // console.log("Request:", req); // Log the entire headers for debugging
    console.log("Authorization Header:", req.headers.authorization);
    const token = req.headers.authorization?.split(" ")[1]; 
    console.log("Token:", token); // Log the token for debugging
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // Store user ID in the request for later use
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token!" });
    }
};

/* ------------- USER SIGNUP ------------- */
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            username,
            email,
            passwordHash: hashedPassword
          });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error signing up", error: error.message });
    }
});

/* ------------- USER LOGIN ------------- */
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password!" });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password!" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful!", token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
});

/* ------------- FETCH USER HOLDINGS ------------- */
app.get("/allHoldings", authenticate, async (req, res) => {
    try {
        const userHoldings = await HoldingsModel.find({ user_Id: req.userId });
        res.status(200).json(userHoldings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching holdings", error: error.message });
    }
});

/* ------------- FETCH USER POSITIONS ------------- */
app.get("/allPositions", authenticate, async (req, res) => {
    try {
        const userPositions = await PositionsModel.find({ user_id: req.userId });
        res.status(200).json(userPositions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching positions", error: error.message });
    }
});

/* ------------- FETCH USER ORDERS ------------- */
app.get("/allOrders", authenticate, async (req, res) => {
    try {
        const userOrders = await OrdersModel.find({ user_id: req.userId });
        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error: error.message });
    }
});

/* ------------- PLACE NEW ORDER ------------- */
// app.post("/newOrders", authenticate, async (req, res) => {
//     try {
//         const { name, qty, price, mode } = req.body;
//         const newOrder = new OrdersModel({ userId: req.userId, name, qty, price, mode });
//         await newOrder.save();

//         res.status(201).json({ message: "Order placed successfully!" });
//     } catch (error) {
//         res.status(500).json({ message: "Error placing order", error: error.message });
//     }
// });



app.post("/newOrder", authenticate, async (req, res) => {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({
        user_id: req.userId,  // ✅ This comes from the decoded token in middleware
        symbol: name,
        type: mode,
        price,
        quantity: qty
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!" });
});





  

/* ------------- LOGOUT USER ------------- */
app.post("/logout", (req, res) => {
    // Perform logout logic here
    // No action needed server-side since the token is deleted client-side
    res.status(200).json({ message: "Logged out successfully!" });
});

/* ------------- SERVER START ------------- */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});








// const express = require("express");
// require("dotenv").config();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");


// const { HoldingsModel } = require('./model/HoldingsModel');
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");



// const app = express();
// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// mongoose.connect(uri);

// app.use(cors());
// app.use(bodyParser.json());

// // app.get("/addHoldings", async (req, res) => {
// //   let tempHoldings = [
// //     {
// //       name: "BHARTIARTL",
// //       qty: 2,
// //       avg: 538.05,
// //       price: 541.15,
// //       net: "+0.58%",
// //       day: "+2.99%",
// //     },
// //     {
// //       name: "HDFCBANK",
// //       qty: 2,
// //       avg: 1383.4,
// //       price: 1522.35,
// //       net: "+10.04%",
// //       day: "+0.11%",
// //     },
// //     {
// //       name: "HINDUNILVR",
// //       qty: 1,
// //       avg: 2335.85,
// //       price: 2417.4,
// //       net: "+3.49%",
// //       day: "+0.21%",
// //     },
// //     {
// //       name: "INFY",
// //       qty: 1,
// //       avg: 1350.5,
// //       price: 1555.45,
// //       net: "+15.18%",
// //       day: "-1.60%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "ITC",
// //       qty: 5,
// //       avg: 202.0,
// //       price: 207.9,
// //       net: "+2.92%",
// //       day: "+0.80%",
// //     },
// //     {
// //       name: "KPITTECH",
// //       qty: 5,
// //       avg: 250.3,
// //       price: 266.45,
// //       net: "+6.45%",
// //       day: "+3.54%",
// //     },
// //     {
// //       name: "M&M",
// //       qty: 2,
// //       avg: 809.9,
// //       price: 779.8,
// //       net: "-3.72%",
// //       day: "-0.01%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "RELIANCE",
// //       qty: 1,
// //       avg: 2193.7,
// //       price: 2112.4,
// //       net: "-3.71%",
// //       day: "+1.44%",
// //     },
// //     {
// //       name: "SBIN",
// //       qty: 4,
// //       avg: 324.35,
// //       price: 430.2,
// //       net: "+32.63%",
// //       day: "-0.34%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "SGBMAY29",
// //       qty: 2,
// //       avg: 4727.0,
// //       price: 4719.0,
// //       net: "-0.17%",
// //       day: "+0.15%",
// //     },
// //     {
// //       name: "TATAPOWER",
// //       qty: 5,
// //       avg: 104.2,
// //       price: 124.15,
// //       net: "+19.15%",
// //       day: "-0.24%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "TCS",
// //       qty: 1,
// //       avg: 3041.7,
// //       price: 3194.8,
// //       net: "+5.03%",
// //       day: "-0.25%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "WIPRO",
// //       qty: 4,
// //       avg: 489.3,
// //       price: 577.75,
// //       net: "+18.08%",
// //       day: "+0.32%",
// //     },
// //   ];

// //   tempHoldings.forEach((item) => {
// //     let newHolding = new HoldingsModel({
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.day,
// //       day: item.day,
// //     });

// //     newHolding.save();
// //   });
// //   res.send("Done!");
// // });

// // app.get("/addPositions", async (req, res) => {
// //   let tempPositions = [
// //     {
// //       product: "CNC",
// //       name: "EVEREADY",
// //       qty: 2,
// //       avg: 316.27,
// //       price: 312.35,
// //       net: "+0.58%",
// //       day: "-1.24%",
// //       isLoss: true,
// //     },
// //     {
// //       product: "CNC",
// //       name: "JUBLFOOD",
// //       qty: 1,
// //       avg: 3124.75,
// //       price: 3082.65,
// //       net: "+10.04%",
// //       day: "-1.35%",
// //       isLoss: true,
// //     },
// //   ];

// //   tempPositions.forEach((item) => {
// //     let newPosition = new PositionsModel({
// //       product: item.product,
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.net,
// //       day: item.day,
// //       isLoss: item.isLoss,
// //     });

// //     newPosition.save();
// //   });
// //   res.send("Done!");
// // });

// app.get('/allHoldings', async (req, res) => {
//     let allHoldings = await HoldingsModel.find({});
//     res.send(allHoldings);
//     });

//     app.get('/allPositions', async (req, res) => {
//         let allPositions = await PositionsModel.find({});
//         res.send(allPositions);
//         });

    
//     app.get('/allOrders', async (req, res) => {
//         let allOrders = await OrdersModel.find({});
//         res.send(allOrders);
//         }
//     );
      
//     app.post('/newOrder', async (req, res) => {
//         // let { name, qty, price, mode } = req.body;
//         let newOrder = new OrdersModel({
//             name: req.body.name,
//             qty: req.body.qty,
//             price: req.body.price,
//             mode: req.body.mode,
//         });
      
//         newOrder.save();
//         res.send("Order placed!");
//     });    

// app.listen(PORT, () => {
//     console.log("abcd");
    
//     console.log("abcd");
// });
