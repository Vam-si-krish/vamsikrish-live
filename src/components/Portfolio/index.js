// import React, { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
// import AnimatedLetters from '../AnimatedLetters';
// import './index.scss';

// const Portfolio = () => {
//   const [letterClass, setLetterClass] = useState('text-animate');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLetterClass('text-animate-hover');
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className="container portfolio-page">
//         <div className="text-zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={'My Experience'.split('')}
//               idx={15}
//             />
//           </h1>
//           <div className="experience-container">
//             {/* --- Experience Item 1 --- */}
//             <div className="experience-item">
//               <h3 className="job-title">Senior Software Engineer</h3>
//               <h4 className="company-details">
//                 Tech Solutions Inc. | Jan 2022 - Present
//               </h4>
//               <ul>
//                 <li>
//                   Led the development of scalable web applications using React,
//                   Node.js, and GraphQL.
//                 </li>
//                 <li>
//                   Mentored a team of 4 junior developers and enforced
//                   best practices in software engineering.
//                 </li>
//                  <li>
//                   Collaborated with product managers and designers to translate
//                   requirements into technical solutions.
//                 </li>
//               </ul>
//             </div>

//             {/* --- Experience Item 2 --- */}
//             <div className="experience-item">
//               <h3 className="job-title">Mid-Level Frontend Developer</h3>
//               <h4 className="company-details">
//                 Innovate Web Co. | Jun 2019 - Dec 2021
//               </h4>
//               <ul>
//                 <li>
//                   Developed features for high-traffic websites using Angular and Vue.js.
//                 </li>
//                 <li>
//                   Improved website performance by optimizing assets, reducing load times by 30%.
//                 </li>
//                  <li>
//                   Worked with the QA team to identify and resolve bugs.
//                 </li>
//               </ul>
//             </div>

//             {/* --- Experience Item 3 --- */}
//             <div className="experience-item">
//               <h3 className="job-title">Junior Developer</h3>
//               <h4 className="company-details">
//                 Digital Starters LLC | May 2018 - May 2019
//               </h4>
//               <ul>
//                 <li>
//                   Assisted in the development of client websites using HTML, CSS, and jQuery.
//                 </li>
//                 <li>
//                   Gained experience with Git and agile development methodologies.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   );
// };

