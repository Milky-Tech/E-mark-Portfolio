import {
  ArrowRight,
  ChartBar,
  ChartBarIcon,
  CodeSquare,
  Download,
  Facebook,
  LocateIcon,
  MailQuestion,
  Notebook,
  PcCase,
  Pen,
  PhoneCall,
  Send,
  Settings2Icon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import SkillProgress from "../../components/ui/skillProgress";
import MyPortfolioSection from "../../components/ui/MyPortfolioSection";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Progress", href: "#progress" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
];

export const Desktop = (): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:9000/projects");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProjects(data);
        console.log(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using form data
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Location: ${formData.location}
      Budget: ${formData.budget}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;

    window.location.href = `mailto:adebayoe517@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact Form Submission"
    )}&body=${encodeURIComponent(emailBody)}`;

    // Reset form
    setFormData({
      name: "",
      email: "",
      location: "",
      budget: "",
      subject: "",
      message: "",
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/2348100969175", "_blank");
  };

  return (
    <div className="bg-white w-full flex flex-col gap-4">
      <div className="bg-white w-full">
        {/* Header Section */}
        <header
          id="home"
          className="w-full h-[462px] bg-gradient-to-b from-[#100073] via-[#100073] to-[#FFFFFF] bg-[100%_100%] mb-[100px]"
        >
          <nav className="flex items-center justify-between px-14 py-[34px]">
            <div className="flex items-center gap-3 bg-[url(/rectangle-20.svg)]">
              <img
                className="w-[60px] h-[60px] object-cover"
                alt="Rectangle"
                src="/logo.png"
              />
              <div className="[font-family:'Roboto',Helvetica] font-bold text-[#FA8443] text-4xl tracking-[0] leading-[50.4px]">
                EMARK
              </div>
            </div>

            <div className="flex gap-10">
              {" "}
              <div className="flex items-center gap-14">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="[font-family:'Lato',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-[22.4px] hover:text-[#48b7d6d6] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Button
                className="bg-[#fa8443] hover:bg-[#e6753a] text-gray-50 px-8 py-3 rounded-lg h-auto"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="[font-family:'Lato',Helvetica] font-bold text-base tracking-[0.20px] leading-[22.4px]">
                  Contact
                </span>
              </Button>
            </div>
          </nav>

          {/* Hero Images */}
          <div className="mb-14 top-[187px] w-full flex justify-between">
            <div className="text-[#333333] w-[50%] px-14 pt-14 gap-2 flex flex-col">
              <h2 className="gap-2 flex flex-col font-[700] font-[poppins] text-5xl">
                <span>Hi, I'm </span>
                <span>Adebayo Emmanuel </span>
                [P.K.A EMARK]
              </h2>
              <p className="text-lg">
                I'm a UI/UX Designer & Frontend Developer passionate about
                crafting intuitive, accessible, and visually engaging digital
                experiences. With a blend of creativity and problem-solving
                skills, I design interfaces that don't just look good — they
                feel right.
              </p>
              <Button
                className="bg-[#fa8443] hover:bg-[#e6753a] text-gray-50 px-8 py-3 rounded-lg h-auto w-1/4"
                onClick={openWhatsApp}
              >
                <span className="[font-family:'Lato',Helvetica] font-bold text-base tracking-[0.20px] leading-[22.4px]">
                  Say Hello!
                </span>
              </Button>
            </div>
            <div className="h-[250px] mt-10 md:mt-0 w-[50%] items-center">
              {/* Background circle graphics */}
              <img
                src="/illus.png"
                alt="Profile"
                className="rounded-lg h-[420px] object-contain"
              />
            </div>
          </div>
        </header>
        <div className="w-1/2 mx-auto grid grid-cols-3 gap-3">
          <div className="bg-[#FA8443] py-8 px-14 text-center text-white">
            <h3 className="text-2xl font-bold">2 Y.</h3>
            <p className="text-sm">Experience</p>
          </div>
          <div className="bg-[#FA8443] py-8 px-8 text-center text-white">
            <h3 className="text-2xl font-bold">7+</h3>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div className="bg-[#FA8443] py-8 px-8 text-center text-white">
            <h3 className="text-2xl font-bold">5</h3>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>
        {/* Footer */}
      </div>
      {/* Section */}
      <section id="about" className="flex w-full p-6 gap-3">
        <img
          src="/secpic.png"
          alt="emark"
          className="rounded-lg h-[450px] object-contain w-1/2"
        />{" "}
        <div className="w-1/2 px-3">
          <h3 className="font-bold text-2xl">About Me</h3>
          <p className="text-lg mb-1">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </p>
          <p>
            I design and develop services for customers specializing creating
            stylish, modern websites, web services.
          </p>
          <div className="mx-auto mt-10 space-y-6">
            <SkillProgress
              label="UI"
              percentage={80}
              gradient="bg-gradient-to-r from-orange-400 via-red-400 to-purple-800"
            />
            <SkillProgress
              label="Website Design"
              percentage={85}
              gradient="bg-gradient-to-r from-cyan-400 to-sky-700"
            />
            <SkillProgress
              label="App Design"
              percentage={70}
              gradient="bg-gradient-to-r from-orange-300 via-gray-400 to-cyan-400"
            />
            <SkillProgress
              label="Graphics Design"
              percentage={95}
              gradient="bg-gradient-to-r from-red-500 via-pink-600 to-purple-800"
            />
          </div>
        </div>
      </section>
      <div className="bg-[#100073] w-full h-[100px] my-5 flex justify-between px-14 items-center">
        <span>
          <Facebook />
        </span>
        <div className="flex justify-between gap-6">
          <Button
            className="bg-[#FA8443]"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            My Project
          </Button>
          <Button className="bg-[#FA8443]">
            <Download />
            Download CV
          </Button>
        </div>
      </div>
      <section
        id="progress"
        className="flex px-14 py-10 text-white gap-6 justify-between items-center h-[500px] bg-[#100073] w-full"
      >
        <div className="w-[40%] flex flex-col gap-3">
          <h2 className="text-4xl">Work Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
        </div>
        <div className="grid w-[50%] grid-cols-2 gap-4 text-black">
          <div className="bg-white p-4 rounded-md mb-4">
            <div className="p-3 bg-[#FA8443] w-12">
              {" "}
              <Notebook color="#FFF" />
            </div>
            <label className="font-bold">1. Research</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md mt-4">
            <div className="p-3 bg-[#EDD8FF] w-12">
              <ChartBar color="#FA8443" />
            </div>
            <label className="font-bold">2. Analyse</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>{" "}
          <div className="bg-white p-4 rounded-md mb-4">
            <div className="p-3 bg-[#EDD8FF] w-12">
              {" "}
              <Pen color="#FA8443" />
            </div>
            <label className="font-bold">3. Design</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>{" "}
          <div className="bg-white p-4 rounded-md mt-4">
            <div className="p-3 bg-[#EDD8FF] w-12">
              {" "}
              <PcCase color="#FA8443" />
            </div>
            <label className="font-bold">4. Launch</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu.
            </p>
          </div>
        </div>
      </section>
      <MyPortfolioSection />
      <section className="px-auto py-10 gap-3 flex-col flex justify-center items-center h-[400px] bg-[#D9D9D9] w-full">
        <h2 className="text-4xl font-bold w-3/5 flex items-center justify-center text-center">
          Do you have Project Idea? Let's discuss your project!
        </h2>
        <p className="text-sm w-1/3 text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <button
          className="bg-[#FA8443] text-white px-6 py-3 flex gap-3 items-center"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let's work Together <ArrowRight />
        </button>
      </section>
      <section id="experience" className="flex flex-col gap-3 justify-center">
        <h2 className="text-center w-full font-semibold text-5xl">
          EXPERIENCE
        </h2>
        <div className="flex w-full p-6 gap-3">
          {" "}
          <img
            src="/illustrasi.png"
            alt="emark"
            className="rounded-lg h-[450px] object-contain w-1/2"
          />{" "}
          <div className="w-1/2 px-3">
            <h3 className="font-bold text-2xl">Why Choose Me?</h3>
            <p>
              Enjoy different experiences in your designs and let me help your
              idea to come reality.
            </p>
            <div className="flex gap-4 items-center mt-3 shadow-lg shadow-slate-500 p-2">
              <Settings2Icon />{" "}
              <span className="flex flex-col">
                <label className="font-semibold text-lg">
                  User-Focused Problem Solving
                </label>
                <p className="text-gray-600">
                  I design with empathy, ensuring every interface addresses real
                  user needs while achieving business goals.
                </p>
              </span>
            </div>
            <div className="flex gap-4 items-center mt-3 p-2">
              <CodeSquare />{" "}
              <span className="flex flex-col">
                <label className="font-semibold text-lg">
                  Blend of Creativity & Technical Skill
                </label>
                <p className="text-gray-600">
                  combine aesthetic design with frontend development knowledge,
                  ensuring seamless handoff and efficient implementation.
                </p>
              </span>
            </div>
            <div className="flex gap-4 items-center mt-3 p-2">
              <ChartBarIcon />{" "}
              <span className="flex flex-col">
                <label className="font-semibold text-lg">
                  Proven Track Record of Impact
                </label>
                <p className="text-gray-600">
                  My designs have improved usability, engagement, and overall
                  user satisfaction across different projects and industries.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-auto py-10 gap-14 flex p-6 justify-center items-center h-[550px] bg-[#D9D9D9] w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold w-3/5 flex items-center justify-center text-center">
            What I do?
          </h2>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>{" "}
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
          <button
            className="bg-[#FA8443] w-32 rounded-sm text-white px-6 py-3 flex gap-3 items-center"
            onClick={openWhatsApp}
          >
            Say Hello!
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="p-5 bg-white rounded-md flex flex-col gap-3 border-l-4 border-[#100073]">
            <h3 className="text-xl font-semibold">User Experience (UX)</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
          <div className="p-5 bg-white rounded-md flex flex-col gap-3">
            <h3 className="text-xl font-semibold">User Interface (UI)</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>

          <div className="p-5 bg-white rounded-md flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 justify-center pt-3">
        <h2 className="text-center w-full font-semibold text-5xl">
          TESTIMONIAL
        </h2>
        <p className="text-gray-400 text-center w-2/5 mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <p className="text-center w-3/5 mx-auto">
          "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
          felis turpis, nec semper odio convallis at. Curabitur imperdiet semper
          arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas
          est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare
          elit at libero suscipit porta."
        </p>
        <p className="text-center w-3/5 mx-auto font-bold">Esther Howard</p>
        <span className="text-center w-3/5 mx-auto">
          Managing Director, ABC company
        </span>
      </section>
      <footer
        id="contact"
        className="bg-[#100073] text-white w-full items-center align-middle flex h-[400px] py-3 px-[5%] relative mt-[400px]"
      >
        <div className="bg-white absolute h-[500px] w-[90%] rounded-md shadow-md bottom-[250px] z-50 flex px-20 pb-14 gap-14 text-gray-400">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black text-3xl">
              Let's discuss your project
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
            <div className="flex gap-3 shadow-lg rounded-md p-3">
              <LocateIcon color="#FA8443" />
              <span className="flex flex-col gap-2">
                <h4>Address</h4>
                <p>Ile-ife, Osun State, Nigeria</p>
              </span>
            </div>
            <div className="flex gap-3 rounded-md p-3">
              <MailQuestion color="#FA8443" />
              <span className="flex flex-col gap-2">
                <h4>Email</h4>
                <p>adebayoe517@gmail.com</p>
              </span>
            </div>
            <div className="flex gap-3 rounded-md p-3">
              <PhoneCall color="#FA8443" />
              <span className="flex flex-col gap-2">
                <h4>Call Me Now</h4>
                <p>+2348100969175</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </p>
            <form
              className="flex flex-col w-full gap-5"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="border-b-2 p-2 text-[#FA8443] border-[#FA8443]"
                value={formData.name}
                onChange={handleFormChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="border-b-2 p-2 border-gray-400"
                value={formData.email}
                onChange={handleFormChange}
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Location*"
                className="border-b-2 p-2 border-gray-400"
                value={formData.location}
                onChange={handleFormChange}
                required
              />
              <span className="w-full flex gap-3">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget*"
                  className="border-b-2 p-2 border-gray-400"
                  value={formData.budget}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  className="border-b-2 p-2 border-gray-400"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                />
              </span>
              <input
                type="text"
                name="message"
                placeholder="Message*"
                className="border-b-2 p-2 border-gray-400"
                value={formData.message}
                onChange={handleFormChange}
                required
              />
              <button
                type="submit"
                className="bg-[#FA8443] w-28 text-white p-3 rounded-sm flex items-center gap-2"
              >
                Submit <Send />
              </button>
            </form>
          </div>
        </div>
        <div className="absolute z-50 bottom-0 flex justify-between p-2 w-[90%]">
          {" "}
          <div className="flex items-center gap-3 bg-[url(/rectangle-20.svg)]">
            <img
              className="w-[40px] h-[40px] object-cover"
              alt="Rectangle"
              src="/logo.png"
            />
            <div className="[font-family:'Roboto',Helvetica] font-bold text-[#FA8443] text-4xl tracking-[0] leading-[50.4px]">
              EMARK
            </div>
          </div>
          <div className="flex gap-10">
            {" "}
            <div className="flex items-center gap-14">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Lato', Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-[22.4px] hover:text-[#48b7d6d6] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
