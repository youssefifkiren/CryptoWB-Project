import { Loader, Home, Navbar, Footer, Services, Transactions } from './components';
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;
