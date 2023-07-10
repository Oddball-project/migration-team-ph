const DefaultFooter = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content mil-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 mil-mb-30">
              <p className="mil-light-soft mil-mb-30">
                Pantheon Professional Services include consulting, migrations, load testing, application performance and architecture, training, AGCDN, Managed Updates, and dedicated Customer Success Managers.
              </p>
            </div>
            <div className="col-xl-7 mil-mt-60-adapt">
              <div className="row">
                <div className="col-lg-7 mil-mb-30">
                  <h3 className="mil-light mil-up-font mil-mb-30">
                    Join The <span className="mil-accent">Pantheon</span> <br />
                    Experience
                  </h3>
                  <p className="mil-light-soft">
                    Design, Innovate, and Deploy Websites Fast
                  </p>
                </div>
                <div className="col-lg-5 mil-mb-30">
                  <form>
                    <input
                      className="mil-rounded-input mil-text-center mil-mb-5"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button className="mil-button mil-accent-bg mil-fw">
                      <span>Subscribe Now</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mil-divider mil-light" />
        <div className="mil-footer-links">
          <ul className="mil-social mil-light">
            <li className="mil-adapt-links">
              <a href="#.">Facebook</a>
              <a href="#.">FB</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">Instagram</a>
              <a href="#.">IG</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">LinkedIn</a>
              <a href="#.">IN</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">Twitter</a>
              <a href="#.">TW</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">YouTube</a>
              <a href="#.">YT</a>
            </li>
          </ul>
          <ul className="mil-additional-links mil-light">
            <li>
              <a href="#.">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="#.">Privacy Policy</a>
            </li>
            <li>
              <a href="#.">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© Pantheon Migration Team PH 2023.</p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
