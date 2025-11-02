import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home/Home";
import { BestilTid } from "./pages/BestilTid/BestilTid";
import { OmOs } from "./pages/OmOs/OmOs";
import { Opslagstavle } from "./pages/Opslagstavle/Opslagstavle";
import { PraktiskeOplysninger } from "./pages/PraktiskeOplysninger/PraktiskeOplysninger";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/bestil-tid" element={<BestilTid />} />
            <Route path="/om-os" element={<OmOs />} />
            <Route path="/opslagstavle" element={<Opslagstavle />} />
            <Route path="/praktiske-oplysninger" element={<PraktiskeOplysninger />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
