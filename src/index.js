import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
/* import { Provider } from 'react-redux'; */
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        <App />
      </LocalizationProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
