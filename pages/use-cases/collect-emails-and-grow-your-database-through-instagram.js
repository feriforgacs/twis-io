import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import UseCaseSidebar from "../../components/sidebars/use-case-sidebar";
import UseCaseFooter from "../../components/use-case/UseCaseFooter";

export default function UseCaseInstagram() {
	return (
		<Layout className="subpage" title={`Grow your database with the combination of Instagram story ads and twis campaigns - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<section className="content">
					<div className="content__sidebar">
						<UseCaseSidebar />
					</div>
					<div className="content__body">
						<h1>Grow your database with the combination of Instagram story ads and twis campaigns</h1>

						<div className="lead-image">
							<Image src="/images/use-cases/instagram-to-twis.png" width={800} height={597} layout="responsive" />
						</div>

						<p>Instagram became critical in the marketing toolset to almost any brand with an online presence. It provides a great amount of functions to reach your potential customers, but the main focus is on keeping users inside the platform. Growing your database outside of Instagram needs other tools to be involved in the process. Twis is the tool that can help you with that.</p>

						<p>
							While Instagram is{" "}
							<a className="link" href="https://www.theverge.com/2021/6/29/22555434/instagram-link-sticker-post-test-swipe-up" target="_blank" rel="noopener noreferrer">
								already testing
							</a>{" "}
							the feature to allow anyone to add links to their stories, for a great number of profiles it is only available via ads. If you don't have a verified account or 10 000 followers, you are probably one of those profiles.
						</p>

						<p>Paying for ads to drive more visitors to a website or grow your database is something we used to and everyone is working hard to get the most out of a click or tap they paid for.</p>

						<p>Getting a user to register on your site, sign up for your newsletter, or make a purchase is something most marketers are aiming to. But in some cases, the experience users should go through before they reach the desired destination is not in line with the one they used to on Instagram or on other mobile first platforms. This makes harder to drive and grow conversion.</p>

						<p>Twis campaigns can solve this issue by providing a story-like experience that is similar to the one that made the user interested in the first place. It's like an extension of the story format outside of Instagram.</p>

						<p>Thanks to this, user experience is be better, engagement and conversion rate is higher. As the result of these, growing brand awareness is also easier.</p>

						<p>If the members of your target audience are highly represented on other social platforms, twis could be helpful there as well. You can use it in a combination with <Link href="/use-cases/collect-emails-and-grow-your-database-through-tiktok">
							<a className="link">TikTok ads</a>
						</Link>, or you can simply share it on Facebook, and in any kind of direct message. No matter if it's an email or a DM on Twitter.</p>

						<p>Setting up a twis experience is as easy as creating a Powerpoint presentation. Thanks to it's drag and drop campaign builder, you don't need developer skills to launch a campaign. You can get from idea to launch in just a few minutes.</p>

						<UseCaseFooter />
					</div>
				</section>
			</div>
		</Layout>
	);
}
