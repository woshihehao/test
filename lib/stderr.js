/**
 * Created by hackeris on 15/7/29.
 */

onerror = function (msg, url, line) {

    var err_msg = msg + " " + url + ": " + line;
    screen.innerHTML += "<p style=\"color: red;\">" + err_msg + "</p>";
};