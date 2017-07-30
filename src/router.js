import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import Shop from './routes/shop/Shop';
import Dashboard from './routes/dashboard/Dashboard';
import NotFound from './components/NotFound';

const RouterConfig = ({history, app}) => {

    return (
        <Router history={ history }>
      		<Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
            <Route path="/" component={IndexPage} >
                <IndexRedirect to="dashboard"/>
                <Route path="dashboard" component={Dashboard} />
                <Route path="shop" component={Shop} />
                <Route path={'form'}>
                    <Route path={'basicForm'} component={BasicForm} />
                </Route>
                <Route path={'table'}>
                    <Route path={'basicTable'} component={BasicTable} />
                    <Route path={'advancedTable'} components={AdvancedTable} />
                    <Route path={'asynchronousTable'} components={AsynchronousTable} />
                </Route>
                <Route path={'chart'}>
                    <Route path={'echarts'} component={Echarts} />
                    <Route path={'recharts'} component={Recharts} />
                </Route>
                <Route path={'ui'}>
                    <Route path={'icons'} component={Icons} />
                    <Route path={'buttons'} component={Buttons} />
                    <Route path={'spins'} component={Spins} />
                    <Route path={'modals'} component={Modals} />
                    <Route path={'notifications'} component={Notifications} />
                    <Route path={'tabs'} component={Tabs} />
                    <Route path={'banners'} component={Banners} />
                    <Route path={'wysiwyg'} getComponent={Wysiwyg} />
                    <Route path={'drags'} component={Drags} />
                    <Route path={'gallery'} component={Gallery} />
                </Route>
                <Route path={'animation'}>
                    <Route path={'basicAnimations'} component={BasicAnimations} />
                    <Route path={'exampleAnimations'} component={ExampleAnimations} />
                </Route>
            </Route>
            <Route path="*" component={NotFound}/>
    	</Router>
    );
}

export default RouterConfig;
