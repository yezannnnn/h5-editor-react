import React from 'react';

import { Button, Tooltip } from 'antd'

interface IPorp<T> {
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
		this.props.onClick()
	}

	render(){
		return (
			<Tooltip title={this.props.title} placement={this.props.placement}>
				<Button onClick={this.handleClick} type={this.props.btnType} icon={this.props.icon} disabled={this.props.btnDisabled}>{this.props.btnTitle}</Button>
			</Tooltip>
		)
	}
}
