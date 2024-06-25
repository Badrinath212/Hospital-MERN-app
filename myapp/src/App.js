import Doctor from './Components/Doctor';
import Header from './Components/Header';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import AppStore from './Utils/AppStore';
import Patient from './Components/Patient';
import Appointments from './Components/Appointments';

function App() {
  const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<Header/>,
      children:[
        {
          path:"/doctor",
          element:<Doctor/>
        },
        {
          path:"/patient",
          element:<Patient/>
        },
        {
          path:"/appointments",
          element:<Appointments/>
        }
      ]
    }
  ])
  return (
    <div>
      <Provider store={AppStore}>
        <RouterProvider router={AppRouter}/>
      </Provider>
    </div>
  );
}

export default App;
