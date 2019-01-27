import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import image from "./BreastBodyTypes.png";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const Shape = (props) => (
  <div>
    <Link to="/brands">
      <img src={image} alt="Shape" width="100%" />
    </Link>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Shape);
