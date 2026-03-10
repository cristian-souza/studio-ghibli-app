import { useParams } from "react-router-dom";
import { useFilms } from "../../hooks/useFilm";

export const FilmDetail = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFilms(10);

    if (isLoading) return <p>Carregando...</p>;
    if (error)
        return <p>Erro ao carregar detalhe do filmes: {error.message}</p>;

    const film = data?.find((f) => f.id === id);

    if (!film) return <p>Filme não encontrado</p>;

    return (
        <div>
            <h2>{film.title}</h2>
            <img src={film.image} alt={film.title} />
            <p>{film.description}</p>
            <ul>
                <li>Diretor: {film.director}</li>
                <li>Produtor: {film.producer}</li>
                <li>Ano de lançamento: {film.release_date}</li>
                <li>Nota Rotten Tomatoes: {film.rt_score}</li>
            </ul>
        </div>
    );
};
