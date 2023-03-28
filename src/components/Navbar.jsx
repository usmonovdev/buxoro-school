const Navbar = ({ setTheme, isDarkTheme }) => {
  return (
    <div onClick={() => setTheme(isDarkTheme? "light" : "dark")}>
        {isDarkTheme ? <button>🌛</button> : <button>🌞</button>}
    </div>
  )
}

export default Navbar