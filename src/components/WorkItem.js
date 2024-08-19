import React from 'react';

const WorkItem = ({ image, title }) => {
  return (
    <div className="work-item">
      <div className="work-item__image-container">
        <img src={image} alt={title} className="work-item__image" />
        <div className="work-item__overlay">
          <div className="work-item__overlay-content">
            <h4>{title}</h4>
            <a className="work-item__button">See More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
