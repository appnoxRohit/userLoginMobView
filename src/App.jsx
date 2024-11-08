import "./App.css";
import ContactPage from "./Pages/ContactPage";
import MediaTrade from "./Pages/MediaTrade";
import MessageInvitation from "./Pages/MessageInvitation";
import SearchPage1 from "./Pages/SearchPage1";
import SearchResultPage from "./Pages/SearchResultPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/contactPage" element={<ContactPage />}/>
            <Route path="/searchPage1" element={<SearchPage1 />} />
            <Route path="/searchResultPage" element={<SearchResultPage />} />
            <Route path="/" element={<MediaTrade />} />
            <Route path="/messageInvitation" element={<MessageInvitation />} />
            {/* <Route path="/new-route" element={<NewPage />} /> */}



          
        </Routes>
      </BrowserRouter>

      {/* <ContactPage/> */}
      {/* <SearchPage1/> */}
      {/* <SearchResultPage/> */}
    </>
  );
}

export default App;
