import Marquee from "react-fast-marquee";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Registration = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      console.log(result.user);
      if (result.user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Registration are success",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUserProfile(data.name, data.photo)
      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          if(res.data.insertedId){
            // reset();
            navigate('/')
          }
        })
        
      })

        // navigate("/");
      }
    });
  };
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
        <div className="flex w-full flex-col justify-center text-start bg-white lg:w-[60%]">
          <p className="-mb-4 text-center text-xl font-semibold text-[#66451c]">
            START FOR FREE
          </p>
          <h2 className=" text-center text-3xl font-bold text-[#66451c]">
            Registration in to Matrimony
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center  gap-4"
          >
            <input
              {...register("name", { required: true })}
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="text"
              placeholder="Your Name"
              name="name"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
            <input
              {...register("photo", { required: true })}
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="text"
              placeholder="Photo URL"
              name="photo"
            />
            {errors.photo && (
              <span className="text-red-600">
                Please provide your photo URL
              </span>
            )}
            <input
              {...register("email", { required: true })}
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern:
                  /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}/,
              })}
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="password"
              placeholder="Password"
              name="password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                password must be 6 characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-600">
                password must be less than 20 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">
                password must have one uppercase, one lower case, one number and
                less than 20 characters
              </span>
            )}
            {/* Sign in Button */}
            <p className="text-[14px] text-[#66451c]">
              Already have an account ?{" "}
              <Link to="/login" className="text-[#66451c] font-bold">
                Please Login
              </Link>
            </p>
            <input
              className="w-[92%] rounded-lg bg-[#66451c] px-6 py-2 font-bold text-white md:w-[88%] lg:w-[65%]"
              type="Submit"
              value="Create Account"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
