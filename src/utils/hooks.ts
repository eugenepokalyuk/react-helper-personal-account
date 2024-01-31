import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import rootReducer from "../services/reducers";
import { store } from "../services/store";

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;