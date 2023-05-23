import Header from "./components/layout/header/Header.jsx";
import Layout from "./components/layout/Layout.jsx";


const App = () => {
  return (
    <Layout>
      <div>
        <Header backLink="/"/>
        <p>Workouts</p>
      </div>
    </Layout>
  )
}

export default App
