import Layout from "../components/Layout";
import Image from "next/image";

export default function Features() {
	return (
		<Layout className="subpage" title={`Features - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<div className="content">
					<div className="content__body features-page">
						<div className="lead">
							<h1 className="align--center">Features</h1>
							<h2 className="align--center">What twis can do for you?</h2>

							<p className="align--center">Twis helps you create meaningful experiences so your brand can build awareness with your existing and potential cusomers.</p>

							<h3 className="align--center">If you can create a Powerpoint presentation, you'll be able to set up a campagin in twis as well.</h3>
						</div>

						<div className="features">
							<div className="feature-item">
								<div className="feature-item__description">
									<h4>Easy to use drag & drop campaign builder and designer</h4>
									<p className="benefit">
										<strong>Benefit</strong> Create a new campaign in just a few minutes.
									</p>
									<p>You can design and set up your twis campaign just as you'd create a presentation. The result will be in front of you and you can move and resize the images, GIFs, stickers, and text items to set up the desired look and feel.</p>
								</div>

								<div className="feature-item__illustration">
									<div className="illustration-image">
										<Image src="/images/features/01_drag_and_drop_builder.png" layout="responsive" width={1200} height={673} />
									</div>
								</div>
							</div>
							{/* end .feature-item */}

							<div className="feature-item feature-item--background feature-item--reverse">
								<div className="feature-item__description">
									<h4>Multiple customization options</h4>
									<p className="benefit">
										<strong>Benefit</strong> Build an experience that is brand fit.
									</p>
									<p>The built-in customization tools (custom fonts, colors, font size, background color, etc) make it possible to set up a campaign that follows the design language of your brand. So you can create a cohesive user experience.</p>
								</div>

								<div className="feature-item__illustration">
									<div className="illustration-image">
										<Image src="/images/features/02_custom_fonts_colors.png" layout="responsive" width={880} height={640} />
									</div>
								</div>
							</div>
							{/* end .feature-item */}

							<div className="feature-item feature-item--background">
								<div className="feature-item__description">
									<h4>Hundreds of stock quality images just a click away</h4>
									<p className="benefit">
										<strong>Benefit</strong> Visually engaging experience.
									</p>
									<p>Thanks to Unsplash, you can chose from more than 1 million stock quality free photos to create a visually appealing and memorable experience for your audience.</p>
								</div>

								<div className="feature-item__illustration">
									<div className="illustration-image">
										<Image src="/images/features/03_unsplash_photos.png" layout="responsive" width={880} height={637} />
									</div>
								</div>
							</div>
							{/* end .feature-item */}

							<div className="feature-item feature-item--background feature-item--reverse">
								<div className="feature-item__description">
									<h4>Animated stickers to make it pop</h4>
									<p className="benefit">
										<strong>Benefit</strong> Create visual continuity between the content on social platforms and your campaigns.
									</p>
									<p>Animated stickers and animated GIFs are highly adapted elements of stories on all kind of social platforms. You can use the same stickers in your twis campaigns so you can create a bridge between the content on your social profiles and your twis experiences.</p>
								</div>

								<div className="feature-item__illustration">
									<div className="illustration-image">
										<Image src="/images/features/04_giphy_stickers.png" layout="responsive" width={800} height={631} />
									</div>
								</div>
							</div>
							{/* end .feature-item */}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
