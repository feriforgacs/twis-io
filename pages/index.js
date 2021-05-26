import Layout from "../components/Layout";
export default function Home() {
	return (
		<Layout>
			<div id="hero">
				<h1 className="font--mulish">Grow your database with story-like experiences</h1>
				<h2>Twis helps you create experiences that are more in line with the story format so you can grow your database in a fun and more engaging way.</h2>

				<a href="https://app.twis.io" className="btn btn--primary btn--large">
					Try for free
				</a>
			</div>

			<div id="mockup">
				<div id="mockup__body"></div>
			</div>

			<div id="benefits">
				<div className="benefit">
					<span className="benefit__icon">🚀</span>
					<div className="benefit__description">
						<h3>Benefit title</h3>
						<p>This is the short description of the benefit</p>
					</div>
				</div>

				<div className="benefit">
					<span className="benefit__icon">⚡</span>
					<div className="benefit__description">
						<h3>Great for social media</h3>
						<p>This is the short description of the benefit</p>
					</div>
				</div>

				<div className="benefit">
					<span className="benefit__icon">✨</span>
					<div className="benefit__description">
						<h3>Something else as well</h3>
						<p>This is the short description of the benefit</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
