import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: './src/app.js',
  dest: './public/app.js',
  plugins: [
    alias({
      vue$: 'vue/dist/vue.common.js'
    }),
    vue({
      css: './public/app.css'
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    nodeGlobals(),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}
