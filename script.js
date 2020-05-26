function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

function loadLocalStorage() {
    var sourceURL = getURLParameter("url");
    localStorage.sourceURL = sourceURL;
    var amountOfTime = getURLParameter("t");
    document.querySelector('meta[http-equiv="refresh"]').setAttribute("content", amountOfTime);
    $("#displayFrame").attr("src", sourceURL);
}