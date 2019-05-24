import React from 'react';

export default props => {
    return (
        <>

        <div className="title-page">
            <h2 className="title">Contact</h2>
            <h2>LinkedIn, Github, Phone, and Email</h2>
        </div>

        <section>
            <h1>Contact Information</h1>
                <ul className="contact">
				    <li>
                        <a href="https://www.linkedin.com/in/grant-kopplin/" className="contact-link">LinkedIn</a>
					</li>
					<li>
                        <a href="https://github.com/gkopplin" className="contact-link">Github</a>
					</li >
                    <li>
                        <h2>Phone: 918-606-2738</h2>
                    </li>
                    <li>
                        <h2>Email: <a href="mailto:grant.kopplin@gmail.com">grant.kopplin@gmail.com</a> </h2>
                    </li>
				</ul>
		</section >
        </>
    );
};