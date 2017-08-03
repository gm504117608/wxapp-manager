import React from 'react';
import { Row, Col, Card, Switch } from 'antd';
import styles from './animate.css'; 

class BasicAnimations extends React.Component {
	state = {
		animated: false,
		animatedOne: -1,
	};

	animatedAll = (checked) => {
		checked && this.setState({ animated: true });
		!checked && this.setState({ animated: false });
	};

	animatedOne = (i) => {
		this.setState({ animatedOne: i });
	};

	animatedOneOver = () => {
        this.setState({ animatedOne: -1 });
    };

    getAnimated = (value) => {
        console.log(styles[value]);
        return styles[value];
    };

    render() {
    	const animations = [
            'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
            'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
            'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
            'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
            'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
            'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
            'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
            'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
            'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
            'hinge', 'jackInTheBox', 'rollIn', 'rollOut','zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
            'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
            'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
        ];

        const animationsCol = animations.map(
            (v, i) => (
                <Col span={6} key={i}>
                    <Card className={`
                        ${(this.state.animated || (this.state.animatedOne === i) ? styles.animated : '')}  
                        ${(this.state.animated || (this.state.animatedOne === i) ? styles.infinite : '')}
                        ${this.getAnimated(v)}
                    `}
                    onMouseEnter={() => this.animatedOne(i)}
                    onMouseLeave={() => this.animatedOneOver()}>
                         <h3>{v}</h3>
                    </Card>
                </Col>
            ));

        return (
        	<div>
        		<Row>
        		<Card>
                    <a>全部动画(单个动画请移动鼠标)</a>
                    <Switch onChange={this.animatedAll} />
                </Card>
                </Row>

                <Row gutter={8}>
                    {animationsCol}
                </Row>
        	</div>
        );
    }
}

export default BasicAnimations;