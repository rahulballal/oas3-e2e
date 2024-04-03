import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "pw-tests",
  use: {
    baseURL: "http://localhost:5000/v1",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
    },
  },
});
