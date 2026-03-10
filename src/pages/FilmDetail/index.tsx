import { useParams } from "react-router-dom";
import { useFilms } from "../../hooks/useFilm";

export const FilmDetail = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFilms();

    if (isLoading) return <p>Carregando...</p>;
    if (error)
        return <p>Erro ao carregar detalhe do filmes: {error.message}</p>;

    const film = data?.find((f) => f.id === id);

    if (!film) return <p>Filme não encontrado</p>;

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg shadow-mist-500 w-100 h-210 transition-transform hover:scale-105">
                <h2 className="text-2xl font-semibold mb-2 ">{film.title}</h2>
                <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-100 rounded mb-2 "
                />
                <p className="text-center p-2 ">{film.description}</p>
                <ul>
                    <li className="font-bold">Diretor: <span className="font-semibold">{film.director}</span></li>
                    <li className="font-bold">Produtor: <span className="font-semibold">{film.producer}</span></li>
                    <li className="font-bold">Ano de lançamento: <span className="font-semibold">{film.release_date}</span></li>
                    <li className="font-bold">Nota Rotten Tomatoes: <span className="font-semibold">{film.rt_score}</span></li>
                </ul>
            </div>
        </main>
    );
};
