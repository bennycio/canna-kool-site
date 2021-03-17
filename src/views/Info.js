import React from "react";
import "../css/Info.scss";
import { Col, Divider, Row, Typography, BackTop } from "antd";
import { GiMuscleUp, GiNoseSide } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";

const { Title } = Typography;

const Info = () => {
  return (
    <div className="body">
      <BackTop />
      <div class="page-header shadowed">
        <div class="page-header__bg"></div>
        <h1 class="page-header__title">Product Info</h1>
      </div>
      <div className="container">
        <section id="timeline">
          <Title>From Farm to Bottle</Title>
          <div className="timeline-card-wrapper">
            <div className="timeline-card timeline-card--step1">
              <div className="head">
                <div className="number-box">
                  <span>01</span>
                </div>
                <h2>
                  <span className="small">Farming</span> Grow The Stuff
                </h2>
              </div>
              <div className="body">
                <p>
                  The first step in the process of getting the CBD into your
                  body is to grow the stuff. It has to come from somewhere,
                  doesn't it?
                </p>
                <img src="images/cbdfarm.jpg" alt="CBD Farm" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step2">
              <div className="head">
                <div className="number-box">
                  <span>02</span>
                </div>
                <h2>
                  <span className="small">Refinery</span> Pure Hemp
                </h2>
              </div>
              <div className="body">
                <p>
                  We use this humungus and terrifying machine to turn the hemp
                  we farm into something that looks pretty so that you feel
                  comfortable using our product.
                </p>
                <img src="images/refinery.jpg" alt="Refinery" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step3">
              <div className="head">
                <div className="number-box">
                  <span>03</span>
                </div>
                <h2>
                  <span className="small">Extraction</span> Take It Out!
                </h2>
              </div>
              <div className="body">
                <p>
                  We spend a lot of time getting the CBD out of the refined hemp
                  because we got sued for leaving 50% of the THC in the final
                  product.
                </p>
                <img src="images/hemp.jpg" alt="Extraction" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step4">
              <div className="head">
                <div className="number-box">
                  <span>04</span>
                </div>
                <h2>
                  <span className="small">Testing</span> Consistency
                </h2>
              </div>
              <div className="body">
                <p>
                  Our product is tested many times and normally it works as
                  intended but occasionally we will throw out one because it
                  causes hallucinogenic effects in the monkeys.
                </p>
                <img src="images/labtesting.jpg" alt="Lab Testing" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step5">
              <div className="head">
                <div className="number-box">
                  <span>05</span>
                </div>
                <h2>
                  <span className="small">Packing</span> Hand it Off
                </h2>
              </div>
              <div className="body">
                <p>
                  We have people manually package every bottle with love and a
                  little kiss to make sure that you feel special and so that
                  these people still have jobs.
                </p>
                <img src="images/relaxed.jpg" alt="Packaging the Product" />
              </div>
            </div>
          </div>
        </section>
        <hr className="separator" />
        <section className="comparison-table">
          <Title>Whats the Difference?</Title>
          <hr className="separator separator--dots" />
          <Row justify="space-around" align="middle">
            <Col>
              <div className="comparison-column shadowed">
                <Title>Odorless</Title>
                <Title>
                  <GiNoseSide />
                </Title>
                <ul>
                  <li>No Odor</li>
                  <li>2oz or 3oz</li>
                  <li>1000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $50</li>
                </ul>
                <button className="btn-primary learn-more">See more</button>
              </div>
            </Col>
            <Col>
              <div className="comparison-column shadowed">
                <Title>Mint Cool</Title>
                <Title>
                  <RiPlantFill />
                </Title>
                <ul>
                  <li>Minty Scent</li>
                  <li>2oz or 3oz</li>
                  <li>1000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $50</li>
                </ul>
                <button className="btn-primary learn-more">See more</button>
              </div>
            </Col>
            <Col>
              <div className="comparison-column shadowed">
                <Title>Extreme</Title>
                <Title>
                  <GiMuscleUp />
                </Title>
                <ul>
                  <li>No Odor</li>
                  <li>2oz or 3oz</li>
                  <li>Over 9000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $75</li>
                </ul>
                <button className="btn-primary learn-more">See more</button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Divider />
    </div>
  );
};

const selectHotspot = (e) => {
  const clickedHotspot = e.target.parentElement;
  const container = clickedHotspot.parentElement;

  // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
  const hotspots = container.querySelectorAll(".lg-hotspot");
  hotspots.forEach((hotspot) => {
    if (hotspot === clickedHotspot) {
      hotspot.classList.toggle("lg-hotspot--selected");
    } else {
      hotspot.classList.remove("lg-hotspot--selected");
    }
  });
};

export default Info;
