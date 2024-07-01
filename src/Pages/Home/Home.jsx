import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import PremiumBioCards from "./PremiumBioCards";
import SuccessCounter from "./SuccessCounter";
import SuccessStory from "./SuccessStory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Match Mingle || Home</title>
      </Helmet>
      <div>
      <Banner></Banner>
      </div>
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
