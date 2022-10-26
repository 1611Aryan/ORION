const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const wrapper = document.getElementById("wrapper")

if (leftBtn && rightBtn && wrapper) {
    let index = 0;
    const numOfEvents = getComputedStyle(wrapper).getPropertyValue("--numOfEvents")
    // const wrapperWidth

    leftBtn.onclick = () => {
        if (index <= 0)
            return;
        index--;
        wrapper.style.setProperty("--index", index.toString())
    }
    rightBtn.onclick = () => {
        if (index >= parseInt(numOfEvents) - 1)
            return;
        index++;
        wrapper.style.setProperty("--index", index.toString())
    }

}



