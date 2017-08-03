import React from 'react';
import { Card, Row, Col, Carousel } from 'antd';
import styles from './CarouselCustom.css';

function onChange (current) {
	console.log(current);
}

class CarouselCustom extends React.Component {
	getColor = (color) => {
		if (!color) {
			return styles.carouselDiv;
		}
		return styles.carouselDiv + ' ' + styles[color];
	}
	
	render () {
		return (
			<div>
			<Row gutter={16}>
			<Col span={12}>
				<Card>
				<Carousel afterChange={onChange}>
					<div className={this.getColor()}><h3 style={{color: '#fff'}}>1</h3></div>
    				<div className={this.getColor('color2')}><h3 style={{color: '#fff'}}>2</h3></div>
    				<div className={this.getColor('color3')}><h3 style={{color: '#fff'}}>3</h3></div>
    				<div className={this.getColor('color4')}><h3 style={{color: '#fff'}}>4</h3></div>
				</Carousel>
				</Card>
			</Col>
			<Col span={12}>
				<Card>
				<Carousel vertical afterChange={onChange}>
					<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>1</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>2</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>3</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>4</h3></div>
				</Carousel>
				</Card>
			</Col>
			</Row>

			<Row gutter={16}>
			<Col span={12}>
				<Card>
				<Carousel autoplay>
					<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>1</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>2</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>3</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>4</h3></div>
				</Carousel>
				</Card>
			</Col>
			<Col span={12}>
				<Card>
				<Carousel effect="fade">
					<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>1</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>2</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>3</h3></div>
    				<div className={styles.carouselDiv}><h3 style={{color: '#fff'}}>4</h3></div>
				</Carousel>
				</Card>
			</Col>
			</Row>
			</div>
		);
	}
}

export default CarouselCustom;