import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfoRequest, search} from "./actions";


import { Button, Input, Table } from 'shineout'
import styles from'./style.css';
const style = { width: 300, marginBottom: 12 };
class UserInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    console.log(this.props)
  }
  render() {
    const {
      userInfo,
      isLoading,
      errorMsg,
      limit,
      data
    } = this.props.userInfo;
    const {
      dispatch
    } = this.props;
    const columns = [
      { title: 'id', render: 'id'},
      { title: 'bizSubClass', render: 'bizSubClass'},
      { title: 'feeTypeName', render: 'feeTypeName' },
      { title: 'packageStatus', render: 'packageStatus' },
      { title: 'payOrderNumber', render: 'payOrderNumber' },
      { title: 'shipTime', render: 'shipTime' },
      { title: 'status', render: 'status' },
    ];
    return (
      <div className={styles.main}>
        <Button type='success' onClick={() => dispatch(getUserInfoRequest('0'))}>成功请求用户信息</Button>
        <Button type='error' onClick={() => dispatch(getUserInfoRequest('1'))}>失败请求用户信息</Button>
        <div className={styles.fetch}>
          {
            isLoading ? '请求信息中......' :
              (
                errorMsg ? errorMsg :
                  <div>
                    <p>用户信息：</p>
                    <p>用户名：{userInfo.name}</p>
                    <p>介绍：{userInfo.intro}</p>
                  </div>
              )
          }
        </div>


        <div className={styles.table}>
          <Input.Group style={style}>
            <Input placeholder="search text" value={limit.keyword}/>
            <Button type="primary" onClick={() => {
              dispatch(search(limit))
            }}>Search</Button>
          </Input.Group>
        </div>

        <div className={styles.table}>
          <Table keygen="id" striped bordered columns={columns} data={data} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
};
export default connect(mapStateToProps)(UserInfo);
