import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';

const RouterConfig = ({history}) => {

    return (
        <Router history={ history }>
      		<Route path="/" component={IndexPage} />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={IndexPage} >
                 <IndexRedirect to="login"/>

            </Route>

    	</Router>
    );
}

export default RouterConfig;
