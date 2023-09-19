import Plx from "react-plx";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//img and style
import bear from "../../images/bear.png";
import world from "../../images/world.png";
import styles from "./main.module.scss";

function Main() {
  return (
    <>
      <Container className={styles.cont}>
        <Plx
          className={styles.bearDiv}
          parallaxData={[
            {
              start: 0, //l'animazione inizia al primo scroll
              end: 1000,
              easing: "easeOut",
              properties: [
                {
                  startValue: 0,
                  endValue: 800,
                  property: "translateX",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0, //mette a sinistra la foto delle foglie
            top: 25,
            zIndex: 0,
          }}
        >
          <h1>WARMING WARNING</h1>
          <img src={bear} style={{ zIndex: 1 }} alt="bear" />
        </Plx>

        <Plx
          className={styles.worldDiv}
          parallaxData={[
            {
              start: 0,
              end: 400,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity",
                },
              ],
            },
          ]}
        >
          <img src={world} alt="world"></img>
          <p>Global warming isn't a prediction. It is happening!</p>
          <Link to="/Chart">
            <Button className={styles.button} size="lg">
              Don't belive yet?
            </Button>
          </Link>
        </Plx>
      </Container>
    </>
  );
}
export default Main;
