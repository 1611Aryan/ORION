var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var wrapper = document.getElementById("wrapper");
if (leftBtn && rightBtn && wrapper) {
    var index_1 = 0;
    var numOfEvents_1 = getComputedStyle(wrapper).getPropertyValue("--numOfEvents");
    // const wrapperWidth
    leftBtn.onclick = function () {
        if (index_1 <= 0)
            return;
        index_1--;
        wrapper.style.setProperty("--index", index_1.toString());
    };
    rightBtn.onclick = function () {
        if (index_1 >= parseInt(numOfEvents_1) - 1)
            return;
        index_1++;
        wrapper.style.setProperty("--index", index_1.toString());
    };
}
