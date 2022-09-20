var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import Gap from './Gap';
import Cell from './Cell';
import Column from './Column';
import Row from './Row';
import Styles from './styles';
var FlexGridLayout = /** @class */ (function (_super) {
    __extends(FlexGridLayout, _super);
    function FlexGridLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recursiveRender = function (data, pRowKey, pColKey, pRowGap, pColGap) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
            var table = [];
            var colHasDescription = !Array.isArray(data) && (data === null || data === void 0 ? void 0 : data.data);
            var finalArray = !Array.isArray(data) && (data === null || data === void 0 ? void 0 : data.data)
                ? Array.isArray(data.data)
                    ? data.data
                    : [data.data]
                : Array.isArray(data)
                    ? data
                    : [data];
            var RenderRow = (_b = (_a = (colHasDescription ? data.renderRow : null)) !== null && _a !== void 0 ? _a : _this.props.renderRow) !== null && _b !== void 0 ? _b : Row;
            var RenderColumn = (_d = (_c = (colHasDescription ? data.renderColumn : null)) !== null && _c !== void 0 ? _c : _this.props.renderColumn) !== null && _d !== void 0 ? _d : Column;
            var RenderCell = (_f = (_e = (colHasDescription ? data.renderCell : null)) !== null && _e !== void 0 ? _e : _this.props.renderCell) !== null && _f !== void 0 ? _f : Cell;
            var RenderItem = (_g = (colHasDescription ? data.renderItem : null)) !== null && _g !== void 0 ? _g : _this.props.renderItem;
            var RowGap = (_l = (_k = (_j = (colHasDescription ? (_h = data.rowGap) !== null && _h !== void 0 ? _h : data.gap : null)) !== null && _j !== void 0 ? _j : pRowGap) !== null && _k !== void 0 ? _k : _this.props.rowGap) !== null && _l !== void 0 ? _l : _this.props.gap;
            var ColGap = (_q = (_p = (_o = (colHasDescription ? (_m = data.colGap) !== null && _m !== void 0 ? _m : data.gap : null)) !== null && _o !== void 0 ? _o : pColGap) !== null && _p !== void 0 ? _p : _this.props.colGap) !== null && _q !== void 0 ? _q : _this.props.gap;
            for (var rowIndex = 0; (_r = rowIndex < (finalArray === null || finalArray === void 0 ? void 0 : finalArray.length)) !== null && _r !== void 0 ? _r : 0; rowIndex++) {
                var rowItem = finalArray[rowIndex];
                var rowHasDescription = !Array.isArray(rowItem) && (rowItem === null || rowItem === void 0 ? void 0 : rowItem.data);
                var finalRowItem = rowHasDescription ? rowItem.data : rowItem;
                var InnerRenderRow = (_t = (_s = (rowHasDescription ? rowItem.renderRow : null)) !== null && _s !== void 0 ? _s : _this.props.renderRow) !== null && _t !== void 0 ? _t : RenderRow;
                var InnerRenderItem = (_u = (rowHasDescription ? rowItem.renderItem : null)) !== null && _u !== void 0 ? _u : RenderItem;
                var InnerRenderCell = (_v = (rowHasDescription ? rowItem.renderCell : null)) !== null && _v !== void 0 ? _v : RenderCell;
                var InnerRowGap = (_x = (rowHasDescription ? (_w = rowItem.rowGap) !== null && _w !== void 0 ? _w : rowItem.gap : null)) !== null && _x !== void 0 ? _x : RowGap;
                var InnerColGap = (_z = (rowHasDescription ? (_y = rowItem.colGap) !== null && _y !== void 0 ? _y : rowItem.gap : null)) !== null && _z !== void 0 ? _z : ColGap;
                var rowKey = "".concat(pRowKey ? "".concat(pRowKey, "__") : '', "row_").concat(rowIndex);
                if (Array.isArray(finalRowItem)) {
                    var rowChildren = [];
                    for (var colIndex = 0; colIndex < finalRowItem.length; colIndex++) {
                        var colItem = finalRowItem[colIndex];
                        var finalColItem = !Array.isArray(colItem) && (colItem === null || colItem === void 0 ? void 0 : colItem.data) ? colItem.data : colItem;
                        var colKey = "".concat(pColKey ? "".concat(pColKey, "__") : '').concat(rowKey, "__col_").concat(colIndex);
                        if (Array.isArray(finalColItem)) {
                            var child = _this.recursiveRender(colItem, rowKey, colKey, InnerRowGap, InnerColGap);
                            if (child) {
                                if (colIndex !== 0 && InnerColGap) {
                                    rowChildren.push(<Gap gap={InnerColGap} key={"gap:".concat(colKey)}/>);
                                }
                                rowChildren.push(<InnerRenderCell style={(_0 = colItem.cellStyle) !== null && _0 !== void 0 ? _0 : Styles.columnFlex} key={"cell:".concat(colKey)}>
                    {child}
                  </InnerRenderCell>);
                            }
                        }
                        else {
                            var child = (_1 = InnerRenderItem === null || InnerRenderItem === void 0 ? void 0 : InnerRenderItem(finalColItem)) !== null && _1 !== void 0 ? _1 : null;
                            if (child) {
                                if (colIndex !== 0 && InnerColGap) {
                                    rowChildren.push(<Gap gap={InnerColGap} key={"gap:".concat(colKey)}/>);
                                }
                                rowChildren.push(<InnerRenderCell style={colItem === null || colItem === void 0 ? void 0 : colItem.cellStyle} key={"cell:".concat(colKey)}>
                    {(_2 = InnerRenderItem === null || InnerRenderItem === void 0 ? void 0 : InnerRenderItem(finalColItem)) !== null && _2 !== void 0 ? _2 : null}
                  </InnerRenderCell>);
                            }
                        }
                    }
                    if (rowChildren.length) {
                        if (rowIndex !== 0 && InnerRowGap) {
                            table.push(<Gap gap={InnerRowGap} key={"gap:".concat(rowKey)}/>);
                        }
                        table.push(<InnerRenderRow style={pColKey || _this.props.shouldFlex ? Styles.rowFlex : undefined} key={"row:".concat(rowKey)}>
                {rowChildren}
              </InnerRenderRow>);
                    }
                }
                else {
                    var child = (_3 = InnerRenderItem === null || InnerRenderItem === void 0 ? void 0 : InnerRenderItem(finalRowItem)) !== null && _3 !== void 0 ? _3 : null;
                    if (child) {
                        if (rowIndex !== 0 && InnerRowGap) {
                            table.push(<Gap gap={InnerRowGap} key={"gap:".concat(rowKey)}/>);
                        }
                        table.push(<InnerRenderRow style={pColKey || _this.props.shouldFlex ? Styles.rowFlex : undefined} key={"row:".concat(rowKey)}>
                <InnerRenderCell style={rowItem.cellStyle}>
                  {(_4 = InnerRenderItem === null || InnerRenderItem === void 0 ? void 0 : InnerRenderItem(finalRowItem)) !== null && _4 !== void 0 ? _4 : null}
                </InnerRenderCell>
              </InnerRenderRow>);
                    }
                }
            }
            if (!table.length) {
                return null;
            }
            return (<RenderColumn style={pRowKey || _this.props.shouldFlex ? Styles.columnFlexGrow : undefined}>
        {table}
      </RenderColumn>);
        };
        return _this;
    }
    FlexGridLayout.prototype.render = function () {
        return this.recursiveRender(this.props.data);
    };
    return FlexGridLayout;
}(React.Component));
export default FlexGridLayout;
