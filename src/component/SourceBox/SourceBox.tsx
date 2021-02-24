import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sourceBox.less';

// 业务组件
import styled from 'styled-components';
import Draggable from 'react-draggable';
import SourceComponent from '@/component/SourceComponent/SourceComponent'

interface State {
  userName: String,
  userAvatar: String
}

const DraggableBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
  height: 15px;
  background-color: ${props => props.background};
  cursor: move;
  z-index: 1000;
`;

const sourceBoxStyle = {
	left: '300px',
    top: '100px'
}

export default class SourceBox extends React.Component < State > {

  state = {
    initialLeftBoxWidth: 375, // 左边区块初始宽度
    leftBoxWidth: 375, // 左边区块初始宽度
    leftBoxMinWidth: 375, // 左边区块最小宽度
    leftBoxMaxWidth: 500, // 左边区块最大宽度
    dragBoxBackground: '#1890ff', // 拖拽盒子的背景色
    x: 300,
    y: 100,
  }

  onDrag = (ev, ui) => {
  	// const dom = ReactDOM.findDOMNode(draggable);
  	const draggable = this.refs.draggable;
  	const dom = ReactDOM.findDOMNode(draggable);

    const { initialLeftBoxWidth, leftBoxMinWidth } = this.state;
    const newLeftBoxWidth = ui.x + initialLeftBoxWidth;
    this.setState({
      leftBoxWidth: newLeftBoxWidth,
      dragBoxBackground: '#FFB6C1',
      x: ev.x - 360 - 365,
      y: ev.y - 56
    });
  };

  // 拖拽结束，重置drag-box的背景色
  onDragStop = () => {
    this.setState({
      dragBoxBackground: '#1890ff'
    });
  };

  render() {
    const {
      initialLeftBoxWidth,
      leftBoxWidth,
      leftBoxMinWidth,
      leftBoxMaxWidth,
      dragBoxBackground,
      x,
      y
    } = this.state;
// <SourceComponent type="IpCard"></SourceComponent>
    return (
      <div className={styles.sourceBox} style={{ 'left': x ,'top': y }} ref="draggable">

        

		    <Draggable 
			      axis="x"
            defaultPosition={{ x: 0, y: 0 }}
            bounds={{ left: leftBoxMinWidth - initialLeftBoxWidth, right: leftBoxMaxWidth - initialLeftBoxWidth }}
            onDrag={this.onDrag}
            onStop={this.onDragStop}>
            <DraggableBox
              left={initialLeftBoxWidth - 5} 
              background={dragBoxBackground} />
        </Draggable>
	  </div>
    )
  }
}
