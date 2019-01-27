import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import lightbulb from '../../../images/lightbulb.png';
import started from '../../../images/tapemeasure3.png';
import explore from '../../../images/bra-vector-405146.png';
import drawer from '../../../images/Drawer.png';
import css from './Home.css';

const Home = () => (
    <div className="home">

        <h1> Congratulations! You are about to find your best bra! </h1>

        <table width="70%" align="center">
            <tr align="center">
                <td align="center">
                    <Link to="/properfit">
                    <img src={lightbulb} alt="Why is this important?" width='50%'/>
                    <div className="txt1">Why talk about proper fit?</div>
                    <div className = "txt2">LEARN MORE</div>
                    </Link>
                </td>
                <td align = "center">
                    <Link to="/measure">
                    <img src={started} alt="Get Started" width='50%'/>
                    <div className="txt1">The first step is to measure yourself.</div>
                    <div className="txt2">GET STARTED</div>
                    </Link>
                </td>
            </tr>
            <tr align="center">
                <td align="center">
                    <Link to="/brands">
                    <img src={explore} alt="Explore Brands" width='50%'/>
                    <div className="txt1">Brands are making bras for you!</div>
                    <div className="txt2">EXPLORE BRANDS</div>
                    </Link>
                </td>
                <td>
                    <Link to="/drawer">

                    <img src={drawer} alt="My Drawer?" width='50%'/>
                    <div className="txt1">Create a collection of bras.</div>
                    <div className="txt2">MY DRAWER</div>
                    </Link>
                </td>
            </tr>
        </table>
        <div className="nav">
            <br/><div>Phone: 123-456-6789 || Email: hackthebra@gmail.com || <a href="http://www.twitter.com/hackthegap">twitter</a> || <a href="https://www.google.com/search?client=safari&rls=en&q=specialty+bra+store+near+me&ie=UTF-8&oe=UTF-8">Find a Store Near You</a></div><br/>
        </div>

    </div>
);

export default Home;
