import React from 'react';
import { Button, Modal } from 'antd';

class SyncModal extends React.Component {
	state = {
		ModalText: 'content of the modal',
		visible: false,
	};
    showModal = () => {
    	this.setState({
      		visible: true,
    	});
    }
	handleOk = (e) => {
		console.log(e);
		this.setState({ 
			ModalText: 'the modal will be closed after two seconds',
			confirmLoading: true,
		});
		setTimeout(() => {
			this.setState({
				visible: false,
				confirmLoading: false,
			});
		}, 10000);
	}

	handleCancel = (e) => {
		console.log(e);
		this.setState({ visible: false });
	}

	render () {
		const { visible, confirmLoading, ModalText } = this.state;
		return (
			<div>
			<Button type="primary" onClick={this.showModal}>open</Button>
			<Modal title="Sync Modal" visible={visible} onOk={this.handleOk}
			onCancel={this.handleCancel} confirmLoading={confirmLoading}>
				<p>{ModalText}</p>
			</Modal>
			</div>
		);
	}
}

export default SyncModal;