import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound'; // Create this page if you don't already have it

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Route>
            <Route path="/" element={<Home />} />
            {/* Fallback route for unmatched paths */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;