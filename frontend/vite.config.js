import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Remplace "monpseudo" et "Crypto" par ton pseudo et ton repo GitHub
const repoName = "Cryptowatch";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});

