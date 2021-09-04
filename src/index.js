import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Streamers from './Streamers';
import BLM from './components/BLM';

// CSS:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

// Components:
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const firebase = fetch("https://djinnjadksnkjadsjknsadnjkdsa-default-rtdb.firebaseio.com/.json").then(d => d.json());

const Themes = {
  "default": {
    name: "The Purrramid",
  },
  "pride": {
    name: "Pride",
    logo: true,
  },
  "halloween": {
    name: "Halloween",
    logo: true,
  }
}

let customLogo;
window.onload = async () => {
  if (localStorage.getItem("theme") in Themes) {
    let name = localStorage.getItem("theme");
    let theme = Themes[name];

    import(`./themes/${name}/style.css`);
    if (theme.script) {
      import(`./themes/${name}/script.js`);
    }
    if (theme.logo) {
      customLogo = (await import(`./themes/${name}/logo.png`)).default;
    }
  } else {
    await firebase.then(async ({ theme: current_theme }) => {
      import(`./themes/${current_theme}/style.css`);
      if ('script' in Themes[current_theme]) {
        import(`./themes/${current_theme}/script.js`);
      }
      if (Themes[current_theme].logo) {
        customLogo = (await import(`./themes/${current_theme}/logo.png`)).default;
      }
    }).catch(err => {
      console.log("failed to fetch seasonal theme");
    })
  }

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <BLM />
        <Switch>
          <Route path="/streamers" exact={true}>
            <Navbar />
          </Route>
          <Route path="/">
            <Navbar mainSite={true} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/streamers" exact={true}>
            <Streamers firebase={firebase} />
          </Route>
          <Route path="/">
            <App customLogo={customLogo} firebase={firebase} />
          </Route>
        </Switch>
        <Footer themes={Themes} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
