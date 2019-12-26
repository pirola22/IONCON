module h5.application {
    export interface IONCONModule {

        reload: boolean;
        transactionStatus: {
            IONCONList: boolean,
            IONCONRecord: boolean,
            isMultipleAdd: boolean,
        };


        IONCONList: any; //list of table names
        IONCONListGrid: IUIGrid;
        selectedIONCONListRow: any;
        IONCONRecord: any;
        loadIONCONRecordModule: any //the function that will be called when a selection is made
        isMultipleAdd: boolean,

    }
}