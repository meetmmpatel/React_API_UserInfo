import React, { Component } from "react";
import Contacts from "./Contacts";
import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(data => {
				this.setState({ contacts: data });
			})
			.catch(console.log);
	}

	render() {
		return (
			<div className="App">
				<Contacts contacts={this.state.contacts}></Contacts>;
			</div>
		);
	}
}
