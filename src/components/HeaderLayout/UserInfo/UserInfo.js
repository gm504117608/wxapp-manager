'use strict';

import React from 'react';
import { Tooltip, Button } from 'antd';
import styles from './UserInfo.css';

class UserInfo extends React.Component {

    render() {
        const {ability, username} = this.props.account;
        const tooltipProps = {
            placement: 'bottom',
            title: ability === 'super' ? 'Super Admin' : 'Normal Admin',
        };

        return (
        <div className={styles.user}>
            <Tooltip {...tooltipProps}>
                <span>Hello, <em className={styles.username}>{username} !</em></span>
            </Tooltip>
            <Button icon="logout" type="primary" onClick={this.props.handleClickLogout}>Logout!</Button>
        </div>);
    }
}

export default UserInfo;