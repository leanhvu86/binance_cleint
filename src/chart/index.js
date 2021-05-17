
import React from 'react';
import ChartsComponent from './charts';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	componentDidMount() {
		const msg = {
			method: 'SUBSCRIBE',
			params: ['!miniTicker@arr'],
			id: 1,
		};
		// this is an "echo" websocket service
		 const connection = new WebSocket('wss://fstream.binance.com/stream');
		connection.onopen = ev => {
			console.log(ev)
			connection.send( JSON.stringify(msg) )
		};
		// listen to onmessage event
		connection.onmessage = evt => {
			// add the new message to state
			// console.info('onmessagedata',evt)
			console.info('onmessagedata',JSON.parse(evt.data))
			// this.setState({
			//     messages : this.state.messages.concat([ evt.data ])
			// })
		};

		getData().then(data => {
			console.log(data)
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		console.log(this.state.data)
		return (
			// <ChartsComponent data={this.state.data} />
			<TypeChooser>
				{type => <ChartsComponent type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default ChartComponent;
