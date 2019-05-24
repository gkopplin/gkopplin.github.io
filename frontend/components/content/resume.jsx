import React from 'react';

export default props => {
    return (
        <object data="./assets/Resume.pdf" type="application/pdf" className="pdf">
            <param name="view" value="Fit" />
        </object>
    );
};