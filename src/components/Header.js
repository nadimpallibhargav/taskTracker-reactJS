const Header = ({title}) => {
  return (
    <>
        <header>
            <h1 style={h1Styles}>{title}</h1>
        </header>
    </>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

const h1Styles = {
  color: 'red'
}

export default Header

