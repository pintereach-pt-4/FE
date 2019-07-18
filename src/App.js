import React from 'react';
import './App.css';
import Register from './components/Forms/RegisterForm';
import Login from './components/Forms/LoginForm';
import Boards from './components/Boards/BoardList';
import NewBoard from './components/Forms/NewBoardForm';
import MyBoards from './components/Boards/MyBoards';
import EditBoard from './components/Forms/EditBoardForm';
import BoardDetails from './components/Boards/BoardDetails';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<div className="main-container">
			<Router>
				<img
					className="bg-bottom"
					src={require('./images/bottom.svg')}
					alt="bottom"
				/>
				<img className="bg-top" src={require('./images/top.svg')} alt="top" />
				<Route path="/" exact component={props => <Login {...props} />} />
				<Route
					path="/register"
					exact
					component={props => <Register {...props} />}
				/>
				<Route path="/boards" component={Boards} />
				<Route path="/board-details" component={BoardDetails} />
				<Route path="/new-board" component={props => <NewBoard {...props} />} />
				<Route path="/my-boards" component={props => <MyBoards {...props} />} />
				<Route
					path="/edit-board/:id"
					component={props => <EditBoard {...props} />}
				/>
			</Router>
		</div>
	);
}

export default App;
