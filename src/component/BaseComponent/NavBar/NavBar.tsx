import React from 'react';

import { Image } from 'antd'
import styles from './navBar.less';

class NavItem extends React.Component<State>{
	constructor(props){
		super(props)

		this.state = {
	      
	    };
	}

	render(){
		return (
			<div className={styles.navItem}>
				 <Image className={styles.itemIamge} src={ this.props.src }/>
				 <span>{ this.props.text }</span>
			</div>
		)
	}
}

export default class NavBar extends React.Component<State>{
	constructor(props){
		super(props)

		this.state = {
	      iconList:[
	      	{text:'标题1', src:'https://o.houren888.com/ipmp/1.png'},
	      	{text:'标题2', src:'https://o.houren888.com/ipmp/2.png'},
	      	{text:'标题3', src:'https://o.houren888.com/ipmp/3.png'},
	      	{text:'标题4', src:'https://o.houren888.com/ipmp/4.png'},
	      	{text:'标题5', src:'https://o.houren888.com/ipmp/5.png'},
	      	{text:'标题6', src:'https://o.houren888.com/ipmp/6.png'},
	      	{text:'标题7', src:'https://o.houren888.com/ipmp/7.png'},
	      	{text:'标题8', src:'https://o.houren888.com/ipmp/8.png'},
	      ]
	    };
	}

	render(){
		return (
			<div className={styles.navBar}>
			{
				this.state.iconList.map((i,index) => (
					<NavItem text={i.text} src={i.src} key={i.index} />	
				))
			}
			</div>
		)
	}
}
// <NavItem text={i.text} src={i.src} key={index}/>
// <NavItem text={this.state.iconList[0].text} src={this.state.iconList[0].src} />
