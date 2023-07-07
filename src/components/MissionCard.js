import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card-content">
        <p data-testid="mission-name" className="mission-card-name">{name}</p>
        <p data-testid="mission-year" className="mission-card-year">{year}</p>
        <p data-testid="mission-country" className="mission-card-country">{country}</p>
        <p
          data-testid="mission-destination"
          className="mission-card-destination"
        >
          {destination}

        </p>
        <hr style={ { gridArea: 'line' } } />
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
