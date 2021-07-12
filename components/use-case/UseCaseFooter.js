export default function UseCaseFooter() {
	return (
		<div className="use-case-footer">
			<p className="align--center">
				<strong>
					This is just one use case where twis can help you grow.
					<br />
					Why don't you give it a try? It's free to get started.
				</strong>
			</p>

			<a href={process.env.NEXT_PUBLIC_LOGIN_URL} className="btn btn--primary btn--large">
				Try for free
			</a>

			<p className="align--center">
				<small>No credit card required</small>
			</p>
		</div>
	);
}
