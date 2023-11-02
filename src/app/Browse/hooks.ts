import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../constants";
import { Data } from "./types";
import { useQuery } from "react-query";
import getMovies from "@src/services/movies";

export default function useBrowse() {
  const [page, setPage] = useState<number>(1);
  const [title, setTitle] = useState<string>("");

  const { isLoading, error, data, refetch } = useQuery(API_URL, () =>
    getMovies({ page, title })
  );

  useEffect(() => {
    refetch();
  }, [page, title]);

  const onSubmit = useCallback(
    (value: string) => {
      if (value.toLowerCase() !== title.toLowerCase()) {
        setTitle(value);
        setPage(1);
      }
    },
    [title]
  );

  return { data, isLoading, page, onSubmit, setPage };
}
