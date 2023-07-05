import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Search from "./components/Seacrh";
import NotFound from "./components/NotFound";
import Group from "./components/Group";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Router>
      <nav className="h-10 justify-center flex mt-1">
        <ul className="list-none flex">
          <li className="mx-2">
            <Link to="/"><img width="35" src={process.env.PUBLIC_URL + '/home.png'} alt="home" /></Link>
          </li>
          <li className="mx-2">
            <Link to="/cart"><img width="35" src={process.env.PUBLIC_URL + '/bag.png'} alt="bag" /></Link>
          </li>
          <li className="mx-2">
            <Link to="/category"><img width="35" src={process.env.PUBLIC_URL + '/menu.png'} alt="menu" /></Link>
          </li>
          <li className="mx-2">
            <Link to="/search"><img width="40" src={process.env.PUBLIC_URL + '/search.png'} alt="search" /></Link>
          </li>
          <li className="mx-2">
            <Link to="/account"><img width="30" className="pt-1" src={process.env.PUBLIC_URL + '/user.png'} alt="account" /></Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="group/:groupId" element={<Group />} />
        <Route path="menu/:menuId" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}