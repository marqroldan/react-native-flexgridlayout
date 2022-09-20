import React, {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

export type Props__Row = PropsWithChildren<{style?: ViewStyle}>;

export type Props__Column = PropsWithChildren<{style?: ViewStyle}>;

export type Props__Cell = PropsWithChildren<{
  style?: ViewStyle;
  vertical?: boolean;
}>;

export type Props__Gap = {gap?: number};

export type RenderColumn = (
  props: Props__Column,
) => React.ReactNode | JSX.Element;
export type RenderRow = (props: Props__Row) => React.ReactNode | JSX.Element;
export type RenderCell = (props: Props__Cell) => React.ReactNode | JSX.Element;

export type Gaps = {
  rowGap?: number;
  colGap?: number;
  gap?: number;
};

export type Renders = {
  renderItem: (item: any) => React.ReactNode | JSX.Element;
  renderColumn?: RenderColumn;
  renderRow?: RenderRow;
  renderCell?: RenderCell;
};

export type Props__FlexGridLayoutBase = Renders &
  Gaps & {
    cellStyle?: ViewStyle;
  };

export type Data =
  | any
  | any[]
  | Props__FlexGridLayoutBase
  | Props__FlexGridLayoutBase[];

export type Props__FlexGridLayout = Renders &
  Gaps & {
    data: Data;
    shouldFlex?: boolean;
  };

export type Param__Callback = (item: string | null | undefined | any) => void | undefined | null | boolean
