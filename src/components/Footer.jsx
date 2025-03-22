import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/git.svg';
import navIcon3 from '../assets/img/mail.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                    <Col size={12} sm={6}>
                        <h2 className="text-light fw-bold">Himanshu Dubey</h2>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/himanshu-dubey-06683b2a7/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/Himanshu1883"><img src={navIcon2} alt="Icon" /></a>
                            <a href="mailto:himanshudubeuhd@gmail.com"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}