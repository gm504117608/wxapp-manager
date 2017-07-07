import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Shop from './routes/Shop/Shop';
import Dashboard from './routes/Dashboard/Dashboard';

const RouterConfig = ({history, app}) => {

    return (
        <Router history={ history }>
      		<Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
            <Route path="/" component={IndexPage} >
                 <IndexRedirect to="shop"/>
                 <Route path="shop" component={Shop} />
                 <Route path="dashboard" component={Dashboard} />
            </Route>

    	</Router>
    );
}

export default RouterConfig;
