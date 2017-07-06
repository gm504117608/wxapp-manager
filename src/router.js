import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';

const RouterConfig = ({history, app}) => {

    return (
        <Router history={ history }>
      		<Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
            <Route path="/" component={IndexPage} >
                 <IndexRedirect to="index"/>
                 <Route path="index" component={IndexPage} />
            </Route>

    	</Router>
    );
}

export default RouterConfig;
