import { Dispatch } from "react";
import { THeader } from "../../../types/zodglobal.types";
import { GlobalActions, GlobalActionsTypes } from "./GlobalContext";

const { SET_HEADER } = GlobalActionsTypes;
const SetHeader = (dispatch: Dispatch<GlobalActions>, header: THeader) => {
  dispatch({
    type: SET_HEADER,
    header: header,
  });
};

export { SetHeader };
