import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import eslintPlugin from 'vite-plugin-eslint'
import svgrPlugin from 'vite-plugin-svgr'

const commonPluggins = [svgrPlugin()]

const devConfig = {
  plugins: [...commonPluggins, reactRefresh()],
}

const prodConfig = {
  plugins: [...commonPluggins, eslintPlugin()],
}

// TODO: check dev or prod config
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   // dev code
// } else {
//   // production code
// }

// https://vitejs.dev/config/
export default defineConfig(devConfig)
