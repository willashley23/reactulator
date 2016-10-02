import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import HomeContainer from './home/home_container';
import SessionFormContainer from './auth/session_form_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectToHome = this._redirectToHome.bind(this);
    this._userOnEnter = this._userOnEnter.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/home/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _redirectToHome(nextState, replace) {
    if(location.hash[2] === '?') {
      replace('/home');
    }
  }

  _userOnEnter(nextState, replace) {
    this._ensureLoggedIn(nextState, replace)
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route  path="/" component={ App } onEnter={ this._redirectToHome }>
          <Route path= "home" component={ HomeContainer } >
            <Route path="login" component={ SessionFormContainer } />
            <Route path="signup" component={ SessionFormContainer } />
          </Route>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;