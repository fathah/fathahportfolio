const Skills = () => {
    const specialized = [
        "Flutter App Development",
        "Full-Stack Web Development",
        "Machine Learning Programs"
    ];
    const other = [
        "Programming in PHP, Dart, Python, Javascript, Typescript",
        "Front-end: React.js/Next.js, jQuery",
        "Backend with PHP Core/Laravel, Python Django/Flask, NodeJS(Express)",
        "Database Management: MySQL, Postgres, Firebase, Redis, SQLite, Mongo",
        "Container management: Docker",
        "Version Control: GIT, GitHub, Gitlab",
        "CI/CD: GitHub Actions",
        "Desktop apps: PyQt, Flutter, Electron"
    ];
    return (
        <div
        style={{
            maxWidth:"100%",
            overflowX:"hidden",
        }}
        >
           <section
           data-aos="fade-down"
           data-aos-delay="1000"
           data-aos-duration="900"
           className="mt-5 bg-black p-6 rounded-lg bg-opacity-30  max-w-full"
           >
           <h2 className="font-bold text-yellow-300">SPECIALIZED IN</h2>
           <ul 
           className="list-inside"
           style={{
               listStyleType:'square'
           }}>
               
               {
                   specialized.map(skill=>(
                       <li
                       key={skill}
                       >{skill}</li>
                   ))
               }
           </ul>
           </section>
           <section
           data-aos="fade-down"
           data-aos-delay="2000"
           data-aos-duration="900"
           className="mt-4 bg-black p-6 rounded-lg bg-opacity-30  max-w-full"
           >
           <h2 className="font-bold text-yellow-300">OTHER SKILLS</h2>
           <ul 
           className="list-outside ml-4"
           style={{
               listStyleType:'square'
           }}>
               
               {
                   other.map(skill=>(
                       <li
                       key={skill}
                       >{skill}</li>
                   ))
               }
           </ul>
           </section>
        </div>
    );
}
 
export default Skills;