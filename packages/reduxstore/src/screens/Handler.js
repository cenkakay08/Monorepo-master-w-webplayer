import React from 'react';
import { connect } from 'react-redux';
import { KeyBinder } from 'key-event-handler';
import PropTypes from 'prop-types';

const Handler = ({ network, theme, keysStore }) => {
  if (network.offline && !network.isInitiated) console.log('network offline');
  if (network.online && !network.isInitiated) console.log('network online');
  return (
    <KeyBinder
      store={keysStore}
      onVolUp={() => {
        console.log('on vol up - global');
      }}
      onVolDown={() => {
        console.log('on vol down - global');
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  //  theme: state.app.theme,
  network: state.network,
});

Handler.propTypes = {
  network: PropTypes.object,
  theme: PropTypes.object,
  keysStore: PropTypes.object,
};

export default connect(mapStateToProps)(Handler);
