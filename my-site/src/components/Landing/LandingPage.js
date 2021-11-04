import React from 'react';
import me from '../Images/me.jpg';
import './Landing.css'

const LandingPage = () => {
    return (
        <div className='landing_page_container'>
            <div className='intro_landing_container'>
                <div className='selfie_container'>
                    <p className='landing_name'>Hey, I'm Lauren.</p>
                    <p className='landing_name'>Nice to virtually meet you!</p>
                    <p className='landing_intro_text'>I'm a Full-Stack Developer and an <br />endlessly curious learner/creator.</p>
                </div>
                <div className='image_container'>
                    <img src={me} alt='Lauren' className='portrait_image' />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;