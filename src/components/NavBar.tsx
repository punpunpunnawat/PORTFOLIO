const NavBar = () => {
    return (<div className="flex flex-row px-32 justify-between items-center h-16 w-full bg-black/20 fixed backdrop-blur-3xl text-white z-50 border-gradient-whitep-bottom">
        <h4 className="font-family-audrey font-normal text-2xl">PORTFOIO</h4>
        <div className="flex flex-row gap-8">
            <button>ABOUT</button>
            <button>PROJECT</button>
            <button>INTERNSHIP</button>
            <button>CONTACT</button>
        </div>
    </div>)
}

export default NavBar;