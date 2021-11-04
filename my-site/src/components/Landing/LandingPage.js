import React from 'react';
import me from '../Images/me.jpg';
import './Landing.css'

const LandingPage = () => {
    return (
        <div className='landing_page_container'>
            <div className='selfie_container'>
                <h2>Hey, I'm Lauren.</h2>
                <h2>Nice to virtually meet you!</h2>
                <p className='landing_intro_text'>I'm a Full-Stack Developer and an endlessly curious learner/creator.</p>
            </div>
            <div><img src={me} alt='Lauren' className='portrait_image' /></div>
        </div>
    );
}

export default LandingPage;