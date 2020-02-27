import React from "react";
import RootContainer from "./src/navigation/navigation";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import {persistor, store} from './src/redux/store';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;


