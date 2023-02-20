import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	const blockProps = useBlockProps.save({
		className: "swiper",
	});

	return (
		<div {...blockProps}>
			<div className="swiper-wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
