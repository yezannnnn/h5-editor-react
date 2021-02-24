import React from 'react';

import { Button, Popconfirm } from 'antd'

interface IPorp {
	placement?: string,
	title: string,
	icon?: any,
	btnTitle: string,
	btnDisabled?: boolean,
	btnType?: string,
	btnSize?: string,
}

const _defaultProps = {
	title:'测试',
	btnTitle: ''
}

export default class PopconfirmButton extends React.Component<IPorp>{
	private static defaultProps = _defaultProps

	constructor(props: IPorp){
		super(props)
	}

	handleClick = () => {
		this.props.onConfirmOk()
	}

	render(){
		return (
			<Popconfirm 
				disabled={ this.props.btnDisabled } 
				placement={ this.props.placement } 
				title={ this.props.title }
				onConfirm={ this.handleClick }
				okText="确认"
				cancelText="取消">

				<Button 
					type={this.props.btnType || 'link'} 
					icon={this.props.icon} 
					disabled={this.props.btnDisabled}>

					{ this.props.btnTitle }
				</Button>
      		</Popconfirm>
		)
	}
}
