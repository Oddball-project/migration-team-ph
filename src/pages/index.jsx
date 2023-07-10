import React from "react";
import PageBanner from "src/components/PageBanner";
import Layouts from "src/layouts/Layouts";
import Link from "next/link";
import { DrupalClient } from "next-drupal";
import dynamic from "next/dynamic";
const LatestProjectsSlider = dynamic( () => import("../components/sliders/LatestProjects"), { ssr: false } );

const drupal = new DrupalClient(process.env.NEXT_PUBLIC_DRUPAL_BASE_URL);

const Index = ({teams, migrationProcess, projects}) => {
    return (
        <Layouts>
            <PageBanner pageName={"Team"} pageTitle={"Migration Team PH"} />
            {/* team */}
            <section className="mil-team mil-p-120-60">
                <div className="container">
                    <h3 className="mil-text-center mil-mb-120">
                        We are Team Philippines, under <br />
                        <span className="mil-accent">
              Pantheon's Managed Migration Service <br />
            </span>{" "}
                        that ensure a smooth migration of your existing sites.
                    </h3>
                    <div className="row">
                        { teams?.length > 0 &&
                        teams?.map((node) => (
                            <div key={node.id} className="col-sm-6 col-lg-4">
                                <div className="mil-team-card mil-mb-60">
                                    <div className="mil-image-frame mil-mb-30">
                                        <img src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.field_image.uri.url}`} alt="Team member" />
                                        <div className="mil-team-circle" />
                                    </div>
                                    <h4 className="mil-mb-10">{node.field_name}</h4>
                                    <p>{node.title}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
            {/* team end */}
            <div className="container">
                <div className="mil-divider" />
            </div>
            {/* icon boxes */}
            <section className="mil-icon-boxes mil-p-120-60">
                <div className="container">
                    <div className="row align-items-center justify-content-between mil-mb-90">
                        <div className="col-xl-6">
                            <h2>
                                Our <span className="mil-accent">Migration Process</span>
                            </h2>
                        </div>
                        <div className="col-xl-5">
                            <p>
                                The Managed Migration Service offered by Pantheon Professional Services helps ensure a smooth migration of your existing sites to Pantheon.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        { migrationProcess?.length > 0 &&
                        migrationProcess?.map((process, index) => (
                            <div key={index} className="col-md-6 col-xl-3">
                                <div className="mil-icon-box mil-center mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                        <img src="img/icons/md/5.svg" alt="icon" />
                                    </div>
                                    <h5 className="mil-mb-20">
                                        <span className="mil-accent">{index + 1}.</span>&nbsp; {process.title}
                                    </h5>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: process.field_description?.processed }}
                                        className="mt-6 font-serif text-xl leading-loose prose"
                                    >
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>

            <LatestProjectsSlider projects={projects} />

            {/* icon boxes end */}
            {/* call to action */}
            <section className="call-to-action mil-gradient-bg mil-p-120-0">
                <div
                    className="mil-deco mil-deco-accent"
                    style={{ top: 0, left: "15%" }}
                />
                <div className="container mil-text-center">
                    <div className="mil-cta-frame">
                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
                            <img src="img/icons/md/6l.svg" alt="icon" />
                        </div>
                        <p className="mil-light mil-mb-30">Managed Migration Service</p>
                        <h2 className="mil-light mil-mb-30">
                            Let’s join <span className="mil-accent">Pantheon SaaS</span> Platform
                        </h2>
                        <p className="mil-light-soft mil-mb-60">
                            Leverage Pantheon’s hosting and WebOps platform to achieve unrivaled speed, uptime, and scalability.
                        </p>
                        <a href="#." className="mil-button mil-border mil-light">
                            <span>Book an Appointment</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* call to action end */}
        </Layouts>
    );
};

export default Index;

export async function getStaticProps(
    context
){
    const teams = await drupal.getResourceCollectionFromContext(
        "node--team",
        context,
        {
            params: {
                "filter[status]": 1,
                "fields[node--team]": "title,path,field_image,uid,created,field_name",
                include: "field_image,uid",
                sort: "-title",
            },
        }
    )

    const migrationProcess = await drupal.getResourceCollectionFromContext(
        "node--migration_process",
        context,
        {
            params: {
                "filter[status]": 1,
                "fields[node--migration_process]": "title,path,uid,created,field_description",
                include: "uid",
            },
        }
    )

    const projects = await drupal.getResourceCollectionFromContext(
        "node--projects",
        context,
        {
            params: {
                "filter[status]": 1,
                "fields[node--projects]": "title,path,uid,created,field_challenge,field_our_solution,field_the_impact,field_image,field_assignee",
                include: "field_image,uid",
            },
        }
    )

    return {
        props: {
            teams,
            migrationProcess,
            projects
        },
    }
}