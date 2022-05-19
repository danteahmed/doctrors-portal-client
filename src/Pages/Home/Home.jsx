import React from 'react';
import Banner from './Banner';
import ContactUS from './ContactUS';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
   return (
      <div className=''>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <MakeAppointment></MakeAppointment>
         <Testimonials></Testimonials>
         <ContactUS></ContactUS>
         <Footer></Footer>
      </div>
   );
};

export default Home;