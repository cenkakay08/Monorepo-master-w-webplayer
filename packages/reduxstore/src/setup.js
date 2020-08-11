import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from './redux/store/createStore';
import { LocaleContextProvider } from 'i18n/LocaleContext';
import Handler from './screens/Handler';

const store = createStore();

export const keysStore = createStore(keysReducer);

export default function setupApp(App) {
  const Root = () => {
    return (
      <Provider store={store}>
        <PersistGate persistor={store.persistor} loading={null}>
          <LocaleContextProvider>
            <Provider store={keysStore}>
              <Handler />
              <App />
            </Provider>
          </LocaleContextProvider>
        </PersistGate>
      </Provider>
    );
  };

  return Root;
}
