import React, { Component } from 'react';
import { connect } from 'react-redux';

const Handler = ({ network, theme }) => {
  if (network.offline && !!network.isInitiated) alert('network offline');
  if (network.online && !!network.isInitiated) alert('network online');
  return null;
};

const mapStateToProps = (state) => ({
  //theme: state.app.theme,
  network: state.network,
});

export default connect(mapStateToProps)(Handler);
