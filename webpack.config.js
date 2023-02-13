const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const getWebpackEntryPoints =
	require("@wordpress/scripts/utils/config").getWebpackEntryPoints;
const path = require("path");

module.exports = {
	...defaultConfig,
	entry: Object.assign({}, getWebpackEntryPoints(), {
		"misc/misc": path.resolve(__dirname, "src", "index.js"),
	}),
};
