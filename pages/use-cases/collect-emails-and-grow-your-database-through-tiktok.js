import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import UseCaseSidebar from "../../components/sidebars/use-case-sidebar";
import UseCaseFooter from "../../components/use-case/UseCaseFooter";

export default function UseCaseTikTok() {
	return (
		<Layout className="subpage" title={`From TikTok videos to twis campaigns - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<section className="content">
					<div className="content__sidebar">
						<UseCaseSidebar />
					</div>
					<div className="content__body">
						<h1>From TikTok videos to twis campaigns</h1>

						<div className="lead-image">
							<Image src="/images/use-cases/tiktok-to-twis.png" width={800} height={597} layout="responsive" />
						</div>

						<p>TikTok attracted a huge amount of users in the past couple of years and is heading to become (or already became) the number one social network for some age groups.</p>

						<p>You can grow your audience on the platform with their built-in tools, but growing your database outside of it is a bit harder. That's mainly because TikTok, like other social networks, doesn't want their users to leave the platform, and there's not much you can do againts that. </p>

						<p>Still, you can enjoy the benefits of the huge reach that TikTok provides and also grow your database and your brand. How? Well, by driving TikTok users to a mobile optimized experience that they'll enjoy to use just as much as they enjoy watching short videos inside the platform. And this is where twis can help you.</p>

						<p>
							With twis, you can easily create a truly mobile experience that is engaging and fun to use. It follows the{" "}
							<Link href="/use-cases/campaigns-in-story-format-to-grow-your-database">
								<a className="link">story format</a>
							</Link>{" "}
							which is highly adapted by the users of almost all social platforms.
						</p>

						<p>The main goal of twis epxeriences is to engage your potential customers, grow brand awareness and your database.</p>

						<p>
							With the{" "}
							<Link href="/features">
								<a className="link">features provided by twis</a>
							</Link>
							, you can create a visually consistent campaign that not just entertaining but it can also be used to educate users about your brand, services or products.
						</p>

						<p>And all of this is possible without involving a developer to the process. By using the drag & drop campaign builder, anyone who can create a Powerpoint presentation is also capable to set up a twis experience.</p>

						<p>Once you created a twis experience, you can share it on other social platforms as well. You can also use it in email campaigns, or on your website, just by adding a link that points to the twis experience.</p>

						<UseCaseFooter />
					</div>
				</section>
			</div>
		</Layout>
	);
}
