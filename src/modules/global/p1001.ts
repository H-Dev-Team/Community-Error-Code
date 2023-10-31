import { ErrGlobal } from "src/enum";
import { StandardErrorInterface } from "src/standard.interface";

export const P1001: StandardErrorInterface = {
  code: ErrGlobal.P1001,
  error: "SERVER_CONNECTION_LOST",
  message: "Server Connection Lost",
};
