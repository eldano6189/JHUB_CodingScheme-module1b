import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./pages/landing-page/landingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
