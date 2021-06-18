import Image from "next/image";

export default function Callout() {
	return (
		<>
			<div id="callout-blocks">
				<div className="callout callout--tiktok">
					<div className="callout__text">
						<h3 className="title">
							The experience that's in line
							<br className="hidden-on-mobile" /> with the mobile spirit
						</h3>
						<p className="description">TODO</p>
					</div>
					<div className="callout__illustration">
						<div className="illustration__col">
							<div className="illustration__logo">
								<Image src="/images/home/tiktok-icon.png" layout="responsive" width={80} height={80} placeholder="blur" />
							</div>
							<p className="copy--small">TikTok in-feed ad</p>
							<div className="illustration__image illustration__image--tiktok-feed-sample">
								<Image src="/images/home/tiktok-sample.png" layout="responsive" width={414} height={896} placeholder="blur" />
							</div>
						</div>

						<div className="illustration__col">
							<div className="illustration__logo">
								<Image src="/images/home/twis-icon.png" layout="responsive" width={80} height={80} placeholder="blur" />
							</div>
							<p className="copy--small">twis experience</p>
							<div className="illustration__image illustration__image--tiktok-twis-sample">
								<Image src="/images/home/tiktok-twis-sample.png" layout="responsive" width={414} height={896} placeholder="blur" />
							</div>
						</div>

						<div className="callout__animated-arrow">
							<Image src="/images/home/pointing-arrow.gif" width={120} height={150} />
						</div>
					</div>
				</div>

				<div className="callout callout--instagram">
					<div className="callout__text">
						<h3 className="title">From a story to a "story"</h3>
						<p className="description">TODO</p>
					</div>
					<div className="callout__illustration">
						<div className="illustration__col">
							<div className="illustration__logo">
								<Image src="/images/home/instagram-icon.png" layout="responsive" width={80} height={80} placeholder="blur" />
							</div>
							<p className="copy--small">Instagram stories ad</p>
							<div className="illustration__image illustration__image--instagram-story-sample">
								<Image src="/images/home/instagram-story-sample.png" layout="responsive" width={414} height={896} placeholder="blur" />
							</div>
						</div>

						<div className="illustration__col">
							<div className="illustration__logo">
								<Image src="/images/home/twis-icon.png" layout="responsive" width={80} height={80} placeholder="blur" />
							</div>
							<p className="copy--small">twis experience</p>
							<div className="illustration__image illustration__image--instagram-twis-sample">
								<Image src="/images/home/instagram-twis-sample.png" layout="responsive" width={414} height={896} placeholder="blur" />
							</div>
						</div>

						<div className="callout__animated-arrow">
							<Image src="/images/home/pointing-arrow.gif" width={120} height={150} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
