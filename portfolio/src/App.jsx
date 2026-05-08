import './App.css'
import Footer from './components/Footer';
import TopMenu from './components/TopMenu';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';


function App() {
  
  return (
    <>
    <div className="container">
    <TopMenu items={["🏠 Home", "🙍🏽‍♂️ About", "📺 Projects", "📞 Contact"]} />
    <div>
      <AboutUs />
    </div>
    </div>
    <Footer />
    </>
  )
}

export default App
