import Image from "next/image";

export default function CalloutSlider() {
	return (
		<div className="callout__slider">
			<div className="slider">
				<div className="slider__slides">
					<div className="slide slide--tiktok">
						<div className="slide__logo">
							<Image src="/tiktok-logo.jpg" width={150} height={150} />
						</div>

						<div className="slide__illustrations">
							<Image src="/tiktok-sample.png" layout="fill" />
						</div>
					</div>
				</div>
				<div className="slider__controls"></div>
			</div>
		</div>
	);
}
