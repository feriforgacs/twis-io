import Layout from "../../components/Layout";

export default function UseCases() {
	return (
		<Layout className="subpage" title={`Use cases - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<div className="content">
					<div className="content__body use-cases-page">
						<div className="lead">
							<h1 className="align--center">Use cases</h1>
							<h2 className="align--center font--mulish">Situations, where twis can help you grow</h2>
						</div>

						<div className="use-cases">
							<div className="use-case-item">
								<div className="use-case-item__description">
									<h4>From TikTok videos to twis campaigns</h4>
									<p>While grabbing the attention of your potential customers on TikTok is relatively easy, growing a database that is truly yours is a bit harder.</p>
									<p>This is where twis can help you without completely breaking the TikTok experience.</p>
									<p>
										<a href="" className="link">
											Learn more...
										</a>
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
										<a href="" className="link">
											Learn more...
										</a>
									</p>
									<p>###TODO sometimes a story is too short to convince someone about something » use a twis campaign to highlight the benefints of your product » do it by asking educative questions » give them a reward, eg a discount code they can use on their first order</p>
								</div>

								<div className="use-case-item__illustration">illustration</div>
							</div>
							{/* end .use-case-item */}

							<div className="use-case-item">
								<div className="use-case-item__description">
									<h4>Make sure viewers pay attention to your YouTube videos</h4>
									<p>###TODO set up a quick twis quiz with a few questions about your latest youtube video » draw random winners who had at least 3 correct answers</p>
								</div>

								<div className="use-case-item__illustration">illustration</div>
							</div>
							{/* end .use-case-item */}

							<div className="use-case-item use-case-item--reverse">
								<div className="use-case-item__description">
									<h4>Teach something new and give an instant reward</h4>
									<p>###TODO Coinbase like sample</p>
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
