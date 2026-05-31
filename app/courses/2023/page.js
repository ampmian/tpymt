import CourseTemplate from "../../components/CourseTemplate";

export default function Page2023() {
    const sessions2023 = [
        {
            title: "Session 1",
            dates: "July 24 - August 4, 2023",
            courses: [
                {
                    name: "Linear Algebra with Applications",
                    lecturer: "Dr. Pan Li"
                },
                {
                    name: "Real-world Application of Number Theory: Cryptography",
                    lecturer: "Dr. Liu Chun Lung"
                }
            ]
        },
        {
            title: "Session 2",
            dates: "August 14 - August 25, 2023",
            courses: [
                {
                    name: "Calculus and Differential Equations",
                    lecturer: "Dr. Xiao Jingjing"
                },
                {
                    name: "Introduction to Abstract Algebra",
                    lecturer: "Dr. Ng Ming Ho"
                }
            ]
        }
    ];

    return <CourseTemplate year="2023" sessions={sessions2023} />;
}