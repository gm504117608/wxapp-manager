import React from 'react';
import { Tabs, Row, Col, Card, Icon, Button } from 'antd';

const TabPane = Tabs.TabPane;

class TabsCustom extends React.Component {
	state = {
	};

	newTabIndex = 0;

	constructor(props) {
		super(props);
		const panes = [
			{title: 'tab 1', content: 'coneten of the tab pane 1', key: '1'},
			{title: 'tab 2', content: 'coneten of the tab pane 2', key: '2'},
		];
		this.state = {
			activeKey: panes[0].key,
        	panes: panes,
		};
	}

	onChange = (activeKey) => {
		console.log(activeKey);
		this.setState({activeKey});
	}

	onEdit = (targetKey, action) => {
		console.log(targetKey);
		console.log(action);
		this[action](targetKey);
	} 

	add = () => {
		const panes = this.state.panes;
		const activeKey = 'newTab' +　this.newTabIndex++;
		panes.push({title: 'New Tab', content: 'New Tab Pane', key: activeKey});
		this.setState({panes: panes, activeKey: activeKey});
	}

	remove = (targetKey) => {
		console.log(targetKey);
		let activeKey = this.state.activeKey;
		let lastIndex;
		this.state.panes.forEach((pane, i) => {
			if(pane.key === targetKey){
				lastIndex = i - 1;
			}
		});
		const panes = this.state.panes.filter(pane => pane.key !== targetKey);
		{/* 如果当前删除和激活的是同一个tab页面 ， 则显示删除后剩余的最后一个tab页面*/}
		if(lastIndex >= 0 && activeKey === targetKey) {
			activeKey = panes[lastIndex].key;
		}
		this.setState({panes: panes, activeKey: activeKey});
	}

	callBack = (key) => {
		console.log(key);
	}

	render() {
		return (
			<div style={{ padding: 10}}>
				<Row gutter={8}>
					<Col span={12}>
					<Card>
					<Tabs defaultActiveKey="1" onChange={this.callBack}>
						<Tabs.TabPane tab={<span><Icon type='user' />user</span>} key="1"> content of tab pane 1 </Tabs.TabPane>
						<Tabs.TabPane tab="Tab 2" disabled  key="2"> content of tab pane 2 </Tabs.TabPane>
						<Tabs.TabPane tab="Tab 3" key="3"> content of tab pane 3 </Tabs.TabPane>
						<Tabs.TabPane tab="Tab 4" key="4"> content of tab pane 4 </Tabs.TabPane>
					</Tabs>
					</Card>
					</Col>
					<Col span={12}>
					<Card>
					<Tabs defaultActiveKey="1" tabPosition="top" >
          				<TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
          				<TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
          				<TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
         			 	<TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
          				<TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
          				<TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
          				<TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
          				<TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
        			</Tabs>
					</Card>
					</Col>
				</Row>
				<Row gutter={8}>
					<Col span={12}>
					<Card>
					<div> <Button onClick={this.add}>ADD</Button></div>
					<Tabs onChange={this.onChange} activeKey={this.state.activeKey}
					type="editable-card" onEdit={this.onEdit}>
						{this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
					</Tabs>
					</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default TabsCustom;