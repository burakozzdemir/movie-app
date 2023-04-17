import { useEffect, useState, useCallback } from "react";
import { Movie } from "../types/movie";
import debounce from "lodash.debounce";
import { convertToCamelCase } from "../utils/convertToCamelCase";
import apiClient from "../service/apiClient";

const API_KEY = process.env.REACT_APP_API_KEY;

const useFetchMovies = (searchValue: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async (query: string, pageNum: number) => {
    try {
      setLoading(true);
      const endpoint = query
        ? `search/movie?api_key=${API_KEY}&query=${query}&page=${pageNum}`
        : `discover/movie?api_key=${API_KEY}&page=${pageNum}`;
      const response = await apiClient.get(endpoint);
      const data = response?.data;

      if (data.results) {
        const results: Array<Movie> = convertToCamelCase<Array<Movie>>(
          data.results
        );

        setMovies((prevMovies) => [...prevMovies, ...results]);
        setPage(pageNum + 1);
        setHasMore(data.page < data.total_pages);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (error) {
      setHasMore(false);
      setMovies([]);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const debouncedSearch = debounce((term: string) => {
      setMovies([]);
      setPage(1);
      fetchMovies(searchValue, 1);
    }, 200);

    if (searchValue.length === 0 || searchValue.length >= 2) {
      debouncedSearch(searchValue);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchValue, fetchMovies]);

  const fetchMore = () => {
    fetchMovies(searchValue, page);
  };

  return { movies, fetchMore, hasMore, loading };
};

export default useFetchMovies;
