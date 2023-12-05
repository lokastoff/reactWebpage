import { Home } from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"
import { Pricing } from "./pages/pricing/Pricing"
import { Products } from "./pages/products/Products"
import { PatchRelease } from "./pages/patchrelease/Patchrelease"
import { Auth } from "./pages/auth/Auth"
import { Myacc } from "./pages/accountinfo/Myacc"
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path ='/products' element={<Products/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/patchRelease' element={<PatchRelease/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/personalinfo' element={<Myacc/>}></Route>
    </Routes>

  )
}

export default App
