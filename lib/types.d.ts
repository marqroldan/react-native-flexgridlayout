import React, { PropsWithChildren } from 'react';
import { ViewStyle } from 'react-native';
export declare type Props__Row = PropsWithChildren<{
    style?: ViewStyle;
}>;
export declare type Props__Column = PropsWithChildren<{
    style?: ViewStyle;
}>;
export declare type Props__Cell = PropsWithChildren<{
    style?: ViewStyle;
    vertical?: boolean;
}>;
export declare type Props__Gap = {
    gap?: number;
};
export declare type RenderColumn = (props: Props__Column) => React.ReactNode | JSX.Element;
export declare type RenderRow = (props: Props__Row) => React.ReactNode | JSX.Element;
export declare type Gaps = {
    rowGap?: number;
    colGap?: number;
    gap?: number;
};
export declare type Renders = {
    renderItem: (item: any) => React.ReactNode | JSX.Element;
    renderColumn?: RenderColumn;
    renderRow?: RenderRow;
};
export declare type Props__FlexGridLayoutBase = Renders & Gaps & {
    cellStyle?: ViewStyle;
};
export declare type Data = any | any[] | Props__FlexGridLayoutBase | Props__FlexGridLayoutBase[];
export declare type Props__FlexGridLayout = Renders & Gaps & {
    data: Data;
    shouldFlex?: boolean;
};
//# sourceMappingURL=types.d.ts.map