import React from 'react';

// Import images
import selectedWork1 from '../img/work/selectedwork1.jpg';
import selectedWork2 from '../img/work/selectedwork2.jpg';
import selectedWork3 from '../img/work/selectedwork3.jpg';
import WorkItem from './WorkItem';

const SelectedWork = () => {
    return (
      <section className="selected-work">
        <h2 className="selected-work__title">&lt;Selected Work&gt;</h2>
        <p className="selected-work__subtitle">
          Take a dive in and discover how I bring <em>visions to life.</em>
        </p>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-lg-1 col-lg-3 mb-4">
              <WorkItem image={selectedWork1} title="Quality Fence & Gardens Logo" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <WorkItem image={selectedWork2} title="Xendo Bar Menu Design" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <WorkItem image={selectedWork3} title="Beach Photography" />
            </div>
          </div>
        </div>
      </section>
    );
  };

export default SelectedWork;
