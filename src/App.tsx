import {Route, Routes} from "react-router-dom";
import Header from "./modules/Header";
import Books from "./pages/Books";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={''} element={<Books />}/>
        <Route path={'cart'} element={<Cart />}/>
      </Routes>
    </>
  )
}

export default App
