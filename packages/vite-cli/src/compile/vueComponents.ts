const elementPlus = {
  name: 'element-plus',
  version: '^2.2.5',
  stableVersion: '2.2.5',
  theme: true,
  unpluginResolver: 'ElementPlusResolver',
  useUnpluginResolver: true
}
const antDesignVue = {
  name: 'ant-design-vue',
  version: '^3.2.1',
  stableVersion: '3.2.1',
  theme: true,
  unpluginResolver: 'AntDesignVueResolver',
  useUnpluginResolver: false
}
const naiveUI = {
  name: 'naive-ui',
  version: '^2.31.0',
  stableVersion: '2.31.0',
  theme: true,
  unpluginResolver: 'NaiveUiResolver',
  useUnpluginResolver: true
}
const devUI = {
  name: 'vue-devui',
  version: '^1.0.0-rc.14',
  stableVersion: '^1.0.0-rc.14',
  theme: false,
  unpluginResolver: 'DevUiResolver',
  useUnpluginResolver: true
}
const tencent = {
  name: 'tdesign-vue-next',
  version: '^0.18.0',
  stableVersion: '^0.18.0',
  theme: false,
  unpluginResolver: 'TDesignResolver',
  useUnpluginResolver: true
}
const vuetify = {
  name: 'vuetify',
  version: '^3.0.0-beta.5',
  stableVersion: '^3.0.0-beta.5',
  theme: false,
  unpluginResolver: 'VuetifyResolver',
  useUnpluginResolver: false
}
const arco = {
  name: '@arco-design/web-vue',
  version: '^2.33.0',
  stableVersion: '^2.33.0',
  theme: false,
  unpluginResolver: 'ArcoResolver',
  useUnpluginResolver: true
}

// mobile
const varlet = {
  name: '@varlet/ui',
  version: '^1.27.17',
  stableVersion: '^1.27.17',
  theme: false,
  unpluginResolver: 'ElementPlusResolver'
}

const vant = {
  name: 'vant',
  version: '^1.0.0',
  stableVersion: '^1.27.17',
  theme: false,
  unpluginResolver: 'ElementPlusResolver'
}

export {
  varlet,
  arco,
  vuetify,
  tencent,
  devUI,
  naiveUI,
  antDesignVue,
  elementPlus,
  vant
}