// App.js
import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <WelcomeBack name="Bitch" />
      <WelcomeBack name="Fucker" />
      <WelcomeBack />
      <Footer />
    </>
  );
}

export default App;
