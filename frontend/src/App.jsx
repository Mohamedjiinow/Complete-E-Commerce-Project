import {Routes, Route,} from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/productDisplay";
import Addproduct from "./Components/Addproduct";
import UpdateProduct from "./Components/updateproduct";
import Carts from "./Components/Carts";
import Customer from "./Components/CustomerReg";
import CustomerLogin from "./Components/customerLogin";
import DashboardCards from "./Components/cards";
import Dashboard from "./Components/Dashboard";
import ProtectedRouter from "./Components/protectedRouter";

function App(){
  return <Routes>
    <Route path="/product" element={<Product />}/>
    <Route path="/cart" element={<Carts />}/>
    <Route path="/" element= {<Home /> }/>
    <Route path="/addproduct" element= {<Addproduct /> }/>
    <Route path="/updateproduct/:id" element= {<ProtectedRouter><UpdateProduct /> </ProtectedRouter> }/>
    <Route path="/customerReg" element= {<Customer /> }/>
    <Route path="/cards" element= { <ProtectedRouter> <DashboardCards /> </ProtectedRouter>}/>
    <Route path="/dash" element= {<Dashboard />}/>
    <Route path="/customerlogin" element= {<CustomerLogin /> }/>
  </Routes>
}
export default App