import Link from "next/link";
import Layout from "../../components/Layout";

export default function UseCases() {
	return (
		<Layout className="subpage" title={`Use cases - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<div className="content">
					<div className="content__body use-cases-page">
						<div className="lead">
							<h1 className="align--center">Use cases</h1>
							<h2 className="align--center font--mulish">How can you grow with the help of twis?</h2>
						</div>

						<div className="use-cases">
							<div className="use-case-item">
								<div className="use-case-item__description">
									<h4>From TikTok videos to twis campaigns</h4>
									<p>While grabbing the attention of your potential customers on TikTok is relatively easy, growing a database that is truly yours is a bit harder.</p>
									<p>This is where twis can help you without completely breaking the TikTok experience.</p>
									<p>
										<Link href="/use-cases/collect-emails-and-grow-your-database-through-tiktok">
											<a className="link">Learn more...</a>
										</Link>
									</p>
								</div>

								<div className="use-case-item__illustration">illustration</div>
							</div>
							{/* end .use-case-item */}

							<div className="use-case-item use-case-item--reverse">
								<div className="use-case-item__description">
									<h4>Grow your database with the combination of Instagram story ads and twis campaigns</h4>
									<p>Showing your key message to potential customers on Instagram is something you have to do to build a great online presence. But what if besides growing your follower base, you'd also like to build a database of potential customers you can easily reach later?</p>
									<p>To accomplish that, you can add twis to your digital toolset.</p>
									<p>
										<Link href="/use-cases/collect-emails-and-grow-your-database-through-instagram">
											<a className="link">Learn more...</a>
										</Link>
									</p>
									<p>###TODO sometimes a story is too short to convince someone about something » use a twis campaign to highlight the benefints of your product » do it by asking educative questions » give them a reward, eg a discount code they can use on their first order</p>
								</div>

								<div className="use-case-item__illustration">illustration</div>
							</div>
							{/* end .use-case-item */}

							<div className="use-case-item">
								<div className="use-case-item__description">
									<h4>Go with a format that was deisgned for mobile</h4>
									<p>While the usage of social media and other online platforms heavily shifted to mobile, some brands are still planning to desktop in the first place instead of mobile-first thinking.</p>
									<p>Although, it can depend on your target audience, in most cases going mobile-first plays a crucial part in your success, when it comes to online campaigns.</p>
									<p>Campaigns built with twis follow the story format which was design to work best on mobiles.</p>
									<p>
										<Link href="/use-cases/campaigns-in-story-format-to-grow-your-database">
											<a className="link">Learn more...</a>
										</Link>
									</p>
								</div>

								<div className="use-case-item__illustration">illustration</div>
							</div>
							{/* end .use-case-item */}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
