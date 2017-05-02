import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section>
      <div className="landing-title">
        <b>Thing</b><span> â€” remember your notes</span>
      </div>
      <div className="landing-subtitle">
        Take notes and review them at intervals best for memory retention.
      </div>
      <div className="landing-buttons">
        <Link to="/sign-up" className="button button-primary">Sign up</Link>
        <Link to="/sign-in" className="button button-secondary">Sign in</Link>
      </div>
      <div className="landing-details">
        <div className="landing-detail">
          <div className="title">COLLECT</div>
          <p>
            Collect things you want to remember or remind yourself of. I collect interesting articles, quotes, ideas, or reminders. Other people have used Thing to remember jokes, learn a language, or aid in meal planning.
          </p>
        </div>
        <div className="landing-detail">
          <div className="title">REVIEW</div>
          <p>
            Review your notes at intervals best for memory retention. I used to either  maintain a large folder of ideas only to forget them. Or use sticky notes that took up so much space I could only see a few things at once. Thing shows your notes as little as possible to keep them in your memory.
          </p>
        </div>
      </div>
      <div className="landing-detail">
        <div className="title">SHARE</div>
        <p>
          You can also share your notes. You can share interesting articles, quotes, or ideas, remind someone of a task, or send them a nice message.
        </p>
      </div>
    </section>
  );
}

export default Landing;
