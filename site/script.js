(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;
        let myHeight = window.innerHeight;
        // your size calculation code here
        document.getElementById("screen").innerHTML = `Width: ${myWidth} Height: ${myHeight}`;
    };


})();
