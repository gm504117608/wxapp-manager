'use strict';

import React, { Component } from 'react';
import { connect } from 'dva';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

class Dashboard extends Component {

    state = {
    };
    
    render() {
        return (<DashboardLayout />);
    };
}

export default connect()(Dashboard);