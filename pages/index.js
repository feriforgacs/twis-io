import Image from "next/image";
import Layout from "../components/Layout";
import Benefit from "../components/home/Benefit";
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

						<a href="https://app.twis.io" className="btn btn--primary btn--large">
							Try for free
						</a>
					</div>

					<div id="mockup">
						<div id="mockup__body">
							<p className="mockup__item mockup__item--text">Hit the start button below to try a twis experience</p>
							<div className="mockup__item mockup__item--image-1">
								<Image src="/lets-go.gif" width={200} height={168} />
							</div>

							<div className="mockup__item mockup__item--image-2">
								<Image src="/press-start.gif" width={150} height={56} />
							</div>

							<div className="mockup__item mockup__item--image-3">
								<Image src="/pointing-arrow.gif" width={40} height={50} />
							</div>

							<div className="mockup__item mockup__item--image-4">
								<Image src="/pointing-arrow.gif" width={40} height={50} />
							</div>

							<div className="mockup__item mockup__item--sticker-1"></div>

							<div className="mockup__item mockup__item--sticker-2"></div>

							<div className="mockup__item mockup__item--sticker-3"></div>

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
					<div id="callout-blocks">
						<div className="callout callout--tiktok">
							<div className="callout__text">
								<h3 className="title">The experience that's in line with the mobile spirit</h3>
								<p className="description">TODO</p>
							</div>
							<div className="callout__illustration">
								<div className="illustration__col">
									<div className="illustration__logo">
										<Image src="/tiktok-icon.png" layout="responsive" width={100} height={100} placeholder="blur" />
									</div>
									<p>TikTok in-feed ad</p>
									<div className="illustration__image illustration__image--tiktok-feed-sample">
										<Image src="/tiktok-sample.png" layout="responsive" width={414} height={896} placeholder="blur" />
									</div>
								</div>

								<div className="illustration__col">
									<div className="illustration__logo">
										<Image src="/twis-icon.png" layout="responsive" width={100} height={100} placeholder="blur" />
									</div>
									<p>twis experience</p>
									<div className="illustration__image illustration__image--tiktok-twis-sample">
										<Image src="/tiktok-twis-sample.png" layout="responsive" width={414} height={896} placeholder="blur" />
									</div>
								</div>

								<div className="callout--tiktok__animated-arrow">
									<Image src="/pointing-arrow.gif" width={120} height={150} />
								</div>
							</div>
						</div>
					</div>
					###TODO callout Instagram story
					<div className="callout">
						<div className="callout__text">
							<h3 className="title">Engage, educate, build awareness and grow your customer base</h3>
							<p className="description">TODO</p>
						</div>
						<div className="callout__illustration">Display twis app start screen » info screen with educational content / or question with edicational content » data collection form </div>
					</div>
				</div>

				<div className="container container--pricing">
					<Pricing />
				</div>
			</div>
		</Layout>
	);
}
