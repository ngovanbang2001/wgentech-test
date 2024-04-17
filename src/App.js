import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import MainLayout from './layout/main-layout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
