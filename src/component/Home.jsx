import FAQs from './FAQS';
import FeatureSection from './Features';
import Footer from './footer';
import Header from './header';
import Landing from './landing';
import ScrollAnimation from './ScrollAnimation';
import images from '../data/images';
import './Home.css';

function Home() {
  return (
    <>
    <Header />
    <Landing />
    <FeatureSection />
    <div className='sloganSection'>
      <div className='animationContent'>
        <ScrollAnimation images={images.tablet_side_images} id={"side"}/>
      </div>
      <div className='sloganContent'>
        <h1 id='sloganText1'>happier customers means happier investors.</h1>
      </div>
    </div>
    <div className='sloganSection'>
      <div className='sloganContent'>
        <h1 id='sloganText2'>Invest in your customers.</h1>
      </div>
      <div className='animationContent'>
        <ScrollAnimation images={images.tablet_front_images} id={"front"}/>
      </div>
    </div>
    <FAQs />
    <Footer />
    </>
  );
}

export default Home;
