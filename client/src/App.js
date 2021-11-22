import { useEffect, Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Members from './components/members/Members.js';
import Navbar from './components/layout/Navbar.js';
import AddMemberModal from './components/members/AddMemberModal.js';
import EditMemberModal from './components/members/EditMemberModal.js';


import MbReward from './components/mbreward/MbReward.js';
import AddMbRewardModal from './components/mbreward/AddMbRewardModal.js';
import EditMbRewardModal from './components/mbreward/EditMbRewardModal.js';

import Rewards from './components/rewards/Rewards.js';
import AddRewardModal from './components/rewards/AddRewardModal.js';
import EditRewardModal from './components/rewards/EditRewardModal.js';

import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Login from './components/auth/Login.js';
import Alerts from './components/layout/Alerts.js';

import PrivateRoute from './components/routing/PrivateRoute.js'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();

    //
    // M.material_select();
  }
  )

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <div className="container">
            <Alerts />

            <AddMbRewardModal />
            <EditMbRewardModal />

            <AddMemberModal />
            <EditMemberModal />

            <AddRewardModal />
            <EditRewardModal />

            <Switch>

              <PrivateRoute exact path='/' component={Home} />
              <PrivateRoute exact path='/member' component={Members} />
              <PrivateRoute exact path='/reward' component={Rewards} />
              <PrivateRoute exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/mbreward' component={MbReward} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
