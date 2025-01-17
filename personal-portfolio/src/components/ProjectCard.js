import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

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

