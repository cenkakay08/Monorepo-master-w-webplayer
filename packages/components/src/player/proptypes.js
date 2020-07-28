import PropTypes from 'prop-types';

/**
 * propType definitions for MoviePlayer component
 */
export const MoviePlayerPropTypes = {
  /**
   * MoviePlayer url to play
   */
  url: PropTypes.string.isRequired,
  /**
   * MoviePlayer min width
   */
  width: PropTypes.number,
  /**
   * MoviePlayer min height
   */
  height: PropTypes.number,
};

/**
 * default values for width and height
 */
export const defaultProps = {
  width: 500,
  height: 500,
};
