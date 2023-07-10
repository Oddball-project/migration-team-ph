import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../common/sliderProps";
import React from "react";

const LatestProjects = ( {projects} ) => {
  
  return (
    <section className="mil-works mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "40%" }} />
      <div className="container">
        <div className="row align-items-center mil-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <h2 className="mil-mb-30">Migrated sites</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-slider-btn-prev mil-works-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-works-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          {...sliderProps.latestProjectSlider}
          className="swiper-container mil-works-slider mil-mb-90"
        >
          {projects.map((project, projectkey) => (
          <SwiperSlide key={projectkey} className="swiper-slide">
            <div className="mil-card">
              <div className="mil-cover-frame">
                <img src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${project.field_image.uri.url}`} alt="Site screenshot" />
              </div>
              <div className="mil-description">
                <div className="mil-card-title">
                  <h4 className="mil-mb-20">
                    {project.title}
                  </h4>
                  <h6>
                    <ul>
                    by: {project.field_assignee.map((assignee, assigneeKey) => (
                          <li key={assigneeKey} className="mil-accent">{assignee}</li>
                        ))}
                    </ul>
                  </h6>
                </div>
                <div className="mil-card-text">
                  <p>{project.short}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>

        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <Link href="/portfolio" className="mil-link mil-mb-30">
              <span>View All Cases</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <Link href="/contact" className="mil-button mil-border mil-mb-30">
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestProjects;
