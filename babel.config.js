module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				require.resolve('babel-plugin-module-resolver'),
				// "module-resolver",
				{
					// root: ['.'],
					// cwd: 'babelrc',
					extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
					alias: {
						// tests: ['./tests/'],
						// "@screens": "./src/screens",
						// "@shared": "./src/shared",
						"@": "./src"
					}
				},
				'react-native-reanimated/plugin'
			],
		]
	};
};
