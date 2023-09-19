//bootstrap elem
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";
//components
import Temperature from "../../components/Temperature.jsx";
import CO2 from "../../components/CO2.jsx";
import Methane from "../../components/Methane";
import Nitrous from "../../components/Nitrous";
import Artic from "../../components/Artic.jsx";
//images and style
import styles from "./chartPage.module.scss";
import greenhouse from "../../images/greenhouse-effect.png";
import methane from "../../images/methane.png";
import iceberg from "../../images/iceberg.png";
import co2 from "../../images/co2.png";
import temperature from "../../images/temperature.png";

function ChartPage() {
  return (
    <>
      <Container  fluid>
        <Tabs
          defaultActiveKey="temperature"
          id="fill-tab-example"
          className="mb-3"
          data-bs-theme="dark"
          fill
        >
          <Tab eventKey="temperature" title="Temperature">
            <Row className="flex-column align-items-center">
              <img className={styles.icon} src={temperature}></img>
              <p className={styles.text}>
                Air temperatures on Earth have been rising since the Industrial
                Revolution. While natural variability plays some part, the
                preponderance of evidence indicates that human
                activities—particularly emissions of heat-trapping greenhouse
                gases—are mostly responsible for making our planet warmer.
              </p>
              <Row>
                <Col>
                  <Temperature></Temperature>
                </Col>
              </Row>
            </Row>
          </Tab>
          <Tab eventKey="CO2" title="CO2">
            <Row className="flex-column align-items-center">
              <img className={styles.icon} src={co2}></img>
              <p className={styles.text}>
                Carbon dioxide in the atmosphere warms the planet, causing
                climate change. Human activities have raised the atmosphere's
                carbon dioxide content by 50% in less than 200 years.
              </p>
              <Row>
                <Col>
                  <CO2 />
                </Col>
              </Row>
            </Row>
          </Tab>
          <Tab eventKey="methane" title="Methane">
            <Row className="flex-column align-items-center">
              <img className={styles.icon} src={methane}></img>
              <p className={styles.text}>
                The concentration of methane in the atmosphere is currently
                around two-and-a-half times greater than its pre-industrial
                levels. The largest anthropogenic source is agriculture,
                responsible for around one quarter of emissions, closely
                followed by the energy sector, which includes emissions from
                coal, oil, natural gas and biofuels.
              </p>
              <Row>
                <Col>
                  <Methane />
                </Col>
              </Row>
            </Row>
          </Tab>
          <Tab eventKey="Nitrous oxide" title="Nitrous oxide">
            <Row className="flex-column align-items-center">
              <img className={styles.icon} src={greenhouse}></img>
              <p className={styles.text}>
                Nitrous oxide stays in the atmosphere for an average of 114
                years, where it can be converted into nitrogen oxides that
                deplete the stratospheric ozone layer and expose the Earth to
                more solar radiation, thereby damaging crops and human health.
                Human activities such as agriculture, fuel combustion,
                wastewater management, and industrial processes are increasing
                the amount of N2O in the atmosphere. Nitrous oxide is also
                naturally present in the atmosphere as part of the Earth's
                nitrogen cycle and has a variety of natural sources.
              </p>
              <Row>
                <Col>
                  <Nitrous />
                </Col>
              </Row>
            </Row>
          </Tab>
          <Tab eventKey="Artic" title="Artic">
            <Row className="flex-column align-items-center">
              <img className={styles.icon} src={iceberg}></img>
              <p className={styles.text}>
                Nowhere is climate change more obvious than in the Arctic.
                Arctic helps to regulate the world’s temperature, so as more
                Arctic ice melts the warmer our world becomes. Global warming is
                causing Arctic ice to melt: ice reflects sunlight, while water
                absorbs it. When the Arctic ice melts, the oceans around it
                absorb more sunlight and heat up, making the world warmer as a
                result. Melting Arctic ice is expected to speed up sea level
                rise. Some experts even estimate that the oceans will rise as
                much as 23 feet by 2100, which would flood major coastal cities
                and submerge some small island countries, causing untold
                devastation.
              </p>
              <Row>
                <Col>
                  <Artic />
                </Col>
              </Row>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
export default ChartPage;
