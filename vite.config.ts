import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor dependencies
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'query-vendor': ['@tanstack/react-query'],
          'helmet-vendor': ['react-helmet-async'],
          
          // Page chunks - each page gets its own chunk
          'page-services': ['./src/pages/ServicesPage.tsx'],
          'page-about': ['./src/pages/AboutPage.tsx'],
          'page-news': ['./src/pages/NewsPage.tsx'],
          'page-contact': ['./src/pages/ContactPage.tsx'],
          'page-articles': ['./src/pages/articles/ArticlesPage.tsx', './src/pages/articles/ArticlesPage2.tsx'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging
    sourcemap: mode === 'development',
  },
}));
