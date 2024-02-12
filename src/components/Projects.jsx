import { content } from "../Content";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 py-14">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex gap-5 justify-between flex-wrap group">
          {Projects.project_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[18rem] duration-300 cursor-pointer border-2 border-slate-300 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img
                style={{
                  height: "225.83px",
                  width: "404.67px",
                  borderRadius: "10px",
                  objectFit: "cover", // or "contain"
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                }}
                src={content.image}
                alt="..."
              />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">{content.title}</h5>
                <div className="flex justify-end">
                  <a
                    href={content.projectLink}
                    target="_blank"
                    className="mr-4"
                  >
                    <button className="font-bold text-gray hover:text-dark_primary">
                      <BsGithub size={26} />
                    </button>
                  </a>
                  <a href={content.liveHosted} target="_blank">
                    <button className="font-bold text-gray hover:text-dark_primary">
                      <FaExternalLinkAlt size={26} fontWeight={400} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
