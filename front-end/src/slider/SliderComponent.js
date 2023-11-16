import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import styled from "styled-components";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
const Image = styled.img`
  max-width: 400px;
`;

const SwiperWrapper = styled.div``;

const SliderComponent = ({ images }) => {
  return (
    <SwiperWrapper>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        navigation={true}
        effect={"fade"}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`image${index}`}>
            <Image key={`image${index}`} src={image} alt={`{index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default SliderComponent;
