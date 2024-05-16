import React from "react";
import "./Home.css";

import archdeptImg from "../images/archdept.png";
import logo7Img from "../images/logo/7.png";
import logo8Img from "../images/logo/8.png";
import logo9Img from "../images/logo/9.png";
import oneImg from "../images/1.png";
import twoImg from "../images/2.png";
import threeImg from "../images/3.png";
import logoImg from "../images/logo (2).png";
import videoSrc from "../images/video.mp4";
import downArrowImg from "../images/down.png";
import frame38517Img from "../images/Frame 38517.png";
import frame38516Img from "../images/Frame 38516.png";
import small1Img from "../images/small1.png";
import small2Img from "../images/small2.png";
import small3Img from "../images/small3.png";
import small4Img from "../images/small4.png";
import leftArrowImg from "../images/leftarrow.png";
import rightArrowImg from "../images/rightarrow.png";
import gallery1Img from "../images/gallery/image1.jpg";
import gallery2Img from "../images/gallery/image2.jpg";
import gallery3Img from "../images/gallery/image3.jpg";
import gallery4Img from "../images/gallery/image4.jpg";
import gallery5Img from "../images/gallery/image5.jpg";
import gallery6Img from "../images/gallery/image6.jpg";
import gallery7Img from "../images/gallery/image7.jpg";
import story1Img from "../images/story1 (2).png";
import story2Img from "../images/story2 (2).png";
import story3Img from "../images/story3 (2).png";
import designleftImg from "../images/designleft.png";
import designrightImg from "../images/designright.png";
import line172Img from "../images/Line 172.png";
import ellipse377Img from "../images/Ellipse 377 (1).png";
import ellipse379Img from "../images/Ellipse 379 (1).png";
import apnLogo1Img from "../images/APN Logo-c-v 1 (1).png";
import apnLogo2Img from "../images/APN Logo-c-v 1 (2).png";
import linkarrowImg from "../images/linkarrow.png";
import verticalineImg from "../images/verticaline.png";
import JNUImg from "../images/logo/JNU.png";
import IITRImg from "../images/logo/IITR.png";
import searchImg from "../images/search.png";
import mapImg from "../images/map.png";
import video from "../images/video.mp4";
import { useRef } from "react";
function Home() {
  const videoRef = useRef(null);
  return (
    <div>
      <div class="homepage">
        <div class="header">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="back-video"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div class="goal">GoAL</div>
          <div class="goal-desc">
            <p class="full-form">
              Gender-Orientated Adaptive Transformation cross-Learning
            </p>
            <p class="funder">An APN Funded Project | IIT Roorkee</p>
            <button class="btn">
              <div class="btn-text">
                <p>Explore</p>
              </div>
            </button>
          </div>
          <div class="collabs">
            <h5>Collaborating Institutes</h5>

            <div class="collab- s">
              <ul class="logos">
                <li class="logo">
                  <img src={apnLogo1Img} alt="" />
                </li>
                <li class="logo">
                  <img src={apnLogo1Img} alt="" />
                </li>
                <li class="logo">
                  <img src={apnLogo1Img} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="about-page">
          <div class="about-image">
            <img src={frame38517Img} alt="" class="img1" />
            <img src={frame38516Img} alt="" class="img2" />
          </div>
          <div class="about-description">
            <div class="overview">
              <div class="overview-body">
                <h5>
                  Overview <img src={line172Img} alt="" />
                </h5>
                <h2>Know About Our Project</h2>
                <p>
                  Project GoAL attempts to tap adaptive transformations for
                  Climate Change (CC) & Disaster Risk Reduction (DRR) & enhance
                  research & communication capacities of the men, women, and
                  youths in their context by Training the Community Trainers
                  (ToCT) & developing training resources & community-friendly
                  tools for comprehensive outreach through an innovative
                  approach.
                </p>
              </div>

              <button class="btn">Read more</button>
            </div>
          </div>
        </div>
        <div class="study-area">
          <div class="area-desc">
            <div class="area-head">
              <div class="headline">
                <h3>STUDY AREA</h3>
                <img src={line172Img} alt="" />
              </div>
              <h1>Let Us Come Together To Make a Difference</h1>
              <p>
                The collaborative case studies are based on scientific research
                and will be developed in -
              </p>
            </div>
            <div class="area-cards">
              <div class="area-card">
                <div class="card-head">
                  <img src={small1Img} alt="" />
                  <span>India</span>
                </div>
                <p>
                  Udham Singh Nagar District, Uttarakhand, Dumka, Aspirant
                  District Jharkhand and Bishnupur District, Manipur
                </p>
              </div>
              <div class="area-card">
                <div class="card-head">
                  <img src={small2Img} alt="" />
                  <span>Nepal</span>
                </div>
                <p>Chitwan District, Bagmati Province</p>
              </div>
              <div class="area-card">
                <div class="card-head">
                  <img src={small3Img} alt="" />
                  <span>Sri Lanka</span>
                </div>
                <p>Gampaha District, Western Province</p>
              </div>
              <div class="area-card">
                <div class="card-head">
                  <img src={small4Img} alt="" />
                  <span>Japan</span>
                </div>

                <p>
                  literature-based case study and expert, stakeholders, and
                  community inputs through hybrid mode
                </p>
              </div>
            </div>
          </div>
          <div class="maps">
            <img src={mapImg} alt="" />
          </div>
        </div>
        <div class="workshop-page">
          <div class="workshop-content">
            <div class="head">
              <div class="headline">
                <h3>Recent workshops</h3>
                <img src={line172Img} alt="" />
              </div>

              <h2>We conduct regular workshops</h2>
            </div>
            <div class="workshop-body">
              <div class="left-right-icons">
                <img src={leftArrowImg} alt="" />
                <img src={rightArrowImg} alt="" />
              </div>
              <div class="workshops">
                <ul class="workshop-list">
                  <li class="workshop">
                    <div class="worshop-detail">
                      <div class="detail">
                        <h2>
                          Adaptive Transformations for Climate Change and
                          Disaster Risk Reduction Workshop
                        </h2>
                        <div class="venue">
                          <p>
                            Department of Architecture and Planning, IIT Roorkee
                          </p>
                          <p>10th February, 2024</p>
                        </div>
                        <button class="btn">View Details</button>
                      </div>
                    </div>
                  </li>
                  <li class="workshop">
                    <div class="worshop-detail">
                      <div class="detail">
                        <h2>
                          Adaptive Transformations for Climate Change and
                          Disaster Risk Reduction Workshop
                        </h2>
                        <div class="venue">
                          <p>
                            Department of Architecture and Planning, IIT Roorkee
                          </p>
                          <p>10th February, 2024</p>
                        </div>
                        <button class="btn">View Details</button>
                      </div>
                    </div>
                  </li>
                  <li class="workshop">
                    <div class="worshop-detail">
                      <div class="detail">
                        <h2>
                          Adaptive Transformations for Climate Change and
                          Disaster Risk Reduction Workshop
                        </h2>
                        <div class="venue">
                          <p>
                            Department of Architecture and Planning, IIT Roorkee
                          </p>
                          <p>10th February, 2024</p>
                        </div>
                        <button class="btn">View Details</button>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="workshop-list">
                  <li class="workshop">
                    <div class="worshop-detail">
                      <div class="detail">
                        <h2>
                          Adaptive Transformations for Climate Change and
                          Disaster Risk Reduction Workshop
                        </h2>
                        <div class="venue">
                          <p>
                            Department of Architecture and Planning, IIT Roorkee
                          </p>
                          <p>10th February, 2024</p>
                        </div>
                        <button class="btn">View Details</button>
                      </div>
                    </div>
                  </li>
                  <li class="workshop">
                    <div class="worshop-detail">
                      <div class="detail">
                        <h2>
                          Adaptive Transformations for Climate Change and
                          Disaster Risk Reduction Workshop
                        </h2>
                        <div class="venue">
                          <p>
                            Department of Architecture and Planning, IIT Roorkee
                          </p>
                          <p>10th February, 2024</p>
                        </div>
                        <button class="btn">View Details</button>
                      </div>
                    </div>
                  </li>
                  <li class="workshop">
                    <div class="worshop-detail">
                      <div class="detail">
                        <h2>
                          Adaptive Transformations for Climate Change and
                          Disaster Risk Reduction Workshop
                        </h2>
                        <div class="venue">
                          <p>
                            Department of Architecture and Planning, IIT Roorkee
                          </p>
                          <p>10th February, 2024</p>
                        </div>
                        <button class="btn">View Details</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="dots">
                <img src={ellipse377Img} alt="" />
                <img src={ellipse379Img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="objective-page">
          <img src={designleftImg} alt="" class="designleft" />
          <div class="objective-head">
            <img src={line172Img} alt="" />
            <h5>Objectives</h5>
            <img src={line172Img} alt="" />
          </div>
          <h2>Objectives of the GoAL project</h2>
          <div class="objectives-card">
            <div class="obj-card">
              <img src={oneImg} alt="" />
              <p>
                Build case studies on Gender-sensitive adaptive transformation
                in CCA & DRR& prepare training resource
              </p>
            </div>
            <div class="obj-card">
              <img src={twoImg} alt="" />
              <p>
                Build case studies on Gender-sensitive adaptive transformation
                in CCA & DRR& prepare training resource
              </p>
            </div>
            <div class="obj-card">
              <img src={threeImg} alt="" />
              <p>
                Build case studies on Gender-sensitive adaptive transformation
                in CCA & DRR& prepare training resource
              </p>
            </div>
          </div>
          <img src={designrightImg} alt="" class="designright" />
        </div>

        <div class="gallery">
          <h2>Our Gallery</h2>
          <div class="images">
            <div class="row1">
              <ul>
                <li>
                  <img src={gallery1Img} alt="" />
                </li>
                <li>
                  <img
                    src={gallery2Img}
                    alt=""
                    style={{ height: "225px", width: "282px" }}
                  />
                </li>
                <li>
                  <img src={gallery3Img} alt="" />
                </li>
              </ul>
            </div>
            <div class="row2">
              <ul>
                <li>
                  <img src={gallery4Img} alt="" />
                </li>
                <li>
                  <img src={gallery5Img} alt="" />
                </li>
                <li>
                  <img src={gallery6Img} alt="" />
                </li>
                <li>
                  <img src={gallery7Img} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <button class="btn">View Gallery</button>
        </div>

        <div class="stories-page">
          <div class="stories-content">
            <div class="head">
              <div class="headline">
                <h3>stories</h3>
                <img src={line172Img} alt="" />
              </div>
              <h2>We conduct regular workshops</h2>
            </div>
            <div class="stories-body">
              <div class="left-right-icons">
                <img src={leftArrowImg} alt="" />
                <img src={rightArrowImg} alt="" />
              </div>
              <div class="stories">
                <ul class="stories-list">
                  <li class="story">
                    <img src={story1Img} alt="" />
                  </li>
                  <li class="story">
                    <img src={story2Img} alt="" />
                  </li>
                  <li class="story">
                    <img src={story3Img} alt="" />
                  </li>
                </ul>
              </div>
              <div class="dots">
                <img src={ellipse377Img} alt="" />
                <img src={ellipse379Img} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="funding-agency">
          <div class="fund-content">
            <h2>Funding Agency</h2>
            <div class="fund-body">
              <div class="left-image">
                <img src={apnLogo1Img} alt="" />
              </div>
              <div class="right-content">
                <p>
                  APN is an intergovernmental network of 22 countries working
                  towards an Asia-Pacific region that is successfully addressing
                  the challenges of global change and sustainability.
                </p>
                <div class="sites">
                  <h4>
                    APN Website
                    <span>
                      <img src={linkarrowImg} alt="" />
                    </span>
                  </h4>
                  <img src={verticalineImg} alt="" />
                  <h4>
                    project Website
                    <span>
                      <img src={linkarrowImg} alt="" />
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="logos">
          <ul>
            <li class="logo">
              <img src={apnLogo1Img} alt="" />
              <p>university of colombo</p>
            </li>
            <li class="logo">
              <img src={logo7Img} alt="" />
              <p>NIT Bhopal</p>
            </li>
            <li class="logo">
              <img src={logo8Img} alt="" />
              <p>Science Hub</p>
            </li>
            <li class="logo">
              <img src={logo9Img} alt="" />
              <p></p>
            </li>
            <li class="logo">
              <img src={apnLogo1Img} alt="" />
              <p></p>
            </li>
            <li class="logo">
              <img src={IITRImg} alt="" />
              <p>IIT Roorkee</p>
            </li>
            <li class="logo">
              <img src={JNUImg} alt="" />
              <p>Jawaharlal Nehru University</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
