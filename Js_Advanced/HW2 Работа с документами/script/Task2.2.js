function create () {
    let button = document.getElementById('bid');
    let counter = 0;
    button.onclick = function () {
        let p = document.createElement('p');
        p.innerHTML = "New Paragraph";
        document.body.appendChild(p);
        let body = document.body.childNodes;
        counter++;
        if (counter == 10) {
            for(let i = 0; i < body.length; i++) {
                if(body[i].nodeName == 'P') {
                    document.body.removeChild(body[i]);
                    i--;
                }
            }
            counter = 0;
        }
    }
}