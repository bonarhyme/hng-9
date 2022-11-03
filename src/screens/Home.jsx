import React from "react";
import { Link } from "react-router-dom";

import {
  Bonaventure,
  slack,
  github,
  shareButton,
  ZuriInternship,
  I4G,
  shareButton2,
} from "../data/images";

const Home = () => {
  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="share-button big-screen">
            <img src={shareButton} alt="share button" />
          </div>
          <div className="share-button small-screen">
            <img src={shareButton2} alt="share button" />
          </div>
          <div>
            <img
              src={Bonaventure}
              alt="Onuorah Bonaventure Chukwudi"
              id="profile__img"
              className="profile-image"
            />
          </div>
          <h1 id="twitter">Bonarhyme</h1>
          <p id="slack">Bonarhyme</p>
        </section>
        <section className="links">
          <a
            href="https://twitter.com/bonarhyme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://training.zuri.team/"
            id="btn__zuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zuri Team
          </a>
          <a
            href="https://books.zuri.team"
            id="books"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zuri Books
          </a>

          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=bonarhyme"
            id="book__python"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python Books
          </a>
          <a
            href="https://background.zuri.team"
            id="pitch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Background Check for Coders
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            id="book__design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design Books
          </a>
          <Link to="/contact" id="contact">
            Contact Me
          </Link>
        </section>
        <section className="externals">
          <a
            href="https://app.slack.com/client/T042F7V19Q8/C042JTARBL0/rimeto_profile/U049CDQN81W"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={slack} alt="slack" />
          </a>
          <a
            href="https://github.com/bonarhyme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </section>
      </main>
      <footer className="footer">
        <div>
          <img src={ZuriInternship} alt="Zuri internship logo" />
        </div>
        <div>HNG Internship 9 Frontend Task</div>
        <div>
          <img src={I4G} alt="Ingressive logo" />
        </div>
      </footer>
    </>
  );
};

export default Home;
