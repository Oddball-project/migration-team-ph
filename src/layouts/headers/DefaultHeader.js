import Link from "next/link";
import { useState } from "react";

const DefaultHeader = ({ transparent, headerTop, extarClass }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`mil-top-position mil-fixed ${extarClass ? extarClass : ""}`}
    >
      {headerTop && (
        <div className="mil-additional-panel">
          <div className="container-fluid">
            <ul className="mil-ap-list">
              <li>
                Phone: <span className="mil-accent">+ 01</span> 800 070 404
              </li>
              <li>Info@mydomain.com</li>
            </ul>
            <div className="mil-ap-call-to-action">
              <div className="mil-icon-frame mil-icon-frame-sm">
                <img src="img/icons/sm/4.svg" alt="icon" />
              </div>
              <p>Find out how ITSulu Could save you over 2.400 US$ a year.</p>
            </div>
            <ul className="mil-ap-list">
              <li>
                <a href="#.">Accounta</a>
              </li>
              <li>
                <a href="#.">English</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={`mil-top-panel ${
          transparent ? "mil-top-panel-transparent mil-animated" : ""
        }`}
      >
        {/* mil-top-panel-transparent */}
        <div className="container">
          <Link href="/" legacyBehavior>
            <img className="mil-logo" src="favicon/pantheon-logo-horizontal.png" alt="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DefaultHeader;
