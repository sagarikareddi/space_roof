import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pro1.png";
import projImg2 from "../assets/img/pro2.png";
import projImg3 from "../assets/img/pro3.png";
import projImg4 from "../assets/img/pro4.png";
import projImg5 from "../assets/img/pro5.png";
import projImg6 from "../assets/img/pro6.png";
import projImg7 from "../assets/img/pro7.png";
import projImg8 from "../assets/img/pro8.png";
import projImg9 from "../assets/img/pro9.png";
import projImg10 from "../assets/img/pro10.png";
import projImg11 from "../assets/img/pro11.png";
import projImg12 from "../assets/img/pro12.png";
import projImg13 from "../assets/img/pro13.png";
import projImg14 from "../assets/img/pro14.png";
import projImg15 from "../assets/img/pro15.png";
import projImg16 from "../assets/img/pro16.png";
import projImg17 from "../assets/img/pro17.png";
import projImg18 from "../assets/img/pro18.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Space Launch🚀",
      description: "MANGLAN11",
      imgUrl: projImg1,
    },
    {
      title: "Space Launch🚀",
      description: "APOLLO11",
      imgUrl: projImg2,
    },
    {
      title: "Space Launch🚀",
      description: "JOLKR09",
      imgUrl: projImg3,
    },
    {
      title: "Space Launch🚀",
      description: "ALOOK11",
      imgUrl: projImg4,
    },
    {
      title: "Space Launch🚀",
      description: "ROUQER09",
      imgUrl: projImg5,
    },
    {
      title: "Space Launch🚀",
      description: "SALVON",
      imgUrl: projImg6,
    },

  ];



    const projects2 = [
      {
        title: "CAPTURES🎥",
        description: "@saanvi roi",
        imgUrl: projImg7,
      },
      {
        title: "CAPTURES🎥",
        description: "@aadi",
        imgUrl: projImg8,
      },
      {
        title: "CAPTURES🎥",
        description: "@srinivas",
        imgUrl: projImg9,
      },
      {
        title: "CAPTURES🎥",
        description: "@saarika",
        imgUrl: projImg10,
      },
      {
        title: "CAPTURES🎥",
        description: "@yash",
        imgUrl: projImg11,
      },
      {
        title: "CAPTURES🎥",
        description: "@prashant",
        imgUrl: projImg12,
      },



  ];
  
  const projects3 = [
    {
      title: "Article ✅NASA -📅1908 ",
      description: "✍️ @parth",
      imgUrl: projImg13,
    },
    {
      title: "Article ✅CNSA -📅1985 ",
      description: "✍️ @ameshan",
      imgUrl: projImg14,
    },
    {
      title: "Article ✅ESAG -📅1996 ",
      description: "✍️ @ruther",
      imgUrl: projImg15,
    },
    {
      title: "Article ✅ISRO -📅2003 ",
      description: "✍️ @kontou",
      imgUrl: projImg16,
    },
    {
      title: "Article ✅CNSA -📅2016 ",
      description: "✍️ @amesha",
      imgUrl: projImg17,
    },
    {
      title: "Article ✅ISRO -📅2021",
      description: "✍️ @lothrish",
      imgUrl: projImg18,
    },



];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Common rationales for exploring space include advancing scientific research, national prestige, uniting different nations, ensuring the future survival of humanity, and developing military and strategic advantages against other countries.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">LAUNCHES🚀</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">CAPTURES 🎥</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">ARTICLES📰</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
