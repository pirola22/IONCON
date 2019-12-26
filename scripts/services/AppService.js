var h5;
(function (h5) {
    var application;
    (function (application) {
        var AppService = (function () {
            function AppService(restService, $filter, $q) {
                this.restService = restService;
                this.$filter = $filter;
                this.$q = $q;
            }
            AppService.prototype.getAuthority = function (company, division, m3User, programName, charAt) {
                var _this = this;
                var request = {
                    DIVI: division,
                    USID: m3User,
                    PGNM: programName
                };
                return this.restService.executeM3MIRestService("MDBREADMI", "SelCMNPUS30", request).then(function (val) {
                    if (angular.equals([], val.items)) {
                        request.DIVI = "";
                        return _this.restService.executeM3MIRestService("MDBREADMI", "SelCMNPUS30", request).then(function (val) {
                            if (angular.equals([], val.items)) {
                                return false;
                            }
                            else {
                                var test = val.item.ALO;
                                if (charAt < test.length && '1' == test.charAt(charAt)) {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                        });
                    }
                    else {
                        var test = val.item.ALO;
                        if (charAt < test.length && '1' == test.charAt(charAt)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                });
            };
            AppService.prototype.lstIONCONRecords = function () {
                var requestData = {
                    KPID: "IONCON",
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "LstAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getIONCONTableNames = function () {
                var requestData = {
                    KPID: "IONCON",
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "LstAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getIONCONAlphaRecord = function (pk01, pk02, pk03) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "GetAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getIONCONNumericRecord = function (pk01, pk02, pk03) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "GetNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getDivisionList = function (company, division) {
                var requestData = {
                    CONO: company,
                    DIVI: division
                };
                return this.restService.executeM3MIRestService("MNS100MI", "LstDivisions", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getWarehouseList = function (company) {
                var requestData = {
                    CONO: company
                };
                return this.restService.executeM3MIRestService("MMS005MI", "LstWarehouses", requestData, 0).then(function (val) { return val; });
            };
            AppService.prototype.getFacilityList = function (company, division) {
                var requestData = {
                    CONO: company,
                    DIVI: division
                };
                return this.restService.executeM3MIRestService("CRS008MI", "ListFacility", requestData).then(function (val) { return val; });
            };
            AppService.prototype.getCustomerList = function (company) {
                var requestData = {
                    CONO: company
                };
                return this.restService.executeM3MIRestService("CRS610MI", "LstByName", requestData).then(function (val) { return val; });
            };
            AppService.prototype.saveIONCONNumericRecord = function (pk01, pk02, pk03, n096, n196, n296, n396, n496, n596, n696, n796, n896, n996) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    N096: n096,
                    N196: n196,
                    N296: n296,
                    N396: n396,
                    N496: n496,
                    N596: n596,
                    N696: n696,
                    N796: n796,
                    N896: n896,
                    N996: n996,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "ChgNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.saveIONCONAlphaRecord = function (pk01, pk02, pk03, al30, al31, al32, al33, al34, al35, al36) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    AL30: al30,
                    AL31: al31,
                    AL32: al32,
                    AL33: al33,
                    AL34: al34,
                    AL35: al35,
                    AL36: al36,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "ChgAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.addIONCONAlphaRecord = function (pk01, pk02, pk03, al30, al31, al32, al33, al34, al35, al36) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    AL30: al30,
                    AL31: al31,
                    AL32: al32,
                    AL33: al33,
                    AL34: al34,
                    AL35: al35,
                    AL36: al36,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "AddAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.addIONCONNumeric = function (pk01, pk02, pk03, n096, n196, n296, n396, n496, n596, n696, n796, n896, n996) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                    N096: n096,
                    N196: n196,
                    N296: n296,
                    N396: n396,
                    N496: n496,
                    N596: n596,
                    N696: n696,
                    N796: n796,
                    N896: n896,
                    N996: n996,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "AddNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.deleteIONCONAlphaRecord = function (pk01, pk02, pk03, pk04) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "DelAlphaKPI", requestData).then(function (val) { return val; });
            };
            AppService.prototype.deleteIONCONNumericRecord = function (pk01, pk02, pk03, pk04) {
                var requestData = {
                    KPID: "IONCON",
                    PK01: pk01,
                    PK02: pk02,
                    PK03: pk03,
                };
                return this.restService.executeM3MIRestService("CUSEXTMI", "DelNumericKPI", requestData).then(function (val) { return val; });
            };
            AppService.$inject = ["RestService", "$filter", "$q"];
            return AppService;
        }());
        application.AppService = AppService;
    })(application = h5.application || (h5.application = {}));
})(h5 || (h5 = {}));
