import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main.css';
import './styles/global.css';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Invoices from './routes/manage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Staff from './routes/staff';
import Settings from './routes/settings';
import Calendar from './routes/calendar';
import Analytics from './routes/analytics';
import Manage from './routes/manage';
import Login from './routes/login';
import Register from './routes/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <BrowserRouter>
        <Header/>
        <div className="flex flex-col sm:flex-col md:flex-row">
        <Sidebar/>
          <div className="pt-[4.5rem] w-full">
            <Routes>
                <Route path="/" element={<Staff />} />
                <Route path="manage" element={<Manage/>} />
                <Route path="staff" element={<Staff/>} />
                <Route path="settings" element={<Settings/>} />
                <Route path="calendar" element={<Calendar/>} />
                <Route path="analytics" element={<Analytics/>} />
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  </>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
