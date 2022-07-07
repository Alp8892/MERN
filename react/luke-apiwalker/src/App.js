import './App.css';



function App() {
  return (
    <div className="App">
      <label for="catagory">Search for: </label>
        <select name ="catagory" id ="people">
          <option value = "Planets">Planets</option>
          <option value = "Spaceships">Spaceships</option>
          <option value = "Vehicles">Vehicles</option>
          <option value = "People">People</option>
          <option value = "Films">Films</option>
          <option value = "Species">Species</option>
        </select>
        <p> ID:
        <input type ="text"></input>
        </p>
        <p>
          <button>Search</button>
        </p>
    </div>
  );
}

export default App;
