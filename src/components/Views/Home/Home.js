import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import lightbulb from '../../../images/lightbulb.png';
import started from '../../../images/tapemeasure3.png';
import explore from '../../../images/bra-vector-405146.png';
import drawer from '../../../images/Drawer.png';


const Home = () => (
    <div>
        <div className="nav">
        </div>
        <h1> Congratulations! You are about to find your best bra! </h1>

        <table>
            <tr>
                <td>
                    <Link to="/lightbulb">
                    <img src={lightbulb} alt="Why is this important?" width='50%'/>
                    <div>Lightbulb</div>
                    </Link>
                </td>
                <td>
                    <Link to="/started">
                    <img src={started} alt="Get Started" width='50%'/>
                    <div>Get Started </div>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>
                    <Link to="/brands">
                    <img src={explore} alt="Explore Brands" width='50%'/>
                    <div>Explore Brands</div>
                    </Link>
                </td>
                <td>
                    <Link to="/drawer">

                    <img src={drawer} alt="My Drawer?" width='50%'/>
                    <div>My Drawer</div>
                    </Link>
                </td>
            </tr>
        </table>
        <div className="nav">
            <div>Phone: 123-456-6789 || Email: hackthebra@gmail.com || <a href="http://www.twitter.com/hackthegap">twitter</a>
                <br/> <a href="https://www.google.com/search?client=safari&rls=en&q=specialty+bra+store+near+me&ie=UTF-8&oe=UTF-8">Find a Store Near You</a></div>
        </div>

    </div>
);

export default Home;