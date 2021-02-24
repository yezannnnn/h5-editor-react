import React, { useMemo, memo } from 'react';
import { useDrag } from 'react-dnd';

import styles from './index.less';

export default class  extends React.Component<State> {
	
	constructor(props) {
		super(props)

		this.state = {}
	}

	const [{ isDragging }, drag] = useDrag({
    item: {
      type: item.type,
      config: schema[item.type].config,
      h: item.h,
      editableEl: schema[item.type].editData,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

	render(){
		return (

		)
	}
}