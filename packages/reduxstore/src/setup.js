import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { LocaleContextProvider } from 'i18n/LocaleContext';
import { keysReducer } from 'key-event-handler';
import createStore from './redux/store/createStore';
import Handler from './screens/Handler';
import withTheme from 'shared/src/styles/withTheme.js';
import GlobalStyle from 'shared/src/styles/GlobalStyle';

const store = createStore();
export const keysStore = createStore(keysReducer);



export default function setupApp(App) {
  const ThemedApp = withTheme(App);
  const Root = () => {
    return (
      <Provider store={store}>
        <PersistGate persistor={store.persistor} loading={null}>
          <LocaleContextProvider>
            <Provider store={keysStore}>
              <Handler keysStore={keysStore} />
              <React.Fragment>
							<ThemedApp />
							<GlobalStyle />
						</React.Fragment>
            </Provider>
          </LocaleContextProvider>
        </PersistGate>
      </Provider>
    );
  };
  return Root;
}
