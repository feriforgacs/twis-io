import { useState } from "react";
import PricingOption from "./PricingOption";

export default function Pricing({ showTitle = true, lightVersion = false }) {
	const [term, setTerm] = useState("yearly");

	const pricingOptions = [
		{
			icon: "/images/home/emoji--thumbs-up.png",
			name: "Basic",
			priceMonthly: "$29",
			priceYearly: "$23",
			participantLimit: 100,
			overagesCost: "$0.25",
		},
		{
			icon: "/images/home/emoji--star.png",
			name: "Pro",
			priceMonthly: "$49",
			priceYearly: "$39",
			participantLimit: 1000,
			overagesCost: "$0.05",
		},
		{
			icon: "/images/home/emoji--rocket.png",
			name: "Premium",
			priceMonthly: "$69",
			priceYearly: "$55",
			participantLimit: 10000,
			overagesCost: "$0.008",
		},
	];

	return (
		<div className={`${lightVersion ? "pricing--light" : ""}`}>
			<div id="pricing">
				{showTitle ? <h3>Pricing</h3> : ""}

				<div id="pricing__terms" className={`term--${term}`}>
					<button onClick={() => setTerm("yearly")}>
						Billed yearly <span>-20%</span>
					</button>
					<button onClick={() => setTerm("monthly")}>Billed monthly</button>
				</div>

				<div id="pricing__options">
					{pricingOptions.map((option, index) => (
						<PricingOption key={index} term={term} icon={option.icon} name={option.name} price={term === "monthly" ? option.priceMonthly : option.priceYearly} participantLimit={option.participantLimit} overagesCost={option.overagesCost} />
					))}
				</div>

				<div id="pricing__cta">
					<a href={process.env.NEXT_PUBLIC_LOGIN_URL} className="btn btn--primary btn--large">
						Try for free
					</a>
					<p>
						<small>No credit card required</small>
					</p>
				</div>
			</div>
		</div>
	);
}
