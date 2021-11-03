import React from 'react';
import './AboutMe.css'

const AboutMeLanding = () => {
    return (
        <div className='about_page_container'>
            <div className='about_intro_container'>
                <h2>ABOUT ME</h2>
            </div>
            <div className='about_text_container'>
                <p>I am a <span className='highlight_about'>curious</span> person with a creative background who loves to tell  <span className='highlight_about'>stories</span>. 
                    I love the challenge of an unfinished problem, a road block in the process of storytelling.
                    Whether it is poetry or code, I love to <span className='highlight_about'> write, break it down, and refactor</span>. I fell in love with programming 
                    when it clicked for me that there is never only one solution or one answer to any problem, to any question. Each programmer 
                    tells their own story in <span className='highlight_about'>their own way </span>using the <span className='highlight_about'>same </span>shared languages. 
                    I am a present, engaged teammate and empathetic communicator who loves to tell stories <span className='highlight_about'>collaboratively</span>, to build towards a shared vision. 
                </p>
            </div>
        </div>
    );
}

export default AboutMeLanding;