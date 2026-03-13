console.log("ExamCloud Shortcuts Loaded");

const marksMap = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 0.5,
    "7": 1.5,
    "8": 2.5,
    "9": 3.5
};

/* Inject page script */
const script = document.createElement("script");
script.src = chrome.runtime.getURL("page.js");
script.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(script);



/* Keyboard shortcuts */
document.addEventListener("keydown", function (e) {

    /* Next paper */
    if (e.key === "ArrowRight" || e.code === "Space") {
        console.log("Navigate Right");

        window.postMessage({
            source: "examcloud-extension",
            action: "NEXT"
        }, "*");
    }

    /* Previous paper */
    if (e.key === "ArrowLeft") {
        console.log("Navigate Left");

        window.postMessage({
            source: "examcloud-extension",
            action: "PREV"
        }, "*");
    }
	if (e.key === "+" || e.code === "NumpadAdd") {
        console.log("Increment by 0.5");
        
        window.postMessage({
            source: "examcloud-extension",
            action: "INCREMENT",
            value: 0.5
        }, "*");
    }
	
	/* --- NEW: Decrement by 0.5 --- */
    if (e.key === "-" || e.code === "NumpadSubtract") {
        console.log("Decrement by 0.5");
        
        window.postMessage({
            source: "examcloud-extension",
            action: "DECREMENT",
            value: 0.5
        }, "*");

    }
    const key = e.key;              // regular keys
    const code = e.code || "";      // numpad keys

    let num = null;

    if (marksMap.hasOwnProperty(key)) {
        num = key;
    } else if (code.startsWith("Numpad")) {
        num = code.replace("Numpad", "");
    }

    if (num !== null && marksMap.hasOwnProperty(num)) {
        const marks = marksMap[num];

        window.postMessage({
            source: "examcloud-extension",
            action: "MARKS",
            value: marks
        }, "*");
    }
});