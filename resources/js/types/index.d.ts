import { route as routeFn } from 'ziggy-js';

declare global {
  const route: typeof routeFn;
}

export interface ITask {
  id: number;
  description: string;
  complete: boolean;
  canEdit: boolean;
}

export interface IAuth {
  role?: IRole;
  permissions: IPermissions;
}

export interface IPermissions {
  task: {
    can_edit: boolean;
  };
}

export interface IRole {
  id: number;
  name: string;
}
