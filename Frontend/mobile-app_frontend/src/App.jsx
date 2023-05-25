import Hamburger from "./components/layout/hamburger/Hamburger.jsx";
import Header from "./components/layout/header/Header.jsx";
import Layout from "./components/layout/Layout.jsx";

const App = () => {
  return (
    <Layout>
      <div>
        <Header backLink='/' />
        <Hamburger />
      </div>
    </Layout>
  )
}

export default App
