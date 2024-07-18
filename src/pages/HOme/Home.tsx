import BenefitsSection from "./BenefitSection";
import CategorySection from "./CategorySection";
import FeaturedProducts from "./FeaturedSection";
import HeroSection from "./HeroSection";
import ImageGallery from "./ImageGalary";

const Home = () => {
  return (
    <div>
      
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <FeaturedProducts></FeaturedProducts>
      <ImageGallery></ImageGallery>
      <BenefitsSection></BenefitsSection>
      
    </div>
  );
};

export default Home;