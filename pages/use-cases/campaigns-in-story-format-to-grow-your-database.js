import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import UseCaseSidebar from "../../components/sidebars/use-case-sidebar";

export default function UseCaseStoryFormat() {
	return (
		<Layout className="subpage" title={`Go with a format that was deisgned for mobile - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
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

						<p>Since the Story format was first introduced in 2013, it took over most of the social platforms, chat apps, and Google also created their own version with AMP stories.</p>

						<p>By now, users are pretty familiar with this format, so you don't have to introduce it to people, they'll just know how to use it. And this familiarity is what makes twis campaigns more engaging and can provide a great experience for its users.</p>

						<p>Compared to a microsite that was designed to desktop on the first place and adapted to mobile later on, the story format, and twis campaigns are visually appealing and attrack users attention.</p>

						<p>
							According to{" "}
							<a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="link">
								studies
							</a>
							, people can recall 65% of the visual content that they see almost three days later.
						</p>

						<p>While mobile optimized microsites can also provide a great experience, setting it up properly can be really time and reosurce consuming. In most cases, you'll need a developer (sometimes a front-end and a back-end developer), a designer, and a copywriter. You have to provide the environment where the site will be hosted, and that can introduce another person to the process.</p>

						<p>
							With the help of twis, one person will be able to set up a campaign from start to finish. Thanks to its{" "}
							<Link href="/features">
								<a className="link">drag and drop campaign builder</a>
							</Link>
							, someone who knows how to create and edit a Powerpoint presentation can also create a twis campaign.
						</p>

						<p>###TODO combine with social media » keep users in the flow » ask for user data only at the end</p>
					</div>
				</section>
			</div>
		</Layout>
	);
}
