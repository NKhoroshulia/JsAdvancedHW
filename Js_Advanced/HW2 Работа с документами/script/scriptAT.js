window.onload = function () {
    let p = document.getElementById('allP');
    let a = document.getElementById('allLink');
    let div = document.getElementById('allDiv');

    p.onclick = function () {
        let pArr = document.getElementsByTagName('p');
        for (let i = 0; i < pArr.length; i ++) {
            pArr[i].style.border = "1px solid green";
        } 
    }

    a.onclick = function () {
        let aArr = document.getElementsByTagName('a');
        for (let i = 0; i < aArr.length; i ++) {
            aArr[i].style.border = "1px solid red";
        } 
    }

    div.onclick = function () {
        var divA = document.getElementById("test_div");
        divA.style.border = "3px solid blue";
    }
}