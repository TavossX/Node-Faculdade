import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Auth/Login/index.jsx";
import Register from "./pages/Auth/Register/index.jsx";
import Header from "./Component/Header/index.jsx";
import Footer from "./Component/Footer/index.jsx";
import Container from "./Component/Container/index.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import Message from "./Component/Message/index.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Message />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}
export default AppRoutes;
