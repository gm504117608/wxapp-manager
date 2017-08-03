import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import App from './routes/App';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import Shop from './routes/shop/Shop';
import Dashboard from './routes/dashboard/Dashboard';
import NotFound from './components/NotFound';
import Icons from './components/UI/Icons';
import Buttons from './components/UI/Button/Buttons';
import Modals from './components/UI/Modal/Modals';
import Spins from './components/UI/Spin/Spins';
import TabsCustom from './components/UI/Tab/TabsCustom';
import CarouselCustom from './components/UI/Carousel/CarouselCustom';
import BasicAnimations from './components/Animation/BasicAnimations';
import TableAnimation from './components/Animation/TableAnimation';
import Echarts from './components/Charts/Echarts';
import Recharts from './components/Charts/Recharts';
import BasicTables from './components/Tables/BasicTables';

import BasicForm from './routes/form/BasicForm';

const RouterConfig = ({history, app}) => {

    return (
        <Router history={ history }>
      		<Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={App} >
                <IndexRedirect to="dashboard" />
                <Route path="dashboard" component={Dashboard} />
                <Route path="shop" component={Shop} />
                <Route path="form" component={BasicForm}>
                    <Route path="basicForm" component={BasicForm} />
                </Route>
                <Route path="ui">
                    <Route path="icons" component={Icons} />
                    <Route path="buttons" component={Buttons} />
                    <Route path="modals" component={Modals} />
                    <Route path="spins" component={Spins} />
                    <Route path="tabs" component={TabsCustom} />
                    <Route path="carousels" component={CarouselCustom} />
                </Route>
                <Route path="animation">
                    <Route path="basicAnimations" component={BasicAnimations} />
                    <Route path="tableAnimation" component={TableAnimation} />
                </Route>
                <Route path="chart">
                    <Route path="echarts" component={Echarts} />
                    <Route path="recharts" component={Recharts} />
                </Route>
                <Route path="table">
                    <Route path="basicTable" component={BasicTables} />
                </Route>
            </Route>
            <Route path="*" component={NotFound}/>
    	</Router>
    );
}

export default RouterConfig;
