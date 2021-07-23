import Image from "next/image";
import Layout from "../../components/Layout";

export default function Examples() {
	return (
		<Layout className="subpage" title={`Examples - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<div className="content">
					<div className="content__body examples-page">
						<div className="lead">
							<h1 className="align--center">Examples</h1>
							<h2 className="align--center font--mulish">Story-like experiences to grow your database</h2>
						</div>

						<div className="examples">
							<div className="example-item">
								<h4>The summer trip quiz</h4>
								<a href="https://go.twis.io/example-summer-trip?preview=true" target="_blank" rel="noopener noreferrer">
									<Image src="/images/examples/example_summer_trip_quiz.png" width={600} height={1067} layout="responsive" />
								</a>
							</div>

							<div className="example-item">
								<h4>The vegan quiz</h4>
								<a href="https://go.twis.io/example-vegan-quiz?preview=true" target="_blank" rel="noopener noreferrer">
									<Image src="/images/examples/example_vegan_quiz.png" width={600} height={1067} layout="responsive" />
								</a>
							</div>

							<div className="example-item">
								<h4>Water footprint - Educational quiz</h4>
								<a href="https://go.twis.io/example-water-footprint?preview=true" target="_blank" rel="noopener noreferrer">
									<Image src="/images/examples/example_water_footprint_educational_quiz.png" width={600} height={1067} layout="responsive" />
								</a>
							</div>
						</div>

						<div className="examples-footer">
							<p className="align--center">
								<strong>
									These are just a few examples of the experiences you can create with twis.
									<br />
									Why don't you give it a try? It's free to get started.
								</strong>
							</p>

							<a href={process.env.NEXT_PUBLIC_LOGIN_URL} className="btn btn--primary btn--large">
								Try for free
							</a>

							<p className="align--center">
								<small>No credit card required</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
