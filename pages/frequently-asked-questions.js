import Layout from "../components/Layout";
import FaqItem from "../components/FaqItem";

export default function FAQ() {
	const faqItems = [
		{
			title: "The campaign I created doesn't seem to work. What could be the problem?",
			description: `<p>First, check your connection. It can easily happen that the issue is the result of a short connection outage.</p><p>Second, make sure that you set the campaign status to "Active" under the publish settings. Also, make sure that the visibility dates are correct.</p><p>If these settings seem to be okay, try to load your campaign on different browsers and devices.</p>`,
		},
		{
			title: "How many participants can I collect with my campaigns?",
			description: "<p>The number of participants you can collect with your campaigns <strong>depends on your subscription</strong>. If you are on the <strong>Basic plan</strong> you can collect 100 participants in a month, with as many campaigns as you want. So, if you have 3 campaigns and your first campaign collects 90 participants, your second campaign collects 9 participants, your third campaign can collect 1 more participant without overages. On the <strong>Pro plan</strong>, you can collect 1 000 participants per month, and on the <strong>Premium plan</strong>, the limit is 10 000 participants per month.</p>",
		},
		{
			title: "How can I cancel my subscription?",
			description: `<p>If you have an active subscription, you can cancel it through the twis dashboard, by visiting your "Account" page and clicking on the "Subscription" tab. There, you'll see a cancel section where you can easily start the cancellation process. If you have any problems during the process, don't hesitate to get in touch via email at support@twis.io.</p>`,
		},
		{
			title: "Are twis campaigns working on desktop?",
			description: "<p><strong>Yes.</strong> Although twis was built with a mobile-first mindset and the story format works best on mobile, twis campaigns are working well on desktop as well.</p>",
		},
	];

	return (
		<Layout className="subpage">
			<div className="container">
				<section className="content">
					<div className="content__body">
						<h1>Frequently Asked Questions</h1>
						<div className="faq-items">
							{faqItems.map((item, index) => (
								<FaqItem key={index} title={item.title} description={item.description} />
							))}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}
