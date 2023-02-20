import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	const blockProps = useBlockProps.save({
		className: "swiper-slide",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
