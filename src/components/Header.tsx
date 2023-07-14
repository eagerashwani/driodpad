import hamburgerTilt from '../assets/hamburgerTilt.svg'

const Header = () => {
  return (
    <div className='flex p-8'>
     <img src={hamburgerTilt} className="pr-3" alt="Vite logo" />
    <p>DroidPad</p>
    </div>
  )
}

export default Header