// export default Portfolio;
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'My Experience'.split('')}
              idx={15}
            />
          </h1>
          <div className="experience-container">
            {/* --- Experience Item 1 --- */}
            <div className="experience-item">
              <h3 className="job-title">Sr Full Stack React Developer</h3>
              <h4 className="company-details">
                Client: Delta Airlines | Dec 2023 - Present | Atlanta, GA
              </h4>
              <ul>
                <li>
                  Engaged in the complete Agile/SDLC lifecycle, including requirement analysis, development, and testing.
                </li>
                <li>
                  Developed single-page applications (SPAs) using React with Hooks and Redux for state management, and React Router for routing.
                </li>
                <li>
                  Implemented a microservices architecture using Spring Boot, creating smaller, independent, and RESTful API-based services.
                </li>
                 <li>
                  Utilized Docker and Kubernetes for containerization and orchestration to build, test, and deploy in a CI/CD environment with Jenkins.
                </li>
                <li>
                  Worked on AWS services, including EC2 servers and S3 storage, to deploy functional prototypes.
                </li>
                <li>
                  Wrote end-to-end tests with Cypress and performed unit testing with JUnit and Mockito. Tracked bugs and issues using JIRA.
                </li>
              </ul>
            </div>

            {/* --- Experience Item 2 --- */}
            <div className="experience-item">
              <h3 className="job-title">Sr Full Stack React Developer</h3>
              <h4 className="company-details">
                Client: TIAA | Apr 2023 - Nov 2023 | Charlotte, NC
              </h4>
              <ul>
                <li>
                  Designed and developed user interactive (UI) web pages using HTML, CSS, JavaScript, and React.js.
                </li>
                <li>
                  Built SPAs using React.js components, JSX, events, and Flux architecture for state management.
                </li>
                 <li>
                  Used React Router for client-side routing and implemented Drag and Drop functionality using React-Draggable.
                </li>
                 <li>
                  Wrote services to store and retrieve user data from MongoDB.
                </li>
                <li>
                  Ensured the application was responsive using Bootstrap and media queries, checking for cross-browser compatibility.
                </li>
                <li>
                  Participated in daily SCRUM meetings and used Git for version control.
                </li>
              </ul>
            </div>

            {/* --- Experience Item 3 --- */}
            <div className="experience-item">
              <h3 className="job-title">Sr React Developer</h3>
              <h4 className="company-details">
                Client: AT&T | Feb 2021 - Mar 2023 | Dallas, TX
              </h4>
              <ul>
                <li>
                  Designed, developed, and tested HTML5, CSS3, Bootstrap, JavaScript, and React.js applications.
                </li>
                <li>
                  Developed a single isomorphic responsive website using React.js that could be served to desktop, tablets, and mobile users.
                </li>
                <li>
                  Managed application state using Redux, including middleware and reducers to modify the store state tree.
                </li>
                 <li>
                  Used Spring Boot to build cloud microservices and consumed RESTful web services for data transmission.
                </li>
                <li>
                  Integrated with AWS services like Lambda, S3, and EC2 to fetch data for the UI.
                </li>
                 <li>
                  Used JIRA for bug tracking and Git for version control. Wrote unit tests using Jasmine.
                </li>
              </ul>
            </div>

             {/* --- Experience Item 4 --- */}
            <div className="experience-item">
              <h3 className="job-title">React JS Developer/ React Native</h3>
              <h4 className="company-details">
                Client: Johnson & Johnson | Apr 2018 - Jan 2021 | DesMoines, IA
              </h4>
              <ul>
                <li>
                  Designed and developed web pages using HTML5, CSS3, JavaScript, Material UI, React.js, and Redux.
                </li>
                <li>
                  Worked extensively with React.js Virtual DOM and developed reusable components.
                </li>
                <li>
                  Integrated, configured, and managed AWS services including Oracle RDS, Lambda, SQS, and CloudWatch.
                </li>
                 <li>
                  Developed the server-side application using Spring Boot and Hibernate.
                </li>
                <li>
                  Built the client-side application integrating with REST APIs.
                </li>
              </ul>
            </div>
            
            {/* --- Experience Item 5 --- */}
            <div className="experience-item">
              <h3 className="job-title">React Developer</h3>
              <h4 className="company-details">
                Client: Oracle | Jan 2016 - Nov 2017 | Bangalore, India
              </h4>
              <ul>
                <li>
                  Developed a new mobile application for both Android and iOS using React Native.
                </li>
                <li>
                  Built reusable components and front-end libraries for future use.
                </li>
                <li>
                  Designed and developed mobile components such as tab bars, map views, image pickers, and push notifications.
                </li>
                 <li>
                  Worked in an Agile Development Team to deliver regular updates.
                </li>
                <li>
                  Consumed RESTful APIs using Axios to send and receive JSON formatted data.
                </li>
                <li>
                  Used Git for version control and JIRA for bug tracking.
                </li>
              </ul>
            </div>
            
            {/* --- Experience Item 6 --- */}
            <div className="experience-item">
              <h3 className="job-title">Developer</h3>
              <h4 className="company-details">
                Client: Xicom Technologies | Sep 2014 - Dec 2016 | India
              </h4>
              <ul>
                <li>
                  Designed, developed, and tested web applications using HTML5, CSS3, Bootstrap, React.js, and Redux.
                </li>
                <li>
                  Developed a single isomorphic responsive website that could be served to desktop, tablets, and mobile users using React.js.
                </li>
                <li>
                  Created a mobile application for both iOS & Android using the React Native framework.
                </li>
                 <li>
                  Maintained application state in stores and dispatched actions using Redux.
                </li>
                <li>
                  Worked with Spring Boot and consumed RESTful web services.
                </li>
                <li>
                  Used Git for version control and HP Quality Center for bug tracking.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;