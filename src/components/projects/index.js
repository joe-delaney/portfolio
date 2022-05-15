import "./index.scss";
import Loader from "react-loaders";
import SplashPageDemo from "../../assets/images/splash-page-demo.gif"

const Projects = () => {
    return (
        <>
      <div className="container projects-page">
        <div className="carousel">
            <div className="project-container">
                <div className="project">
                    <div className="left">
                        <div className="left-container">
                            <div>
                                <h2>Dispatch</h2>
                                <p>Dispatch is a full stack clone of the popular business messaging application, Slack. The application was built using <span className="technologies">React, Redux, Javascript, Ruby, Rails, and PostgreSQL.</span>
                                    Using dispatch, users are able to create channels and group messages to communicate and collaborate effectively. Through the use of <span className="technologies">Rails Action Cable</span>, a websockets framework, users can send and receive messages in real time without the need to refresh their message feeds.</p>
                            </div>
                            <div>
                                <a href="https://dispatch-client.herokuapp.com/#/" className="flat-button">
                                Live Site
                                </a>
                                <a href="https://github.com/joe-delaney/dispatch" className="flat-button">
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={SplashPageDemo}></img>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Loader type="line-scale"/>
    </>
    )
}

export default Projects;