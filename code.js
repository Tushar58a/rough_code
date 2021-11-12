const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",

});
const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "css",

});
const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript",

});

document.querySelector("#run-btn").addEventListener("click", function () {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();
});
document.querySelector(".run-btn3").addEventListener("click", function () {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();
});
document.querySelector(".run-btn4").addEventListener("click", function () {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();
});
document.querySelector(".run-btn5").addEventListener("click", function () {
    let htmlCode = htmlEditor.getValue();
    let cssCode = "<style>" + cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();
});

document.querySelector("#run-btn1").addEventListener("click", function () {
    document.querySelector(".html-code").style.display = "block";
    document.querySelector(".html-code").style.width = "90%";
    document.querySelector(".html-code").style.marginLeft = "5%";
    document.querySelector(".html-code").style.marginTop = "5%";
    document.querySelector(".css-code").style.display = "block";
    document.querySelector(".css-code").style.width = "90%";
    document.querySelector(".css-code").style.marginLeft = "5%";
    document.querySelector(".css-code").style.marginTop = "6%";
    document.querySelector(".js-code").style.display = "block";
    document.querySelector(".js-code").style.width = "90%";
    document.querySelector(".js-code").style.marginLeft = "5%";
    document.querySelector(".js-code").style.marginTop = "6%";
    document.querySelector(".code-editor").style.height = "1300px";
    document.querySelector(".editor").style.height = "1300px";
    document.querySelector("#run-btn2").style.display = "inline-block";
    document.querySelector("#run-btn1").style.display = "none";
    document.querySelector(".run-btn3").style.display = "inline-block";
    document.querySelector(".run-btn4").style.display = "inline-block";
    document.querySelector(".run-btn5").style.display = "inline-block";


});
document.querySelector("#run-btn2").addEventListener("click", function () {
    document.querySelector(".html-code").style.display = "inline-block";
    document.querySelector(".html-code").style.width = "30%";
    document.querySelector(".html-code").style.marginLeft = "2%";
    document.querySelector(".html-code").style.marginTop = "5%";
    document.querySelector(".css-code").style.display = "inline-block";
    document.querySelector(".css-code").style.width = "30%";
    document.querySelector(".css-code").style.marginLeft = "2%";
    document.querySelector(".css-code").style.marginTop = "5%";
    document.querySelector(".js-code").style.display = "inline-block";
    document.querySelector(".js-code").style.width = "30%";
    document.querySelector(".js-code").style.marginLeft = "2%";
    document.querySelector(".js-code").style.marginTop = "5%";
    document.querySelector(".code").style.height = "400px";
    document.querySelector(".editor").style.height = "460px";
    document.querySelector("#run-btn2").style.display = "none";
    document.querySelector("#run-btn1").style.display = "inline-block";
    document.querySelector(".run-btn3").style.display = "none";
    document.querySelector(".run-btn4").style.display = "none";
    document.querySelector(".run-btn5").style.display = "none";




});

document.querySelector("#run-btn6").addEventListener("click", function () {
    document.querySelector(".editor").style.backgroundImage = "url('./theme9.jpg')";
    document.querySelector("#run-btn6").style.display = "none";
    document.querySelector("#run-btn7").style.display = "inline-block";
    document.getElementsByClassName("tags").style.color = "#f5faff";

});
document.querySelector("#run-btn7").addEventListener("click", function () {
    document.querySelector(".editor").style.backgroundImage = "url('./theme11.jpg')";
    document.querySelector("#run-btn6").style.display = "inline-block";
    document.querySelector("#run-btn7").style.display = "none";
    document.getElementsByClassName("tags").style.color = "#111";
});


function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("open-button").style.display = "none";
    document.querySelector(".footer").style.marginTop = "25%";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("open-button").style.display = "block";
    document.querySelector(".footer").style.marginTop = "1%";
}





// function clipboard() {
//     var copyText = document.getElementById("js-Code");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");

//     document.getElementById("1").innerHTML = "copied";

// }
// function clipboard1() {
//     var copyText = document.getElementById("html-Code");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     document.getElementById("3").innerHTML = "copied";


// }
// function clipboard2() {
//     var copyText = document.getElementById("css-Code");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");

//     document.getElementById("2").innerHTML = "copied";
// }

