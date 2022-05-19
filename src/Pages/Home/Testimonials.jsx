import React from 'react';
import icon from '../../assets/icons/quote.svg';
import ppl1 from '../../assets/images/people1.png';
import ppl2 from '../../assets/images/people2.png';
import ppl3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
   const reviews = [
     {
       _id: 1,
       name: "Winson Harry",
       rev:
         "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
       img: ppl1,
       location: 'California'
     },
     {
       _id: 2,
       name: "Winson Harry",
       rev:
         "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
       img: ppl2,
       location: 'California'
     },
     {
       _id: 3,
       name: "Winson Harry",
       rev:
         "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
       img: ppl2,
       location: 'California'
     },
   ];
   return (
      <section className='my-28'>
         <div className='flex justify-between'>
            <div>
               <h2 className="text-xl text-primary font-bold">Testimonials</h2>
               <h3 className='text-3xl'>What Our Patients Say</h3>
            </div>
            <div>
               <img className='lg:w-48 w-24' src={icon} alt="" />
            </div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
         </div>
      </section>
   );
};

export default Testimonials;