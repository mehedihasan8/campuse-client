import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopulerClasses />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default Home;
