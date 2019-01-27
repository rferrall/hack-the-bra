import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import lightbulb from '../../../images/lightbulb.png';
import started from '../../../images/tapemeasure3.png';
import explore from '../../../images/bra-vector-405146.png';
import drawer from '../../../images/Drawer.png';

import css from './Home.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Home = () => (
    <div className="home">

        <h1> Congratulations! You are about to find your best bra! </h1>

        <table>
            <tr>
                <td>
                    <Link to="/gettingstarted">
                    <img src={lightbulb} alt="Why is this important?" width='50%'/>
                    <div>Bra 101</div>
                    </Link>
                </td>
                <td>
                    <Link to="/started">
                    <img src={started} alt="Get Started" width='50%'/>
                    <div>Measure yourself </div>
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
            <br/><div>Phone: 123-456-6789 || Email: hackthebra@gmail.com || <a href="http://www.twitter.com/hackthegap">twitter</a> || <a href="https://www.google.com/search?client=safari&rls=en&q=specialty+bra+store+near+me&ie=UTF-8&oe=UTF-8">Find a Store Near You</a></div><br/>
        </div>

    </div>
);

export default Home;