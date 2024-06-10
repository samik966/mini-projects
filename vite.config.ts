import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteTsConfig from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), viteTsConfig()],
    server: {
        open: true,
        port: 3000,
    },
    build: {
        outDir: "build",
    },
});
