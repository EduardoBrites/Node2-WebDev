import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <>
        <header className="flex justify-around bg-black text-white pb-4 pt-4">
            <span>LOGO </span>
            <h1>Bem-Vindo ao CineApp</h1>
            <Navbar/>
        </header>
        </>
    );
}

export default Header;