# `key-event-handler`

> Package for capturing global, screen or component based key events and give easy usage/emitting.

## *Configure Package*

First add import statement below to ``setup.js`` in your ``shared`` library.
```
import { KeyBinder, keysReducer } from 'key-event-handler';
``` 

Then create and export keysStore.

```
export const keysStore = createStore(keysReducer);
```

In your ``reducers.js (shared/src/redux/modules/reducers.js)`` file, add import statement below and add ``keysReducer`` to ``combineReducers`` method.

```
import { keysReducer } from 'key-event-handler';

const rootReducer = combineReducers({
	app: appReducer,
	keys: keysReducer // <----- ADD THIS LINE
});
```

## *Usage*

### *Catch Global Key Events*

In ``setup.js`` add a new provider with ``keysStore`` and ``KeyBinder`` component to ``React.Fragment``.

```
const Root = () => {
  return (
    <Provider store={store}>
      <Provider store={keysStore}>
        <PersistGate persistor={store.persistor} loading={null}>
          <React.Fragment>

            <KeyBinder
              store={keysStore}
              onVolUp={() => { console.log('on vol up - global'); }}
              onVolDown={() => { console.log('on vol down - global'); }}
            />

            <ThemedApp />
            <GlobalStyle />
          </React.Fragment>
        </PersistGate>
      </Provider>
    </Provider>
  );
};
```

With this usage, you can catch the ``Volume Up`` and ``Volume Down`` events globally and these key events would work in every screen.

**Do not forget to pass ``keysStore`` as ``store`` prop in ``KeyBinder`` component !!!**

### *Screen Based Key events*

In related screen, import ``keysStore`` from ``setup.js`` and add ``KeyBinder`` component to return statement as below to render this component.

```
<KeyBinder
  store={keysStore}
  onLeft={() => { console.log('on left binder home'); }}
  onRight={() => { console.log('on right binder home'); }}
  onUp={() => { console.log('on up binder home'); }}
  onDown={() => { console.log('on down binder home'); }}
  onOk={() => { console.log('on ok from home'); }}
/>
```

With this usage, you can catch the ``Left``, ``Right``, ``Up``, ``Down`` and ``Ok`` keys events on related screen.

## *Notes*

- ``Prop functions`` in ``KeyBinder`` component are documented with ``JsDoc`` and you can see what prop functions KeyBinder component has via ``intellisense``.

- You can do whatever you want in these prop functions with related key event.
