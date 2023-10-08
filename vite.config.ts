import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	base: import.meta.env.DEV ? "/" : "/Moon-Visualizer-nac-2023/",
	plugins: [react()]
});
