import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

const config = {
  input: 'src/index.jsx',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      extensions: [ '.js', '.jsx' ]
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ],
  sourcemap: true,
  exports: 'named',
  name: 'react-form-validate',
  external: ['react', 'react-dom', 'get-form-data'],
  globals: {
    react: 'React',
    'get-form-data': 'getFormData',
    'react-dom': 'ReactDOM',
  },
};

export default config;
