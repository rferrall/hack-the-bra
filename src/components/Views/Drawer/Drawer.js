import React from 'react';
import { connect } from 'react-redux';
import Bras from '../../../jsonData/bras.json';
import "./Drawer.css";
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const Drawer = (props) => (



  <div>
  <h2 class="drawer-title"> My Drawer</h2>
     <div class="flex-container">

     {Bras.map((x, index) =>
            <div class="card" key={index}>
              <img src={x.image} alt="Bra" width="100%" />
              <div class="container">

                <h4><b>{x.title}</b></h4>
                <p>{x.size}</p>
                <p>{x.brand}</p>
              </div>
            </div>)}


  </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Drawer);

