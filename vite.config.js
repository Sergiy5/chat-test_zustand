import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/chat-test_zustand",
	plugins: [react()],
	// server: {
	// 	port: 3000,
		
	// },
});
