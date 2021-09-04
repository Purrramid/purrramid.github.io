import React from "react";
import { Link as Jump } from 'react-scroll';

class ThemePicker extends React.Component {
	changeTheme(str) {
		if (str) {
			window.localStorage.setItem("theme", str);
		} else {
			window.localStorage.removeItem("theme");
		}
		window.location.reload();
	}

	render() {
		return (
			<>
				<h4>Themes:</h4>
				<div className="d-flex flex-wrap my-2 gap-2">
					<button className="btn btn-secondary" onClick={() => this.changeTheme(false)}><abbr title="e.g. 'Halloween' theme in the weeks leading up to Halloween">Default</abbr></button>

					{Object.keys(this.props.themes).map(theme =>
						<button key={`theme-${theme}`} className="btn btn-secondary" onClick={() => this.changeTheme(theme)}>{this.props.themes[theme].name}</button>
					)}
				</div>
			</>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<footer className="py-5 w-100 bg-dark text-white">
				<div className="container">
					<h2>Admins</h2>
					<div className="d-grid grid-3">
						<div>
							<h4><span className="user">@Panash</span></h4>
							<ul>
								<li><a href="https://p4nash.github.io">Website</a></li>
								<li><a href="https://www.youtube.com/channel/UCQKfmsTfUdJZW4EqfsWC2lQ">YouTube</a></li>
								<li><a href="https://twitch.tv/P4NASH">Twitch</a></li>
								<li><a href="https://twitter.com/PanashWasTaken">Twitter</a></li>
							</ul>
						</div>
						<div>
							<h4><span className="user">@vortami</span></h4>
							<ul>
								<li><a href="https://vortami.web.app">Website</a></li>
								<li><a href="https://www.youtube.com/channel/UCkyKacua1ThySkGtI-lF14Q">YouTube</a></li>
								<li><a href="https://twitch.tv/vortami">Twitch</a></li>
								<li><a href="https://twitter.com/vortamiBird">Twitter</a></li>
							</ul>
						</div>
						<div>
							<h4><span className="user">@j_Lloyd_</span></h4>
							<ul>
								<li><a href="http://josephlselby.net/">Website</a></li>
								<li><a href="https://twitch.tv/j_writer_">Twitch</a></li>
								<li><a href="https://twitter.com/JLSelby">Twitter</a></li>
							</ul>
						</div>
					</div>
					<ThemePicker themes={this.props.themes} />
					<div className="text-center">All images belong to their respective owners.</div>
					<div className="text-center"><a href="https://github.com/Purrramid/Purrramid.github.io" className="text-white text-decoration-none">&lt;&gt; with ♥ by <span className="user">@vortami</span></a></div>
					<div>
						<Jump className="btn float-end text-white" to="description" offset={-999}>Scroll To Top 🠕</Jump>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
