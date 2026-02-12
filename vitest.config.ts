import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        include: ['src/**/*.test.ts', 'src/**/*.spec.test.ts'],
        globals: false,

        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', "lcov"]
        }
    }
})