import React from 'react';
import ReactDOM from 'react-dom';
import { dynamic } from 'umi';

export default class Nedmore extends React.Component {
  render() {
    return dynamic({
      loader: async function() {
        console.log(this.props)
        const Component = await import(`@/components/BaseComponent/${this.props.type}/${this.props.type}.tsx`)
        return Component
      }
    });
  }

}
