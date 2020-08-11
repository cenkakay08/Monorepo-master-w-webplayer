import NetInfo from './node_modules/@react-native-community/netinfo';

class netinfoHelper {
  constructor(listener) {
    this.listener = listener;
  }

  addNetinfoEventListener() {
    NetInfo.addEventListener((state) => this.handleConnectivityChange(state));
  }

  removeNetinfoEventListener() {
    NetInfo.removeNetinfoEventListener();
  }

  handleConnectivityChange(state) {
    const condition = state.isConnected ? 'online' : 'offline';
    this.listener(condition);
  }
}

export default netinfoHelper;
