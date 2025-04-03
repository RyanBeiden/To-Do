export interface IFormInput {
  type: string;
  placeholder?: string;
  value: string;
  setValue: (key) => void;
  error: string | undefined;
  clearErrors: (...fields) => void;
}

export interface IAuth {
  auth: {
    role?: IRole;
    permissions: Array; // @TODO: Format based on Policies
  };
}

export interface IRole {
  id: number,
  name: string,
};
