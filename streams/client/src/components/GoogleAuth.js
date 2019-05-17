import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '772763407841-sd01lcrp3eqgcsbo2ljcbq0kf8fti77p.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;