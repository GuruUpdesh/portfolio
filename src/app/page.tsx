import ContactForm from "@/components/ContantForm";
import Circle from "@/components/layout/Circle";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ProjectsDivider from "@/components/layout/ProjectsDivider";
import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-5 transition-all sm:px-10 md:px-20">
      <Header />
      <section className="relative w-full max-w-[1360px] rounded-b-[80px] border border-t-0 px-20 pb-20 before:absolute before:-left-[1px] before:-top-[80px] before:h-[80px] before:w-[1px] before:bg-border after:absolute after:-right-[1px] after:-top-[80px] after:h-[80px] after:w-[1px] after:bg-border">
        <HeroSection className="relative rounded-b-[60px] border border-t-0 px-20 pb-20" />
        <Circle scale={0} bottom={160 + 2} className="-z-10" />
      </section>
      <section className="relative w-full max-w-[1360px] border border-transparent px-20">
        <div className="grid min-h-[640px] grid-cols-3 grid-rows-8 gap-[1px] overflow-hidden border border-t-0 bg-border">
          <ProjectCard
            className="row-span-4 border-t-0"
            title="Taskly"
            stack={["Next.js"]}
            year="2024"
          />
          <ProjectCard
            className="row-span-3 border-t-0"
            title="Boats & Loads"
            stack={["React"]}
            year="2024"
          />
          <ProjectCard
            className="row-span-4 border-t-0"
            title="TrackIt"
            stack={["Next.js"]}
            year="2023"
          />
          <ProjectCard
            className="col-span-1 col-start-1 row-span-4"
            title="Home Designer"
            stack={["React"]}
            year="2022"
          />
          <ProjectCard
            className="col-start-2 row-span-5 row-start-4"
            title="Shipment Tracker"
            stack={["React"]}
            year="2022"
          />
          <ProjectCard
            className="row-span-4"
            title="Kuba Game"
            stack={["Python"]}
            year="2022"
          />
        </div>
      </section>
      <section className="relative w-full max-w-[1360px] border border-transparent px-20">
        <ProjectsDivider className="rounded-b-[60px] border border-t-0 px-20 py-16" />
      </section>
      <section className="relative w-full max-w-[1360px] rounded-b-[80px] border border-t-0 px-20 pb-20 before:absolute before:-left-[1px] before:-top-[100vh] before:-z-20 before:h-screen before:w-[1px] before:bg-border after:absolute after:-right-[1px] after:-top-[100vh] after:-z-20 after:h-screen after:w-[1px] after:bg-border">
        <div className="relative rounded-b-[60px] border border-t-0 px-20 pb-20 before:absolute before:-left-[1px] before:top-[-60px] before:-z-20 before:h-[60px] before:w-[1px] before:bg-border after:absolute after:-right-[1px] after:top-[-60px] after:-z-20 after:h-[60px] after:w-[1px] after:bg-border">
          <div className="grid aspect-video grid-cols-5 overflow-hidden rounded-b-[40px] border border-t-0">
            <div className="relative col-span-3">
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                <p className="bg-gradient-to-t p-10 leading-8 opacity-70">
                  I’m a new computer science graduate from Oregon State
                  University with a focus in cybersecurity and full stack web
                  development.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      {/* <section className="max-w-[1360px] w-full relative border border-t-0 rounded-b-[80px] px-20 py-20 before:-z-20 before:bg-border before:absolute before:h-screen before:w-[1px] before:-left-[1px] before:-top-[100vh] after:bg-border after:absolute after:h-screen after:w-[1px] after:-right-[1px] after:-top-[100vh] after:-z-20">
				<h1 className="text-xl md:text-2xl opacity-70 mb-4">
					Technology
				</h1>
				<section className="mb-4">
					<h2 className="text-base md:text-lg opacity-70">
						Languages
					</h2>
					<div className="grid grid-cols-4 gap-1">
						<div className="bg-border/10 rounded-md p-2">
							<p>Typescript</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Python</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>C</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>JavaScript</p>
						</div>
					</div>
				</section>
				<section className="mb-4">
					<h2 className="text-base md:text-lg opacity-70">
						Frontend
					</h2>
					<div className="grid grid-cols-4 gap-1">
						<div className="bg-border/10 rounded-md p-2">
							<p>React</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>NextJS</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Tailwind CSS</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>SASS</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>CSS</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>ShadcnUI</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>MaterialUI</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Bootstrap</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>HTML</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>ReCharts</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Google Maps</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Framer Motion</p>
						</div>
					</div>
				</section>
				<section className="mb-4">
					<h2 className="text-base md:text-lg opacity-70 mb-2">
						Backend
					</h2>
					<div className="grid grid-cols-4 gap-1">
						<div className="bg-border/10 rounded-md p-2">
							<p>Node</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Express</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Hono</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Django</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Flask</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>MySQL</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>MongoDB</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Redis</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>RabbitMq</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Vite</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Webpack</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Drizzle</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>AWS</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Vercel</p>
						</div>
					</div>
				</section>
				<section className="mb-4">
					<h2 className="text-base md:text-lg opacity-70 mb-2">
						Tools
					</h2>
					<div className="grid grid-cols-4 gap-1">
						<div className="bg-border/10 rounded-md p-2">
							<p>VS Code</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>GitHub</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Notion</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Bun</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>NPM</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Chat GPT</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Copilot</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Docker</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Linux / WSL</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Figma</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Adobe Suite</p>
						</div>
						<div className="bg-border/10 rounded-md p-2">
							<p>Blender</p>
						</div>
					</div>
				</section>
			</section> */}
      <Footer />
    </main>
  );
}
