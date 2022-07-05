
import { environment } from '../../../src/environments/environment';

export class OcmConstants {
  _tokenKey: string = "___dc__ocm_bt";
  _userData: string = "___dc__ocm_ud";
  authInfo() {
    let toRet: any = {
      token: "",
      username: "",
      userid: ""
    };
    // let _sessionData = sessionStorage.getItem(this._tokenKey);
    let _sessionData = localStorage.getItem(this._tokenKey);
    if (_sessionData != null && typeof (_sessionData) != 'undefined') {
      if (typeof (_sessionData) == "string" && _sessionData.length > 0) {
        let __sessionData = atob(_sessionData);
        if (__sessionData.indexOf("|") > -1) {
          let _dataArr = __sessionData.split("|");
          if (Array.isArray(_dataArr) && _dataArr.length >= 3) {
            toRet.token = _dataArr[2],
              toRet.username = _dataArr[1],
              toRet.userid = _dataArr[0]
          }
        }
      }
    }
    return toRet;
  };
  userInfo() {
    let toRet: any = null;
    // let _sessionData = sessionStorage.getItem(this._userData);
    let _sessionData = localStorage.getItem(this._userData);
    if (_sessionData != null && typeof (_sessionData) != 'undefined') {
      toRet = JSON.parse(_sessionData);
    }
    return toRet;
  };
  _data: any = "data";
  _token: any = "tkn";
  basic = "basic";
  bearer = "bearer";
  authToken = "Authorization";
  staticToken = "Basic UEFZUFJPX1dFQl9VU0VSOlBBWVBST19XRUJfVVNFUl9TRUNSRVQ=";
  resfreshStaticToken = "Basic d2ViQ2xpZW50OndlYkNsaWVudFNlY3JldA==";
  somethingWentWrong = "Something went wrong. Please try again later.";
  dontHaveRights = "You don't have edit right.";
  noRecords = "No Records Found.";
  loading = "loading....";
  maxUploadFileSize = 10 * 1024 * 1024;
  apiCalls = {
    login: 'login',
    forgotPassword: {
      generateSecureLink: 'login/generateSecureLink',
      validateSecureLink: 'login/verifySecureLink',
      updatePassword: 'login/updatePassword'
    },
    registeration: {
      otpGenerate: 'login/generateOtp',
      otpVerify: 'login/verifyOtp',
      register: 'login/onboardUser',
      usernameVerify: 'login/usernameVerify'
    },
    forgotUsername: 'login/getUsername',
    profile: {
      masters: {
        designation: 'login/getDesignationMaster'
      },
      verifyPassword: 'login/verifyPassword',
      changePassword: 'login/changePassword',
      R: 'login/getProfile',
      U: 'login/updateProfile'
    },
    aggregators: {
      masters: {
        users: 'aggregator/getUserlist'
      },
      checkAggregatorName: 'aggregator/checkAggregatorName',
      updateStatus: 'aggregator/updateStatus',
      C: 'aggregator/create',
      R: {
        all: 'aggregator/getlist?loginId=',
        particular: 'aggregator/get'
      },
      U: 'aggregator/update',
      D: 'aggregator/delete'
    }
  };
  patterns = {
    email: /^(?!\s)[a-zA-Z0-9!#$%&'*.+/=?^_`{|}~-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$/,
    password: /^(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,50}$/,
    passwordWithOneUpperLowerNumberAndSpecial: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    alphaNumaric: /^[a-zA-Z0-9]*$/,
    cliPattern: /^[a-zA-Z,]*$/,
    promotionalPattern: /^[0-9]{6}$/,
    transactionalPattern: /^[a-zA-Z]{6}$/,
    cliPatternPrmotional: /^[0-9,]*$/,
    numberOnly: /^\d+$/,
    commaSeparatedString:/^[^,\n]+(?:,[^,\n]+){0,9}$/,
    campName: /^[A-Za-z0-9@#_-]+(?: [a-zA-Z\d@#_-]+)*$/,
    emailSig: /^[A-Za-z0-9@,.#:_-]+(?: [a-zA-Z\d@,.#:_-]+)*$/,
    //spaceEntry: /^[A-Za-z0-9]+(?:  [a-zA-Z\d]+)*$/,
    uriPattern: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    //ftpUriPattern: /^(ftp:\\)?[0-9]+[.][0-9]+)*?$/,
    ftpUriPattern: /^(ftp:\/\/|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z0-9]{1,5}(:[0-9]{1,5})?(\/.*)?$/,
    httpUriPattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{3,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{3,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{3,}|www\.[a-zA-Z0-9]+\.[^\s]{3,})/gi,
    // ftpURIPattern: /^(ftp://([a-z0-9]+:[a-z0-9]+@)?([\\.a-z0-9]+)/([\\./a-z0-9]+)$)?$/,
    uriPatternWithCaps: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,

    // /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    // ftpURIPattern: \b(((\S+)?)(@|mailto\:|(news|(ht|f)tp(s?))\://)\S+)\b

    alphaNumericSpaceOnly: /^[a-zA-Z0-9 ]*$/,
    nameWithOnlyAlphabetsSpace: /^[a-zA-Z]+[a-zA-Z ]*$/,
    indianMobileNumber: /^[6-9][0-9]*$/,
    indianMobileNumberWithLength: /^[6-9][0-9]{9}$/,
    virtualNumber: /^(0|\+91)[6-9][0-9]{9}$|^(0|1|6|7|8|9)([0-9]{10})$/,
    tollFreeNumberWithLength: /^(1800([0-9]{6}))$|^(800|888|877|866|855|844|833)([0-9]{7})$/,
    name: /^[a-zA-Z]((?!.*[-' ]{2})[a-zA-Z '-]?)+$/,
    lastName: /^[a-zA-Z_\-]+$/,
    registerName: /^[A-Za-z0-9.]+(?: [a-zA-Z\d.]+)*$/,  // /^[a-zA-Z. ]*$/, 
    ///^[a-zA-Z. ]+(?:[a-zA-Z. ]+)*$/, 
    phone: /^[0-9]+$/,
    emailPhone: /(^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$)|(^[0-9]+$)/,
    alphaNumericStartWithOnlyAlphabet: /^[a-zA-Z]([a-zA-Z0-9_]?)+$/,
    alphaNumericStartWithOnlyAlphabetWithSpaceAndUnderScore: /^[a-zA-Z]([a-zA-Z0-9_\s]?)+$/,
    alphaNumericStartWithOnlyAlphabetWithSpaceAndUnderScoreAndOneSCharoneTime: /^[a-zA-Z]((?!.*[-_ ]{2})[a-zA-Z0-9-_\s]?)+$/,
    alphaNumericStartWithAlphaNumericWithSpace: /^[a-zA-Z0-9]([a-zA-Z0-9\s]?)+$/,
    startWithAlphaNumeric: /^[a-zA-Z0-9]((?!.*[-_@*#&^!%$]{2})[\s\S]?)+/,
    alphaNumericOnly: /^[a-zA-Z0-9]*$/,
    startWithAlphaOnly: /^[a-zA-Z]([\s\S]?)+/,
    tenDigitCommaSeparatedNoNational: /^([6-9]{1}[0-9]{9},){0,9}([6-9]{1}[0-9]{9})$/,
    tenDigitCommaSeparatedNoInternational: /^([0-9]{5,16},){0,9}([0-9]{5,16})$/,
    IP: /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/,
    address: /^[A-Za-z0-9_#,./-]+(?: [a-zA-Z\d_#,./-]+)*$/,
    alphanumericWithCommaOnly: /^[A-Za-z0-9,]*$/,
    numberWithoutZero: /^[1-9]*$/,
    emailSenderID: /^[a-zA-Z0-9!#$%&'*.+/=?^_`{|}~-]*$/,
    placeHolderRegex: /<![a-zA-Z0-9 *]*!>/g,
    PlaceHolderWhatsApp: /{[a-zA-Z0-9 *]*}/g,
    extendedGsmCharacter: /[\u007E\u005E\u007B\u007D\u005B\u005D\u005C\u007C]/g,
    tenCommaSeparatedEmail: /^((?!\s)[a-zA-Z0-9!#$%&'*.+/=?^_`{|}~-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,},){0,9}(?!\s)[a-zA-Z0-9!#$%&'*.+/=?^_`{|}~-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$/,
    fiveCommaSeparatedEmail: /^((?!\s)[a-zA-Z0-9!#$%&'*.+/=?^_`{|}~-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,},){0,4}(?!\s)[a-zA-Z0-9!#$%&'*.+/=?^_`{|}~-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$/,
    note: /^[a-zA-Z0-9!#$%&'*.@+/=?^_`{|}~-\s]*$/,
    subject: /^[A-Za-z0-9@!#$%&'*.+/=?^_`{|}~)(-:><]+(?: [a-zA-Z\d@!#$%&'*.+/=?^_`{|}~)(-:><]+)*$/,
    alphaNumaricWIthDOtAndUnderscore: /^[a-zA-Z]([a-zA-Z0-9_.]?)+$/,
    apiName: /^[a-zA-Z0-9_/-]*$/,
    charOnly: /^[a-zA-Z]*$/,
    serviceampName: /^[A-Za-z0-9_-]+(?: [a-zA-Z\d_-]+)*$/,

    charOnlySpace: /^[a-zA-Z\s]*$/
  };
  dateFormat = "dd/MM/yyyy";
  dateTimeFormat = "dd/MM/yyyy HH:mm:ss";
}

// emailSenderID: /^(?!\s)[a-zA-Z0-9!#$%&'*.+/=?^_`{|}~-]/,
// extendedGsmCharacter: /[\^\{\}\\\[\~\]\|\€]/g,
// -----------------------------------------------------------------------------------------------------
// @ API URLS
// -----------------------------------------------------------------------------------------------------

export class AppApiUrls {
  public static VERSION_1 = 'v1/';
  public static VERSION_2 = 'v2/';
  public static VERSION_3 = 'v3/';
  public static VERSION_4 = 'v4/';
  public static VERSION_5 = 'v5/';

  public static GET_QUARANTINE_LIST ='quarantineList/getQuarantineList';
  public static CREATE_QUARANTINE_LIST ='quarantineList/createQuarantineList';
  public static UPDATE_QUARANTINE_LIST ='quarantineList/updateGroup';
  public static DELETE_QUARANTINE_LIST ='quarantineList/deleteGroup';
  public static EXPORT_QUARANTINE_LIST ='quarantineList/downloadFile';

  public static UNSUBSCRIBE_GROUP_LOGGING = 'test/test';
 

}

export class DefaultCampaignNames {
  public static VOICE_NAME = 'OBD_CAMP_';
  public static SMS_NAME = 'SMS_CAMP_';
  public static EMAIL_NAME = 'EMAIL_CAMP_';
  public static WHATSAPP_NAME = 'WHATSAPP_CAMP_';
}

export class AppApiStatusCode {
  public static RESPONSE_CODE_SUCCESS = 'success';
  public static RESPONSE_CODE_FAILURE = 'failed';
}

export class AppCustomMessages {
  public static SOMETHING_WENT_WRONG = 'Sorry! Something went wrong';
  public static TPS_ERROR_MSG = 'TPS should be more than 0';
  public static CONFIRMATION_DELETE = 'Are you sure you want to delete?';
  public static CONFIRMATION_CANCEL = 'Are you sure you want to cancel?';
  public static CONFIRMATION_PAUSE = 'Are you sure you want to pause?';
  public static CONFIRMATION_RESUME = 'Are you sure you want to resume?';
  public static CONFIRMATION_STOP = 'Are you sure you want to stop?';
}
