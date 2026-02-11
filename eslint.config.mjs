import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import hooksPlugin from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: ['node_modules', '.next', 'dist', 'tailwind.config.ts', 'next-env.d.ts']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		plugins: {
			'@next/next': nextPlugin,
			'react-hooks': hooksPlugin
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			...hooksPlugin.configs.recommended.rules
		}
	}
)
