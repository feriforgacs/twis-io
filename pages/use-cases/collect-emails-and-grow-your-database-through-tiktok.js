import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import UseCaseSidebar from "../../components/sidebars/use-case-sidebar";

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
					</div>
				</section>
			</div>
		</Layout>
	);
}
