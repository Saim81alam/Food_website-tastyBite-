import HeroSlider from "../component/slider/HeroSlider";
import FoodSection from "../component/food/FoodSection";
import FoodScroll from "../component/food/FoodScroll";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FoodScroll />
      <FoodSection />
    </div>
  );
};

export default Home;
