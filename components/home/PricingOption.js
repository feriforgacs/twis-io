import Image from "next/image";

export default function PricingOption({ term, icon, name, price, participantLimit, overagesCost }) {
	return (
		<div className="pricing-option">
			<div className="pricing-option__body">
				<h4>
					<Image src={icon} width={20} height={20} /> {name}
				</h4>
				<div className="pricing-option__price">
					<strong className="price">{price}</strong>
					<span className="term"> / month</span>
				</div>

				<p className="pricing-option__vat-info">Billed {term}, VAT not included</p>

				<ul className="pricing-option__features">
					<li>All features included</li>
					<li>Unlimited campaigns</li>
					<li>
						<strong>{participantLimit} participants / month</strong>
						<br />
						<small>{overagesCost} per additional participant</small>
					</li>
				</ul>
			</div>
		</div>
	);
}
