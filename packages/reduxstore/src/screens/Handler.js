import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyBinder, keysReducer } from 'key-event-handler';
const Handler = ({ network, theme }) => {
  if (network.offline && !!network.isInitiated) alert('network offline');
  if (network.online && !!network.isInitiated) alert('network online');
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
  //theme: state.app.theme,
  network: state.network,
});

export default connect(mapStateToProps)(Handler);
