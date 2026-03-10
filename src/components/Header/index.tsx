import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="bg-[url('/images/image.png')] text-white bg-cover bg-left bg-no-repeat h-70 flex flex-col items-center justify-center pt-10 md:h-100">
            <Link to="/" className="text-gray-400 mb-4 font-bold bg-blue-200 border-2 border-white rounded px-3 py-1 transition-transform hover:scale-105">
                <h2>Ghibli App</h2>
            </Link>
        </header>
    );
}