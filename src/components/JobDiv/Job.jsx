import React from "react";
import { BiTimeFive } from "react-icons/bi";

// Importing the images from the assets folder
import logo1 from "../../assets/instagram.png";
import logo2 from "../../assets/instaply.png";
import logo3 from "../../assets/meiliSearch.png";
import logo4 from "../../assets/Quria.png";
import logo5 from "../../assets/SquareSpace.png";
import logo6 from "../../assets/nasa.png";
import logo7 from "../../assets/paypal.png";
import logo8 from "../../assets/twitter.png";
import logo9 from "../../assets/spacex.png";


const Data = [
  {
    id: 1,
    title: "Web Developer",
    location: "Canada",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "Instagram",
    logo: logo1,
  },
  {
    id: 2,
    title: "Android Developer",
    location: "USA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "instaply",
    logo: logo2,
  },
  {
    id: 3,
    title: "Web Developer",
    location: "Brazil",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "meiliSearch",
    logo: logo3,
  },
  {
    id: 4,
    title: "Senior Web Developer",
    location: "India",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "Quria",
    logo: logo4,
  },
  {
    id: 5,
    title: "Data Scientist",
    location: "New Zealand",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "SquareSpace",
    logo: logo5,
  },
  {
    id: 6,
    title: "Head of Marketing",
    location: "Australia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "Nasa",
    logo: logo6,
  },
  {
    id: 7,
    title: "React Developer",
    location: "Spain",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "Paypal",
    logo: logo7,
  },
  {
    id: 8,
    title: "Machine Learning Engineer",
    location: "UK",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "Twitter",
    logo: logo8,
  },
  {
    id: 9,
    title: "Web Developer",
    location: "Toronto",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "SpaceX",
    logo: logo9,
  },
  {
    id: 10,
    title: "Junior Web Developer",
    location: "New york",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eligendi voluptas, perferendis magni vitae impedit.",
    company: "Paypal",
    logo: logo7,
  },
  
];

const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map((item) => {
          return (
            <div
              key={item.id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {item.title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  Now
                </span>
              </span>
              <h6 className="text-[#ccc]">{item.location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                eligendi voluptas, perferendis magni vitae impedit.
              </p>

              <div className="company flex items-center gap-2">
                <img src={item.logo} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {item.company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
