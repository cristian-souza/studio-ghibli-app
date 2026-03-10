import { useFilms } from '../../hooks/useFilm'

export const Home = () => {
    const { data, isLoading, error } = useFilms(10)

    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>Erro ao carregar filmes: {error.message}</p>

    return (
        <ul>
            {data?.map((film) => (
                <li key={film.id}>
                    <h2>{film.title}</h2>
                    <a href="">
                        <img src={film.movie_banner} alt={film.title} />
                    </a>
                </li>
            ))}
        </ul>
    );
}