import { Column } from './data-set/column';
import { Row } from './data-set/row';
import { DataSet } from './data-set/data-set';
import { DataSource } from './data-source/data-source';
import { Subject, Observable } from 'rxjs/Rx';
import { EventEmitter } from '@angular/core';
export declare class Grid {
    createFormShown: boolean;
    protected source: DataSource;
    protected settings: any;
    protected dataSet: DataSet;
    protected onSelectRowSource: Subject<any>;
    constructor(source: DataSource, settings: any);
    showActionColumn(position: string): boolean;
    isCurrentActionsPosition(position: string): boolean;
    isActionsVisible(): boolean;
    getNewRow(): Row;
    setSettings(settings: Object): void;
    getDataSet(): DataSet;
    setSource(source: DataSource): void;
    getSetting(name: string, defaultValue?: any): any;
    getColumns(): Array<Column>;
    getRows(): Array<Row>;
    selectRow(row: Row): void;
    onSelectRow(): Observable<any>;
    edit(row: Row): void;
    create(row: Row, confirmEmitter: EventEmitter<any>): void;
    save(row: Row, confirmEmitter: EventEmitter<any>): void;
    delete(row: Row, confirmEmitter: EventEmitter<any>): void;
    protected processDataChange(changes: any): void;
    protected shouldProcessChange(changes: any): boolean;
    protected determineRowToSelect(changes: any): Row;
    protected prepareSource(source: any): DataSource;
    protected getInitialSort(): {};
}
