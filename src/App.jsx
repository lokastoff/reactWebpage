import { Home } from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"
import { Pricing } from "./pages/pricing/Pricing"
import { Products } from "./pages/products/Products"
import { PatchRelease } from "./pages/patchrelease/Patchrelease"
import { Auth } from "./pages/auth/Auth"
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path ='Products' element={<Products/>}></Route>
      <Route path='/Pricing' element={<Pricing/>}></Route>
      <Route path='/PatchRelease' element={<PatchRelease/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
    </Routes>

  )
}

export default App
