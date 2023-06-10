import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './screens/Main/Main';
import Step1 from './screens/Step1/Step1'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/FrontCloudCamp_test-assignment' element={<Main/>}/>
        <Route path='/create' element={<Step1/>}/>
      </Routes>
    </div>
  );
}

export default App;
