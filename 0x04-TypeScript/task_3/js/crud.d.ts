// Import the types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the CRUD functions
 function insertRow(row: RowElement): RowID;
 function deleteRow(rowId: RowID): void;
 function updateRow(rowId: RowID, row: RowElement): RowID;

