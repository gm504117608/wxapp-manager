import React from 'react';
import { Button, Row, Col, Card, Dropdown, Menu, Icon } from 'antd';
import styles from './Buttons.css';
import ButtonSize from './ButtonSize';


const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  console.log('click', e);
}

class Buttons extends React.Component {

	render() {
		return (
			<div style={{paddingTop: 50}}>
				  <Row gutter={8}>
  					<Col span={12}>
            <Card>
    					<Button type="primary">Primary</Button>
    					<Button>Default</Button>
    					<Button type="dashed">Dashed</Button>
   						<Button type="danger">Danger</Button>
              </Card>
  					</Col>
  					<Col span={12}>
            <Card>
              <Button type="primary">primary</Button>
              <Button>secondary</Button>
              <Dropdown overlay={menu}>
                <Button>more <Icon type="down" /></Button>
              </Dropdown>
              </Card>
  					</Col>
				  </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Card>
              <ButtonSize />
              </Card>
            </Col>
          </Row>
			</div>
		);
	}
}

export default Buttons;