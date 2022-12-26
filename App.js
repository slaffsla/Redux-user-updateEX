import "./App.css";
import { Person } from "./components/Person";
export default function App() {
  return (
    <div className="App">
      <h1>Content here</h1>
      <br></br>
      <Person
        name="Pedro"
        email="pedro@pedro.com"
        age={21}
        isMarried={true}
        friends={["jes", "joe", "Jacky", "screech"]}
      />
    </div>
  );
}
