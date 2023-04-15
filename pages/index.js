import React, { useEffect, useState, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";

import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Keys from "../keys.json";

export default function HomeDef() {
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);

  useEffect(() => {
    if (Keys.parallax === true) {
      //We Only want the effect on desktops
      var is_mobile =
        !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false;
      if (is_mobile === false) {
        let x = 0;
        window.addEventListener("scroll", () => {
          x += 10;

          if (x > 30) {
            setDisplay2(true);
          }
          if (x >= 380) {
            setDisplay3(true);
          }

          if (x >= 700) {
            setDisplay4(true);
          }

          if (x >= 1000) {
            setDisplay5(true);
          }
        });
      } else if (is_mobile) {
        setDisplay2(true);
        setDisplay3(true);
        setDisplay4(true);
        setDisplay5(true);
      }
    } else {
      setDisplay2(true);
      setDisplay3(true);
      setDisplay4(true);
      setDisplay5(true);
    }
  }, []);

  //Checks for middle mouse button
  const scrollFailSafe = (e) => {
    if (e.button === 1) {
      setDisplay2(true);
      setDisplay3(true);
      setDisplay4(true);
      setDisplay5(true);
    }
  };

  return (
    <div onMouseDown={(e) => scrollFailSafe(e)}>
      <Meta
        title={"Itsalright : Together, we can make it alright"}
        desc={
          "Get access to a free body of thousands of mental health experts and get their advice for free"
        }
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5QG3T5J6L6', {
        page_path: window.location.pathname,
        });
        `}
      </Script>

      <Navbar />
      <div className={styles.main}>
        <div className={styles.mainHeadBox}>
          <br />
          <h1 className={styles.head}>Sometimes it's ok to be not ok</h1>
          <p className={styles.subhead}>
            Life changes. Stuff happens. It's what us humans deal with everyday.
          </p>
          <p className={styles.subhead}>But together we can make it alright.</p>
          <span>
            <a href="/signup">
              <button
                className={`standardButton  ${styles.buttonFormats}`}
                style={{
                  width: "200px",
                  height: "50px",
                  marginTop: "20px",
                  fontWeight: 500,
                  fontSize: "1.1em",
                }}
              >
                Sign Up Today
              </button>
            </a>
          </span>
        </div>

        {/* Card 1 */}
        <div className={styles.card}>
          <div>
            <p className={`${styles.cardHeading} ${styles.c1}`}>solutions</p>
            <p className={styles.cardDescription}>
              <b>we're always there for you.</b>
              <br />
              <br />
              with our browse feature, you can at anytime post your troubles,
              anxieties and problems, and our experts will get back to you.
            </p>
          </div>
          <img
            className={styles.cardImage}
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image_"
          ></img>
        </div>

        {/* Card 2 */}
        {display2 && (
          <div className={styles.card}>
            <img
              className={`${styles.cardImage} ${styles.alt}`}
              src="https://images.pexels.com/photos/4021565/pexels-photo-4021565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="image_"
            ></img>
            <div>
              <p className={`${styles.cardHeading} ${styles.c3}`}>
                share freely
              </p>
              <p className={styles.cardDescription}>
                <b>itsalright is a land of privacy.</b>
                <br />
                <br />
                you can post anonymously, limit who can comment and view your
                posts, and chat with experts on our real time feature without
                exposing your name, address or other details.
              </p>
            </div>
          </div>
        )}

        {/* Real Card 3 */}
        {display3 && (
          <div className={`${styles.card}`}>
            <div>
              <p className={`${styles.cardHeading} ${styles.c2}`}>
                connect at ease
              </p>
              <p className={styles.cardDescription}>
                <b>you'll never feel alone again</b>
                <br />
                <br />
                when feeling down, connecting to a friend or person who can help
                is the most important.
                <br />
                <br />
                Our Connect feature connects you with a random expert who will
                help you. Or, you can contact a specific person using the
                contact feature.
                <br />
                <br />
              </p>
            </div>
            <img
              className={styles.cardImage}
              src="https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="image_"
            ></img>
          </div>
        )}

        {/* Real Card 4 */}
        {display4 && (
          <div className={`${styles.card}`}>
            <img
              className={`${styles.cardImage} ${styles.alt}`}
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  "
              alt="image_"
            ></img>
            <div>
              <p className={`${styles.cardHeading} ${styles.c4}`}>Expertise</p>
              <p className={styles.cardDescription}>
                <b>the best of the best</b>
                <br />
                <br />
                consult mental health experts, motivational speakers, teachers,
                doctors, scholars and more totally free of cost on itsalright.
              </p>
            </div>
          </div>
        )}

        {display5 && (
          <div className={styles.foot}>
            <p className={`${styles.cardHeading} ${styles.c5}`}>join now</p>
            <span>
              <a href="/signup">
                <button
                  className={`standardButton  ${styles.buttonFormats}`}
                  style={{
                    width: "200px",
                    height: "50px",
                    marginTop: "20px",
                    fontWeight: 500,
                    fontSize: "1.1em",
                  }}
                >
                  Sign Up Today
                </button>
              </a>
            </span>
          </div>
        )}

        <br />
        <Footer />
      </div>
    </div>
  );
}
