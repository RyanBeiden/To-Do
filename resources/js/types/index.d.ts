export interface IFormInput {
  type: string;
  label: string;
  value: string;
  setValue: (key) => void;
  error: string | undefined;
  clearErrors: (...fields) => void;
}
