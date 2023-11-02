import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../constants";
import { Data } from "./types";

export default function useBrowse() {
  const [data, setData] = useState<Data | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>("");

  useEffect(() => {
    !isLoading && fetchData();
  }, [page, searchName]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `${API_URL}?page=${page}`
      );

      setData(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("player not exist");
      setIsLoading(false);
    }
  }, [searchName, page]);

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
