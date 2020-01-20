/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import {Styled, jsx} from 'theme-ui';
import {Container} from '@theme-ui/components';
import PropTypes from 'prop-types';

export default function Page({pageData}) {
  const [data, setData] = useState(pageData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageData]);

  return (
      <>
        <Styled.h1>
          {data.title}
        </Styled.h1>
        <Container>
          {data.body}
        </Container>
      </>
    );
}

Page.propTypes = {
  pageData: PropTypes.object.isRequired
};
