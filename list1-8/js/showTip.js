function Toast(msg,duration){
    duration=isNaN(duration)?3000:duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="width: 40%;font-size:1.3rem;padding-left:0.5rem;padding-right:0.5rem;padding-top: 0.3rem;padding-bottom: 0.3rem;color: white;line-height: 2.3rem;text-align: center;border-radius: 5px;position: fixed;top: 80%;left: 30%;z-index: 999999;background: green;font-size: 12px;";
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
}