// Bai 1
function changeTextContent(selector, textContents) {
    if (document.querySelector(selector) === null) {
        return
    } else {
        document.querySelector(selector).textContent = textContents;
    }
}

// Bai 2
function changeHTMLContent(selector, htmlContent) {
    if (document.querySelector(selector) === null) {
        return
    } else {
        document.querySelector(selector).innerHTML = `<${htmlContent.element} class="${htmlContent.className}">${htmlContent.content}</${htmlContent.element}`;
    }
}

var obj = {
    element : "p",
    className : "text-content",
    content : "This is the content"
}

// Bai 3
function changeClassActive(selector, addOrRemove) {
    if (document.querySelector(selector) === null) {
        return
    } else {
        if (addOrRemove === "add") {
            if (!document.querySelector(selector).classList.contains("active")) {
                document.querySelector(selector).classList.add("active");
            } else {
                console.log("Class already exist")
            }
        } else if (addOrRemove === "remove") {
            if (document.querySelector(selector).classList.contains("active")) {
                document.querySelector(selector).classList.remove("active");
            } else {
                console.log("Class not found")
            }
        } else {
            console.log("Incorrect statement");
        }
    }
}