import React from 'react';
import './Section.css';
import Card from '../Card/Card';

const Section = ({
    title,
    description,
    cards
}) => {
    return (
        <section>
            <div className="section">
                <h1 className="section-title">{title}</h1>
                <p className="section-description">{description}</p>
                <div className="cards-container">
                    {plans.map((plan, index) => (
                    <PlanCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        features={plan.features}
                        unavailableFeatures={plan.unavailableFeatures}
                        onButtonClick={plan.onClickFunc}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section;