import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { loop, autoplay, autoplayDuration, slidesPerView } = attributes;

	const blockProps = useBlockProps.save({
		className: "swiper",
	});

	return (
		<div
			{...blockProps}
			data-loop={loop}
			data-autoplay={autoplay}
			data-autoplayDuration={autoplayDuration}
			data-slidesPerView={slidesPerView}
		>
			<div className="swiper-wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
