import { ErrAuth, ErrForm, ErrGlobal } from "./enum";

/** Basic payload style */
type BasicPayload = {
  code: ErrGlobal | ErrAuth | ErrForm;
  error: string;
  message: string;
  [k: string]: any;
};

/** Standard error interface */
export type StandardErrorInterface = {
  [k in keyof BasicPayload]: BasicPayload[k];
};
