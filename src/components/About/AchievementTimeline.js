import React from "react";

function AchievementTimeline() {
    const timelineData = [
        {
            year: "2025",
            items: [
                {
                    title: "My life is still updating...",
                    date: "Present",
                    thought: ""
                },
                {
                    title: "Graduated from Ha Tinh High School for the Gifted",
                    date: "2025",
                    thought: ""
                },
                {
                    title: "80% Scholarship for Computer Science major at VinUniversity",
                    date: "2025",
                    thought: "A well-deserved result T-T."
                },
                {
                    title: "Second Prize in Ha Tinh Province Student Excellence Contest (Informatics)",
                    date: "January 2025",
                    thought: "I choked again, but there's no chance to redo it..."
                }
            ]
        },
        {
            year: "2024",
            items: [
                {
                    title: "Founder and President of CHTCODER",
                    date: "August 2024",
                    thought: "Dream come true XD."
                },
                {
                    title: "Founder of CHTOJ website",
                    date: "July 2024",
                    thought: ""
                },
                {
                    title: "Promoted to Vice President of News Team Media Club Gen 8",
                    date: "April 2024",
                    thought: ""
                },
                {
                    title: "Second Prize in Ha Tinh Province Student Excellence Contest (Informatics)",
                    date: "March 2024",
                    thought: "WTF, I choked, it should have been First Prize T-T"
                }
            ]
        },
        {
            year: "2023",
            items: [
                {
                    title: "Promoted to Advisor of The PEA Organization Gen 3",
                    date: "August 2023",
                    thought: ""
                },
                {
                    title: "Invited to join Shine Club Gen 4 as Advisor",
                    date: "August 2023",
                    thought: ""
                },
                {
                    title: "Promoted to Head of Media Department, News Team Media Club Gen 7",
                    date: "April 2023",
                    thought: ""
                },
                {
                    title: "First Prize (Rank 1st) in Ha Tinh Province Student Excellence Contest (Informatics)",
                    date: "March 2023",
                    thought: "Not too surprising XD."
                }
            ]
        },
        {
            year: "2022",
            items: [
                {
                    title: "Joined The PEA Organization Gen 2 and News Team Media Club Gen 6",
                    date: "September 2022",
                    thought: ""
                },
                {
                    title: "Top 9 in Entrance Exam to Ha Tinh High School for the Gifted",
                    date: "August 2022",
                    thought: "Quite surprising, I only spent exactly 3 months learning Informatics from scratch XD"
                },
                {
                    title: "Graduated from Hung Dong Secondary School",
                    date: "June 2022",
                    thought: ""
                },
                {
                    title: "Second Prize in Ha Tinh Youth Informatics Contest (City level)",
                    date: "May 2022",
                    thought: ""
                },
                {
                    title: "Third Prize in Provincial Science and Technology Innovation Contest",
                    date: "March 2022",
                    thought: ""
                },
                {
                    title: "Third Prize in City Chemistry Student Excellence Contest",
                    date: "January 2022",
                    thought: ""
                }
            ]
        }
    ];

    return (
        <div className="timeline-section">
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                My <strong className="purple">Achievements</strong>
            </h1>
            <div className="timeline-container">
                {timelineData.map((yearGroup, index) => (
                    <div key={index} className="timeline-year-block">
                        <h2 className="timeline-year">{yearGroup.year}</h2>
                        <div className="timeline-items">
                            {yearGroup.items.map((item, i) => (
                                <div key={i} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">{item.title}</h3>
                                        <span className="timeline-date">{item.date}</span>
                                        {item.thought && <p className="timeline-thought">"{item.thought}"</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AchievementTimeline;
