type Props = {
  placeholder: string;
  onSubmit: (search: string) => void 
  required?: boolean;
};

type FormValues = {
  search: string;
};

export type { Props, FormValues };
