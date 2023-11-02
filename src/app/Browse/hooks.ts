import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../constants";
import { Data } from "./types";
import { useQuery } from "react-query";
import getMovies from "@src/services/movies";

export default function useBrowse() {
  const [page, setPage] = useState<number>(1);
  const [searchName, setSearchName] = useState<string>("");

  const { isLoading, error, data, refetch } = useQuery(API_URL, () =>
    getMovies({ page })
  );

  useEffect(() => {
    refetch();
  }, [page, searchName]);

  const onSubmit = useCallback(
    (value: string) => {
      if (value.toLowerCase() !== searchName.toLowerCase()) {
        setSearchName(value);
        setPage(1);
      }
    },
    [searchName]
  );

  return { data, isLoading, page, onSubmit, setPage };
}
