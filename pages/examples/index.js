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
					</div>
				</div>
			</div>
		</Layout>
	);
}
