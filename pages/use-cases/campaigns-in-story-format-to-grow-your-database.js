import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import UseCaseSidebar from "../../components/sidebars/use-case-sidebar";
import UseCaseFooter from "../../components/use-case/UseCaseFooter";

export default function UseCaseStoryFormat() {
	return (
		<Layout className="subpage" title={`Go with a format that was designed for mobile - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<section className="content">
					<div className="content__sidebar">
						<UseCaseSidebar />
					</div>
					<div className="content__body">
						<h1>Go with a format that was designed for mobile</h1>

						<div className="lead-image">
							<Image src="/images/use-cases/desktop-to-twis.png" width={800} height={597} layout="responsive" />
						</div>

						<p>Since the story format was first introduced in 2013, it took over most of the social platforms, chat apps, and Google also created their own version with AMP stories.</p>

						<p>By now, users are pretty familiar with this format, so you don't have to introduce it to people, they'll just know how to use it. And this familiarity is what makes twis campaigns more engaging and can provide a great experience for its users.</p>

						<p>Compared to a microsite that was designed to desktop in the first place and then adapted to mobile, the story format and twis campaigns are visually appealing and attract users' attention.</p>

						<p>
							And that is key for success and to grow brand awareness, as according to{" "}
							<a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="link">
								studies
							</a>
							, people can recall 65% of the visual content that they see almost three days later.
						</p>

						<p>While mobile-optimized microsites can also provide a great experience, setting it up properly can be really time and resource-consuming. In most cases, you'll need a developer (sometimes a front-end and a back-end developer), a designer, and a copywriter. You have to provide the environment where the site will be hosted, and that can involve another person in the process.</p>

						<p>
							With the help of twis, one person will be able to set up a campaign from start to finish. Thanks to its{" "}
							<Link href="/features">
								<a className="link">drag and drop campaign builder</a>
							</Link>
							, someone who knows how to create and edit a Powerpoint presentation can also create a twis campaign.
						</p>

						<p>You can drive users to a twis experience from your website, from an email campaign, you can also use QR codes in your packaging that points to your campaign. Basically anywhere where you can use a simple URL.</p>

						<p>Twis is also powerful when used together with social media because the format keeps users in the flow they were in while consuming content on social platforms.</p>

						<p>
							You can post a twis experience on Facebook, or it can be the landing page of your{" "}
							<Link href="/use-cases/collect-emails-and-grow-your-database-through-instagram">
								<a className="link">Instagram</a>
							</Link>{" "}
							or{" "}
							<Link href="/use-cases/collect-emails-and-grow-your-database-through-tiktok">
								<a className="link">TikTok</a>
							</Link>{" "}
							ad campaigns, so you can also grow your database outside those platforms.
						</p>

						<UseCaseFooter />
					</div>
				</section>
			</div>
		</Layout>
	);
}
