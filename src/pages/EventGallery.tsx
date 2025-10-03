import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const eventImages: string[] = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg',
  'image11.jpg',
  'image12.jpg',
];

const EventGallery: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center text-primary font-bold mb-10">Event Gallery</h1>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="event-gallery-swiper max-w-3xl"
        >
          {eventImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
                <span className="mt-2 text-sm font-semibold text-primary">Swipe to see next</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventGallery;
