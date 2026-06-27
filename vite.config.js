import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set BASE to your GitHub repo name for GitHub Pages deployment.
// Example: if your repo is github.com/username/wedding-website, set base to "/wedding-website/"
// For custom domain or local dev, keep it as "/"
const BASE = process.env.VITE_BASE_URL || "/";

export default defineConfig({
  plugins: [react()],
  base: BASE,
});
