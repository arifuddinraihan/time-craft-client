import { RouterProvider } from 'react-router-dom';
import './App.css';
import mainRoute from './Routes/MainRoute/MainRoute';

function App() {
  return (
    <div className=''>
      <RouterProvider router={mainRoute}>

      </RouterProvider>
    </div>
  );
}

export default App;
