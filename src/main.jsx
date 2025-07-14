import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes'; // ✅ Import AppRoutes


createRoot(document.getElementById('root')).render(
  <AppRoutes /> 
);
