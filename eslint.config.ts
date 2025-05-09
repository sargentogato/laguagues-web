import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    '**/.vscode/**',
    '**/.git/**',
    '**/public/**',
    '**/assets/**',
    '**/vitest.config.ts',
    '**/vite.config.ts',
    '**/vueDevTools.config.ts',
    '**/eslint.config.ts',
    '**/playwright.config.ts',
    '**/tsconfig.json',
    '**/tsconfig.*.json',
    '**/package.json',
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/yarn.lock',
    '**/README.md',
    '**/*.d.ts',
    '**/shims-vue.d.ts',
    '**/env.d.ts',
    '**/*.config.js',
    '**/*.config.ts',
  ]),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  skipFormatting,

  {
    rules: {
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          align: 'value',
        },
      ],
    },
  },
);
