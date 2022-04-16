var ItemIterator = function (data, callback, terminatingLogic) {
    var _a, _b, _c;
    var colHasDescription = !Array.isArray(data) && (data === null || data === void 0 ? void 0 : data.data);
    var finalArray = colHasDescription
        ? Array.isArray(data.data)
            ? data.data
            : [data.data]
        : Array.isArray(data)
            ? data
            : [data];
    var shouldTerminate = false;
    for (var rowIndex = 0; (_a = rowIndex < (finalArray === null || finalArray === void 0 ? void 0 : finalArray.length)) !== null && _a !== void 0 ? _a : 0; rowIndex++) {
        var rowItem = finalArray[rowIndex];
        var rowHasDescription = !Array.isArray(rowItem) && (rowItem === null || rowItem === void 0 ? void 0 : rowItem.data);
        var finalRowItem = rowHasDescription ? rowItem.data : rowItem;
        if (Array.isArray(finalRowItem)) {
            for (var colIndex = 0; colIndex < finalRowItem.length; colIndex++) {
                var colItem = finalRowItem[colIndex];
                var finalColItem = !Array.isArray(colItem) && (colItem === null || colItem === void 0 ? void 0 : colItem.data) ? colItem.data : colItem;
                if (Array.isArray(finalColItem)) {
                    shouldTerminate = ItemIterator(colItem, callback);
                }
                else {
                    callback(colItem);
                    shouldTerminate = (_b = terminatingLogic === null || terminatingLogic === void 0 ? void 0 : terminatingLogic(colItem)) !== null && _b !== void 0 ? _b : false;
                }
            }
        }
        else {
            callback(finalRowItem);
            shouldTerminate = (_c = terminatingLogic === null || terminatingLogic === void 0 ? void 0 : terminatingLogic(finalRowItem)) !== null && _c !== void 0 ? _c : false;
        }
        if (shouldTerminate) {
            break;
        }
    }
    return shouldTerminate;
};
export var ItemIteratorSome = function (data, callback) {
    return ItemIterator(data, callback, function (_colItem) {
        var _a;
        return (_a = callback(_colItem)) !== null && _a !== void 0 ? _a : false;
    });
};
export default ItemIterator;
