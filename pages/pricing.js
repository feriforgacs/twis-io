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
						</div>

						<Pricing showTitle={false} />
					</div>
				</div>
			</div>
		</Layout>
	);
}
