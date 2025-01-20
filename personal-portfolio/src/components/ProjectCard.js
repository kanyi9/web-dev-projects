// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }

// import { Col } from "react-bootstrap";
// import {Link} from "./Projects"; 



// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} alt={title} />
//       </div>
//       <div className="proj-details">
//         <h4>{title}</h4>
//         <p>{description}</p>
//         <a href={Link} target="_blank" rel="noopener noreferrer">Visit Live</a>
//       </div>
//     </Col>
//   );
// };

// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export const ProjectCard = ({ title, description, imgUrl, liveLink }) => {
//   return (
//     <Col md={4} sm={6} xs={12} className="mb-5">
//       <Card className="project-card">
//         <Card.Img variant="top" src={imgUrl} />
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Link to={liveLink} target="_blank">
//             <Button variant="primary">Visit Project</Button>
//           </Link>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };



import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={Link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Live</a>
        </div>
      </div>
    </Col>
  );
};