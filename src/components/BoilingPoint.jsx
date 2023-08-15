import React from "react";
import Temperature from "./Temperature";

export default class Form extends React.Component {
    state = {unit:'pharenheit', pharenheit: '32', celcius: '0', canBoil: 'No'}

    handleInput = (e, unit) => {
        console.log(e.target);
        let temperature = e.target.value;
        let boilingPoint = 0;
        
        if (unit === 'pharenheit') {
            boilingPoint = 100;
            this.setState({pharenheit: temperature, celcius: (temperature - 32) * 5/9});
        } else {
            boilingPoint = 212;
            this.setState({pharenheit: (temperature * 9/5) + 32, celcius: temperature});
        }

        if (temperature >= boilingPoint) {
            this.setState({canBoil: 'Yes'});
        } else {
            this.setState({canBoil: 'No'});
        }
    }

    render() {
        let {canBoil, pharenheit, celcius} = this.state;

        return (
            <div>
                <Temperature unit="pharenheit" temperature={pharenheit} myChange={this.handleInput} />
                <Temperature unit="celcius" temperature={celcius} myChange={this.handleInput} />
                <p>Can Boil: {canBoil}</p>
            </div>
        );
    }
}