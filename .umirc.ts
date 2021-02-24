import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index' },
  ],
  theme:{
  	'@body-background': '#e6e6e6'
  }
});
// @body-background