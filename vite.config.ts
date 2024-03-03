import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { compilerOptions } from "./tsconfig.json";

export default defineConfig({
  plugins: [
    react({ tsDecorators: true, devTarget: "es2022" }),
    tsconfigPaths({
      root: compilerOptions.baseUrl,
    }),
  ],
});
