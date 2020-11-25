import logo from "./logo.svg";
import "./App.css";
import DatetTimePicker from "./DateTimePicker";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <DatetTimePicker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
