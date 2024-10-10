import { RowElement, RowID } from './interface';

// Type declaration for insertRow function
export function insertRow(row: RowElement): RowID;

// Type declaration for deleteRow function
export function deleteRow(rowId: RowIDs): void;

// Type declaration for updateRow function
export function updateRow(rowId: RowIDs, row: RowElement): RowIDs;
