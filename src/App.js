import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className='col-sm-6'>
          <div className="form-group">
            <div className='input-group date' id='datetimepicker3'>
              <input type='text' className="form-control" />
              <span className="input-group-addon">
                <span className="glyphicon glyphicon-time"></span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
