import React from 'react';
import img from '../assets/404.png';
import styles from './Animation/animate.css';

class NotFound extends React.Component {

	state = {
		animated: ''
	};

	enter = () => {
		this.setState({
			animated: 'hinge'
		});
	};


	render(){
		const animateClassName = styles.animated + ' ' + styles.swing + ' ' + styles[this.state.animated];
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
				height: '100%', background: '#ececec', overflow: 'hidden'}}>
                <img src={img} alt="404" className={ animateClassName } 
                onMouseEnter={this.enter} />
            </div>
		);
	}
}

export default NotFound;