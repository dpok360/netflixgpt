// import { Provider } from 'react-redux';
// import Body from './components/Body';
// import appStore from './utils/redux/store/appStore';

// function App() {
//   return (
//     <Provider store={appStore}>
//       <Body />;
//     </Provider>
//   );
// }

// export default App;
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/redux/store/appStore';

// Define your routes

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
