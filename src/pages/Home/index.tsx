import { Link } from "react-router-dom";
import { useFilms } from "../../hooks/useFilm";

export const Home = () => {
    const { data, isLoading, error } = useFilms();

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar filmes: {error.message}</p>;

    const filmesOrdenados = data
        ?.slice()
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <ul className="flex flex-col items-center gap-4 p-4 md:flex-row md:justify-center md:flex-wrap">
            {filmesOrdenados?.map((film) => (
                <li
                    key={film.id}
                    className="rounded-lg shadow-md w-90 h-65 p-2 flex flex-col items-center transition-transform hover:scale-105"
                >
                    <h2 className="text-lg font-semibold text-center">
                        {film.title}
                    </h2>
                    <Link to={`/FilmDetail/${film.id}`}>
                        <img
                            src={film.movie_banner}
                            alt={film.title}
                            className="w-full h-50 object-cover rounded mb-2"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
