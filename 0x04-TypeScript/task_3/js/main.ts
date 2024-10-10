/// <reference path="./crud.d.ts" />
import { RowElement, RowID } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowID = CRUD.updateRow(23, row);

CRUD.deleteRow(updatedRow);
