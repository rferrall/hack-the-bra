import React from 'react';
import { connect } from 'react-redux';
import brands from '../../../jsonData/brands.json';
import "./Brands.css";
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const Brands = (props) => (

  <div>
  <h2 class="brands-title"> My Brands</h2>
     <div class="flex-container">

     {brands.map((x, index) =>
            <div class="card" key={index}>
              <img src={x.image} alt="Brand" width="100%" />
              <div class="container">

                  <a href={x.link}><h4><b>{x.brand}</b></h4></a>
              
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
export default connect(mapStateToProps)(Brands);
