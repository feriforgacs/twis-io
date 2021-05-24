import Layout from "../components/Layout";
export default function Home() {
	return (
		<Layout>
			<div id="background-gradient">
				<div className="gradient gradient--1"></div>
				<div className="gradient gradient--2"></div>
				<div className="gradient gradient--3"></div>
			</div>
			<div id="hero">
				<h1 className="font--mulish">Grow your database with story-like experiences</h1>
				<h2>Twis helps you create experiences that are more in line with the story format so you can grow your database in a fun and more engaging way.</h2>
			</div>
		</Layout>
	);
}
