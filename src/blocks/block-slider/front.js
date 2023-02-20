import Swiper, { Autoplay } from "swiper";

document.addEventListener("DOMContentLoaded", function () {
	const sliders = document.querySelectorAll(".swiper");

	sliders.forEach((slider) => {
		const modules = [];

		const loop = slider.dataset.loop == "true" || true;
		const slidesPerView = parseInt(slider.dataset.slidesperview) || 3;
		const autoplay =
			slider.dataset.autoplay == "true"
				? { delay: parseInt(slider.dataset.autoplayduration) || 3000 }
				: false;

		if (autoplay) modules.push(Autoplay);

		new Swiper(slider, {
			loop,
			slidesPerView,
			autoplay,
			modules,
		});
	});
});
