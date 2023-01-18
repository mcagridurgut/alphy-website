import Navbar from "./components/Navbar"
import { useState } from "react";
import { useEffect } from "react";
// import Account from "./routes/Account.jsx.old";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import Article from "./components/Article";
// import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
// import { SessionAuth } from "supertokens-auth-react/recipe/session";
// import { SuperTokensConfig } from "./routes/SuperTokenComponents/Config";
// import Home2 from "./supertokens_home"
import Footer from "./components/Footer";


function App() {

  const [data, setData] = useState([])
  const url = `${process.env.REACT_APP_API_URL}/summaries`
  const location = useLocation();
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data)
      })
  }, [url])

  return (

    <div className="App">
      <Navbar />
      <Routes>
        {/* {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))} */}
        {/* <Route path="/" element={<SessionAuth>
            <Home2 />
          </SessionAuth>} /> */}
        <Route path="/" element={<Home data={data} />} />
        <Route path="/article/:article_ID" element={
        /* <SessionAuth><Article data={data} /></SessionAuth> */
        <Article data={data} />}/>
      </Routes>
      {location.pathname === "/" ? (<Footer />) : (null)}
    </div>

  );

}

export default App;

