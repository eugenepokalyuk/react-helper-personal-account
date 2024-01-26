import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-helper-personal-account/",
  plugins: [react(), svgr({
    svgrOptions: { exportType: 'named', ref: true },
    include: '**/*.svg',
  })],
})