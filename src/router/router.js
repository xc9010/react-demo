import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import {Menu} from 'shineout'
import Home from '../component/Home/Home';
import Page1 from '../component/Page1/Page1';
import Counter from '../component/Counter/Counter';
import UserInfo from '../component/UserInfo/UserInfo';
import reduxSaga from '../component/reduxSaga/reduxSaga';

import styles from'./style.css'

const getRouter = () => (
  <Router>
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <Link to='/'>
          <span className={styles.title}>首页</span>
        </Link>
        <Link to="/page1">
          <span className={styles.title}>page1</span>
        </Link>
        <Link to="/counter">
          <span className={styles.title}>counter</span>
        </Link>
        <Link to="/userinfo">
          <span className={styles.title}>fetch</span>
        </Link>
        <Link to="/reduxSaga">
          <span className={styles.title}>redux-saga</span>
        </Link>
      </div>
      <div className={styles.rightSide}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/page1" component={Page1}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/userinfo" component={UserInfo}/>
          <Route path="/reduxSaga" component={reduxSaga}/>
        </Switch>
      </div>
    </div>
  </Router>
);

export default getRouter;
