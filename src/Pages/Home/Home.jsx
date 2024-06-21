import Banner from "./Banner";
import PremiumBioCards from "./PremiumBioCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
      <PremiumBioCards></PremiumBioCards>
      </div>
    </div>
  );
};

export default Home;
