import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCustomDispatch = () => useDispatch<AppDispatch>();
