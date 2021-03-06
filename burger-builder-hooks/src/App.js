import React, { useEffect, Suspense } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const Checkout = React.lazy(()=> {
  return import('./containers/Checkout/Checkout');
})

const Orders = React.lazy(()=> {
  return import('./containers/Orders/Orders');
})

const Auth = React.lazy(()=> {
  return import('./containers/Auth/Auth');
})

function App(props) {

  useEffect(()=>{
    props.onTryAutoSignup();
  }, 
  [] //this is an array that this component should watch for. if is empty it will do the same as component did mount, it will render only 1 time
  )

  let routes = (
    <Switch>
      <Route path="/auth" component={(props)=> <Auth {...props}/>} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  )

  if(props.isAuthenticated){
    routes = (
      <Switch>
        <Route path="/checkout" component={(props)=> <Checkout {...props}/>} />
        <Route path="/orders" component={(props)=> <Orders {...props}/>} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={(props)=> <Auth {...props}/>} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    )
  }

  return(
    <div>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        </Layout>
      </div>
  )

}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  } 
}

const mapDispatchToProps = dispatch => {
  return {
      onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
