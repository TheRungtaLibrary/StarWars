module.exports = function (api) {
	api.cache.forever();

	const presets = [
		[
			'@babel/preset-env',
			// This is a temporary config needed to polyfill properly async/await. When going on a real system we should
			// targeting older versions as well so we'll need to introduce @babel/plugin-transform-runtime
			{
				targets: 'node 10'
			}
		],
		'@babel/preset-react'
	];

	return {
		presets
	};
};
