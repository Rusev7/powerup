import './RegisterSection.css';

import RegisterBtn from './RegisterBtn'

const RegisterSection = () => {
    return (
        <section className="reg-section">
                <div className="description-container">    
                    <p className="description-text">
                        Power<span className="description-logo">Up</span> is a personal fitness assistant, which will make your fitness journey more productive by tracking your progress. In order to use it, you have to register, so follow the button below. If you like it, please share my app with your friends!
                    </p>
                </div>

                <RegisterBtn />
        </section>
    )
};

export default RegisterSection;