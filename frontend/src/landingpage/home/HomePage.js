import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Dashboard from '../../components/Dashboard';



function HomePage({isLoggedIn, setIsLoggedIn}) {
    return (
        <div>
            {!isLoggedIn ? (
                <div>
                    <Hero />
                    <Awards />
                    <Stats />
                    <Pricing />
                    <Education />
                    <OpenAccount />
                </div>
            ) : (
                <Dashboard />
            )}

{/* <Hero />
                    <Awards />
                    <Stats />
                    <Pricing />
                    <Education />
                    <OpenAccount /> */}
        
           
        

        </div>
      );
}

export default HomePage;