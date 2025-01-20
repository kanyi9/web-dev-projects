
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