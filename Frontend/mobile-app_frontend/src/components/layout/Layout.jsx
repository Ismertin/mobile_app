import Header from './header/Header.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      <Header backLink='/' />
      {children}
    </div>
  )
}
export default Layout
