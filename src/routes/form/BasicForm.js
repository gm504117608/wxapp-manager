import React from 'react';
import { connect } from 'dva';
import BasicForm from '../../components/Form/BasicForm';

class BasicForms extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (<div><BasicForm /></div>);
	}
}

export default connect()(BasicForms);