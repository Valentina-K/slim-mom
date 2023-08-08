import { Routes,Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import CalculatorPage from "pages/CalculatorPage";
import DiaryPage from 'pages/DiaryPage';
import NotFound from "pages/NotFound";


export const App = () => {
  return (    
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index  element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegistrationPage />}/>
        <Route path="/diary" element={<DiaryPage />}/>
        <Route path="/dailycalc" element={<CalculatorPage />}/>
        <Route path="*" element={<NotFound />} />
    </Route>
   </Routes>
   
   
  );
};

export default App;
