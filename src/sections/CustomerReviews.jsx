
import ReviewCard from '../components/ReviewCard';
import { reviews } from "../constants";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='bg-gray-200 py-12'>
      <h3 className='text-3xl font-bold text-center mb-6'>
        What Our Customers Say?
      </h3>
      <p className='text-center text-gray-600 mb-10'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='max-w-3xl mx-auto'>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <ReviewCard
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;

