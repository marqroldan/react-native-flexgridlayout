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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
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
            var RenderItem = (_e = (colHasDescription ? data.renderItem : null)) !== null && _e !== void 0 ? _e : _this.props.renderItem;
            var RowGap = (_j = (_h = (_g = (colHasDescription ? (_f = data.rowGap) !== null && _f !== void 0 ? _f : data.gap : null)) !== null && _g !== void 0 ? _g : pRowGap) !== null && _h !== void 0 ? _h : _this.props.rowGap) !== null && _j !== void 0 ? _j : _this.props.gap;
            var ColGap = (_o = (_m = (_l = (colHasDescription ? (_k = data.colGap) !== null && _k !== void 0 ? _k : data.gap : null)) !== null && _l !== void 0 ? _l : pColGap) !== null && _m !== void 0 ? _m : _this.props.colGap) !== null && _o !== void 0 ? _o : _this.props.gap;
            for (var rowIndex = 0; (_p = rowIndex < (finalArray === null || finalArray === void 0 ? void 0 : finalArray.length)) !== null && _p !== void 0 ? _p : 0; rowIndex++) {
                var rowItem = finalArray[rowIndex];
                var rowHasDescription = !Array.isArray(rowItem) && (rowItem === null || rowItem === void 0 ? void 0 : rowItem.data);
                var finalRowItem = rowHasDescription ? rowItem.data : rowItem;
                var InnerRenderRow = (_r = (_q = (rowHasDescription ? rowItem.renderRow : null)) !== null && _q !== void 0 ? _q : _this.props.renderRow) !== null && _r !== void 0 ? _r : RenderRow;
                var InnerRenderItem = (_s = (rowHasDescription ? rowItem.renderItem : null)) !== null && _s !== void 0 ? _s : RenderItem;
                var InnerRowGap = (_u = (rowHasDescription ? (_t = rowItem.rowGap) !== null && _t !== void 0 ? _t : rowItem.gap : null)) !== null && _u !== void 0 ? _u : RowGap;
                var InnerColGap = (_w = (rowHasDescription ? (_v = rowItem.colGap) !== null && _v !== void 0 ? _v : rowItem.gap : null)) !== null && _w !== void 0 ? _w : ColGap;
                var rowKey = "".concat(pRowKey ? "".concat(pRowKey, "__") : '', "row_").concat(rowIndex);
                if (rowIndex !== 0 && InnerRowGap) {
                    table.push(<Gap gap={InnerRowGap} key={"gap:".concat(rowKey)}/>);
                }
                if (Array.isArray(finalRowItem)) {
                    var rowChildren = [];
                    for (var colIndex = 0; colIndex < finalRowItem.length; colIndex++) {
                        var colItem = finalRowItem[colIndex];
                        var finalColItem = !Array.isArray(colItem) && (colItem === null || colItem === void 0 ? void 0 : colItem.data) ? colItem.data : colItem;
                        var colKey = "".concat(pColKey ? "".concat(pColKey, "__") : '').concat(rowKey, "__col_").concat(colIndex);
                        if (colIndex !== 0 && InnerColGap) {
                            rowChildren.push(<Gap gap={InnerColGap} key={"gap:".concat(colKey)}/>);
                        }
                        if (Array.isArray(finalColItem)) {
                            rowChildren.push(<Cell style={(_x = colItem.cellStyle) !== null && _x !== void 0 ? _x : Styles.columnFlex} key={"cell:".concat(colKey)}>
                {_this.recursiveRender(colItem, rowKey, colKey, InnerRowGap, InnerColGap)}
              </Cell>);
                        }
                        else {
                            rowChildren.push(<Cell style={colItem === null || colItem === void 0 ? void 0 : colItem.cellStyle} key={"cell:".concat(colKey)}>
                {(_y = InnerRenderItem === null || InnerRenderItem === void 0 ? void 0 : InnerRenderItem(finalColItem)) !== null && _y !== void 0 ? _y : null}
              </Cell>);
                        }
                    }
                    table.push(<InnerRenderRow style={pColKey || _this.props.shouldFlex ? Styles.rowFlex : undefined} key={"row:".concat(rowKey)}>
            {rowChildren}
          </InnerRenderRow>);
                }
                else {
                    table.push(<InnerRenderRow style={pColKey || _this.props.shouldFlex ? Styles.rowFlex : undefined} key={"row:".concat(rowKey)}>
            <Cell style={rowItem.cellStyle}>
              {(_z = InnerRenderItem === null || InnerRenderItem === void 0 ? void 0 : InnerRenderItem(finalRowItem)) !== null && _z !== void 0 ? _z : null}
            </Cell>
          </InnerRenderRow>);
                }
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
