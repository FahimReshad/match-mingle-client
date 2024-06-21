import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import PremiumBioCards from "./PremiumBioCards";
import SuccessCounter from "./SuccessCounter";
import SuccessStory from "./SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
      <PremiumBioCards></PremiumBioCards>
      <HowItWorks></HowItWorks>
      <SuccessCounter></SuccessCounter>
      <SuccessStory></SuccessStory>
      </div>
    </div>
  );
};

export default Home;
