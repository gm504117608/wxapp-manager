import React from 'react';

class Charts extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
		return <div>{this.props.children}</div>;
	}
}

export default Charts;