export interface User {
    userId?: number;
    password?: string;
    email?: string;
    username?: string;
	loggedIn?: boolean;
}

export interface Todo {
    todoId?: number;
	userId?: number;
    todoName?: string;
    todoDescription?: string;
    todoSeverity?: string;
}

export interface Deferred<T> {
    (t: T): void;
}

export interface DialogData {
  animal: string;
  name: string;
}
