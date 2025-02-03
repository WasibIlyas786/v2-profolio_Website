// import content
import { content } from "../Content";
import file from "../assets/pdf/Resume_Final_2025.pdf";

const Hero = () => {
  const { hero } = content;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file; // Replace with the actual path to your resume PDF
    link.download = "Wasib_Ilyas - Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex space-x-3 justify-end">
            <button className="btnResume" onClick={handleDownload}>
              {hero.btnResume}
            </button>
            <a href="#contact">
              <button className="btn">{hero.btnText}</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
            style={{
              marginLeft: "-5rem",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
