//sobrescreve a tipagem do express - tipagem global
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}
