import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
    origin: 'https://guided-wallaby-measured.ngrok-free.app',
    cors: true,
    hmr: {
      protocol: 'wss',
      host: 'guided-wallaby-measured.ngrok-free.app',
      clientPort: 443,
    },
  },
  plugins: [react(), mode === 'development' && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
