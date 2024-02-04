function loadDoc() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var rez = JSON.parse(this.responseText);
            setList(rez);
        }
    }
    request.open("GET", "kursevi.json", true);
    request.send();
}


function setList(json){
                var lista = document.getElementById("kursevi");
                var opis = document.getElementById("opis");
                for(let i = 0; i< json.length; i++){
                    lista.innerHTML += " <option value=" + i + ">"+ json[i].name +"</option>"
                }
                var description = `<table><tr><td>Naziv</td><td>${json[0].name}</td></tr>
                                        <tr><td>Godine</td><td>${json[0].years}</td></tr>
                                        <tr><td>Pocetak prakse</td><td>${json[0].practice}</td></tr>
                                        <tr><td>Placena praksa</td><td>${json[0].sponcored}</td></tr>
                                    </table>`;
                opis.innerHTML = description;
                var test = `hello ${json}`;

                lista.onchange = function () {
                    var i = lista.value;
                    var description = `<table><tr><td>Naziv</td><td>${json[i].name}</td></tr>
                                        <tr><td>Godine</td><td>${json[i].years}</td></tr>
                                        <tr><td>Pocetak prakse</td><td>${json[i].practice}</td></tr>
                                        <tr><td>Placena praksa</td><td>${json[i].sponcored}</td></tr>
                                    </table>`;
                    opis.innerHTML = description;
                }
}

loadDoc();