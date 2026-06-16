import HomePage from "./pages/HomePage";
import './App.css'
import CounterFeature from "./features/CounterFeature";
export default function App() {
console.log("app rendered")
  // REACT JSX darf nur ein Elternelement (parent element) zurück geben...
  // FRAGMENT ist ein leerer TAG <>
  return <HomePage>
    <CounterFeature />
  </HomePage>
}
