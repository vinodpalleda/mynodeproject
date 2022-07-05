// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const domainName = window.location.origin.indexOf('localhost') === -1 ? window.location.origin : 'https://panel.koreroplatforms.com';
export const environment = {
    production: false,
    hmr: false,
    backendApiURL: domainName + "/omni-user-management/api/",
    backendApiURLTwoFA: domainName + "/omni-twofa-api/api/",
    backendApiURLWA: domainName + "/omni-user-management/wa/api/v1/",
    emailBackendUrl: domainName + "/",
    cdnUrl: domainName + "/images/",
    templateFileCdnUrl: domainName + "/images/",
    basicImageUrl: "images/basic.png"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
