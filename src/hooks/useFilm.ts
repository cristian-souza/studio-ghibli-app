import { useEffect, useState } from "react";
import type { Film } from "../types/types";

export const useFilms = (limit: number = 20) => {
    const [films, setFilms] = useState<Film[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        const fetchFilms = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://ghibliapi.vercel.app/films?limit=${limit}`,
                );
                const data = await response.json();
                if (isMounted) {
                    setFilms(data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) setError(err as Error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };
        fetchFilms();
        return () => {
            isMounted = false;
        };
    }, [limit]);

    return { data: films, isLoading, error };
};
