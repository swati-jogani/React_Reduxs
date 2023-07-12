// import logo from './logo.svg';
// import './App.css';
// import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
// import Header from './containers/Header';
// import ProductListing from './containers/ProductListing';
// import ProductDetail from './containers/ProductDetail';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />

//         <Routes path='/' exact component={ProductListing} />
//         <Routes path='/product/:productId' exact component={ProductDetail} />
//         <Routes>404 Not Found</Routes>

//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
// import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
