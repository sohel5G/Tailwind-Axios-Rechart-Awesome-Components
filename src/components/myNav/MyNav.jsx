import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

function MyNav() {

    const [navOpen, setNavOpen] = useState(true);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }
    ];

    return (
        <>
            <nav className='bg-gray-200'>
                <div className='md:hidden' onClick={() => setNavOpen(!navOpen)} >
                    {navOpen === true ?
                        (
                            <ul className='flex justify-center p-5 text-2xl'> <GiHamburgerMenu /> </ul>
                        ) :
                        (
                            <ul className='flex justify-center p-5 text-2xl'> <AiOutlineClose /> </ul>
                        )
                    }
                </div>
                <ul className={`md:flex p-5 justify-center items-center absolute md:static bg-gray-200 left-0 min-w-full duration-1000 ${navOpen ? '-top-52' : 'top-16'}`}>
                    {
                        routes.map(route => <li key={route.id} className=" mr-2 my-2 overflow-hidden">
                            <a href={route.path} className="text-white px-1 py-3 bg-red-600 hover:bg-red-800 px-4"> {route.name} </a>
                        </li>)
                    }
                </ul>
            </nav>
        </>
    )
}

export default MyNav;

