import React from 'react';
import PropTypes from 'prop-types';
import { use100vh } from 'react-div-100vh';

import './PageLayout.scss';

const PageLayout = ({ children }) => {
  const height = use100vh();
  const halfHeight = height ? height : '50vh';

  return (
    <div className="body-wrap boxed-container">
      <main>
        <section className="hero" style={{ height: halfHeight }}>
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
