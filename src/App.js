import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar store={this.props.store} />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
          <Route exact path='/users' render={() => <UsersContainer />} />
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/news' component={News} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/settings' component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

// export default withRouter(connect(null, { getAuthUserData })(App));
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

