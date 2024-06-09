import ContactUsCard from "../../Component/ContactUsCard";
import ContactUsForm from "../../Component/ContactUsForm";

const ContactUs = () => {
  return (
    <div>
      <div className="h-[500px] bg-[#2a262691] flex flex-col justify-center items-center -mx-2 space-y-4">
        <h3 className="text-[#ffb400] text-2xl font-poppins">
          WE ARE HERE TO ASSIST YOU.
        </h3>
        <h1 className="text-[#66b5ff] text-6xl md:text-7xl lg:text-8xl">
          Contact us
        </h1>
        <p className="text-2xl text-white">
          Most Trusted and premium Matrimony Service in the World.
        </p>
      </div>
      <div>
        <ContactUsCard></ContactUsCard>
      </div>
      <div>
        <ContactUsForm></ContactUsForm>
      </div>
    </div>
  );
};

export default ContactUs;
