import React from 'react';
import { Button, Radio, Icon } from 'antd';

class ButtonSize extends React.Component {
	state = {
		size: 'default',
	};

	handleSizeChange = (e) => {
		this.setState({ size: e.target.value });
	}

	render() {
		const size = this.state.size;

		return (
			<div>
			<Radio.Group value={size} onChange={this.handleSizeChange}>
				<Radio.Button value="large">large</Radio.Button>
				<Radio.Button value="default">default</Radio.Button>
				<Radio.Button value="small">small</Radio.Button>
			</Radio.Group>
			<br /><br /><br />
			<Button type="primary" shape="circle" icon="download" size={size} />
			<Button type="primary" icon="download" size={size}>download</Button>
			<Button type="primary" size={size}>Normal</Button>
			<br /><br />
			<Button.Group size={size}>
			<Button type="primary">
            	<Icon type="left" />Backward
          	</Button>
          	<Button type="primary">
            	Forward<Icon type="right" />
          	</Button>
			</Button.Group>
			</div>
		);
	}
}

export default ButtonSize;