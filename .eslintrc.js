module.exports = {
  root: true,
  extends: [
    "airbnb/base",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:react/jsx-runtime",
		"prettier"
  ],
  parser: "@typescript-eslint/parser",
	parserOptions: {
		"ecmaVersion": 2018,
		"project": "./tsconfig.json",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	plugins: ["react","react-native", "jsx-a11y", "prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				"endOfLine": "auto",
				"singleQuote": true,
				"trailingComma": "all",
				"printWidth": 120,
				"tabWidth": 4,
				"useTabs": true
			}
		],
		"react/prop-types": [
			1,
			{
				"ignore": ["context", "tracking"]
			}
		],
		"react/display-name": "off",
		"no-unused-expressions": ["error", { "allowShortCircuit": true }],
		"semi": ["error", "always"],
		"object-curly-spacing": ["error", "always"],
		"camelcase": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-inferrable-types": [
			"warn",
			{
				"ignoreParameters": true
			}
		],
		"no-underscore-dangle": "off",
		"no-shadow": "off",
		"no-new": "off",
		"no-param-reassign": "off",
		"no-plusplus": "off",
		"guard-for-in": "off",
		"no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
		"@typescript-eslint/no-shadow": ["error"],
		"@typescript-eslint/no-unused-vars": "warn",
		"import/prefer-default-export": "off",
		"quotes": [2, "single", { "avoidEscape": true }],
		"class-methods-use-this": "off",
		"import/extensions": [
			"off",
			"ignorePackages",
			{
				"js": "never",
				"jsx": "never",
				"ts": "never",
				"tsx": "never"
			}
		],
		"import/resolver": "off",
		"import/no-unresolved": "off"
	},
	overrides: [
		{
			"files": ["*.ts", "*.tsx"],
			"rules": {
				"react/prop-types": "off"
			}
		}
	]
};
