import Link from "next/link";
import Image from "next/image";
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
									<Link href="/use-cases/collect-emails-and-grow-your-database-through-tiktok">
										<a className="title-link">
											<h4>From TikTok videos to twis campaigns</h4>
										</a>
									</Link>
									<p>While grabbing the attention of your potential customers on TikTok is relatively easy, growing a database that is truly yours is a bit harder.</p>
									<p>This is where twis can help you without completely breaking the TikTok experience.</p>
									<p>
										<Link href="/use-cases/collect-emails-and-grow-your-database-through-tiktok">
											<a className="link">Learn more...</a>
										</Link>
									</p>
								</div>

								<div className="use-case-item__illustration">
									<Link href="/use-cases/collect-emails-and-grow-your-database-through-tiktok">
										<a>
											<Image src="/images/use-cases/tiktok-to-twis.png" width={800} height={597} layout="responsive" />
										</a>
									</Link>
								</div>
							</div>
							{/* end .use-case-item */}

							<div className="use-case-item use-case-item--reverse">
								<div className="use-case-item__description">
									<Link href="/use-cases/collect-emails-and-grow-your-database-through-instagram">
										<a className="title-link">
											<h4>Grow your database with the combination of Instagram story ads and twis campaigns</h4>
										</a>
									</Link>
									<p>Showing your key message to potential customers on Instagram is something you have to do to build a great online presence. But what if besides growing your follower base, you'd also like to build a database of potential customers you can easily reach later?</p>
									<p>To accomplish that, you can add twis to your digital toolset.</p>
									<p>
										<Link href="/use-cases/collect-emails-and-grow-your-database-through-instagram">
											<a className="link">Learn more...</a>
										</Link>
									</p>
								</div>

								<div className="use-case-item__illustration">
									<Link href="/use-cases/collect-emails-and-grow-your-database-through-instagram">
										<a>
											<Image src="/images/use-cases/instagram-to-twis.png" width={800} height={597} layout="responsive" />
										</a>
									</Link>
								</div>
							</div>
							{/* end .use-case-item */}

							<div className="use-case-item">
								<div className="use-case-item__description">
									<Link href="/use-cases/campaigns-in-story-format-to-grow-your-database">
										<a className="title-link">
											<h4>Go with a format that was designed for mobile</h4>
										</a>
									</Link>
									<p>While the usage of social media and other online platforms heavily shifted to mobile, some brands are still planning to desktop in the first place.</p>
									<p>When it comes to online campaigns, going mobile-first plays a crucial part in your success.</p>
									<p>Campaigns built with twis follow the story format which was designed to work best on mobile devices.</p>
									<p>
										<Link href="/use-cases/campaigns-in-story-format-to-grow-your-database">
											<a className="link">Learn more...</a>
										</Link>
									</p>
								</div>

								<div className="use-case-item__illustration">
									<Link href="/use-cases/campaigns-in-story-format-to-grow-your-database">
										<a>
											<Image src="/images/use-cases/desktop-to-twis.png" width={800} height={597} layout="responsive" />
										</a>
									</Link>
								</div>
							</div>
							{/* end .use-case-item */}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
