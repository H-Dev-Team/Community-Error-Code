import { ErrAuth, ErrForm, ErrGlobal } from "./enum";

/** Basic payload style */
type BasicPayload = {
  code: ErrGlobal | ErrAuth | ErrForm /** Applicatin Error Code */;
  error: string /** Error message for API Payload */;
  message:
    | string
    | string[] /** Message or array of message to show for client if error occured  */;
  [k: string]: any;
};

/** Standard error interface */
export type StandardErrorInterface = {
  [k in keyof BasicPayload]: BasicPayload[k];
};
