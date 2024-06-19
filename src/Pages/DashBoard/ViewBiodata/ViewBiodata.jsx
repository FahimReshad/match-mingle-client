/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { FaCity } from "react-icons/fa";
import { FaSnowman } from "react-icons/fa6";
import { GiBodyHeight } from "react-icons/gi";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";

const ViewBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // const [premium, setPremium] = useState([]);
  const { isPending, data: biodata = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata/search/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  const handleMakePremium = async (email) => {
    console.log(email);
    Swal.fire({
      title: "Are you sure?",
      text: "To make your biodata premium!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, request it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosPublic.patch(`/biodata/search/${email}`, { status: 'Requested' });
          console.log(response.data);
          if(response.data.modifiedCount > 0){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Success! Please wait for admin confirmation",
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Please wait for admin approval",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
         catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "There was an error processing your request.",
            icon: "error",
          });
        }
      }
    });
  };
  
  
  
  // console.log(premium);
  return (
    <>
      {biodata.map((bio) => (
        <div key={bio._id} className="flex flex-col lg:flex-row gap-10">
          <div className="">
            <img
              className="max-h-screen w-full rounded-lg mt-4  md:mt-6 lg:mt-0"
              src={bio.profileImage}
              alt=""
            />
          </div>
          <div className="text-black border ">
            <h2 className="text-[#66451c] text-5xl font-poppins font-semibold">
              {bio.name}
            </h2>
            <div className="flex gap-4">
              <div className="text-center bg-slate-100 pt-4 px-3 rounded-lg h-36 w-28">
                <FaCity className="text-3xl text-[#66451c] " />
                <h6 className="uppercase text-[#66451c] text-md font-thin border">
                  City
                </h6>
                <h5 className="uppercase text-[#66451c]">
                  {bio.presentDivision}
                </h5>
              </div>
              <div className="text-center bg-slate-100 pt-4 px-3 rounded-lg h-36 w-28">
                <FaSnowman className="text-3xl text-[#66451c] " />
                <h6 className="uppercase text-[#66451c] text-md font-thin border">
                  Age
                </h6>
                <h5 className="uppercase text-[#66451c]">{bio.age}</h5>
              </div>
              <div className="text-center bg-slate-100 pt-4 px-3 rounded-lg h-36 w-28">
                <GiBodyHeight className="text-3xl text-[#66451c] " />
                <h6 className="uppercase text-[#66451c] text-md font-thin border">
                  Height
                </h6>
                <h5 className="uppercase text-[#66451c]">{bio.height}</h5>
              </div>
              <div className="text-center bg-slate-100 pt-4 px-3 rounded-lg h-36 w-28">
                <IoCodeWorkingSharp className="text-3xl text-[#66451c] " />
                <h6 className="uppercase text-[#66451c] text-md font-thin border">
                  Job
                </h6>
                <h5 className="uppercase text-[#66451c]">{bio.occupation}</h5>
              </div>
            </div>

            <div>
              <h2 className="uppercase text-3xl text-[#66451c] font-poppins font-semibold">
                Contact info
              </h2>
              <div className="flex items-center gap-6">
                <MdContactPhone className="text-[#66451c] text-2xl border rounded-lg border-solid border-[#66451c] p-2" />
                <h4 className="text-[#66451c] text-2xl border-[#66451c]">
                  Phone: <span className="text-xl">{bio.mobileNumber}</span>
                </h4>
              </div>
              <div className="flex items-center gap-6 -my-8">
                <MdOutlineMail className="text-[#66451c] text-2xl border rounded-lg border-solid border-[#66451c] p-2" />
                <h4 className="text-[#66451c] text-2xl border-[#66451c]">
                  Email: <span className="text-xl">{bio.email}</span>
                </h4>
              </div>
              <div className="flex items-center gap-6">
                <IoLocationSharp className="text-[#66451c] text-2xl border rounded-lg border-solid border-[#66451c] p-2" />
                <h4 className="text-[#66451c] text-2xl border-[#66451c]">
                  Address:{" "}
                  <span className="text-xl">{bio.presentDivision}</span>
                </h4>
              </div>
            </div>

            <div>
              <h2 className="uppercase text-3xl text-[#66451c] font-poppins font-semibold">
                Personal Information
              </h2>
              <div className="grid lg:grid-cols-2 gap-x-2">
                <div className="flex items-center -mb-8 gap-2 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Name: </h3>
                  </div>
                  <div>
                    <h4>{bio.name}</h4>
                  </div>
                </div>
                <div className="flex items-center -mb-8 gap-2 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Fathers Name: </h3>
                  </div>
                  <div>
                    <h4>{bio.fathersName}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Mothers Name: </h3>
                  </div>
                  <div>
                    <h4>{bio.mothersName}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Age: </h3>
                  </div>
                  <div>
                    <h4>{bio.age}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Date of birth: </h3>
                  </div>
                  <div>
                    <h4>{bio?.dateOfBirth?.slice(0, 10)}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Height: </h3>
                  </div>
                  <div>
                    <h4>{bio.height}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Weight: </h3>
                  </div>
                  <div>
                    <h4>{bio.weight}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Occupation: </h3>
                  </div>
                  <div>
                    <h4>{bio.occupation}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Race: </h3>
                  </div>
                  <div>
                    <h4>{bio.race}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Expected Partner Age: </h3>
                  </div>
                  <div>
                    <h4>{bio.expectedPartnerAge}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Expected Partner Height: </h3>
                  </div>
                  <div>
                    <h4>{bio.expectedPartnerHeight}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Contact Email: </h3>
                  </div>
                  <div>
                    <h4>{bio.contactEmail}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 -mb-8 text-[#66451c]">
                  <IoIosArrowForward className="text-black" />
                  <div>
                    <h3 className="">Mobile Number: </h3>
                  </div>
                  <div>
                    <h4>{bio.mobileNumber}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mt-6 lg:mt-12 text-3xl text-[#66451c] font-poppins font-semibold">
                If you are interested to make your biodata premium, please click
                the button below!
              </h2>
              <button
                onClick={() => handleMakePremium(bio.email)}
                className="px-6  py-1 hover:cursor-pointer hover:scale-105 rounded-lg uppercase text-xl text-white bg-[#66451c] font-poppins font-semibold"
              >
                Make biodata Premium
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewBiodata;
