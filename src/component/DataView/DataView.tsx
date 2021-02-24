import React from 'react';
import styles from './DataView.less';
// 业务组件

import { Image } from 'antd';
import {
	CopyOutlined,
	DeleteOutlined
} from '@ant-design/icons';

interface State {
	userName: String,
	userAvatar: String
}

export default class DataView extends React.Component<State> {

	render(){
		return (
			<div className={styles.dataView}>
				<div className={styles.imgView}>
					<Image className={styles.img} width={330} src={require('@/assets/nodata.png')} preview={false} />
					<div className={styles.imgt}>暂无数据去探索吧</div>
				</div>	
			</div>
		)
	}
}