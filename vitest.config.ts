import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    server: {
        watch: {
            ignored: ['./dist/**', '**/.pnpm-store/**'],
        }
    },
    test: {
        include: ['./src/**/*.spec.{ts,js}'],
        exclude: [...configDefaults.exclude, './dist', './.pnpm-store/**'],
    },
})