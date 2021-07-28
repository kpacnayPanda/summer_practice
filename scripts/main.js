function redirect(x) {
    if (x == 1)
    {
        var url = "http://www.json-generator.com/api/json/get/cqoKnSojKG?indent=2";
        localStorage.setItem("textvalue", url);
        window.location.assign("page2.html");
    } else 
    {
        var url = "http://www.json-generator.com/api/json/get/cqZILemGIy?indent=2";
        localStorage.setItem("textvalue", url);
        window.location.assign("page2.html");
    }
    // window.location.assign("page2.html");
}

//http://www.json-generator.com/api/json/get/casKcqGphK?indent=2