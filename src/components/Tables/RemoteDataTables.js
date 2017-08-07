import React from 'react';  
import { Table, Card, Col, Row } from 'antd';
import reqwest from 'reqwest';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

class RemoteDataTables extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  handleTableChange = (pagination, filters, sorter) => {
    console.log("pagination, filters, sorter: ", pagination, filters, sorter);
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  // 获取服务器数据
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      data: {
        results: 10,
        ...params,
      },
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    }, (data, msg) => {
      console.log("error = data, msg:", data, msg);
    }).always((data) => {
      console.log("always: ", data);
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Card>
            <Table columns={columns}
              rowKey={record => record.registered}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default RemoteDataTables;