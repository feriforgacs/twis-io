import { useState } from "react";

export default function Pricing() {
	const [term, setTerm] = useState("yearly");
	return (
		<div id="pricing">
			<h3>Pricing</h3>
			<div id="pricing__terms" className={`term--${term}`}>
				<button onClick={() => setTerm("yearly")}>
					Billed yearly <span>-20%</span>
				</button>
				<button onClick={() => setTerm("monthly")}>Billed monthly</button>
			</div>
		</div>
	);
}
