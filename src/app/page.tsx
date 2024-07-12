import ContactForm from "@/components/ContantForm";
import Circle from "@/components/layout/Circle";
import DynamicCircle from "@/components/layout/dynamic/DynamicCircle";
import DynamicContainer from "@/components/layout/dynamic/DynamicContainer";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProjectsDivider from "@/components/layout/ProjectsDivider";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
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
				{/* <div className="border-t-0 border rounded-b-[60px] px-20 py-16">
					<Circle className="top-0" scale={11}/>
				</div> */}
				{/* <DynamicContainer className="border-t-0 border rounded-b-[60px] px-20 py-16">
					<DynamicCircle />
				</DynamicContainer> */}
				<ProjectsDivider className="border-t-0 border rounded-b-[60px] px-20 py-16"/>
			</section>
			<section className="max-w-[1360px] w-full relative border border-t-0 rounded-b-[80px] px-20 pb-20 before:-z-20 before:bg-border before:absolute before:h-screen before:w-[1px] before:-left-[1px] before:-top-[100vh] after:bg-border after:absolute after:h-screen after:w-[1px] after:-right-[1px] after:-top-[100vh] after:-z-20">
				<div className="border relative border-t-0 rounded-b-[60px] px-20 pb-20 before:-z-20 before:bg-border before:absolute before:h-[60px] before:w-[1px] before:-left-[1px] before:top-[-60px] after:bg-border after:absolute after:h-[60px] after:w-[1px] after:-right-[1px] after:top-[-60px] after:-z-20">
					<div className="border border-t-0 rounded-b-[40px] aspect-video grid grid-cols-3 overflow-hidden">
						<div className="col-span-2 relative">
							{/* <Image
								src="/placeholder.jpg"
								fill
								alt="placeholder"
								className="object-cover grayscale mix-blend-overlay"
							/> */}
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
			<Footer />
		</main>
	);
}
