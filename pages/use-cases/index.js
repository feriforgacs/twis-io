import Layout from "../../components/Layout";

export default function UseCases() {
	return (
		<Layout className="subpage" title={`Use cases - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<div className="content">
					<div className="content__body use-cases-page">
						<div className="lead">
							<h1 className="align--center">Use cases</h1>
							<h2 className="align--center font--mulish">What twis can do for you?</h2>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
