import React from 'react';

import { Image } from 'antd'
import styles from './ipCard.less';
import PropTypes from 'prop-types';

import { DragSource } from 'react-dnd';


export default class IpCard extends React.Component<State>{
	constructor(props){
		super(props)

		this.state = {
	      textItem: [{ text:'姓名：马尔扎哈' },{text: '手机：186XXXX6757'}, {text: '地址：浙江杭州市纳爱斯牙牙乐1102号'}],
	    };
	}

	// static propTypes = {
	// 	isDragging: PropTypes.bool.isRequired,
	// 	connectDragSource: PropTypes.func.isRequired
	// }

	handleClick = () => {
		this.props.onClick()
	}



	render(){
		// const { isDragging, connectDragSource } = this.props
		// const opacity = isDragging ? 0.4 : 1

		// return connectDragSource && connectDragSource (
		// <div style={{ opacity }} className={styles.ipCard}>
		return (
			<div className={styles.ipCard}>
				 <Image className={styles.avatar} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
				 <div className={styles.content}>
				 	<div className={styles.title}>
				 		这是名片组件
				 	</div>
				 	<div className={styles.welcome}>
				 		欢迎来看我的首页
				 	</div>

				 	{this.state.textItem.map((i,index) => (
				 		<div className={styles.item} key={index}>{i.text}</div>
				 	))}
				 </div>
			</div>
		)
	}
}
