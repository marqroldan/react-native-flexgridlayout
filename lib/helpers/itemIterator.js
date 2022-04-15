var ItemIterator = function (data, callback) {
    var _a;
    var colHasDescription = !Array.isArray(data) && (data === null || data === void 0 ? void 0 : data.data);
    var finalArray = !Array.isArray(data) && (data === null || data === void 0 ? void 0 : data.data)
        ? Array.isArray(data.data)
            ? data.data
            : [data.data]
        : Array.isArray(data)
            ? data
            : [data];
    for (var rowIndex = 0; (_a = rowIndex < (finalArray === null || finalArray === void 0 ? void 0 : finalArray.length)) !== null && _a !== void 0 ? _a : 0; rowIndex++) {
        var rowItem = finalArray[rowIndex];
        var rowHasDescription = !Array.isArray(rowItem) && (rowItem === null || rowItem === void 0 ? void 0 : rowItem.data);
        var finalRowItem = rowHasDescription ? rowItem.data : rowItem;
        if (Array.isArray(finalRowItem)) {
            for (var colIndex = 0; colIndex < finalRowItem.length; colIndex++) {
                var colItem = finalRowItem[colIndex];
                var finalColItem = !Array.isArray(colItem) && (colItem === null || colItem === void 0 ? void 0 : colItem.data) ? colItem.data : colItem;
                if (Array.isArray(finalColItem)) {
                    colHasDescription(colItem, callback);
                }
                else {
                    callback(colItem);
                }
            }
        }
        else {
            callback(finalRowItem);
        }
    }
};
export default ItemIterator;
