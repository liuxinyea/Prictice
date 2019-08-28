let fs=require('fs');
function route(pathname,res) {
    let htmlStr='';
    let indexHtml=fs.createReadStream(pathname);
    indexHtml.on("data",function (data) {
        htmlStr+=data;
    });
    indexHtml.on("end",function () {
        res(htmlStr);
    });
    indexHtml.on("error",function (e) {
        res("404");
    });

}

exports.route = route;
