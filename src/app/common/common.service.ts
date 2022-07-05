import { Injectable, Injector } from "@angular/core";
import { OcmConstants } from "./app.constants";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
// import {
//     MatSnackBar,
//     MatSnackBarVerticalPosition,
// } from "@angular/material/snack-bar";
// import { MatDialog, MatDialogRef } from "@angular/material/dialog";
// import { FuseSuccessDialogComponent } from "@fuse/components/success-dialog/success-dialog.component";
// import { FuseErrDialogComponent } from "@fuse/components/err-dialog/err-dialog.component";
// import { FuseConfirmDialogComponent } from "@fuse/components/confirm-dialog/confirm-dialog.component";
// import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { navigation } from "../navigation/navigation";

declare const omni: any;

@Injectable()
export class CommonService extends OcmConstants {
    public alertMessageDisplayTimeSettings = {
        success: 4,
        error: 5,
        info: 4,
        warning: 5,
    };
    public httpOptions = {};

    // successDialogRef: MatDialogRef<FuseSuccessDialogComponent>;
    // errDialogRef: MatDialogRef<FuseErrDialogComponent>;
    // confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    senderId: {};
    approvedSenderId: [];
    userList: [];

    recordsPerPage = [10, 20, 30];

    constructor(
        private injector: Injector,
        // private _snackBar: MatSnackBar,
        // private _dialogBox: MatDialog,
        // private navigationService: FuseNavigationService
    ) {
        super();
    }

    public get router(): Router {
        return this.injector.get(Router);
    }

    successPopup(message: string) {
        // this.successDialogRef = this._dialogBox.open(
        //     FuseSuccessDialogComponent,
        //     {
        //         width: "auto",
        //         height: "auto",
        //         disableClose: true,
        //         minWidth: "320px",
        //         maxWidth: "320px",
        //     }
        // );
        // this.successDialogRef.componentInstance.confirmMessage = message;
        // return this.successDialogRef;
    }

    errorPopup(message: string) {
        // if (this._dialogBox.openDialogs.length == 0) {
        //     this.errDialogRef = this._dialogBox.open(FuseErrDialogComponent, {
        //         width: "auto",
        //         height: "auto",
        //         disableClose: true,
        //         minWidth: "320px",
        //         maxWidth: "320px",
        //     });
        //     this.errDialogRef.componentInstance.confirmMessage = message;
        // }
    }
    savePopup(message: string) {
        // this.successDialogRef = this._dialogBox.open(
        //     FuseSuccessDialogComponent,
        //     {
        //         width: "auto",
        //         height: "auto",
        //         disableClose: true,
        //         minWidth: "320px",
        //         maxWidth: "320px",
        //     }
        // );
        // this.successDialogRef.componentInstance.confirmMessage = message;
    }

    setAllSenderId(senderIdObj: JSON) {
        this.senderId = senderIdObj;
    }
    getAllSenderId() {
        return this.senderId;
    }
    setUserIds(userIdObj: any) {
        this.userList = userIdObj;
    }
    getUserIds() {
        return this.userList;
    }
    setApprovedSenderId(approvedSenderIdObj: any) {
        this.approvedSenderId = approvedSenderIdObj;
    }
    getApprovedSenderId() {
        return this.approvedSenderId;
    }

