import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const { planets } = this.props;

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        <section>
          {
            planets.map(({ name, image }) => {
              <PlanetCard key={ name } planetName={ name } source={ image } />;
            })
          }
        </section>
      </div>
    );
  }
}

SolarSystem.defaultProps = {
  planets: [],
};

SolarSystem.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  })),
};

export default SolarSystem;
