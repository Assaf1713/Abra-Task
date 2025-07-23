
import './App.css'
import { DBContextProvider } from './components/Util/DBContext.jsx';
import PlaceForm from './components/PlaceForm.jsx';
import Places from './components/Places.jsx';


function App() {
  
  return (
    <>
    <DBContextProvider>
    <h1 className='title'>ABRA TASK</h1>
    <PlaceForm/>
    <Places/>
    </DBContextProvider>
    </>
  );

}

export default App;


