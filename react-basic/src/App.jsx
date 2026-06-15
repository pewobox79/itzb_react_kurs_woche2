import Heading from "./components/Heading";
import TextBlock from "./components/TextBlock";

export default function App() {

  // REACT JSX darf nur ein Elternelement (parent element) zurück geben...
  // FRAGMENT ist ein leerer TAG <>
  return <>
    <Heading
      title="mein Heading"
      text = "das ist der text für den texblock"
      >
        <h2>das ist ein kind element</h2>
        <p>zweites kindelement</p>
        <TextBlock text="das ist das dritte kind"/>
      </Heading>
    
    <TextBlock
      text="das ist mein textblock text"
      style="primary"
    />
  </>
}
