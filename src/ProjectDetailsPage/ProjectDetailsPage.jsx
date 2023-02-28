import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetailsPage = () => {
    const state = useLocation();
    const {details} = state.state;
    console.log(details)
    return (
        <div>
            ProjectDetailsPage
        </div>
    );
};

export default ProjectDetailsPage;