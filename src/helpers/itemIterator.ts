import {Data, Param__Callback} from '../types';

const ItemIterator = (
    data: Data,
    callback: Param__Callback,
    terminatingLogic?: (_colItem: string | null | undefined | any) => boolean,
): boolean => {
    const colHasDescription = !Array.isArray(data) && data?.data;
    const finalArray =
        colHasDescription
            ? Array.isArray(data.data)
            ? data.data
            : [data.data]
            : Array.isArray(data)
            ? data
            : [data];

    let shouldTerminate = false;

    for (let rowIndex = 0; rowIndex < finalArray?.length ?? 0; rowIndex++) {
        const rowItem = finalArray[rowIndex];
        const rowHasDescription = !Array.isArray(rowItem) && rowItem?.data;

        const finalRowItem = rowHasDescription ? rowItem.data : rowItem;

        if (Array.isArray(finalRowItem)) {
            for (let colIndex = 0; colIndex < finalRowItem.length; colIndex++) {
                const colItem = finalRowItem[colIndex];
                const finalColItem =
                    !Array.isArray(colItem) && colItem?.data ? colItem.data : colItem;
                if (Array.isArray(finalColItem)) {
                    shouldTerminate = ItemIterator(colItem, callback);
                } else {
                    callback(colItem);
                    shouldTerminate = terminatingLogic?.(colItem) ?? false;
                }
            }
        } else {
            callback(finalRowItem);
            shouldTerminate = terminatingLogic?.(finalRowItem) ?? false;
        }

        if (shouldTerminate) {
            break;
        }
    }

    return shouldTerminate;
};

export const ItemIteratorSome = (data: Data, callback: Param__Callback) => {
    return ItemIterator(data, callback, (_colItem: string | null | undefined | any) => {
        return callback(_colItem) ?? false;
    });
};

export default ItemIterator;
