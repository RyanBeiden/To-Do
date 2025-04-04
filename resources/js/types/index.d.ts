import { route as routeFn } from 'ziggy-js';

declare global {
  const route: typeof routeFn;
}

export interface IFormInput {
  type: string;
  placeholder?: string;
  value: string;
  setValue: (key) => void;
  error: string | undefined;
  clearErrors: (...fields) => void;
}

export interface ICheckbox {
  id: number;
  checked: boolean;
  setValue: (key) => void;
}

export interface ITask<> {
  id: number;
  description: string;
  complete: boolean;
}

export interface IAuth {
  role?: IRole;
  permissions: Array; // @TODO: Format based on Policies
}

export interface IRole {
  id: number;
  name: string;
}
