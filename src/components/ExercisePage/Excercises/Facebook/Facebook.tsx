import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header"
import Content from "./components/Content"
import Social from "./components/Social";

const App = () => {
  return (
    <>
      <div className={styles.f_card}>
          <Header name="Nicolas Cage" icon="https://www.placecage.com/c/40/40"/>

          <Content 
          website="https://www.placecage.com/"
          text="Height is optional, if no height is specified the image will be a
          square. Example:&nbsp;"
          />

          <Social like="Like" comment="Comment" share="Share" />

      </div>
    </>
  );
};

export default App;
