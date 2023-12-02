import { Component } from 'react';

export default class ErrorBoundary extends Component {

    static GetDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
    }

    render() {
        return this.props.children;
    }
}