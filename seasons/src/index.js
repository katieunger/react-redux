import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        // This is the the only time we do direct assignment
        // to this.state!
        this.state = {
            lat: null,
            long: null,
        };
    }

    // React says we have to define render
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => console.log(err) 
        );
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);