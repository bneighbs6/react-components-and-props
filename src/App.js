import "./App.css";
import WelcomeBack from "./WelcomeBack";
import Quote from "./Quote";

const quote = {
  text: "I am the greatet of all time. Thank you.",
  author: "Ricky Henderson",
};

function App() {
  return (
    <>
      <WelcomeBack name="FUCKER" />
      <Quote quote={quote} />
    </>
  );
}

export default App;