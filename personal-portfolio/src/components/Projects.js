// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }


// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Gari Zetu",
//       description: "Gari-Zetu Auto Dealership is a full-stack web application designed to provide car enthusiasts with an easy and convenient
// shopping experience. With a user-friendly interface and seamless navigation, aspiring drivers and car owners can explore
// a wide range of cars, their specifications, an image of the car they would want to purchase.
// Technologies used –React in frontend – python and flask API backend
// ",
//       imgUrl: projImg1,
//       liveLink: "https://example.com/project1", // Replace with your live link
//     },
//     {
//       title: "FoodBridge",
//       description: "An online platform for buying and selling products, featuring user-friendly navigation and secure payment options.",
//       imgUrl: projImg2,
//       liveLink: "https://example.com/project2", // Replace with your live link
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="second">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="Background" />
//     </section>
//   )
// }

// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Gari Zetu",
//       description: `Gari-Zetu Auto Dealership is a full-stack web application designed to provide car enthusiasts with an easy and convenient shopping experience. 
//       With a user-friendly interface and seamless navigation, aspiring drivers and car owners can explore a wide range of cars, their specifications, 
//       and images of the cars they would want to purchase. 
//       Technologies used: React in frontend, Python and Flask API backend.`,
//       imgUrl: projImg1,
//       liveLink: "https://gari-zetu.vercel.app/", // Replace with your live link
//     },
//     {
//       title: "FoodBridge",
//       description: `Foodbridge is a fullstack web application that aims to bridge the gap by creating a streamlined
//                             user-friendly platform that connects donors, volunteers and those in need , thereby reducing 
//                             food insecurity and promoting healthier communities.
//       Technologies used: React, flask, SQL Alchemy, JWT, flask mail, Tailwind css                      `,
//       imgUrl: projImg2,
//       liveLink: "https://foodbridge-project.vercel.app/", // Replace with your live link
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                               />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="second">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="Background" />
//     </section>
//   )
// }


// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { Link } from "react-router-dom";

// export const Projects = () => {
//   const projects = [
//     {
//       title: "Gari Zetu",
//       description: `Gari-Zetu Auto Dealership is a full-stack web application designed to provide car enthusiasts with an easy and convenient shopping experience. 
//       With a user-friendly interface and seamless navigation, aspiring drivers and car owners can explore a wide range of cars, their specifications, 
//       and images of the cars they would want to purchase. 
//       Technologies used: React in frontend, Python and Flask API backend.`,
//       imgUrl: projImg1,
//       Link: "https://gari-zetu.vercel.app/", 
//     },
//     {
//       title: "FoodBridge",
//       description: `Foodbridge is a fullstack web application that aims to bridge the gap by creating a streamlined
//                             user-friendly platform that connects donors, volunteers and those in need, thereby reducing 
//                             food insecurity and promoting healthier communities.
//       Technologies used: React, Flask, SQLAlchemy, JWT, Flask Mail, Tailwind CSS.`,
//       imgUrl: projImg2,
//       Link: "https://foodbridge-project.vercel.app/", 
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Projects</h2>
//                   <p>Explore some of my featured projects, showcasing my skills in full-stack development and problem-solving.</p>
//                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                     <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
//                       {/* <Nav.Item>
//                         <Nav.Link eventKey="first">All Projects</Nav.Link>
//                       </Nav.Item> */}
//                     </Nav>
//                     <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                       <Tab.Pane eventKey="first">
//                         <Row className="justify-content-center">
//                           {projects.map((project, index) => (
//                             <ProjectCard key={index} {...project} />
//                           ))}
//                         </Row>
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       {/* <img className="background-image-right" src={colorSharp2} alt="Background" /> */}
//     </section>
//   );
// };


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Gari Zetu",
      description: `Gari-Zetu Auto Dealership is a full-stack web application designed to provide car enthusiasts with an easy and convenient shopping experience. 
      With a user-friendly interface and seamless navigation, aspiring drivers and car owners can explore a wide range of cars, their specifications, 
      and images of the cars they would want to purchase. 
      Technologies used: React in frontend, Python and Flask API backend.`,
      imgUrl: projImg1,
      Link: "https://gari-zetu.vercel.app/", 
    },
    {
      title: "FoodBridge",
      description: `Foodbridge is a fullstack web application that aims to bridge the gap by creating a streamlined
      user-friendly platform that connects donors, volunteers and those in need, thereby reducing 
      food insecurity and promoting healthier communities.
      Technologies used: React, Flask, SQLAlchemy, JWT, Flask Mail, Tailwind CSS.`,
      imgUrl: projImg2,
      Link: "https://foodbridge-project.vercel.app/", 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore some of my featured projects, showcasing my skills in full-stack development and problem-solving.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      {/* <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="Background" /> */}
    </section>
  );
};