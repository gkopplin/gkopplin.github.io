import React from 'react';

export default props => {
    return (
        <>
        <div className="title-page">
            <h2 className="title">Resume</h2>
            <h2>Skills, Projects, Experience, and Education</h2>
        </div>

        <object data="./assets/Resume.pdf" type="application/pdf" className="pdf">
            <param name="view" value="Fit" />
        </object>
        </>
    );
};