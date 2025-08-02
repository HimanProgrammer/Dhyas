import React from 'react';

const SkillProgress = () => {
    const skills = [
        { title: "Financial Investment", percentage: 75 },
        { title: "Business Analysis", percentage: 80 },
        { title: "Tax Management", percentage: 85 }
    ];

    return (
        <div className="wpo-skill-progress">
            {skills.map((skill, index) => (
                <div className="wpo-progress-single" key={index}>
                    <h5 className="progress-title">{skill.title}</h5>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${skill.percentage}%` }}
                            aria-valuenow={skill.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                    <span className="progress-number">{skill.percentage}%</span>
                </div>
            ))}
        </div>
    );
}

export default SkillProgress;
