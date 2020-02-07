import React from 'react';
import SideBar from './components/SideBar';
import Video from './components/Video';
import { Provider } from 'react-redux'
import store from '../src/store'

function App() {
  return (
    <div>
      <Provider store = {store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  );
}

export default App;
