import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden rounded-xl shadow-md md:h-[90%] md:w-[80%] lg:h-[70%] -mt-20 lg:-mt-0">
        {/* register design side  */}
        <div className="relative h-full items-center justify-center bg-[#F2D184CC] md:flex md:w-[100%] lg:w-[40%]">
          <div className="space-y-2 text-center">
            <h2 className="md:text-4xl lg:text-5xl font-medium text-[#66451c] ">
              Now
            </h2>
            <h2 className="animate-pulse text-3xl md:text-5xl lg:text-7xl font-semibold text-[#66451c] ">
              Find your life partner
            </h2>
            <p className="animate-pulse text-xl md:text-3xl lg:text-4xl font-poppins font-semibold text-[#66451c] pt-6">
              Easy and fast.
            </p>

            <Marquee>
              <img
                className="w-full lg:pt-20"
                src="https://i.ibb.co/4TxsdDM/login-bg.png"
                alt=""
              />
            </Marquee>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white lg:w-[60%]">
          <p className="-mb-4 text-center text-xl font-semibold text-[#66451c]">
            START FOR FREE
          </p>
          <h2 className=" text-center text-3xl font-bold text-[#66451c]">
            Sign in to Matrimony
          </h2>
          <form className="flex  w-full flex-col items-center justify-center gap-4">
            <input
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="password"
              placeholder="Password"
              name="password"
            />
            <p className="text-[14px] text-[#66451c]">
              Do not have an account ?{" "}
              <Link to="/registration" className="text-[#66451c] font-bold">Registration Now</Link>
            </p>
            <input
              className="w-[92%] rounded-lg bg-[#66451c] px-6 py-2 font-bold text-white md:w-[88%] lg:w-[65%]"
              type="Submit"
              value="Sign In"
            />
          </form>
          {/* divider  */}
          <div className="my-8 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* sign with google */}
          <div className="mx-auto flex h-[50px] w-[200px] gap-2 items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
            <div className="flex h-full w-[50%] items-center bg-[#66451c] pl-4 text-sm text-white">
              Sign With
            </div>
            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#66451c] group-hover:hidden"></span>
            <span className="pr-4 text-4xl font-bold text-[#66451c]">G+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
