import Layout from "../components/Layout";
import Benefit from "../components/Benefit";

const benefits = [
	{
		icon: "📱",
		title: "Optimized for mobile",
		description: "As stories were designed for mobile, experiences created with twis work best on mobile",
	},
	{
		icon: "👍",
		title: "Great for social",
		description: "Twis experiences are great fit for social campaigns thanks to the high adaptation of the story format in social media",
	},
	{
		icon: "✨",
		title: "High engagement, fun experience",
		description: "Compared to traditional formats, twis campaigns are fun to use and they generate higher engagement rates",
	},
	{
		icon: "🙅‍♀️",
		title: "No coding skills needed",
		description: "Thanks to the drag & drop campaign builder everyone can set up a campaign without the help of a developer",
	},
];

export default function Home() {
	return (
		<Layout>
			<div id="home">
				<div className="container container--hero-mockup">
					<div id="hero">
						<h1 className="font--mulish">Grow your database with story-like experiences</h1>
						<h2>Twis helps you create experiences that are more in line with the story format so you can grow your database in a fun and more engaging way.</h2>

						<a href="https://app.twis.io" className="btn btn--primary btn--large">
							Try for free
						</a>
					</div>

					<div id="mockup">
						<div id="mockup__body"></div>
					</div>
				</div>

				<div className="container">
					<div id="benefits">
						{benefits.map((benefit, index) => (
							<Benefit key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}
