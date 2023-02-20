import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

import "./style.scss";
import { ReactComponent as Icon } from "../../assets/images/icon.svg";

registerBlockType(metadata, {
	edit: Edit,
	save: Save,
	icon: Icon
});
