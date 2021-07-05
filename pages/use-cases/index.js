import Layout from "../../components/Layout";

export default function UseCases() {
	return (
		<Layout className="subpage" title={`Use cases - ${process.env.NEXT_PUBLIC_SITE_NAME}`}>
			<div className="container">
				<div className="content">
					<div className="content__body use-cases-page">
						<div className="lead">
							<h1 className="align--center">Use cases</h1>
							<h2 className="align--center font--mulish">Situations, where twis can help you grow your brand</h2>
						</div>

						<div className="use-cases">
							<div className="use-case-item">
								<div className="use-case-item__description">
									<h4>From TikTok videos to twis campaigns</h4>
									<p>###TODO tiktok video » not ideal to grow db » drive visitors to twis campaign » ask them to play a short game » give them a small gift » collect their names and email addresses » select random winners</p>
								</div>

								<div className="use-case-item__illustration">illustration</div>
							</div>
							{/* end .use-case-item */}

							<div className="use-case-item use-case-item--reverse">
								<div className="use-case-item__description">
									<h4>Grow your database with the combination of Instagram story ads and twis campaigns</h4>
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
