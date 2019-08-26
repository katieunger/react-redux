import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
    state = { resources: [] };

    // componentDidMount is not called a second time
    async componentDidMount() {
        const response  = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({ resources: response.data });
    }

    // Pass previous props to test if we want to make request - so we don't make endless requests
    // as component updates on setState()
    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const response  = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: response.data });
        }
    }


    render() {
        return <div>{this.state.resources.length}</div>;
    }
}

export default ResourceList;