import { useState } from "react";

export default function FaqItem({ title, description }) {
	const [visible, setVisible] = useState(false);

	return (
		<div className="faq-item">
			<div className={`faq-item__header ${visible ? "active" : ""}`} onClick={() => setVisible(!visible)}>
				<h4>{title}</h4>

				{visible ? (
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
				)}
			</div>
			<div className={`faq-item__body ${!visible ? "hidden" : ""}`} dangerouslySetInnerHTML={{ __html: description }} />
		</div>
	);
}
