import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { Button, Col, Row, ConfigProvider } from "antd";

export default function HomepageFeatures() {
  return (
    // this code block is responsible for Home Buttons
    <section className={styles.features}>
      <div className={styles.grid_center}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b96b",
            },
          }}
        >
          <Row
            justify="center"
            align="center"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 34 }}
          >
            <Col
              className={`${styles.col_center} ${styles.margin_bottom} "gutter-row"`}
            >
              <Link to="/api">
                <Button type="primary">BARIKOI API</Button>
              </Link>
            </Col>
            <Col
              className={`${styles.col_center} ${styles.margin_bottom} "gutter-row"`}
            >
              <Link to="/docs/maps-api">
                <Button type="primary">MAPS API</Button>
              </Link>
            </Col>
            <Col
              className={`${styles.col_center} ${styles.margin_bottom} "gutter-row"`}
            >
              <Link to="/blog/android-location-library">
                <Button type="primary">ANDROID SDK</Button>
              </Link>
            </Col>
            <Col
              className={`${styles.col_center} ${styles.margin_bottom} "gutter-row"`}
            >
              <Link to="/api">
                <Button type="primary">PRICING</Button>
              </Link>
            </Col>
          </Row>
        </ConfigProvider>
      </div>
    </section>
  );
}
