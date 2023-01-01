import { Fragment } from "react";
import style from "./ContactPage.module.css";

import Map from "here-maps-react";

import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const ContactPage = () => {
  const blackAndWhiteMapStyle = {
    version: 8,
    sources: {},
    layers: [
      {
        id: "simple-tiles",
        type: "raster",
        source: "raster-tiles",
        minzoom: 0,
        maxzoom: 22,
      },
    ],
  };
  return (
    <Fragment>
      <div className={style.BackgroundImage}>
        <h1>Contact</h1>
      </div>
      <section className={style.infoSection}>
        <div className={style.ContactContainer}>
          <div className={style.MsgParrent}>
            <h1>Send Us A Message</h1>
            <input placeholder="Your Email Address" type="email" />
            <textarea
              className={style.TextInput}
              placeholder="Can We Help?"
              type="text"
            />
            <button>SUBMIT</button>
          </div>
          <div className={style.AddressParrent}>
            <div>
              <h1>
                <GoLocation /> Address
              </h1>
              <p>
                Address Coza Store Center 8th floor, 379 Hudson St, New York, NY
                10018 US
              </p>
            </div>
            <div>
              <h1>
                <BsTelephone /> Lets Talk
              </h1>
              <p>+1 800 1236879</p>
            </div>
            <div>
              <h1>
                <CiMail /> Sale Support
              </h1>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </section>
      <div className={style.Map}>
        <Map
          center={{ lat: 40.73061, lng: -73.935242 }}
          zoom={10}
          apikey="kJlFiP9QFEai7xAMA77aXgc4473JThQGbLh6UoEYxEI"
          draggable={true}
          interactive={true}
          mapStyle={blackAndWhiteMapStyle}
        ></Map>
      </div>
    </Fragment>
  );
};

export default ContactPage;
