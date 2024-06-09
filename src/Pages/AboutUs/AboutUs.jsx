import AboutUsCard from "../../Component/AboutUsCard";
import AboutUsWedding from "../../Component/AboutUsWedding";

const AboutUs = () => {
  return (
    <div>
      <div className="h-[500px] bg-[#2a262691] flex flex-col justify-center items-center -mx-2 space-y-1">
        <h3 className="text-[#ffb400] text-2xl font-poppins">
        # <span className="text-4xl">1</span>WEDDING WEBSITE
        </h3>
        <h1 className="text-[#66b5ff] text-6xl md:text-7xl lg:text-8xl">
        About us
        </h1>
        <p className="text-2xl text-white">
          Most Trusted and premium Matrimony Service in the World.
        </p>
      </div>
      <div>
        <AboutUsCard></AboutUsCard>
      </div>
      <div>
        <AboutUsWedding></AboutUsWedding>
      </div>
    </div>
  );
};

export default AboutUs;
