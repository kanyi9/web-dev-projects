import { Col, Row } from "react-bootstrap";


export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3 className="custom-heading">Thanks for Visiting My Portfolio!</h3>
              <p className="custom-text">Feel free to explore my projects and get in touch if you'd like to collaborate.</p>
            </Col>
          </Row>
        </div>
      </Col>
  )
}