import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
	return (
		<div
			className="carousel-container"
			style={{ maxWidth: "800px", margin: "10rem auto" }}
		>
			<Swiper
				modules={[Navigation]}
				spaceBetween={30}
				slidesPerView={3}
				navigation={true}
				loop={true}
			>
				<SwiperSlide>
					<img
						src="https://i1.wp.com/www.turiexico.com/wp-content/uploads/2016/01/pozole-blanco.jpg?fit=1600%2C10&ssl=1"
						alt="Imag"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://i1.wp.com/www.turiexico.com/wp-content/uploads/2016/01/pozole-blanco.jpg?fit=1600%2C10&ssl=1"
						alt="Image 2"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://i.pinimg.com/originals/5b/c6/f0/5bc6f049b5132543d6701119c0b0e0.jpg"
						alt="Image 3"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://th.bing.com/th/id/R.9b4c96a99e77f64271978312cbe04e?rik=7xFcZmCKQcrYAg&pid=ImgRaw&r=0"
						alt="Image 4"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;