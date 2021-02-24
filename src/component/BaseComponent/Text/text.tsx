import React from 'react';

import { Image } from 'antd'
import styles from './text.less';
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
			<div className={styles.text}>
				 文本内容等待编辑...
			</div>
		)
	}
}
