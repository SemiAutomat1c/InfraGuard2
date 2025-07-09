import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageContainer from './components/PageContainer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Industries from './pages/Industries'
import Careers from './pages/Careers'
import InfrastructureGuarding from './pages/services/InfrastructureGuarding'
import ConstructionSiteSecurity from './pages/services/ConstructionSiteSecurity'
import NetworkSecurity from './pages/services/NetworkSecurity'
import AccessControl from './pages/services/AccessControl'
import Construction from './pages/industries/Construction'
import Logistics from './pages/industries/Logistics'
import Industrial from './pages/industries/Industrial'
import Financial from './pages/industries/Financial'
import Government from './pages/industries/Government'
import IT from './pages/industries/IT'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/infrastructure-guarding" element={<InfrastructureGuarding />} />
              <Route path="/services/construction-site-security" element={<ConstructionSiteSecurity />} />
              <Route path="/services/network-security" element={<NetworkSecurity />} />
              <Route path="/services/access-control" element={<AccessControl />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/construction" element={<Construction />} />
              <Route path="/industries/logistics" element={<Logistics />} />
              <Route path="/industries/industrial" element={<Industrial />} />
              <Route path="/industries/financial" element={<Financial />} />
              <Route path="/industries/government" element={<Government />} />
              <Route path="/industries/it" element={<IT />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </PageContainer>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
