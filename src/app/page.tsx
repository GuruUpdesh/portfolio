import ContactForm from "@/components/ContantForm";
import Circle from "@/components/layout/Circle";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Portfolio() {
	return (
		<main className="relative flex flex-col items-center min-h-screen w-full px-5 sm:px-10 md:px-20 overflow-hidden transition-all">
			<Header />
			<section className="max-w-[1360px] w-full relative border border-t-0 rounded-b-[80px] px-20 pb-20 before:bg-border before:absolute before:h-[80px] before:w-[1px] before:-left-[1px] before:-top-[80px] after:bg-border after:absolute after:h-[80px] after:w-[1px] after:-right-[1px] after:-top-[80px]">
				<div className="border border-t-0 rounded-b-[60px] px-20 pb-20">
					<div className="border border-t-0 rounded-b-[40px] aspect-video bg-[#0A0A0A]"></div>
				</div>
				<Circle scale={0} bottom={160} />
				<Circle scale={4} bottom={80} />
				<Circle scale={8} />
			</section>
			<section className="max-w-[1360px] w-full relative px-20 border border-transparent">
				<div className="grid grid-cols-3 grid-rows-8 min-h-[640px] gap-[1px] border-t-0 bg-border border overflow-hidden">
					<ProjectCard
						className="row-span-4 border-t-0"
						title="Taskly"
						year="2024"
					/>
					<ProjectCard
						className="row-span-3 border-t-0"
						title="Boats & Loads"
						year="2024"
					/>
					<ProjectCard
						className="row-span-4 border-t-0"
						title="TrackIt"
						year="2023"
					/>
					<ProjectCard
						className="row-span-4 col-span-1 col-start-1"
						title="Home Designer"
						year="2022"
					/>
					<ProjectCard
						className="row-span-5 row-start-4 col-start-2"
						title="Shipment Tracker"
						year="2022"
					/>
					<ProjectCard
						className="row-span-4"
						title="Kuba Game"
						year="2022"
					/>
				</div>
			</section>
			<section className="max-w-[1360px] w-full relative px-20 border border-transparent">
				<div className="border-t-0 border rounded-b-[60px] px-20 py-8">
					<h1 className="opacity-70 hover:opacity-100 transition-opacity py-2 text-xl md:text-2xl text-center">
						All Projects
					</h1>
				</div>
			</section>
			<section className="max-w-[1360px] w-full relative border border-t-0 rounded-b-[80px] px-20 pb-20 before:-z-20 before:bg-border before:absolute before:h-screen before:w-[1px] before:-left-[1px] before:-top-[100vh] after:bg-border after:absolute after:h-screen after:w-[1px] after:-right-[1px] after:-top-[100vh] after:-z-20">
				<div className="border border-t-0 rounded-b-[60px] px-20 pb-20">
					<div className="border border-t-0 rounded-b-[40px] aspect-video grid grid-cols-3 overflow-hidden">
						<div className="col-span-2 relative p-10">
							<div>
								<p className="opacity-70 leading-8">
									I’m a new computer science graduate with a
									focus in cybersecurity and full stack web
									development. I live in Eugene, OR and
									currently work at DealSumm as a junior
									developer. I graduated with my Bachelors in
									computer science from Oregon State
									University.
								</p>
							</div>
						</div>
						{/* <div className="bg-[#0A0A0A] flex flex-col p-2 border-l">
							<div className="flex flex-col max-w-[600px] flex-1">
								<Input
									placeholder="name"
									className="border-hidden bg-transparent"
								/>
								<Input
									placeholder="email"
									className="border-hidden bg-transparent"
								/>
								<Textarea
									placeholder="message"
									className="border-hidden resize-none bg-transparent flex-1 mb-2"
								/>
							</div>
						</div> */}
							<ContactForm />
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
