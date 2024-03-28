import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Events extends Component {
  render() {
    return (
      <>
        <div className="events-container">
          <Header />
          <div className="home-container">
            <div className="wedding-image-layout">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711616806/1_2x_1_kmkaoz.png"
                alt="Logo"
                className="flower-bottom"
              />
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711616476/Rectangle_5_vc6pnj.png"
                alt="Logo"
                className="wedding-photo"
              />

              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711618029/Ellipse_1_rmvymx.png"
                alt="Logo"
                className="together-photo"
              />
            </div>
            <div className="names-container">
              <div className="together-text-container">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711614998/3_2x_1_qqhrv7.png"
                  alt="Logo"
                  className="image-logo"
                />
                <h1 className="welcome-note">
                  TOGETHER
                  <br /> WITH THEIR FAMILIES
                </h1>
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711619035/1_2x_2_daumof.png"
                  alt="Logo"
                  className="image-logo"
                />
              </div>
              <div className="couple-names-container">
                <h1 className="couple-name">Jeremy Renner</h1>
                <h1 className="couple-wife">Brie Larson</h1>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711619035/1_2x_2_daumof.png"
              alt="Logo"
              className="flower-right"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Events;
