
import './App.css'
import { DBContextProvider } from './components/Util/DBContext.jsx';
import PlaceForm from './components/PlaceForm.jsx';
import { AnalyticsContextProvider } from './components/Util/AnalyticsContext.jsx';
import Places from './components/Places.jsx';


function App() {
  
  return (
    <>
    <DBContextProvider>
    <AnalyticsContextProvider>
    <h1 className='title'>ABRA TASK</h1>
    <PlaceForm/>
    <Places/>
    </AnalyticsContextProvider>
    </DBContextProvider>
    </>
  );

}

export default App;


