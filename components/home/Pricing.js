import { useState } from "react";
import PricingOption from "./PricingOption";

export default function Pricing() {
	const [term, setTerm] = useState("yearly");

	const pricingOptions = [
		{
			basic: {
				name: "👍 Basic",
				priceMonthly: "$29",
				priceYearly: "$23",
				participantLimit: 100,
				overagesCost: "$0.25",
			},
			pro: {
				name: "⭐ Pro",
				priceMonthly: "$49",
				priceYearly: "$39",
				participantLimit: 1000,
				overagesCost: "$0.05",
			},
			premium: {
				name: "🚀 Premium",
				priceMonthly: "$69",
				priceYearly: "$55",
				participantLimit: 10000,
				overagesCost: "$0.008",
			},
		},
	];

	return (
		<div id="pricing">
			<h3>Pricing</h3>
			<div id="pricing__terms" className={`term--${term}`}>
				<button onClick={() => setTerm("yearly")}>
					Billed yearly <span>-20%</span>
				</button>
				<button onClick={() => setTerm("monthly")}>Billed monthly</button>
			</div>

			<div id="pricing__options">
				<PricingOption term={term} name="👍 Basic" price="$29" participantLimit="100" overagesCost="$0.25" />
			</div>
		</div>
	);
}
