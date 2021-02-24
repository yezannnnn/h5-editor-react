import React from 'react';

import { Image } from 'antd'
import styles from './imageView.less';
import PropTypes from 'prop-types';

import { DragSource } from 'react-dnd';


export default class IpCard extends React.Component<State>{
	constructor(props){
		super(props)

		this.state = {

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
		return (
			<div className={styles.imageView}>
				<img src={require('@/assets/imageView.png')}/>
				<div className={styles.title}>图片容器编辑...</div>
			</div>
		)
	}
}
