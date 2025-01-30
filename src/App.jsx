import { Outlet } from 'react-router-dom';
import Footer from "./components/ui/custom/Footer";
import Header from "./components/ui/custom/Header";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
