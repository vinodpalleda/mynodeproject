(function () {})();
var url;
var omni = {
    userLogin: function (userDetails) {
        let userObj = {
            userDetails: userDetails,
            browser: this.getBrowserDetails(),
            dateTime: this.getDateTime(),
        };

        console.log("Login:--  " + JSON.stringify(userObj));

        let finalObj = {
            eventName: "Login",
            eventValue: JSON.stringify(userObj),
        };

        this.submitEventData(
            "http://digiconnect.spicedigital.in/evantCapturingApi/eventSave",
            JSON.stringify(finalObj)
        );
    },

    userLogout: function (userId) {
        let userObj = {
            userId: userId,
            browser: this.getBrowserDetails(),
            dateTime: this.getDateTime(),
        };

        console.log("Logout:--  " + JSON.stringify(userObj));

        let finalObj = {
            eventName: "Logout",
            eventValue: JSON.stringify(userObj),
        };

        this.submitEventData(
            "http://digiconnect.spicedigital.in/evantCapturingApi/eventSave",
            JSON.stringify(finalObj)
        );
    },

    customEvent: function (data) {
        let userObj = {
            data: data,
            browser: this.getBrowserDetails(),
            dateTime: this.getDateTime(),
        };

        console.log("Custom Event:--  " + JSON.stringify(userObj));

        let finalObj = {
            eventName: "Custom",
            eventValue: JSON.stringify(userObj),
        };

        this.submitEventData(
            "http://digiconnect.spicedigital.in/evantCapturingApi/eventSave",
            JSON.stringify(finalObj)
        );
    },

    submitEventData: function (url, data) {
        const Http = new XMLHttpRequest();
        Http.open("POST", url);
        Http.setRequestHeader("content-type", "application/json");
        Http.setRequestHeader("Access-Control-Allow-Origin", "*");
        Http.send(data);

        Http.onreadystatechange = () => {
            if (Http.readyState == 4) {
                console.log("Event Submitted Successfully!!");
            }
        };
    },

    getDateTime: function () {
        var d = new Date();
        return d;
    },
    getBrowserDetails: function () {
        if (
            (navigator.userAgent.indexOf("Opera") ||
                navigator.userAgent.indexOf("OPR")) != -1
        ) {
            return "Opera";
        } else if (navigator.userAgent.indexOf("Chrome") != -1) {
            return "Chrome";
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            return "Safari";
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return "Firefox";
        } else if (
            navigator.userAgent.indexOf("MSIE") != -1 ||
            !!document.documentMode == true
        ) {
            //IF IE > 10
            return "IE";
        } else {
            return "unknown";
        }
    },
};
