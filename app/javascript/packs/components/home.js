import React from "react";
import NewNote from "../containers/new_note";
import CurrentNote from "../containers/current_note";

function Home() {
  return (
    <section>
      <NewNote />
      <CurrentNote />
    </section>
  );
}

export default Home;
