import React from 'react';

import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const boxSource = {
	
	beginDrag(props) {
		// 返回的对象可以在 monitor.getItem() 中获取到
		return {
			name: props.name
		}
	},

	endDrag(props, monitor) {
		// 当前拖拽的 item 组件
		const item = monitor.getItem();
		// 拖拽元素放下时，drop 结果
		const dropResult = monitor.getDropResult();
		// 如果 drop 结果存在，就弹出 alert 提示
		// if (dropResult) {
		// 	alert(`You dropped ${item.name} into ${dropResult.name}!`);
		// }
	},
}

@DragSource(
	// type 标识，这里是字符串'box'
	'box',
	// 拖拽事件对象
	boxSource,
	// 收集功能函数，包含 connect 和 monitor 参数
	// connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
	(connect, monitor) => ({
		// 包裹住 DOM 节点，使其可以进行拖拽操作
		connectDragSource: connect.dragSource(),
		// 是否处于拖拽状态
		isDragging: monitor.isDragging()
	}),
)


export default class TargetBox extends React.Component {
	constructor(props){
		super(props)
	}


	static propTypes = {
		isDragging: PropTypes.bool.isRequired,
		connectDragSource: PropTypes.func.isRequired
	}


	render(){
		const { isDragging, connectDragSource } = this.props
		const styles = {
			opacity: isDragging ? 0.2 : 1,
			cursor: 'move'
		}

		return connectDragSource && connectDragSource (
			<div style={styles}>
				{this.props.children}
			</div>
		)
	}	
}