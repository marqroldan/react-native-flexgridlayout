import React from 'react';
import Gap from './Gap';
import Cell from './Cell';
import Column from './Column';
import Row from './Row';
import Styles from './styles';
import {Props__FlexGridLayout} from './types';

class FlexGridLayout extends React.Component<Props__FlexGridLayout> {
  recursiveRender = (
    data: Props__FlexGridLayout['data'],
    pRowKey?: string,
    pColKey?: string,
    pRowGap?: number,
    pColGap?: number,
  ) => {
    const table = [];
    const colHasDescription = !Array.isArray(data) && data?.data;
    const finalArray =
      !Array.isArray(data) && data?.data
        ? Array.isArray(data.data)
          ? data.data
          : [data.data]
        : Array.isArray(data)
        ? data
        : [data];
    const RenderRow =
      (colHasDescription ? data.renderRow : null) ??
      this.props.renderRow ??
      Row;
    const RenderColumn =
      (colHasDescription ? data.renderColumn : null) ??
      this.props.renderColumn ??
      Column;
    const RenderCell = (colHasDescription ? data.renderCell : null) ?? this.props.renderCell ?? Cell;

    const RenderItem =
      (colHasDescription ? data.renderItem : null) ?? this.props.renderItem;

    const RowGap =
      (colHasDescription ? data.rowGap ?? data.gap : null) ??
      pRowGap ??
      this.props.rowGap ??
      this.props.gap;
    const ColGap =
      (colHasDescription ? data.colGap ?? data.gap : null) ??
      pColGap ??
      this.props.colGap ??
      this.props.gap;

    for (let rowIndex = 0; rowIndex < finalArray?.length ?? 0; rowIndex++) {
      const rowItem = finalArray[rowIndex];
      const rowHasDescription = !Array.isArray(rowItem) && rowItem?.data;

      const finalRowItem = rowHasDescription ? rowItem.data : rowItem;
      const InnerRenderRow =
        (rowHasDescription ? rowItem.renderRow : null) ??
        this.props.renderRow ??
        RenderRow;
      const InnerRenderItem =
        (rowHasDescription ? rowItem.renderItem : null) ?? RenderItem;

      const InnerRenderCell = (rowHasDescription ? rowItem.renderCell : null) ?? RenderCell;

      const InnerRowGap =
        (rowHasDescription ? rowItem.rowGap ?? rowItem.gap : null) ?? RowGap;

      const InnerColGap =
        (rowHasDescription ? rowItem.colGap ?? rowItem.gap : null) ?? ColGap;

      const rowKey = `${pRowKey ? `${pRowKey}__` : ''}row_${rowIndex}`;


      if (Array.isArray(finalRowItem)) {
        const rowChildren = [];

        for (let colIndex = 0; colIndex < finalRowItem.length; colIndex++) {
          const colItem = finalRowItem[colIndex];
          const finalColItem =
            !Array.isArray(colItem) && colItem?.data ? colItem.data : colItem;
          const colKey = `${
            pColKey ? `${pColKey}__` : ''
          }${rowKey}__col_${colIndex}`;


          if (Array.isArray(finalColItem)) {
            const child = this.recursiveRender(
                colItem,
                rowKey,
                colKey,
                InnerRowGap,
                InnerColGap,
            );

            if(child) {
              if (colIndex !== 0 && InnerColGap) {
                rowChildren.push(<Gap gap={InnerColGap} key={`gap:${colKey}`} />);
              }

              rowChildren.push(
                  <InnerRenderCell
                      style={colItem.cellStyle ?? Styles.columnFlex}
                      key={`cell:${colKey}`}>
                    {child}
                  </InnerRenderCell>,
              );
            }
          } else {
            const child = InnerRenderItem?.(finalColItem) ?? null;

            if(child) {
              if (colIndex !== 0 && InnerColGap) {
                rowChildren.push(<Gap gap={InnerColGap} key={`gap:${colKey}`} />);
              }

              rowChildren.push(
                  <InnerRenderCell style={colItem?.cellStyle} key={`cell:${colKey}`}>
                    {InnerRenderItem?.(finalColItem) ?? null}
                  </InnerRenderCell>,
              );
            }
          }
        }


        if(rowChildren.length) {
          if (rowIndex !== 0 && InnerRowGap) {
            table.push(<Gap gap={InnerRowGap} key={`gap:${rowKey}`} />);
          }

          table.push(
              <InnerRenderRow
                  style={
                    pColKey || this.props.shouldFlex ? Styles.rowFlex : undefined
                  }
                  key={`row:${rowKey}`}>
                {rowChildren}
              </InnerRenderRow>,
          );
        }
      } else {
        const child = InnerRenderItem?.(finalRowItem) ?? null;

        if(child) {
          if (rowIndex !== 0 && InnerRowGap) {
            table.push(<Gap gap={InnerRowGap} key={`gap:${rowKey}`} />);
          }

          table.push(
              <InnerRenderRow
                  style={
                    pColKey || this.props.shouldFlex ? Styles.rowFlex : undefined
                  }
                  key={`row:${rowKey}`}>
                <InnerRenderCell style={rowItem.cellStyle}>
                  {InnerRenderItem?.(finalRowItem) ?? null}
                </InnerRenderCell>
              </InnerRenderRow>,
          );
        }
      }
    }

    if(!table.length) {
      return null;
    }
    return (
      <RenderColumn
        style={
          pRowKey || this.props.shouldFlex ? Styles.columnFlexGrow : undefined
        }>
        {table}
      </RenderColumn>
    );
  };

  render() {
    return this.recursiveRender(this.props.data);
  }
}

export default FlexGridLayout;
