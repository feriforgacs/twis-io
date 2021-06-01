import Layout from "../components/Layout";

export default function SubprocessorsPage() {
	return (
		<Layout className="subpage">
			<div className="container">
				<section className="content">
					<h1>Subprocessors</h1>
					<p>
						<em>Last updated: June 1, 2021</em>
					</p>

					<div className="subprocessor">
						<h3>Vercel</h3>
						<p>
							<strong>Nature of Processing:</strong> hosting environment
							<br />
							<strong>Territories:</strong> United States
						</p>
					</div>

					<div className="subprocessor">
						<h3>Paddle</h3>
						<p>
							<strong>Nature of Processing:</strong> payment processing
							<br />
							<strong>Territories:</strong>United Kingdom
						</p>
					</div>

					<div className="subprocessor">
						<h3>Functional Software, Inc. (Sentry)</h3>
						<p>
							<strong>Nature of Processing:</strong> error handling services
							<br />
							<strong>Territories:</strong>United States
						</p>
					</div>

					<div className="subprocessor">
						<h3>MongoDB Cloud</h3>
						<p>
							<strong>Nature of Processing:</strong> data storage services services
							<br />
							<strong>Territories:</strong>United States
						</p>
					</div>

					<div className="subprocessor">
						<h3>SendGrid</h3>
						<p>
							<strong>Nature of Processing:</strong> email messaging services
							<br />
							<strong>Territories:</strong>United States
						</p>
					</div>
				</section>
			</div>
		</Layout>
	);
}
