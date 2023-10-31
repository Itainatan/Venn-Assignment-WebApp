import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../constants";
import { toast } from "react-toastify";
import { Player } from "../types";

export default function useSearch() {
  const [data, setData] = useState<Player | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    id && fetchData();
  }, [id]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(`${API_URL}/character/${id}`);

      setData(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("player not exist");
      setIsLoading(false);
    }
  }, [id]);

  return { data, isLoading, setId };
}
