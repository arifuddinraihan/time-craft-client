import React from 'react';
import useTitle from '../../../Hook/useTitle';

const DashboardPanel = () => {
    useTitle("Welcome to Dashboard")
    return (
        <div>
            <h2>Welcome to Dashboard</h2>
            <h2>This will be dashboard panel view for buyer, seller and Admin</h2>
        </div>
    );
};

export default DashboardPanel;