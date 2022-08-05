import React from 'react';
import PropTypes from 'prop-types';

import './PageLayout.scss';

const PageLayout = ({ children }) => {
  return (
    <div className="body-wrap boxed-container">
      <main>
        <section className="hero">
          <div className="container">{children}</div>
        </section>
      </main>
    </div>
  );
};

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node
};
