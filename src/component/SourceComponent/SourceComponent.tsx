import React from 'react';
import ReactDOM from 'react-dom';
import { useMemo, memo, useContext } from 'react';

// 业务组件
import { dynamic } from 'umi';
import AsyncComponent from './Async'

type DynamicType = {
  isTpl: boolean;
  config: {
    [key: string]: any
  };
  type: string;
  category: string;
};

//  `@/component/BaseComponent/${type}/${type}.tsx`
const DynamicFunc = (type: string, componentsType: string) => {
  return dynamic({
    loader: async function() {
      // const url = `@/component/BaseComponent/IpCard/IpCard.tsx`
      const { default: Graph } = await import(`@/component/BaseComponent/${type}/${type}.tsx`);
      const Component = Graph;
      return (props: DynamicType) => {
        const { config, isTpl } = props;
        return <Component {...config}  />;
      };
    },
  });
};


const DynamicEngine = memo((props: DynamicType) => {
  const { type } = props;
  const Dynamic = useMemo(() => {
    return (DynamicFunc(type) as unknown) as FC<DynamicType>;
  });

  return <Dynamic {...props} />;
});


export default DynamicEngine
