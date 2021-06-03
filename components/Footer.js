export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__contact">
					<h4>Contact and Support</h4>
					<p>
						If you have any questions feel free to get in touch via email at <a href="mailto:support@twis.io">support@twis.io</a>.
					</p>
				</div>

				<nav className="footer__nav">
					<ul>
						<li>
							<a href="/features">Features</a>
						</li>
						<li>
							<a href="/examples">Examples</a>
						</li>
						<li>
							<a href="/use-cases">Use cases</a>
						</li>
						<li>
							<a href="/pricing">Pricing</a>
						</li>
					</ul>

					<ul>
						<li>
							<a href="/terms-and-conditions">Terms and Conditions</a>
						</li>
						<li>
							<a href="/privacy-policy">Privacy Policy</a>
						</li>
						<li>
							<a href="/sub-processors">Sub-Processors</a>
						</li>
						<li>
							<a href="/frequently-asked-questions">Frequently Asked Questions</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="container">
				<p className="footer__copyright">&copy; All Rights Reserved 2021</p>
			</div>
		</footer>
	);
}
