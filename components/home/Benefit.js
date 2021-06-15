import Image from "next/image";

export default function Benefit({ icon = "", title = "Add a title", description = "Add a description" }) {
	return (
		<div className="benefit">
			<span className="benefit__icon">{icon ? <Image src={`/images/home/${icon}`} width={40} height={40} /> : "Missing icon"}</span>
			<div className="benefit__description">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
