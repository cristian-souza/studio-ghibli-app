import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="p-3 bg-[#282c34] text-white">
            <Link to="/" className="text-white no-underline">
                <h2>Ghibli App</h2>
            </Link>
        </header>
    );
}