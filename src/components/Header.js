import Button from './Button'

const Header = () => {

  const clicked = () => {
    console.log('click')
  }

  const clickedGreen = () => {
    console.log('green click')
  }
  
  return (
    <>
        <header>
            <h1>Task Tracker</h1>
            <Button onClick={clicked} text='hi' />
            <Button onClick={clickedGreen} color='green' text='bye' />
        </header>
    </>
  )
}

export default Header

