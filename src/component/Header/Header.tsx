import React from 'react';
import styles from './Header.less';
// 业务组件
import PopconfirmButton from '@/component/btns/PopconfirmButton'
import TooltipButton from '@/component/btns/TooltipButton'

import { Button, message, Avatar } from 'antd';
import {
	CopyOutlined,
	DeleteOutlined
} from '@ant-design/icons';

interface State {
	userName: String,
	userAvatar: String
}
export default class Header extends React.Component<State> {
	
	confirm = () => {
		message.success('你确认了我看')
	}

	copyData = () => {
		message.success('点击了哦')
	}

	readonly state = {
		userName: '大帅',
		userAvatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eohpudyPkatMJWfuROsrNxaHZ531zPbbNPoHian5HJS8PZIVrdPJRVMg4r5BkjrXqaAQWnKKENhOicg/132?imageView2/1/w/80/h/80'
	}

	render(){
		return (
			<div className={styles.header}>
				<div className={styles.left}>
					<Avatar shape="square" size={45} src={require("@/assets/favicon.ico")} />
					<div className={styles.leftTitle}>银行活动页编辑器</div>
				</div>
				<div className={styles.content}>
					<div className={styles.btnList}>
						<div className={styles.btns}><Button  type='primary'>模板库</Button></div>
						<div className={styles.btns}><Button className={styles.btns} type="link" >保存模板</Button></div>
						<div className={styles.btns}>
							
							<TooltipButton 
								title="复制数据" 
						 		placement="top" 
						 		btnType="link"
						 		btnTitle=""
						 		btnDisabled={false} 
						 		onClick={this.copyData}
						 		icon={<CopyOutlined />} 
							/>
						</div>
						<div className={styles.btns}><PopconfirmButton 
							title="确认清空当前数据，不可恢复请慎重！" 
					 		placement="top" 
					 		btnType="link"
					 		btnTitle=""
					 		btnDisabled={false} 
					 		onConfirmOk={this.confirm}
					 		icon={<DeleteOutlined />} 
					 	/></div>
					</div>
				</div>
				<div className={styles.right}>
					<div><Avatar shape="circle" size={36} src={ this.state.userAvatar } /></div>	
					<div className={styles.rightTitle}>{ this.state.userName }</div>
				</div>
			</div>
		)
	}
}