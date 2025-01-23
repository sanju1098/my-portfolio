import { ArrowDownward } from "@mui/icons-material";
import AnimationSVG from "@src/assets/AnimationSVG";
import Border from "@src/components/Border";
import Button from "@src/components/Button";
import Card from "@src/components/ProjectCard";
import { topProjects } from "@src/config/projectConfig";

export default function Home() {
  return (
    <div className="lg:mx-16 mx-5 my-8">
      {/* Hero Component */}
      <div className="flex justify-between flex-wrap">
        <div className="lg:w-2/4 w-full">
          <p className="text-[20px] mb-4">Hi There!</p>
          <p className="text-[38px] my-4">
            I'm{" "}
            <span className="text-[#00dcff] text-4xl font-medium">
              Sanjay Kumar S R
            </span>
          </p>
          <p className="text-[30px] my-4">
            Application Developer || Frontend Developer
          </p>
          <p className="text-[22px] my-4">
            Professional Frontend Developer with 3.6+ years of experience in
            creating high-quality, user-centric web applications. Expertise in
            modern technologies such as React.js, TypeScript, and Next.js,
            combined with a strong understanding of core web development
            principles. Proficient in building responsive, dynamic, and scalable
            front-end solutions, optimizing website performance, and resolving
            complex code issues. Focused on leveraging best practices to deliver
            efficient, seamless user experiences and enhance overall application
            functionality.
          </p>
        </div>
        <div className="hidden lg:block w-1/3 h-auto mt-2">
          <AnimationSVG />
        </div>
      </div>
      <a
        href="/assets/Resume.pdf"
        download="SanjayKumar-Resume"
        target="_blank">
        <Button size="large" startIcon={<ArrowDownward />}>
          Download my Resume
        </Button>
      </a>
      <Border />

      {/* Section*/}
      <section className="my-12 px-6 lg:px-16">
        <div className="space-y-6">
          <h2 className="text-3xl text-center font-bold text-gray-100 mb-6">
            What I Offer
          </h2>

          <p className="text-xl text-gray-300">
            🖌️ I will craft visually stunning and highly interactive user
            interfaces using modern frameworks like <strong>React.js</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Next.js</strong>,
            delivering intuitive and user-friendly web applications.
          </p>

          <p className="text-xl text-gray-300">
            📱 I will ensure responsive design across all devices, including
            desktops, tablets, and mobile screens, to provide a consistent and
            seamless user experience.
          </p>

          <p className="text-xl text-gray-300">
            ⚡ I will optimize application performance by implementing best
            practices, including lazy loading, efficient API calls, and advanced
            caching strategies to enhance speed and usability.
          </p>

          <p className="text-xl text-gray-300">
            ✅ I will write robust unit and integration tests using{" "}
            <strong>Jest</strong> and <strong>React Testing Library</strong> to
            guarantee high-quality, maintainable, and reliable codebases.
          </p>

          <p className="text-xl text-gray-300">
            🌐 I will adhere to accessibility standards like{" "}
            <strong>WCAG 2.0</strong>, ensuring inclusivity for all users and
            making applications accessible to individuals with disabilities.
          </p>
        </div>
      </section>
      <Border />

      {/* Project */}
      <h2 className="text-3xl text-center font-bold text-gray-100 mb-6">
        Projects
      </h2>
      <p className="text-center text-2xl text-gray-400 mb-6">
        These are some of my projects. To see more, click the button below.
      </p>
      <div className="flex flex-wrap justify-center">
        {topProjects.map((project: any, index: number) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            gitLink={project.gitLink}
            demoLink={project.demoLink}
            techStack={project.techStack}
          />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Button>More Projects</Button>
      </div>

      {/*  */}
    </div>
  );
}
