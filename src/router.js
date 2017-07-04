import React from 'react';
import { Router, Route } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';

const RouterConfig = ({history}) => {
    return (
        <Router history={ history }>
      		<Route path="/" component={Login} />
            <Route path="/register" component={Register}/>

    	</Router>
    );
}

export default RouterConfig;
