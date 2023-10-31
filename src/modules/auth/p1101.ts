import { ErrAuth } from "src/enum";
import { StandardErrorInterface } from "src/standard.interface";

export const P1101: StandardErrorInterface = {
  code: ErrAuth.P1101,
  error: "CREDENTIAL_INCORRECT",
  message: "Fail to login",
};
