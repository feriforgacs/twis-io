import Image from "next/image";

export default function CustomerFlow() {
	return (
		<div className="full-width full-width--customer-flow">
			<h3>Build awareness in a fun and engaging way</h3>
			<div className="container container--customer-flow">
				<div className="customer-flow__col">
					<h4>Engage</h4>
					<div className="customer-flow__illustration customer-flow__illustration--engage">
						<div className="screen">
							<div className="emoji">
								<Image src="/images/home/emoji--heart-eyes.png" width={30} height={30} />
							</div>

							<div className="emoji">
								<Image src="/images/home/emoji--joy.png" width={30} height={30} />
							</div>

							<div className="emoji">
								<Image src="/images/home/emoji--sparkling-heart.png" width={30} height={30} />
							</div>

							<div className="emoji">
								<Image src="/images/home/emoji--clapping-hands.png" width={30} height={30} />
							</div>

							<div className="emoji">
								<Image src="/images/home/emoji--partying-face.png" width={30} height={30} />
							</div>

							<div className="emoji">
								<Image src="/images/home/emoji--party-popper.png" width={30} height={30} />
							</div>
						</div>
					</div>
					<p>todo</p>
				</div>

				<div className="customer-flow__col">
					<h4>Educate</h4>
					<div className="customer-flow__illustration customer-flow__illustration--educate">
						<div className="screen">
							<div className="answer-option"></div>
							<div className="answer-option">
								<Image src="/images/home/icon--check.svg" width={20} height={30} />
							</div>
							<div className="answer-option"></div>
						</div>
					</div>
					<p>todo</p>
				</div>

				<div className="customer-flow__col">
					<h4>Grow database</h4>
					<div className="customer-flow__illustration customer-flow__illustration--grow">
						<div className="screen">
							<div className="input-field grow-screen-item">your name</div>
							<div className="input-field grow-screen-item">your@mail.com</div>
							<div className="submit-button grow-screen-item">submit</div>
						</div>
					</div>
					<p>todo</p>
				</div>
			</div>
		</div>
	);
}
