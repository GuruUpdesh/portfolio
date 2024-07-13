import ProjectDivider from "@/components/layout/ProjectDivider";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import "./techstack.css";
import TechStackContainer from "@/components/project/TechStackContainer";
import Footer from "@/components/layout/Footer";

type Props = {
	params: {
		id: string;
	};
};

export default function Project({ params: { id } }: Props) {
	return (
		<main className="relative flex flex-col items-center min-h-screen w-full px-5 sm:px-10 md:px-20 overflow-hidden transition-all">
			<section className="w-full max-w-[1360px] px-40 mb-8">
				<div className="flex items-center gap-2 py-4">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-full"
								>
									<ArrowLeft className="h-4 w-4" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Back Home</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<div>
						<h1 className="text-2xl inline-block">TrackIt</h1>
						<p className="text-lg opacity-75 inline-block ml-2">
							2023
						</p>
					</div>
					<div className=" flex items-center justify-end flex-1 gap-2 group">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="outline" className="gap-1">
										<ArrowLeft className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
										<span className="opacity-75 transition-opacity group-hover:opacity-100">
											Shipment Tracker
										</span>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Previous Project</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="outline" className="gap-1">
										<span className="opacity-75 transition-opacity group-hover:opacity-100">
											Taskly
										</span>
										<ArrowRight className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Next Project</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>
				<div className="relative border w-full aspect-video bg-[#0A0A0A] z-10 rounded-[40px] flex items-center justify-center">
					<Play className="w-10 h-10" />
				</div>
			</section>
			<section className="w-full max-w-[1360px] px-40 flex">
				<p>
					TrackIt is a web-based application that simplifies shipment
					tracking by providing a unified platform to monitor your
					packages' status and journey, across various couriers.
				</p>
				<div className="flex items-center gap-2">
					<Button className="rounded-full">Visit</Button>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									className="rounded-full group flex items-center gap-2 px-2 lg:px-3"
								>
									<GitHubLogoIcon className="w-5 h-5 transition-opacity" />
									<span className="hidden lg:block  transition-opacity">
										GitHub
									</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Check out my GitHub</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</section>
			<ProjectDivider className="max-w-[1360px] w-full relative border border-t-0 rounded-b-[80px] px-40 pb-40 " />
			<section className="max-w-[1360px] w-full relative px-40 py-2">
				<ul className="grid grid-cols-3 gap-2">
					<li className="bg-border/5 p-4 rounded-lg">
						<h3 className="font-semibold">
							Centralized Tracking Dashboard
						</h3>
						<p className="opacity-75 font-light">
							Consolidated view of shipments and their current
							statuses.
						</p>
					</li>
					<li className="bg-border/5 p-4 rounded-lg">
						<h3 className="font-semibold">Multi-Courier Support</h3>
						<p className="opacity-75 font-light">
							Tracking support for UPS, USPS, FedEx, OnTrac, and
							more.
						</p>
					</li>
					<li className="bg-border/5 p-4 rounded-lg">
						<h3 className="font-semibold">
							Detailed Tracking History
						</h3>
						<p className="opacity-75 font-light">
							View status, location, and date information for each
							shipment.
						</p>
					</li>
					<li className="bg-border/5 p-4 rounded-lg">
						<h3 className="font-semibold">Easy Management</h3>
						<p className="opacity-75 font-light">
							Add, delete, and update your shipments with ease.
						</p>
					</li>
					<li className="bg-border/5 p-4 rounded-lg">
						<h3 className="font-semibold">
							Clear and easy to understand UI
						</h3>
						<p className="opacity-75 font-light">
							Intuitive and responsive design for a seamless user
							experience. With mobile support for tracking on the
							go.
						</p>
					</li>
					<li className="bg-border/5 p-4 rounded-lg">
						<h3 className="font-semibold">Power User Features</h3>
						<p className="opacity-75 font-light">
							Search and filter functionality, undo accidental
							deletions, shortcuts, and links to courier websites.
						</p>
					</li>
				</ul>
			</section>
			<section className="max-w-[1360px] w-full relative px-40 py-2 min-h-[500px] grid grid-cols-2">
				<TechStackContainer />
			</section>
            <Footer/>
		</main>
	);
}
