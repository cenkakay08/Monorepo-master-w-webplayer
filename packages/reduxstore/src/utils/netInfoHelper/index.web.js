class netInfoHelper {
  constructor(listener) {
    this.listener = listener;
  }
  addNetinfoEventListener() {
    try {
      window.addEventListener(
        'online',
        this.handleConnectivityChange.bind(this),
      );
      window.addEventListener(
        'offline',
        this.handleConnectivityChange.bind(this),
      );
    } catch (error) {
      console.log('error', error);
    }
  }
  removeNetinfoEventListener() {
    window.removeEventListener(
      'online',
      this.handleConnectivityChange.bind(this),
    );
    window.removeEventListener(
      'offline',
      this.handleConnectivityChange.bind(this),
    );
  }
  handleConnectivityChange(event) {
    const condition = event.type === 'offline' ? 'offline' : 'online';
    this.listener(condition);
  }
}
export default netInfoHelper;
