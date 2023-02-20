import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={["spawn/slide"]}
				orientation="horizontal"
				template={[["spawn/slide", {}]]}
			/>
		</div>
	);
}
