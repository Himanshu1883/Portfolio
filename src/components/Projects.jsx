import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather App",
      description: "Fetches the realtime weather of any place",
      imgUrl: projImg1,
      url: "https://weather-app-teal-ten-34.vercel.app/"
    },
    {
      title: "Instagram Clone",
      description: "Instagram clone with Api integrated and can perform CRUD operations",
      imgUrl: projImg3,
      url: "https://instagram-clone-example.com" // Added URL
    },
    {
      title: "E-commerce",
      description: "It is an e-commerce website for buying products online",
      imgUrl: projImg4,
      url: "https://e-shop-nine-tau.vercel.app/" // Added URL
    }
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
                  <p>The Projects I have made so far and many more to come. These helped me to polish my skills in both front-end and back-end</p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
