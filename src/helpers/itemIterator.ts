import {Data} from '../types';

const ItemIterator = (
    data: Data,
    callback: (item: string | null | undefined | any) => void,
) => {
    const colHasDescription = !Array.isArray(data) && data?.data;
    const finalArray =
        !Array.isArray(data) && data?.data
            ? Array.isArray(data.data)
            ? data.data
            : [data.data]
            : Array.isArray(data)
            ? data
            : [data];

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
                    colHasDescription(colItem, callback);
                } else {
                    callback(colItem);
                }
            }
        } else {
            callback(finalRowItem);
        }
    }
};

export default ItemIterator;
