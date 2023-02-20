import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { autoplay, loop, autoplayDuration, slidesPerView } = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls key="settings">
				<PanelBody title="Settings">
					<RangeControl
						label="Slides per view"
						value={slidesPerView}
						onChange={(value) => setAttributes({ slidesPerView: value })}
						min={1}
						max={10}
					/>
					<ToggleControl
						label="Loop"
						checked={loop}
						onChange={() => setAttributes({ loop: !loop })}
					/>
					<ToggleControl
						label="Autoplay"
						checked={autoplay}
						onChange={() => setAttributes({ autoplay: !autoplay })}
					/>
					{autoplay && (
						<RangeControl
							label="Autoplay duration"
							value={autoplayDuration}
							onChange={(value) => setAttributes({ autoplayDuration: value })}
							min={100}
							max={10000}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={["spawn/slide"]}
					orientation="horizontal"
					template={[["spawn/slide", {}]]}
				/>
			</div>
		</>
	);
}
