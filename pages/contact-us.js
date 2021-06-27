import Layout from "../components/Layout";
import ContactSidebar from "../components/sidebars/contact-sidebar";

export default function ContactUs() {
	return (
		<Layout className="subpage" title={`Contact us - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<section className="content">
					<div className="content__sidebar">
						<ContactSidebar />
					</div>
					<div className="content__body">
						<h1>Contact us</h1>
						<p>
							If you have any questions feel free to get in touch via email at{" "}
							<a href="mailto:support@twis.io" className="link">
								support@twis.io
							</a>
							.
						</p>
						<p>We'll get back to you as soon as possible.</p>
						<p>
							<strong>If you have an issue with one of your campaigns</strong>, please also send us the ID of your campaign next to your question.
						</p>
						<p>You can get the ID by opening the campaign in the editor (clicking on the name of the campaign on your dashboard, or clicking on the "Edit campaign" button) and the ID will be the last parameter in the URL (something like 60d6cb534a00971122e3a512).</p>
						<p>
							If you'd like to initiate a refund, please send us a message to{" "}
							<a href="mailto:refund@twis.io" className="link">
								refund@twis.io
							</a>{" "}
							from the email address you used to create your account.
						</p>
					</div>
				</section>
			</div>
		</Layout>
	);
}
