import { Link } from 'react-router-dom'
import { useFilms } from '../../hooks/useFilm'

export const Home = () => {
    const { data, isLoading, error } = useFilms(20)

    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>Erro ao carregar filmes: {error.message}</p>

    const filmesOrdenados = data
        ?.slice()
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <ul>
            {filmesOrdenados?.map((film) => (
                <li key={film.id}>
                    <h2>{film.title}</h2>
                    <Link to={`/FilmDetail/${film.id}`}>
                        <img src={film.movie_banner} alt={film.title} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}