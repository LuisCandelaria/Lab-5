let Txtinput = document.getElementById("textID");
let Btnsubmit = document.getElementById("submitID");
let list = document.getElementById("ulID");

Btnsubmit.addEventListener("click", (event) =>{
    event.preventDefault();
    let text = Txtinput.value;
    if(text != ""){
        var node = document.createElement("li");
        node.classList.add("item");
        var txtNode = document.createTextNode(text);
        node.appendChild(txtNode);
        node.innerHTML += `<br><br><br>`;
        node.innerHTML += `<button class="liBtn" type="button" onclick="crossword(this)">check</button>`;
        node.innerHTML += `<button class="liBtn delBtn" type="button" onclick="del(this)">delete</button>`;
        list.appendChild(node);
        Txtinput.value = "";
    }
});

function crossword(button){
    var li = button.parentElement.classList.add("check");
    var txt = button.parentElement.innerText;
    var pos = txt.indexOf("\n");
    var itemName = txt.substring(0,pos);
    var newhtml = button.parentElement;
    newhtml.innerHTML = ``;
    newhtml.innerHTML += itemName;
    newhtml.innerHTML += `<br><br><br>`;
    newhtml.innerHTML += `<button class="liBtn" type="button" onclick="nocrossword(this)">check</button>`;
    newhtml.innerHTML += `<button class="liBtn delBtn" type="button" onclick="del(this)">delete</button>`;
}

function nocrossword(button){
    var li = button.parentElement.classList.remove("check");
    var txt = button.parentElement.innerText;
    var pos = txt.indexOf("\n");
    var itemName = txt.substring(0,pos);
    var newhtml = button.parentElement;
    newhtml.innerHTML = ``;
    newhtml.innerHTML += itemName;
    newhtml.innerHTML += `<br><br><br>`;
    newhtml.innerHTML += `<button class="liBtn" type="button" onclick="crossword(this)">check</button>`;
    newhtml.innerHTML += `<button class="liBtn delBtn" type="button" onclick="del(this)">delete</button>`;
}

function del(button){
    var li = button.parentNode.parentNode.removeChild(button.parentNode);
}