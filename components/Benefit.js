export default function Benefit({ icon = "🛑", title = "Add a title", description = "Add a description" }) {
	return (
		<div className="benefit">
			<span className="benefit__icon">{icon}</span>
			<div className="benefit__description">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
