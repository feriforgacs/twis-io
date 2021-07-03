import Layout from "../components/Layout";
import Pricing from "../components/home/Pricing";

export default function PricingPage() {
	return (
		<Layout className="subpage" title={`Pricing - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<div className="content">
					<div className="content__body pricing-page">
						<div className="lead">
							<h1 className="align--center">Pricing</h1>
							<h2 className="align--center font--mulish">TODO</h2>
							<p className="align--center">You can cancel your subscription any time.</p>
						</div>

						<Pricing showTitle={false} lightVersion={true} />

						<h4>What's in the free plan?</h4>
						<p>When you create a twis account you'll have access to all the features and you can collect 10 participants for free. This is enough to take a look at the capabilities of the platform and you can also run a test campaign. If you collect more than 10 participants during the trial period, you won't be charged only if you chose to go with one of our paid plans.</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
