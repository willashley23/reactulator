import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/home/login" activeClassName="current">Login </Link>
    <Link to="/home/signup" activeClassName="current"> Sign Up</Link>
  </nav>
);


const personalGreeting = (currentUser, logout) => (
 <nav className="login-signup">
    <Link to="/home" className="sign-out" activeClassName="current" onClick={logout}>Sign Out</Link>
</nav>

);

function RenderAuthLinks({currentUser, logout}){
  if (currentUser) {
    return (
      <div className="navbar">
        <Link to="/home" className="logo">Reactulator</Link>
        <section className="sessionLinks">{personalGreeting(currentUser, logout)}</section>
      </div>
      )
  } else {
    return (
      <div>
      <div className="navbar">
        <Link to="/home" className="logo">Reactulator</Link>
        <section className="sessionLinks">{sessionLinks()}</section>
      </div>
        <h2 className="banner">The Online Calculator Made With <span>React</span></h2>
        <h3>Login to see more...</h3>
      </div>
      )
  }
}

export default RenderAuthLinks;