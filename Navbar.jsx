import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className='left-side'>
                <h3>Ridesphere</h3>
            </div>
            <div className='right-side'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact us</a>
                <a href="">Order Page</a>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar;