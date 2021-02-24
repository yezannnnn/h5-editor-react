import React from 'react';
import styles from './index.less';

// 组件
import Header from '@/component/Header/Header'
import MediaBox from '@/component/MediaBox/MediaBox'
import DataView from '@/component/DataView/DataView'
import Graduation from '@/component/Graduation/Graduation'
import SourceBox from '@/component/SourceBox/SourceBox'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default () => {
  return (
    <div>
      <Header></Header>  
      <DndProvider backend={HTML5Backend}>
        <div className={styles.container}>
          <MediaBox />
          <div className={styles.canvas}>
            <Graduation direction="horizontally"/> 
            <SourceBox />
          </div>
          <DataView />
        </div>
      </DndProvider>
    </div>
  );
}
