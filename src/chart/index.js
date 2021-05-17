
import React from 'react';
import ChartsComponent from './charts';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			console.log(data)
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			// <ChartsComponent data={this.state.data} />
			<TypeChooser>
				{type => <ChartsComponent type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default ChartComponent;
