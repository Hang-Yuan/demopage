
(function (Settings, $, undefined) {
    Settings.initialise = function () {
        this.Environment = 'WebUI';
        this.Application = {"RegionSettings":{"RegionCode":"US","Distance":"imperial","Speed":"imperial","Today":"2024-02-29T00:00:00","Year":2024,"Month":2,"Day":29},"GroupName":"Public","GroupId":"b9015858-988c-48a4-9473-7c193df083e4","Link":"/$b9015858-988c-48a4-9473-7c193df083e4$/departments/development-services","SearchSettings":{"ResultsPage":"/$b9015858-988c-48a4-9473-7c193df083e4$/content-search","ResultsQuerystring":"?dlv_OC CL Public Site Search=(keyword={0})","ResultsStaffFirst":true,"ResultsStaffTitle":"","ResultsContentTitle":""},"LanguageSettings":{"PageLanguage":"en-US","UserLanguage":"en-US","Always":true,"InjectGoogleTranslate":false},"AnalyticsSettings":{"Key":"c461b1cd-cda0-497d-8c80-066fef283b65"},"LocationSettings":{"Bounds":{"northeast":{"lat":"32.7566","lng":"-97.4185"},"southwest":{"lat":"32.9103","lng":"-97.3169"}},"MapRegion":"US"},"OpenForms":{"Url":"https://au.openforms.com","ScriptPath":"/Scripts/embed-iframe.js"},"ContentTypeName":"FW Second Department","UnsupportedBrowserSettings":{"ShowWarning":true,"BrowserList":{"Trident":"Internet Explorer","MSIE":"Internet Explorer"}},"GeoCoding.CenterPoint.Default":"-37.816359,144.965633"};
        this.Debugging = {"ScriptCombine":false,"TextSnippets":false};
        this.Plugins = {};
        this.ContentListFilters = [];
        this.Visitor = null;
        this.ContentSubscriptionStatus = 'not_available';
        this.AddressPickerVariables = [];
        this.SearchVariables = [];
        this.govDSubscriptionControl='';
    };
} (OpenCities.Settings = OpenCities.Settings || {}, jQuery));
OpenCities.Settings.initialise();
