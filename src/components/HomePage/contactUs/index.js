import style from "./style.module.css";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import AvatarTulio from "../../assets/images/tulio_avatar.png";
// import AvatarTathy from "../../assets/images/tulio_avatar.png";
// import AvatarAngelo from "../../assets/images/tulio_avatar.png";

import React from "react";

export function ContactUs() {
  return (
    <div className={style.contactContainer} id="contact">
      <div className={style.contactH1}>
        <h1>Meet the Developers</h1>
      </div>
      <div className={style.contact}>
        <div className={style.cardsContainer}>
          <div className={style.card}>
            <img src={AvatarTulio} className={style.cardImg} alt="help" />
            <div className={style.cardContent}>
              <h2>Tulio Minini</h2>
              <div className={style.icons}>
                <>
                  <a
                    href="https://www.linkedin.com/in/tulio-minini/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    <LinkedinFilled style={{ fontSize: 40 }} />
                  </a>
                </>
                <>
                  <a
                    href="https://github.com/t-minini"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    {" "}
                    <GithubFilled style={{ fontSize: 40 }} />
                  </a>
                </>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <img src={AvatarTulio} className={style.cardImg} alt="help" />
            <div className={style.cardContent}>
              <h2>Tathyana M.</h2>
              <div className={style.icons}>
                <>
                  <a
                    href="https://www.linkedin.com/in/tulio-minini/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    <LinkedinFilled style={{ fontSize: 40 }} />
                  </a>
                </>
                <>
                  <a
                    href="https://github.com/t-minini"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    {" "}
                    <GithubFilled style={{ fontSize: 40 }} />
                  </a>
                </>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <img src={AvatarTulio} className={style.cardImg} alt="help" />
            <div className={style.cardContent}>
              <h2>Angelo Martins</h2>
              <div className={style.icons}>
                <>
                  <a
                    href="https://www.linkedin.com/in/angelo-martins-994ba9245"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    <LinkedinFilled style={{ fontSize: 40 }} />
                  </a>
                </>
                <>
                  <a
                    href="https://github.com/avpm90"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    {" "}
                    <GithubFilled style={{ fontSize: 40 }} />
                  </a>
                </>
              </div>
            </div>
          </div>
        </div>
        <div className={style.ironHack}>
          <iframe
            title="This is a unique title"
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.185562227396!2d-46.662381685022225!3d-23.561778084682718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59468d48985b%3A0x694f27fed85d9b0c!2sIronhack%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1659012409799!5m2!1spt-BR!2sbr"
            }
            style={{
              allowFullScreen: "",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              height: 300,
              width: 600,
              frameBorder: 0,
              border: 0,
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
