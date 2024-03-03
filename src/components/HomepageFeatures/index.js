import React from "react";
import Link from "@docusaurus/Link";
import { Col, Row } from "antd";

export default function HomepageFeatures() {
  return (
    // this code block is responsible for Home Buttons
    <section style={{ ...features }}>
      <div style={{ ...grid_center }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 34 }}>
          <Col
            className={`"gutter-row"`}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            <Link
              style={{
                ...Buttonstyle,
              }}
              to="/api"
            >
              {" "}
              BARIKOI API
            </Link>
          </Col>
          <Col
            className={`"gutter-row"`}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            <Link
              style={{
                ...Buttonstyle,
              }}
              to="/docs/maps-api"
            >
              {" "}
              MAPS API
            </Link>
          </Col>
          <Col
            className={`"gutter-row"`}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            <Link style={{ ...Buttonstyle }} to="/android/android-intro">
              ANDROID SDK
            </Link>
          </Col>
          <Col
            className={`"gutter-row"`}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            <Link
              style={{
                ...Buttonstyle,
              }}
              to="/npm/npm-intro"
            >
              NPM LIBRARY
            </Link>
          </Col>
          <Col
            className={`"gutter-row"`}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            <Link
              style={{
                ...Buttonstyle,
              }}
              to="/Flutter/Barikoi Map Flutter/flutter-intro"
            >
              {" "}
              FLUTTER
            </Link>
          </Col>
          <Col
            className={`"gutter-row"`}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            {/* commit add */}
            <Link
              style={{
                ...Buttonstyle,
              }}
              to="/pricing/pricing-call"
            >
              PRICING
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  );
}

const features = {
  display: "flex",
  alignItems: "center",
  padding: "2rem 0",
  width: "100%",
  marginTop: "2rem",
};

const grid_center = {
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Buttonstyle = {
  background: "#00b96b",
  color: "white",
  padding: "7px 12px",
  borderRadius: "12px",
  textDecoration: "none",
};
