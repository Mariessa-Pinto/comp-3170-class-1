import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <Profile
        image="https://randomuser.me/api/portraits/women/44.jpg"
        name="John Doe"
        tagline="I am enthusiastic about hiking."
      />
      <WorkExperience>
        <Company name="Microsoft" fromDate="Jan 2020" toDate="May 2021" />
        <Company name="Netflix" fromDate="June 2021" toDate="Dec 2021" />
        <Company name="Google" fromDate="Jan 2022" toDate="Present" />
      </WorkExperience>
    </div>
  );
}

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img className="img" src={props.image} alt="" />
      </div>
      <div className="profile">
        <p>Hi, I'm {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="company">{props.fromDate}</span>
        <span className="company">{props.toDate}</span>
      </h2>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
