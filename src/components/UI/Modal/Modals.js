import React from 'react';
import { Card, Icon, Col, Row, Modal, Button, Popconfirm, message, notification } from 'antd';
import BasicModal from './BasicModal';
import SyncModal from './SyncModal';


const confirm = Modal.confirm;

function showConfirm() {
 	Modal.confirm({
    	title: 'Do you Want to delete these items?',
    	content: 'Some descriptions',
    	onOk() {
      		console.log('OK');
    	},
    	onCancel() {
      		console.log('Cancel');
    	},
  	});
}

function showSyncConfirm() {
  	confirm({
    	title: 'Do you want to delete these items?',
    	content: 'When clicked the OK button, this dialog will be closed after 1 second',
    	onOk() {
      		return new Promise((resolve, reject) => {
        		setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        	}).catch(() => console.log('Oops errors!'));
    	},
    	onCancel() {},
  	});
}

function info() {
  	Modal.info({
    	title: 'This is a notification message',
    	content: (
      	<div>
        	<p>some messages...some messages...</p>
        	<p>some messages...some messages...</p>
      	</div>
    	),
    	onOk() {},
  	});
}

function success() {
  	Modal.success({
    	title: 'This is a success message',
    	content: 'some messages...some messages...',
  	});
}

function error() {
  	Modal.error({
    	title: 'This is an error message',
    	content: 'some messages...some messages...',
  	});
}

function warning() {
  	Modal.warning({
    	title: 'This is a warning message',
    	content: 'some messages...some messages...',
  	});
}

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
}

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

class Modals extends React.Component {

	state = {

	};

  confirm = (e) => {
    message.success("click on Yes");
  }

  cancel = (e) => {
    message.error("click on No");
  }

	render() {
		return (
			<div>
			<Row gutter={8}>
				<Col span={4}>
					<Card>
					<BasicModal />
					</Card>
				</Col>
				<Col span={4}>
					<Card> 
					<SyncModal />
					</Card>
				</Col>
				<Col span={4}>
					<Card> 
						<Button onClick={showConfirm}>Confirm</Button>
					</Card>
				</Col>
				<Col span={4}>
					<Card> 
						<Button onClick={showSyncConfirm}>SyncConfirm</Button>
					</Card>
				</Col>
				<Col span={8}>
					<Card> 
						<Button onClick={info}>Info</Button>
    					<Button onClick={success}>Success</Button>
    					<Button onClick={error}>Error</Button>
    					<Button onClick={warning}>Warning</Button>
					</Card>
				</Col>
			</Row>

      <Row gutter={8}>
        <Col span={4}>
          <Card>
          <Popconfirm title="Are you sure delete this task?" onConfirm={this.confirm} onCancel={this.cancel} 
            okText="Yes" cancelText="No">
            <a href="#">delete</a>
          </Popconfirm>
          </Card>
        </Col>
        <Col span={4}>
          <Card>
          <Button type="primary" onClick={openNotification}>
            open notification
          </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
            <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
            <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
            <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
          </Card>
        </Col>
      </Row>
			</div>
		);
	}
}

export default Modals; 