import Image from "next/image";
import Layout from "../components/Layout";
import Benefit from "../components/home/Benefit";
import Callout from "../components/home/Callout";
import CustomerFlow from "../components/home/CustomerFlow";
import Pricing from "../components/home/Pricing";

const benefits = [
	{
		icon: "emoji--mobile-phone.png",
		title: "Optimized for mobile",
		description: "As stories were designed for mobile, experiences created with twis work best on mobile",
	},
	{
		icon: "emoji--thumbs-up.png",
		title: "Great for social",
		description: "Twis experiences are great fit for social campaigns thanks to the high adaptation of the story format in social media",
	},
	{
		icon: "emoji--sparkles.png",
		title: "High engagement, fun experience",
		description: "Compared to traditional formats, twis campaigns are fun to use and they generate higher engagement rates",
	},
	{
		icon: "emoji--woman-no.png",
		title: "No coding skills needed",
		description: "Thanks to the drag & drop campaign builder everyone can set up a campaign without the help of a developer",
	},
];

export default function Home() {
	return (
		<Layout className="homepage">
			<div id="home">
				<div className="container container--hero-mockup">
					<div id="hero">
						<h1 className="font--mulish">Grow your database with story-like experiences</h1>
						<h2>Twis helps you create experiences that are more in line with the story format so you can grow your database in a fun and more engaging way.</h2>

						<a href={process.env.NEXT_PUBLIC_LOGIN_URL} className="btn btn--primary btn--large">
							Try for free
						</a>
					</div>

					<div id="mockup">
						<div id="mockup__body">
							<p className="mockup__item mockup__item--text">Hit the start button below to try a twis experience</p>
							<div className="mockup__item mockup__item--image-1">
								<Image src="/images/home/lets-go.gif" width={200} height={168} />
							</div>

							<div className="mockup__item mockup__item--image-2">
								<Image src="/images/home/press-start.gif" width={150} height={56} />
							</div>

							<div className="mockup__item mockup__item--image-3">
								<Image src="/images/home/pointing-arrow.gif" width={40} height={50} />
							</div>

							<div className="mockup__item mockup__item--image-4">
								<Image src="/images/home/pointing-arrow.gif" width={40} height={50} />
							</div>

							<div className="mockup__item mockup__item--sticker-1">
								<div className="sticker__animation"></div>
							</div>

							<div className="mockup__item mockup__item--sticker-2">
								<div className="sticker__animation"></div>
							</div>

							<div className="mockup__item mockup__item--sticker-3">
								<div className="sticker__animation"></div>
							</div>

							<a href="###TODO" className="mockup__item mockup__item--button">
								<span>👉 start 👈</span>
							</a>
						</div>
					</div>
				</div>

				<div className="container container--benefits">
					<div id="benefits">
						{benefits.map((benefit, index) => (
							<Benefit key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
						))}
					</div>
				</div>

				<div className="container container--callout-blocks">
					<Callout />
				</div>

				<CustomerFlow />

				<div className="container container--pricing">
					<Pricing />
				</div>
			</div>
		</Layout>
	);
}