    seToken() {
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "Basic RklGVXNlcjpGSUZVc2V",
            }),
        };
    }

    getToken(endPoint: any, token?: any) {
        switch (endPoint) {
            case this.basic:
                this.httpOptions = {
                    headers: new HttpHeaders({
                        "Content-Type": "application/json",
                        Authorization: "Basic " + token,
                        observe: "response",
                        responseType: "text",
                    }),
                };
                break;
            case this.bearer:
                this.httpOptions = {
                    headers: new HttpHeaders({
                        "Content-Type": "application/json",
                        // 'X-Auth-Token': sessionStorage.getItem('_bearerTkn'),
                        "X-Auth-Token": localStorage.getItem("_bearerTkn"),
                        observe: "response",
                        responseType: "text",
                    }),
                };
                break;
            default:
                // this.httpOptions = {
                //   headers: new HttpHeaders({
                //     Authorization: "bearer " + sessionStorage.getItem("_bearerTkn")
                //   })
                // };
                break;
        }
        return this.httpOptions;
    }

    getGroupBy(report: any) {
        let groupBy = "";
        switch (report) {
            case "summary":
                switch (this.getRoleId()) {
                    case 3:
                        groupBy =
                            "date,department,senderId,aggregator,username,campaignId,categoryId,campaignName";
                        break;
                    case 1:
                        groupBy =
                            "date,senderId,campaignId,categoryId,campaignName";
                        break;
                    case 4:
                        groupBy =
                            "date,senderId,username,campaignId,categoryId,campaignName";
                        break;
                    default:
                        groupBy =
                            "date,department,senderId,aggregator,username,campaignId,categoryId,campaignName";
                        break;
                }
                break;
            case "mo":
                switch (this.getUser()) {
                    case 3:
                        groupBy = "date,department,keyword,shortLongCode";
                        break;
                    case 1:
                        groupBy = "date,department,keyword,shortLongCode";
                        break;
                    case 4:
                        groupBy = "date,department,keyword,shortLongCode";
                        break;
                    default:
                        groupBy = "date,department,keyword,shortLongCode";
                        break;
                }
                break;
            case "OTTSummary":
                switch (this.getUser()) {
                    case 3:
                        groupBy = "";
                        break;
                    case 1:
                        groupBy = "";
                        break;
                    case 4:
                        groupBy = "";
                        break;
                    default:
                        groupBy = "department,username";
                        break;
                }
                break;
            default:
                switch (this.getUser()) {
                    case 3:
                        groupBy =
                            "date,department,senderId,aggregator,username,campaignId,categoryId,campaignName";
                        break;
                    case 1:
                        groupBy =
                            "date,senderId,campaignId,categoryId,campaignName";
                        break;
                    case 4:
                        groupBy =
                            "date,senderId,username,campaignId,categoryId,campaignName";
                        break;
                    default:
                        groupBy =
                            "date,department,senderId,aggregator,username,campaignId,categoryId,campaignName";
                        break;
                }
                break;
        }
        return groupBy;
    }

    getUserType(pending?: any) {
        let roleId;
        // if (sessionStorage && sessionStorage.getItem('_userdata')) {
        //   roleId = JSON.parse(sessionStorage.getItem('_userdata'))['roleId'];
        // }
        if (localStorage && localStorage.getItem("_userdata")) {
            roleId = JSON.parse(localStorage.getItem("_userdata"))["roleId"];
        }
        switch (roleId) {
            case 2:
                return 1;
                break;
            case 4:
                return 2;
                break;
            case 5:
                return 2;
                break;
            case 3:
                if (pending) {
                    return 4;
                } else {
                    return 3;
                }
                break;
            case 6: // FOR  mkt user
                if (pending) {
                    return 5;
                } else {
                    return 6;
                }
                break;
            default:
                break;
        }
        // switch (roleId) {
        //   case 3:
        //     return 1;
        //     break;
        //   case 1:
        //     return 2;
        //     break;
        //   case 4:
        //     if (hodPending) {
        //       return 4;
        //     } else {
        //       return 3;
        //     }
        //     break;
        //   default:
        //     break;
        // }
    }

    getRoleId() {
        let roleId;
        // if (sessionStorage && sessionStorage.getItem('_userdata')) {
        //   roleId = JSON.parse(sessionStorage.getItem('_userdata'))['roleId'];
        // }
        if (localStorage && localStorage.getItem("_userdata")) {
            roleId = JSON.parse(localStorage.getItem("_userdata"))["roleId"];
        }
        return roleId;
    }

    getUserByRole() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        return loginData ? loginData["role"] : "";
    }

    getDeptName() {
        // const deptName = JSON.parse(sessionStorage.getItem('_userdata'));
        const deptName = JSON.parse(localStorage.getItem("_userdata"));
        return deptName ? deptName["department"] : "";
    }

    getDeptID() {
        // const deptID = JSON.parse(sessionStorage.getItem('_userdata'));
        const deptID = JSON.parse(localStorage.getItem("_userdata"));
        return deptID ? deptID["departmentId"] : "";
    }

    getAppName() {
        // const appName = JSON.parse(sessionStorage.getItem('_userdata'));
        const appName = JSON.parse(localStorage.getItem("_userdata"));
        return appName ? appName["applicationName"] : "";
    }

    getChannelId() {
        let channelId;
        // if (sessionStorage && sessionStorage.getItem('_userdata')) {
        //   channelId = JSON.parse(sessionStorage.getItem('_userdata'))['channelId'];
        // }
        if (localStorage && localStorage.getItem("_userdata")) {
            channelId = JSON.parse(localStorage.getItem("_userdata"))[
                "channelId"
            ];
        }

        return channelId;
    }

    hasReadAccess(module: any) {
        // if (sessionStorage && sessionStorage.getItem('_userdata')) {
        //   const accessObj = JSON.parse(
        //     JSON.parse(sessionStorage.getItem('_userdata'))['permissionJson']
        //   );
        //   return accessObj[module] == 'R' || accessObj[module] == 'RW';
        // }
        if (localStorage && localStorage.getItem("_userdata")) {
            const accessObj = JSON.parse(
                JSON.parse(localStorage.getItem("_userdata"))["permissionJson"]
            );
            return accessObj[module] == "R" || accessObj[module] == "RW";
        }
        return false;
    }

    hasWriteAccess(module: any) {
        // if (sessionStorage && sessionStorage.getItem('_userdata')) {
        //   const accessObj = JSON.parse(
        //     JSON.parse(sessionStorage.getItem('_userdata'))['permissionJson']
        //   );
        //   return accessObj[module] == 'RW';
        // }
        if (localStorage && localStorage.getItem("_userdata")) {
            const accessObj = JSON.parse(
                JSON.parse(localStorage.getItem("_userdata"))["permissionJson"]
            );
            return accessObj[module] == "RW";
        }
        return false;
    }

    getUser() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        return loginData ? loginData["userId"] : "";
    }

    getUserName() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        return loginData ? loginData["username"] : "";
    }

    getFCM() {
        // const fcmFlag = JSON.parse(sessionStorage.getItem('_userdata'));
        const fcmFlag = JSON.parse(localStorage.getItem("_userdata"));
        return fcmFlag ? fcmFlag["fcmFlag"] : "";
    }

    getCampaignUserType() {
        // const campaignUserType = JSON.parse(sessionStorage.getItem('_userdata'))['category'];
        const campaignUserType = JSON.parse(localStorage.getItem("_userdata"))[
            "category"
        ];
        return campaignUserType ? campaignUserType : "";
    }

    getFullName() {
        // const fullName = JSON.parse(sessionStorage.getItem('_userdata'))['firstName'] + ' ' + JSON.parse(sessionStorage.getItem('_userdata'))['lastName'];
        const fullName =
            JSON.parse(localStorage.getItem("_userdata"))["firstName"] +
            " " +
            JSON.parse(localStorage.getItem("_userdata"))["lastName"];
        return fullName && !fullName.includes("undefined")
            ? " - " + fullName
            : "";
    }

    getUserRole() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        let loginUser = loginData ? loginData["role"] : "";
        // if (loginUser == "FUNC") {
        //   return loginData["channelName"] == "Campaign" ? "Bulk User" : "API User"
        // }
        // else {
        return (loginUser = loginData ? loginData["roleDescription"] : "");
        // }
    }

    getUserRoleId() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        return loginData ? loginData["roleId"] : "";
    }

    getUnicodeSupport() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        return loginData ? loginData["unicodeSupport"] : "";
    }
    getMaxMessageParts() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        return loginData ? loginData["maxMessageParts"] : "";
    }

    getInternationalFlag() {
        // const loginData = JSON.parse(sessionStorage.getItem('_userdata'));
        const loginData = JSON.parse(localStorage.getItem("_userdata"));
        return loginData ? loginData["internationalRouteFlag"] : "";
    }
    camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) {
                return "";
            } // or if (/\s+/.test(match)) for white spaces
            return index == 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }

    titleCase(str) {
        const result = str.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    isNumber(evt) {
        evt = evt ? evt : window.event;
        let charCode = evt.which ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    // nospaceValidator(control: AbstractControl): { [s: string]: boolean } {
    //   let re = /^\S+(?: \S+)*$/ ;
    //   if (control.value && control.value.match(re)) {
    //     return { nospace: true };
    //   }
    // }
    unicodeToText(unicode) {
        let appendedUnicode = unicode.match(/.{4}/g).join("\\u");
        appendedUnicode = "\\u" + appendedUnicode;
        return eval("decodeURI('" + appendedUnicode + "')");
    }

    checkNumber(evt) {
        evt = evt ? evt : window.event;
        let charCode = evt.which ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    checkCommaNumber(evt) {
        evt = evt ? evt : window.event;
        let charCode = evt.which ? evt.which : evt.keyCode;

        if (
            charCode > 31 &&
            (charCode < 48 || charCode > 57) &&
            charCode != 44
        ) {
            return false;
        }
        return true;
    }

    sortArray(
        isAssending: boolean,
        sortingKey: any,
        data: any,
        isNumber?: boolean
    ) {
        if (isNumber) {
            const sortedArray = data.sort(function (a, b) {
                if (a[sortingKey] < b[sortingKey]) {
                    return -1 * (isAssending ? 1 : -1);
                }
                if (a[sortingKey] > b[sortingKey]) {
                    return 1 * (isAssending ? 1 : -1);
                }
                return 0;
            });
            return JSON.parse(JSON.stringify(sortedArray));
        } else {
            const sortedArray = data.sort(function (a, b) {
                if (a[sortingKey].toLowerCase() < b[sortingKey].toLowerCase()) {
                    return -1 * (isAssending ? 1 : -1);
                }
                if (a[sortingKey].toLowerCase() > b[sortingKey].toLowerCase()) {
                    return 1 * (isAssending ? 1 : -1);
                }
                return 0;
            });
            return JSON.parse(JSON.stringify(sortedArray));
        }
    }

    isAuthenticated() {
        if (
            // this.isEmptyOrWhitespace(sessionStorage.getItem(this._tokenKey)) ||
            // this.isEmptyOrWhitespace(sessionStorage.getItem(this._userData)) == null
            this.isEmptyOrWhitespace(localStorage.getItem(this._tokenKey)) ||
            this.isEmptyOrWhitespace(localStorage.getItem(this._userData)) ==
            null
        ) {
            return false;
        } else {
            return true;
        }
    }

    getTimestamp() {
        return new Date().getTime();
    }

    isNullOrUndefined(val: any) {
        return val === null || typeof val == "undefined" || val === undefined;
    }
    isEmptyOrWhitespace(val) {
        let toRet = true;
        if (!this.isNullOrUndefined(val) && typeof val === "string") {
            toRet = val.toString().trim().length == 0;
        }
        return toRet;
    }

    // private showDialogBox(dialogData: TheDialogData) {
    //     if (!Array.isArray(dialogData.messages)) {
    //         dialogData.messages = [dialogData.messages];
    //     }
    //     // return this._dialogBox.open(TheDialogBoxComponent, {
    //     //     data: dialogData,
    //     //     disableClose: dialogData.buttons.length > 1,
    //     // });
    // }

    showConfirmDialog(message: string) {
        // const confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent> = this._dialogBox.open(
        //     FuseConfirmDialogComponent,
        //     {
        //         width: "300px",
        //         height: "200px",
        //         disableClose: false,
        //     }
        // );
        // confirmDialogRef.componentInstance.confirmMessage = message;
        // return confirmDialogRef;
    }
    // showTheDialogBox(title: string, messages: any, buttons: any) {
    //     if (this.isEmptyOrWhitespace(title)) {
    //         console.log(
    //             "Error : common.service : showTheDialogBox - Invalid title to show in the dialog box."
    //         );
    //         return null;
    //     }
    //     let _messages: String[];
    //     let _buttons: String[];
    //     if (Array.isArray(messages)) {
    //         _messages = messages;
    //     } else {
    //         if (!this.isEmptyOrWhitespace(messages)) {
    //             _messages = [messages];
    //         } else {
    //             console.log(
    //                 "Error : common.service : showTheDialogBox - Invalid message(s) to show in the dialog box."
    //             );
    //             return null;
    //         }
    //     }
    //     if (Array.isArray(buttons)) {
    //         _buttons = buttons;
    //     } else {
    //         if (!this.isEmptyOrWhitespace(buttons)) {
    //             _buttons = [buttons.toString()];
    //         } else {
    //             console.log(
    //                 "Error : common.service : showTheDialogBox - Invalid Button(s) in the dialog box."
    //             );
    //             return null;
    //         }
    //     }
    //     const _btns = [];
    //     for (let i = 0; i < _buttons.length; i++) {
    //         _btns.push({
    //             text: _buttons[i],
    //             key: "button" + (i + 1).toString(),
    //             css: "",
    //             default: i == _buttons.length - 1 ? true : false,
    //         });
    //     }
    //     const _dialogData: TheDialogData = {
    //         title: title,
    //         messages: _messages,
    //         buttons: _btns,
    //     };
    //     return this.showDialogBox(_dialogData);
    // }

    private showAlertMessage(messages, messageType) {
        let _messages: String[];
        if (Array.isArray(messages)) {
            _messages = messages;
        } else {
            if (!this.isEmptyOrWhitespace(messages)) {
                _messages = [messages];
            } else {
                console.log(
                    "Error : common.service : showAlertMessage - Empty message to show in the alert box."
                );
                return null;
            }
        }
        const _messageType = messageType || "info";
        // return this._snackBar.openFromComponent(TheAlertMessageComponent, {
        //     duration: this.alertMessageDisplayTimeSettings[_messageType] * 1000,
        //     panelClass: ["alert-message-ocm-" + _messageType],
        //     horizontalPosition: "center", // 'start' | 'center' | 'end' | 'left' | 'right';
        //     verticalPosition: "top", // 'top' | 'bottom'
        //     data: {
        //         messages: _messages,
        //         messageType: _messageType + "-alert",
        //     },
        // });
    }

    showSuccessAlertMessage(message) {
        return this.showAlertMessage(message, "success");
    }

    showInfoAlertMessage(message) {
        return this.showAlertMessage(message, "info");
    }

    showErrorAlertMessage(message) {
        return this.showAlertMessage(message, "error");
    }

    showWarningAlertMessage(message) {
        return this.showAlertMessage(message, "warning");
    }

    redirectToLandingPageAfterLogin() {
        this.router.navigate(["dashboard"]);
    }

    redirectToLoginPageAfterLogout() {
        this.router.navigate(["login"]);
    }
    logOut() {
        omni.userLogout(JSON.stringify(this.userInfo().user_master_id));
        localStorage.clear();
        sessionStorage.clear();
        this.redirectToLoginPageAfterLogout();
    }

    logIn() {
        // verify the token
        this.redirectToLandingPageAfterLogin();
    }

    verifyModuleRight(moduleId): boolean {
        let rightsArr: any[];
        const rights = localStorage.getItem("userRights");
        rightsArr = JSON.parse(rights);
        if (rightsArr != null && rightsArr.length > 0) {
            const obj = rightsArr.filter((x) => x.moduleId == moduleId);
            if (obj != null && obj.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    verifyUserRight(moduleId, rightId): boolean {
        let rightsArr: any[];
        const rights = localStorage.getItem("userRights");
        rightsArr = JSON.parse(rights);
        const obj = rightsArr.filter((x) => x.moduleId == moduleId);

        if (obj != null && obj.length > 0) {
            // console.log('result :  ' + obj);
            const objRight = obj[0].rights.filter((r) => r.rightId == rightId);
            if (objRight != null && objRight.length > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    verifyUserSubRight(moduleId, rightId, subRightId): boolean {
        let rightsArr: any[];
        const rights = localStorage.getItem("userRights");
        rightsArr = JSON.parse(rights);
        const obj = rightsArr.filter((x) => x.moduleId == moduleId);

        if (obj != null && obj.length > 0) {
            // console.log('result :  ' + obj);
            const objRight = obj[0].rights.filter((r) => r.rightId == rightId);
            if (objRight != null && objRight.length > 0) {
                const objSub = objRight[0].subRights.filter(
                    (s) => s.subRightId == subRightId
                );
                if (objSub != null && objSub.length > 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    verifyUserRightGuard(value): boolean {
        const arrSingle = [];
        let rightsArr: any[];
        // rightsArr = this.navigationService.getSimpleNavigationArr();

        if (rightsArr != null && rightsArr.length > 0) {
            const obj = rightsArr.filter(x => x.url == value);
            if (obj != null && obj.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    verifyTheSuccessResponseForData(res: any): string {
        let toRet = "error: ";
        if (!this.isNullOrUndefined(res)) {
            if (!this.isNullOrUndefined(res["result"])) {
                if (!this.isNullOrUndefined(res["result"]["statusCode"])) {
                    if (res["result"]["statusCode"] == 200) {
                        toRet = "ok";
                    } else if (res["result"]["statusCode"] == 225) {
                        toRet = "maxExceed";
                    } else {
                        toRet +=
                            res["result"]["statusCode"] +
                            " : " +
                            res["result"]["userMsg"];
                    }
                } else {
                    toRet += "Status not found in response.";
                }
            } else {
                toRet += "Result parameters not found in response.";
            }
        } else {
            toRet += "Result data not found.";
        }
        return toRet;
    }

    setNavigationBar(userData) {
        this.setModuleNavigation();

        // switch (userData['account_type']) {
        //   case "0":
        //     this.navigationService.updateNavigationItem('aggregators', {
        //       hidden: false
        //     });
        //     this.navigationService.updateNavigationItem('campaignbuilder', {
        //       hidden: true
        //     });
        //     break;
        //   case '1':
        //     this.navigationService.updateNavigationItem('aggregators', {
        //       hidden: true
        //     });
        //     this.navigationService.updateNavigationItem('campaignbuilder', {
        //       hidden: false
        //     });
        //     break;
        //   case '2':
        //     this.navigationService.updateNavigationItem('aggregators', {
        //       hidden: true
        //     });
        //     this.navigationService.updateNavigationItem('campaignbuilder', {
        //       hidden: false
        //     });
        //     break;
        //   case '3':
        //     this.navigationService.updateNavigationItem('aggregators', {
        //       hidden: true
        //     });
        //     this.navigationService.updateNavigationItem('campaignbuilder', {
        //       hidden: false
        //     });
        //     break;
        // }
    }

    setModuleNavigation(): void {
        navigation.forEach((element) => {
            if (!this.verifyModuleRight(element.id)) {
                // this.navigationService.updateNavigationItem(element.id, {
                //     hidden: true,
                // });
            } else {
                // this.navigationService.updateNavigationItem(element.id, {
                //     hidden: false,
                // });
            }
        });

        this.setRightNavigation();

        const userRole = this.userInfo().account_type;

        // this.navigationService.updateNavigationItem("viewIvr", {
        //     hidden: false,
        // });
        if (userRole == 0) {
            // this.navigationService.updateNavigationItem("6", {
            //     hidden: true,
            // });
            // this.navigationService.updateNavigationItem("voiceStudio", {
            //     hidden: true,
            // });
            // this.navigationService.updateNavigationItem("139", {
            //     hidden: false,
            // });
            
        } else {
            // this.navigationService.updateNavigationItem("139", {
            //     hidden: true,
            // });
            // this.navigationService.updateNavigationItem("voiceStudio", {
            //     hidden: false,
            // });
        }

        if (userRole == 0 || userRole == 1) {
            // this.navigationService.updateNavigationItem("insights_segments", {
            //     hidden: false,
            // });
        } else {
            // this.navigationService.updateNavigationItem("insights_segments", {
            //     hidden: true,
            // });
        }

        // this.navigationService.updateNavigationItem("channels", {
        //     hidden: false,
        // });

        // this.navigationService.updateNavigationItem('insights_segments', {
        //   hidden: true
        // });

        // this.navigationService.updateNavigationItem('clickToCall', {
        //   hidden: false
        // });

        // this.navigationService.updateNavigationItem('view_segment', {
        //   hidden: true
        // });

        // this.navigationService.updateNavigationItem('configure_segment', {
        //   hidden: true
        // });

        // this.navigationService.updateNavigationItem("2FA", {
        //     hidden: false,
        // });


        // this.navigationService.updateNavigationItem("whatsAppTemplate", {
        //     hidden: false,
        // });
    }

    setRightNavigation(): void {
        navigation.forEach((element) => {
            if (element.children != null && element.children.length > 0) {
                element.children.forEach((childElement) => {
                    if (!this.verifyUserRight(element.id, childElement.id)) {
                        // this.navigationService.updateNavigationItem(
                        //     childElement.id,
                        //     {
                        //         hidden: true,
                        //     }
                        // );
                    } else {
                        // this.navigationService.updateNavigationItem(
                        //     childElement.id,
                        //     {
                        //         hidden: false,
                        //     }
                        // );
                    }
                });
            }
        });

        // this.navigationService.updateNavigationItem("channels", {
        //     hidden: false,
        // });
        const userRole = this.userInfo().account_type;
        if (userRole == 0) {
            // this.navigationService.updateNavigationItem("support", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("ticket", {
            //     hidden: true,
            // });
            // this.navigationService.updateNavigationItem("faq", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("viewProfilesSA", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("singleProfile", {
            //     hidden: true,
            // });
            // this.navigationService.updateNavigationItem("145", {
            //     hidden: false,
            // });
        } else {
            // this.navigationService.updateNavigationItem("support", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("ticket", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("faq", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("viewProfilesSA", {
            //     hidden: true,
            // });
            // this.navigationService.updateNavigationItem("singleProfile", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("145", {
            //     hidden: true,
            // });
        }

        if (userRole == 0 || userRole == 1) {
            // this.navigationService.updateNavigationItem("view_segment", {
            //     hidden: false,
            // });
            // this.navigationService.updateNavigationItem("configure_segment", {
            //     hidden: false,
            // });
        } else {
            // this.navigationService.updateNavigationItem("view_segment", {
            //     hidden: true,
            // });
            // this.navigationService.updateNavigationItem("configure_segment", {
            //     hidden: true,
            // });
        }

        // this.navigationService.updateNavigationItem("viewWhatsappCamp", {
        //     hidden: false,
        // });

        // this.navigationService.updateNavigationItem('missCall', {
        //   hidden: false
        // });

        // this.navigationService.updateNavigationItem("wa", {
        //     hidden: false,
        // });

        // this.navigationService.updateNavigationItem("viewReports", {
        //     hidden: false,
        // });

        // this.navigationService.updateNavigationItem("downloadReports", {
        //     hidden: false,
        // });
        // this.navigationService.updateNavigationItem("general", {
        //     hidden: false,
        // });
        // this.navigationService.updateNavigationItem("configure_EtoS", {
        //     hidden: false,
        // });

        const userRole1 = this.userInfo().account_type;
        if (userRole1 == 0 || userRole1 == 1) {
            const userRole1 = this.userInfo().account_type;
            if (userRole1 == 0) {
                // this.navigationService.updateNavigationItem("viewAll", {
                //     hidden: false,
                // });
                // this.navigationService.updateNavigationItem("view", {
                //     hidden: true,
                // });
                // this.navigationService.updateNavigationItem("create", {
                //     hidden: false,
                // });
                // this.navigationService.updateNavigationItem("view_EtoS", {
                //     hidden: false,
                // });
            } else {
                // this.navigationService.updateNavigationItem("viewAll", {
                //     hidden: true,
                // });
                // this.navigationService.updateNavigationItem("view", {
                //     hidden: false,
                // });
                // this.navigationService.updateNavigationItem("create", {
                //     hidden: true,
                // });
                // this.navigationService.updateNavigationItem("view_EtoS", {
                //     hidden: true,
                // });
            }
        }
    }
}
