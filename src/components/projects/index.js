import "./index.scss";
import Loader from "react-loaders";
import SplashPageDemo from "../../assets/images/dispatch.gif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Projects = () => {
    const [currentProject, setCurrent] = useState(0);

    const projects = [
        {
            img: SplashPageDemo,
            name: "Dispatch",
            description: <p>Dispatch is a full stack clone of the popular business messaging application, Slack. The application was built using <span className="technologies">React, Redux, Javascript, Ruby, Rails, and PostgreSQL. </span>
                                    Using dispatch, users are able to create channels and group messages to communicate and collaborate effectively. Through the use of <span className="technologies">Rails Action Cable</span>, a websockets framework, users can send and receive messages in real time without the need to refresh their message feeds.</p>,
            liveLink: "https://dispatch-client.herokuapp.com/#/",
            githubLink: "https://github.com/joe-delaney/dispatch"
        },
        {
            img: SplashPageDemo,
            name: "NBA Statistics Dashboard",
            description: <p>Dispatch is a full stack clone of the popular business messaging application, Slack. The application was built using <span className="technologies">React, Redux, Javascript, Ruby, Rails, and PostgreSQL. </span>
                                    Using dispatch, users are able to create channels and group messages to communicate and collaborate effectively. Through the use of <span className="technologies">Rails Action Cable</span>, a websockets framework, users can send and receive messages in real time without the need to refresh their message feeds.</p>,
            liveLink: "https://dispatch-client.herokuapp.com/#/",
            githubLink: "https://github.com/joe-delaney/dispatch"
        },
        {
            img: SplashPageDemo,
            name: "WeGo",
            description: <p>Dispatch is a full stack clone of the popular business messaging application, Slack. The application was built using <span className="technologies">React, Redux, Javascript, Ruby, Rails, and PostgreSQL. </span>
                                    Using dispatch, users are able to create channels and group messages to communicate and collaborate effectively. Through the use of <span className="technologies">Rails Action Cable</span>, a websockets framework, users can send and receive messages in real time without the need to refresh their message feeds.</p>,
            liveLink: "https://dispatch-client.herokuapp.com/#/",
            githubLink: "https://github.com/joe-delaney/dispatch"
        }
    ]

    return (
    <>
        <div className="container projects-page"> 
                <div className="carousel" style={{ transform: `translateX(-${currentProject * 100}vw)` }}>
                    {projects.map((project) => (
                        <div className="project-container">
                        <div className="project">
                            <div className="left">
                                <div className="left-container">
                                    <div>
                                        <h2>{project.name}</h2>
                                        {project.description}
                                    </div>
                                    <div>
                                        <a href={project.liveLink} className="flat-button">
                                            Live Site
                                        </a>
                                        <a href={project.githubLink} className="flat-button">
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src={project.img}></img>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <FontAwesomeIcon className="arrow left" icon={faAngleLeft} color="#FFF" />
                <FontAwesomeIcon className="arrow right" icon={faAngleRight} color="#FFF" />
      </div>
      <Loader type="line-scale"/>
    </>
    )
}

export default Projects;