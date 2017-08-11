import React from 'react';
import { Tree, Card, Col, Row } from 'antd';
import reqwest from 'reqwest';


class BasicTrees extends React.Component {

	state = {
		menu: []
	}

	onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
	}

	onCheck = (checkedKeys, info) => {
		console.log('checked', checkedKeys, info);
	}

	 // 获取服务器数据
    getAllMenus = (params = {}) => {
        reqwest({
            url: 'http://localhost:8080/api/menu',
            method: 'get',
            type: 'json',
            data: {},
        }).then((response) => {
            console.log("response", response);
            this.setState({
                menu: response.data,
            });
        }, (response, msg) => {
            console.log("error = response, msg:", response, msg);
        }).always((response) => {
            console.log("always: ", response);
        });
    }

    componentDidMount() {
        this.getAllMenus();
    }

    createChildrenMenu = (item) => {
        return (
            <Tree.TreeNode title={item.name} key={item.id}>
                { this.createMenu(item.children) }
            </Tree.TreeNode>);
    }

    createMenu = (data = []) => {
        const result = data.map((item, index, array) => {
            let children = item.children;
            if (!children || children.length === 0) {
                return (
                    <Tree.TreeNode title={item.name} key={item.id}>
                    </Tree.TreeNode>);
            } else {
                return this.createChildrenMenu(item);
            }
        });
        return result;
    }


	render () {

		const { menu } = this.state;
        const result = this.createMenu(menu);
        console.log("result", result);

		return (
			<Row gutter={16}>
				<Col span={12}>
				<Card>
				<Tree checkable showLine defaultExpandedKeys={['0-0-0', '0-0-1']} 
				defaultSelectedKeys={['0-0-0', '0-0-1']}
			    defaultCheckedKeys={['0-0-0', '0-0-1']} 
			    onSelect={this.onSelect} onCheck={this.onCheck}>
			    	<Tree.TreeNode title="parent 1" key="0-0">
			    		<Tree.TreeNode title="parent 1-0" key="0-0-0" disabled>
			    			<Tree.TreeNode title="leaf 1" key="0-0-0-0" disableCheckbox />
			    			<Tree.TreeNode title="leaf 2" key="0-0-0-1" />
			    		</Tree.TreeNode>
			    		<Tree.TreeNode title="parent 1-1" key="0-0-1">
							<Tree.TreeNode title={<span style={{ color: '#o8c'}}>来一发</span>} key="0-0-1-0" />
			    		</Tree.TreeNode>
			    	</Tree.TreeNode>
				</Tree>
				</Card>
				</Col>

				<Col span={12}>
				<Card>
				<Tree checkable showLine>
					<Tree.TreeNode title="所有" key="all">
			    		{result}
			    	</Tree.TreeNode>
				</Tree>
				</Card>
				</Col>
			</Row>
		);
	}
}

export default BasicTrees;