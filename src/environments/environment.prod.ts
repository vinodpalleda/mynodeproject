const domainName = window.location.origin.indexOf('localhost') === -1 ? window.location.origin : 'http://digiconnect.spicedigital.in';
export const environment = {
    production: true,
    hmr: false,
    // backendApiURL: "http://digiconnect.spicedigital.in/omni-user-management/api/v1/",
    // emailBackendUrl: "http://digiconnect.spicedigital.in/",
    // cdnUrl: "http://digiconnect.spicedigital.in/images/",

    // backendApiURL: "http://proddigiconnect.spicedigital.in/omni-user-management/api/",
    // emailBackendUrl: "http://proddigiconnect.spicedigital.in/",
    // cdnUrl: "https://cdn.1ds.in/",
    // templateFileCdnUrl: "http://proddigiconnect.spicedigital.in/imgs/",
    // backendApiURLWA: "http://proddigiconnect.spicedigital.in/omni-user-management/wa/api/v1/"
// 
//     backendApiURL: "http://digiconnect.spicedigital.in/omni-user-management/api/",
//     backendApiURLTwoFA: "http://digiconnect.spicedigital.in/omni-twofa-api/api/",
//     backendApiURLWA: "http://digiconnect.spicedigital.in/omni-user-management/wa/api/v1/",
//     emailBackendUrl: "http://digiconnect.spicedigital.in/",
//     cdnUrl: "http://digiconnect.spicedigital.in/images/",
//     templateFileCdnUrl: "http://digiconnect.spicedigital.in/images/",
//     basicImageUrl: "images/basic.png"
    
    backendApiURL: domainName + "/omni-user-management/api/",
    backendApiURLTwoFA: domainName + "/omni-twofa-api/api/",
    emailBackendUrl: domainName + "/",
    cdnUrl: domainName + "/images/",
    templateFileCdnUrl: domainName + "/imgs/",
    backendApiURLWA: domainName + "/omni-user-management/wa/api/v1/",
    basicImageUrl: "imgs/basic.png"
    
};
