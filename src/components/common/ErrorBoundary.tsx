import React from 'react';

import { CAUGHT_AN_ERROR, SOMETHING_WENT_WRONG, TRY_AGAIN_LABEL } from "../../constants/errors";
import { ErrorMessage, StyledButton } from './ErrorBoudary.styles';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error: error, errorInfo: null };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error(CAUGHT_AN_ERROR, error, info);
        this.setState({ errorInfo: info });
    }

    render() {
        if (this.state.hasError) {
        return (
            <div>
                <h2>{SOMETHING_WENT_WRONG}</h2>
                <StyledButton onClick={() => {
                    window.location.reload()
                }}>{TRY_AGAIN_LABEL}</StyledButton>
                <ErrorMessage>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                </ErrorMessage>
            </div>
        );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;