import React from 'react';
import styles from './MediaBox.less';

// 业务组件
import { Button, message, Avatar, Tabs } from 'antd';
const { TabPane } = Tabs;

import IpCard from '@/component/BaseComponent/IpCard/IpCard.tsx' 
import NavBar from '@/component/BaseComponent/NavBar/NavBar.tsx'
import TextView from '@/component/BaseComponent/Text/text.tsx'
import ImageView from '@/component/BaseComponent/ImageView/imageView.tsx'

import TargetBox from '@/component/DragBox/TargetBox.tsx'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface State {
	userName: String,
	userAvatar: String
}


class Base extends React.Component<State> {

	render(){

		// const liStyle = {
		// 	margin:'20px 10px',
		// 	border: '1px solid #fff'
		// }

		return (
			<div>
				<TargetBox>
					<li className={styles.liItem} name='TextView' key='1'><TextView /></li>
				</TargetBox>
				<TargetBox>
					<li className={styles.liItem} name='ImageView' key='2'><ImageView /></li>
				</TargetBox>
				<TargetBox>
					<li className={styles.liItem} name='IpCard' key='3'><IpCard /></li>
				</TargetBox>
				<TargetBox>
					<li className={styles.liItem} key='4'><NavBar /></li>
				</TargetBox>
			</div>
		);
	}

}

class Media extends React.Component<State> {
	render(){
		return (
			<div>媒体组件</div>
		)
	}
}

class Image extends React.Component<State> {
	render(){
		return (
			<div>图片</div>
		)
	}
}


export default class MediaBox extends React.Component<State> {

	constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
    };
  }

	render(){
		return (
			<div className={styles.mediaBox}>
				<Tabs defaultActiveKey={this.state.activeKey} >
		          <TabPane tab="基础组件" key='1'><Base /></TabPane>
		          <TabPane tab="媒体组件" key='2'><Media /></TabPane>
		          <TabPane tab="自定义组件" key='3'><Image /></TabPane>
		          <TabPane tab="图片链接" key='4'><Image /></TabPane>
		        </Tabs>
			</div>
		)
	}
}

