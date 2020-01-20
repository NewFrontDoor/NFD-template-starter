import React from 'react';
import PropTypes from 'prop-types';
import slider from '../assets/img/main-grey-scale.png';
// Import Carousel from '../carousel/carousel';
import segments from '../components/home-segments';

export default function Home() {
  const {content} = mainData;

  return (
    <section>
      <SliderWrapper>
        <SliderImg
          className="img-responsive img-full-width"
          src={slider}
          width="1440"
          height="600"
        />
      </SliderWrapper>
      <Section>
        {content.map(segment => {
          const props = {segment, globalSermons, upcomingEventsData};
          return segments(props)[segment.type];
        })}
      </Section>
    </section>
  );
}

Home.propTypes = {

};
