import { useForm } from "react-hook-form";
import { FormValues } from "./types";
import { useCallback } from "react";

export default function useSearchField({
  onSubmit,
}: {
  onSubmit: (search: string) => void;
}) {
  const { handleSubmit, getValues, register } = useForm<FormValues>();

  const onClickSubmit = useCallback(async () => {
    const { search } = getValues();
    onSubmit(search);
  }, []);

  return {
    onClickSubmit: handleSubmit(onClickSubmit),
    register,
    // search,
  };
}
