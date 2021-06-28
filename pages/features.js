import Layout from "../components/Layout";

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
							<div className="feature-item feature-item--background">
								<div className="feature-item__description">
									<h4>Easy to use drag & drop campaign designer</h4>
									<p className="benefit">
										<strong>Benefit</strong> Create a new campaign in just a few minutes.
									</p>
									<p>You can design and set up your twis campaign just as you'd create a presentation. The result will be in front of you and you can move and resize the images, GIFs, stickers, and text items to set up the desired look and feel.</p>
								</div>

								<div className="feature-item__illustration">### TODO</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
