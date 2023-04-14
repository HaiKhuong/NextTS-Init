export interface CustomizationState {
    isOpen: [];
    defaultId: string;
    fontFamily: string;
    borderRadius: number;
    opened: boolean;
    navType?: string;
}

// RootState Reducer
export interface RootState {
    customization: CustomizationState;
}
