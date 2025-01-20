// import { Col, Row } from "react-bootstrap";


// export const Newsletter = () => {
//   return (
//       <Col lg={12}>
//         <div className="newsletter-bx wow slideInUp">
//           <Row>
//             <Col lg={12} md={6} xl={5}>
//               <h3 className="custom-heading">Thanks for Visiting My Portfolio!</h3>
//               <p className="custom-text">Feel free to explore my projects and get in touch if you'd like to collaborate.</p>
//             </Col>
//           </Row>
//         </div>
//       </Col>
//   )
// }

import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={6} md={6} xl={5}>
            <h5 className="custom-heading">Thanks for Visiting My Portfolio!</h5>
            <p className="custom-text">Feel free to explore my projects and get in touch if you'd like to collaborate.</p>
          </Col>
          <Col lg={6} md={6} xl={7}>
            <div className="experience-section">
              <h3>Experience</h3>
              <p className="custom-text">2024-Present</p>
              <h3 className="custom-heading">Full Stack Developer</h3>
              <p className="custom-text">Moringa School</p>
              <p className="custom-text">Led a team in developing and maintaining web applications using JavaScript, React.js, and Flask. Implemented RESTful APIs and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines.</p>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};