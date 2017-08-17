import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import App from './routes/App';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import Shop from './routes/shop/Shop';
import Dashboard from './routes/dashboard/Dashboard';
import BasicForm from './routes/form/BasicForm';
import NotFound from './components/NotFound';
import Icons from './components/UI/Icons';
import Buttons from './components/UI/button/Buttons';
import Modals from './components/UI/modal/Modals';
import Spins from './components/UI/spin/Spins';
import TabsCustom from './components/UI/tab/TabsCustom';
import CarouselCustom from './components/UI/carousel/CarouselCustom';
import BasicAnimations from './components/animation/BasicAnimations';
import TableAnimation from './components/animation/TableAnimation';
import Echarts from './components/charts/Echarts';
import Recharts from './components/charts/Recharts';
import Charts from './components/charts/Charts';
import BasicTables from './components/tables/BasicTables';
import AdvancedTables from './components/tables/AdvancedTables';
import RemoteDataTables from './components/tables/RemoteDataTables';
import BasicTrees from './components/trees/BasicTrees';
import MenuSystem from './components/system/MenuSystemList';
import StateLifecycle from './components/StateLifecycle';

import { STORAGE_TOKEN_KEY, IS_LOGIN_FLAG, MSG_DURATION } from './utils/constant';

/**
 * 判断是否登录，如果没有登录跳转到登录界面，
 */ 
const requireLogin = (nextState, replace, callback) => {
    console.log("nextState, replace, callback == ", nextState, replace, callback);

    const isLogin = window.localStorage.getItem(IS_LOGIN_FLAG);
    if(isLogin) {
        callback(); //如果有值直接下一步
    }else{
        replace("/login"); // 如果没有登录就直接到登录页面
        callback();
    }
};

const RouterConfig = ({history, app}) => {

    return (
        <Router history={ history }>
      		<Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={App} onEnter={requireLogin}>
                <IndexRedirect to="dashboard" />
                <Route path="dashboard" component={Dashboard} />
                <Route path="shop" component={Shop} />
                <Route path="lifecycle" component={StateLifecycle} />
                <Route path="basicForm" component={BasicForm} />
                <Route path="icons" component={Icons} />
                <Route path="buttons" component={Buttons} />
                <Route path="modals" component={Modals} />
                <Route path="spins" component={Spins} />
                <Route path="tabs" component={TabsCustom} />
                <Route path="carousels" component={CarouselCustom} />
                <Route path="basicAnimations" component={BasicAnimations} />
                <Route path="tableAnimation" component={TableAnimation} />
                <Route path="chart" component={Charts}>
                    <Route path="echarts" component={Echarts} />
                    <Route path="recharts" component={Recharts} />
                </Route>
                <Route path="basicTable" component={BasicTables} />
                <Route path="advancedTable" component={AdvancedTables} />
                <Route path="asynchronousTable" component={RemoteDataTables} />
                <Route path="menu" component={MenuSystem} />
                <Route path="tree" component={BasicTrees} />
            </Route>
            <Route path="*" component={NotFound}/>
    	</Router>
    );
}

export default RouterConfig;
