import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Permite que la SDK de Gemini acceda a la API KEY mediante process.env
    'process.env': process.env
  },
  build: {
    chunkSizeWarningLimit: 2000, // Elimina la advertencia de tamaño aumentando el límite a 2MB
    rollupOptions: {
      output: {
        // Separa las librerías grandes en un archivo aparte para mejor rendimiento
        manualChunks: {
          'vendor': ['react', 'react-dom', '@google/genai', 'lucide-react'],
        },
      },
    },
  },
});