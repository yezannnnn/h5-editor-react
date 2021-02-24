import React from 'react';
import styles from './index.less';

import Header from '@/component/Header/Header'
import MediaBox from '@/component/MediaBox/MediaBox'
import DataView from '@/component/DataView/DataView'
import Graduation from '@/component/Graduation/Graduation'
import SourceBox from '@/component/SourceBox/SourceBox'

import { DragDropContext } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';

@DragDropContext(HTMLBackend)
class App extends React.Component {
	render(){
		return(
			<div>
				<Header></Header>  
			      <div className={styles.container}>
			        <MediaBox />
			        <div className={styles.canvas}>
			          <Graduation direction="horizontally"/> 
			          <SourceBox />
			        </div>
			        <DataView />
			      </div>
		      </div>
		)
	}
}

export default 