import { BrowserRouter, Routes, Route } from "react-router-dom";
import clasese from "./App.module.css";
import { AuthProvider } from "./Context/ThemeContext";

import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/SignIn/SignIn";
import SignDone from "./Pages/SignIn/SignDone";
import Detail from "./Pages/Detail/Detail";
import WishList from "./Pages/Wishlist/WishList";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <div className={clasese.background}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signdone" element={<SignDone />} />
            <Route path="/wishlist" element={<WishList />} />
            {/* NotFound 만들어야함 */}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
