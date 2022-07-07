import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Loading = styled.button`
    padding: 20px;
    background-color: lightblue;
    color: white;
`

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton({ children }) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Loading
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? 'Loading…' : children}
        </Loading>
    );
}

export default LoadingButton