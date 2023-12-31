import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CloudsaniaImg from "../../assets/images/iPad-Pro-Right-View.svg";
import TreepzImg from "../../assets/images/iPhone-12.svg";
import WordshopImg from "../../assets/images/iPhone-11-Pro.svg";
import SyncteamsImg from "../../assets/images/Syncteams-work.png";
import Iphone14ProImg from "../../assets/images/iPhone-14-Pro-Space-Black-Front.svg";
import IphoneXImg from "../../assets/images/iPhone-X-Side-View.svg";
import { LinkArrow } from "../../assets/svg/Svg";

export default function MyWorkCarousel() {
  const projectLists = [
    {
      title: "Syncteams",
      subTitle: "Software as a service",
      content:
        "Syncteams is a smart collaboration tool that helps business communicate, track, and measure tasks across cross-functional teams that need actionable metrics in one place.",
      image: SyncteamsImg,
      tools: [
        "WEB",
        "DASHBOARD",
        "SAAS",
        "B2C",
        "TRANSPORTATION",
        "DESIGN SYSTEM",
        "USER RESEARCH",
      ],
    },
    {
      title: "Wordshop",
      subTitle: "Self publishing service",
      content: "",
      image: WordshopImg,
      tools: [
        "WEB",
        "DASHBOARD",
        "SAAS",
        "B2C",
        "TRANSPORTATION",
        "DESIGN SYSTEM",
        "USER RESEARCH",
      ],
    },
    {
      title: "Treepz",
      subTitle: "Ride booking service",
      content:
        "Treepz helps its users book and rent cars from a variety of rental companies and individuals around Africa.",
      image: TreepzImg,
      tools: [
        "WEB",
        "DASHBOARD",
        "SAAS",
        "B2C",
        "TRANSPORTATION",
        "DESIGN SYSTEM",
        "USER RESEARCH",
      ],
    },
    {
      title: "Cloudsania",
      subTitle: "Cloud as a service",
      content:
        "Cloudsania is a cloud deployment service that allows business consult and set up cloud infrastructural service.",
      image: CloudsaniaImg,
      tools: [
        "WEB",
        "DASHBOARD",
        "SAAS",
        "B2C",
        "TRANSPORTATION",
        "DESIGN SYSTEM",
        "USER RESEARCH",
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-10 mb-6">
        <h4 className="text-lg md:text-2xl text-white font-saira-bold">
          Projects
        </h4>
        {/* <div className="flex items-center gap-1">
          <button className="w-[112px] h-2 bg-app-green rounded-[10px]"></button>
          <button className="w-5 h-2 bg-[rgba(186,219,77,0.10)] rounded-[10px]"></button>
          <button className="w-5 h-2 bg-[rgba(186,219,77,0.10)] rounded-[10px]"></button>
          <button className="w-5 h-2 bg-[rgba(186,219,77,0.10)] rounded-[10px]"></button>
        </div> */}
      </div>

      {/* <section className="flex flex-wrap gap-y-6 bg-white text-app-black rounded-[10px] p-4 md:p-10">
        <div className="w-full lg:w-1/2">
          <div className="text-4xl md:text-[60px] font-saira-bold leading-[150%] mb-3">
            Cloudsania
          </div>
          <p className="text-[rgba(0,0,0,0.80)] text-md md:text-xl">
            cloud as a service
          </p>
          <p className="max-w-[438px] text-sm md:text-lg mt-4 mb-16 md:mb-24">
            Cloudsania is a cloud deployment service that allows business
            consult and set up cloud infrastructural service.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {projectLists[0]["tools"].map((tool, i) => (
              <span
                key={i}
                className="border border-app-black rounded-[10px] px-5 py-1"
              >
                {tool}
              </span>
            ))}
          </div>
          <button className="bg-app-green text-sm md:text-xl font-saira-medium rounded-[30px] py-3 md:py-4 px-12 md:px-20 mt-9">
            View more
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-app-green pe-[10px] rounded-sm">
            <div className="bg-[#FEFEFE] pe-[10px] rounded">
              <div className="h-full flex justify-center items-center bg-[#F4F4F4] p-4 md:p-6 rounded ms-[-4px]">
                <img
                  src="/src/assets/images/iPad-Pro-Right-View.svg"
                  alt="Cloudsania"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Carousel autoPlay showArrows={false} infiniteLoop>
        {projectLists.map((project, i) => (
          <section
            key={i}
            className="flex flex-wrap gap-y-5 bg-[#1C1C1C] text-white rounded-[10px] p-4 md:p-10"
          >
            <div className="w-full lg:w-1/2 text-left lg:pe-8">
              <div className="text-4xl md:text-[60px] font-saira-bold leading-[150%] mb-3">
                {project.title}
              </div>
              <p className="text-md md:text-xl">{project.subTitle}</p>
              <p className="max-w-[438px] text-sm md:text-lg mt-4 mb-16 md:mb-24">
                {project.content}
              </p>
              <div className="flex flex-wrap gap-[10px]">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="border border-white rounded-[10px] px-5 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <button className="bg-app-green text-app-black text-sm md:text-xl font-saira-medium rounded-[30px] py-3 md:py-4 px-6 md:px-8 mt-9">
                <span className="me-1 md:me-2">Read case study</span>
                <LinkArrow />
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-[#1C1C1C] pe-[10px] rounded">
                <div
                  className={`h-full grid place-items-center ${
                    i === 1 || i === 2 ? "grid-cols-2" : "grid-cols-1"
                  } md:gap-14 bg-[#1C1C1C] p-4 md:p-6 rounded ms-[-4px]`}
                >
                  <img src={project.image} alt={project.title} />
                  {i === 1 && (
                    <img
                      src={Iphone14ProImg}
                      alt=""
                      width="147"
                      height="451"
                      className="max-w-[177px]"
                    />
                  )}
                  {i === 2 && <img src={IphoneXImg} alt="" />}
                </div>
              </div>
            </div>
          </section>
        ))}
      </Carousel>
    </div>
  );
}
