import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div id="main-content">
  <h1>Welcome to Base Code!</h1>
  <p>Introduction here</p>
  </div>
);

export default connect()(Home);
