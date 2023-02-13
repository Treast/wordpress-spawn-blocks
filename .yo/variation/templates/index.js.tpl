import { registerBlockVariation } from "@wordpress/blocks";
import { ReactComponent as Icon } from "../../assets/images/icon.svg";

registerBlockVariation("<%= originalBlock %>", {
	name: "spawn/<%= blockName %>",
	title: "<%= title %>",
	icon: Icon,
	attributes: {},
	category: "spawn",
	scope: ["inserter"],
	keywords: [],
	innerBlocks: [],
});
