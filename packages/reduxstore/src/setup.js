import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from './redux/store/createStore';
import { KeyBinder, keysReducer } from 'key-event-handler';
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
              <KeyBinder
                store={keysStore}
                onVolUp={() => {
                  console.log('on vol up - global');
                }}
                onVolDown={() => {
                  console.log('on vol down - global');
                }}
              />
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
