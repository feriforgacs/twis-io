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
								<div className="feature-item__description feature-item__description--reverse">
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
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
