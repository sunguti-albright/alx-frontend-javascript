// Import the types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the CRUD functions
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
