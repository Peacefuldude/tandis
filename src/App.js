import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./Components/Farsi/Pages/Home/Home";
import Details from "./Components/Farsi/Services/Details/Details";
import ContactUs from "./Components/Farsi/Pages/ContactUs/ContactUs";

// Services
import ICUCARE from "./Components/Farsi/ServicesCardsNoAdmin/ICUCARE/ICUCARE";

// Admin Login
import AdminVerfi from "./Components/Farsi/AdminPage/AdminVerfi/AdminVerfi";
import AdminPage from "./Components/Farsi/AdminPage/AdminPage/AdminPage";
import Users from "./Components/Farsi/AdminPage/AdminPage/Users/Users";
import DeleteServices from "./Components/Farsi/AdminPage/AdminPage/Delete Services/DeleteServices";
import AddServices from "./Components/Farsi/AdminPage/AdminPage/Add Service/AddServices";
import EditServices from "./Components/Farsi/AdminPage/AdminPage/Edit Services/EditServices";
import EditDetails from "./Components/Farsi/AdminPage/AdminPage/Edit Services/EditDetails/EditDetails";
import Requests from "./Components/Farsi/AdminPage/AdminPage/Requests/Requests";
import Resume from "./Components/Farsi/AdminPage/AdminPage/Work with us/Resume";

// Account
import MyAccount from './Components/Farsi/Pages/MyAccount/MyAccount'
import EditAccount from "./Components/Farsi/Pages/MyAccount/EditAccount/EditAccount";
import DeleteAccount from "./Components/Farsi/Pages/MyAccount/DeleteAccount/DeleteAccount"

import MyEditor from "./Components/Farsi/WIZYWIG/newwiz";

// Services Context
// In case if it did not work:
// Two possible errors may have ocurred. first is that the fakeapistore is filtered so we cant reach the data
// remember in the bellaluna same thing happenned. second possiblity is that you wrapped the context around the Home
// components while not using it in it, instead using it inside another component inside the Home component.
// you can try wrapping that component inside the home compoentn. but remember even in this case the possibilty of
// filtering is presence.
import ServicesContextProvider from "./Components/Farsi/Services/ServicesContextProvider/ServicesContextProvider";

function App() {
  return (
    <ServicesContextProvider>
      <BrowserRouter>
        <Routes>

          {/* Home, Services, Blogs */}
          <Route path="/home" element={<  Home/>} />
          <Route path="/home/:id" element={<  Details/>} />
          <Route path="/contactus" element={<  ContactUs/>} />
          <Route path="/icucare" element={<  ICUCARE/>} />

          {/* Forms */}
          <Route path="/wiz" element={<  MyEditor/>} />

          {/* Admin Page */}
          <Route path="/admin" element={<  AdminVerfi/>} />
          <Route path="/adminPage" element={<  AdminPage/>} />
          <Route path="/users" element={<  Users/>} />
          <Route path="/deleteServices" element={<  DeleteServices/>} />
          <Route path="/addServices" element={<  AddServices/>} />
          <Route path="/editServices" element={<  EditServices/>} />
          <Route path="/editServices/:id" element={<  EditDetails/>} />
          <Route path="/deleteRequests" element={<  Requests/>} />
          <Route path="/resume" element={<  Resume/>} />

          {/* My Account Page */}
          <Route path="/myaccount" element={<  MyAccount/>} />
          <Route path="/editaccount" element={<  EditAccount/>} />
          <Route path="/deleteaccount" element={<  DeleteAccount/>} />

          {/* Navigate to home */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </ServicesContextProvider>
  );
}

export default App;
