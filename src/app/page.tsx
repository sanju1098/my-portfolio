import { ArrowDownward } from "@mui/icons-material";
import AnimationSVG from "@src/assets/AnimationSVG";
import Button from "@src/components/Button";

export default function Home() {
  return (
    <div className="lg:mx-16 mx-5 my-8">
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
          <p className="text-[24px] my-4">
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
        <div className="hidden lg:block w-1/3 h-[100px] mt-14">
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
    </div>
  );
}
