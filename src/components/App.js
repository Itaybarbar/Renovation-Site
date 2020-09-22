import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import NavBar from './NavBar';
import Home from "./Home";
import HowItWorks from './HowItWorks';
import TipsAndInfo from './TipAndInfo';
import StartRenovation from './StartRenovation';

class App extends React.Component {

	render() {
		return(
			<HashRouter>
			<div>
				<div >
					<NavBar />
					<br />
				</div>

				<div style={{marginTop: '35px'}} className="content">
					<Route exact path="/" component={Home}/>
					<Route path="/HowItWorks" component={HowItWorks}/>
					<Route path="/TipsAndInfo" component={TipsAndInfo}/>
					<Route path="/StartRenovation" component={StartRenovation}/>
				</div>
			</div>
			</HashRouter>
		);
	}
};

export default App;