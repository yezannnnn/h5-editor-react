import React from 'react';
import styles from './Graduation.less';
// 业务组件

import { Image } from 'antd';


interface Iprop {
  direction: string
}

const _defaultProps = {
  direction: 'horizontally',
}

// 组件内
// 横方向内容
class TickTop extends React.Component {

  readonly state = {
  	tickValue: 0,
  	tickStyle: { width: 1000 }
  }

  componentDidMount(){
  	let val = parseInt(this.refs.tickTop.clientWidth / 5)
  	this.setState({
  		tickValue: val,
  		tickStyle: { width:this.refs.tickTop.clientWidth  }
  	})
  }

  render() {
  	let tickArrayHtml = Array(this.state.tickValue).fill(1)	
    return (
      <div className={styles.tickTop} style={this.state.tickStyle} ref='tickTop' >
		{ 
			tickArrayHtml.map((item,index) => {
				if(index === 0 || index % 10 === 0) {
					return <div className={styles.tickHeightItem} key={index}><span>{index * 5}</span></div>
				} else {
					return <div className={styles.tickItem} key={index}></div>	
				}
			}) 
		}
	  </div>
    );
  }
}

// 纵方向内容
class TickRight extends React.Component {

  readonly state = {
  	tickValue: 0,
  	tickStyle: { height: 800 }
  }

  componentDidMount(){

  	let val = parseInt((this.refs.tickRight.clientHeight - 56) / 5)
  	this.setState({
  		tickValue: val,
  		tickStyle: { height: this.refs.tickRight.clientHeight - 56  }
  	})
  }

  render() {
  	let tickArrayHtml = Array(this.state.tickValue).fill(1)
    return (
    	<div className={styles.tickRight} style={this.state.tickStyle} ref='tickRight'>
    		{
    			tickArrayHtml.map((item,index) => {
					if(index === 0 || index % 10 === 0) {
						return <div className={styles.tickHeightItem} key={index}><span>{index * 5}</span></div>
					} else {
						return <div className={styles.tickItem} key={index}></div>	
					}
				}) 
    		}
    	</div>
    )
  }
}

// expotrt
export default class Graduation extends React.Component < Iprop > {
  private static defaultProps = _defaultProps

  constructor(props: Iprop) {
    super(props)
  }
  
  render() {
    return (
      <div className={styles.graduation}>
		    <TickTop />	
		    <TickRight />
	    </div>
    )
  }
}
