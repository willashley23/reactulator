import React from 'react';
import {Router, Root} from 'react-router';
import { withRouter } from 'react-router';
import Footer from './footer';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
  } 

  handleClick() {
    if (this.props.currentUser) {
      this.props.router.push(`/users/${currentUser.id}`);
    } else {
      this.props.router.push("/home/login");
    }
  }


update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div className="home">
       {this.props.children}
      </div> 
    )
  }
}

export default withRouter(Home);