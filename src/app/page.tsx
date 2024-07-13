import ContactForm from "@/components/ContantForm";
import Circle from "@/components/layout/Circle";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ProjectsDivider from "@/components/layout/ProjectsDivider";
import ProjectCard from "@/components/ProjectCard";
import { Separator } from "@/components/ui/separator";

export default function Portfolio() {
	return (
		<main className="relative flex flex-col items-center min-h-screen w-full px-5 sm:px-10 md:px-20 overflow-hidden transition-all">
			<Header />
			<section className="max-w-[1360px] w-full relative border border-t-0 rounded-b-[80px] px-20 pb-20 before:bg-border before:absolute before:h-[80px] before:w-[1px] before:-left-[1px] before:-top-[80px] after:bg-border after:absolute after:h-[80px] after:w-[1px] after:-right-[1px] after:-top-[80px]">
				<HeroSection className="relative border border-t-0 rounded-b-[60px] px-20 pb-20" />
				<Circle scale={0} bottom={160 + 2} className="-z-10" />
			</section>
			<section className="max-w-[1360px] w-full relative px-20 border border-transparent">
				<div className="grid grid-cols-3 grid-rows-8 min-h-[640px] gap-[1px] border-t-0 bg-border border overflow-hidden">
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
						className="row-span-4 col-span-1 col-start-1"
						title="Home Designer"
						stack={["React"]}
						year="2022"
					/>
					<ProjectCard
						className="row-span-5 row-start-4 col-start-2"
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
			<section className="max-w-[1360px] w-full relative px-20 border border-transparent">
				<ProjectsDivider className="border-t-0 border rounded-b-[60px] px-20 py-16" />
			</section>
			<section className="max-w-[1360px] w-full relative border border-t-0 rounded-b-[80px] px-20 pb-20 before:-z-20 before:bg-border before:absolute before:h-screen before:w-[1px] before:-left-[1px] before:-top-[100vh] after:bg-border after:absolute after:h-screen after:w-[1px] after:-right-[1px] after:-top-[100vh] after:-z-20">
				<div className="border relative border-t-0 rounded-b-[60px] px-20 pb-20 before:-z-20 before:bg-border before:absolute before:h-[60px] before:w-[1px] before:-left-[1px] before:top-[-60px] after:bg-border after:absolute after:h-[60px] after:w-[1px] after:-right-[1px] after:top-[-60px] after:-z-20">
					<div className="border border-t-0 rounded-b-[40px] aspect-video grid grid-cols-5 overflow-hidden">
						<div className="col-span-3 relative">
							<div className="bg-gradient-to-t from-black to-transparent absolute w-full bottom-0 left-0">
								<p className="opacity-70 leading-8 bg-gradient-to-t p-10 ">
									I’m a new computer science graduate from
									Oregon State University with a focus in
									cybersecurity and full stack web
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
