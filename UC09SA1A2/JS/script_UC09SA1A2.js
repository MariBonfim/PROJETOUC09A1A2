function validaFormulario() {
    alert("Validar Formulário")
}

function geraJson() {
    alert("Gerar JSON")
}


var vName = document.getElementById("name").value;
var vNickname = document.getElementById("nickname").value;
var vDay = document.getElementById("day").value;
var vMonth = document.getElementById("month").value;
var vYear = document.getElementById("year").value;
var vCpf = document.getElementById("cpf");

var vResultado = false;


if (vName.length >= 10 && vName.length <= 80) {
    if (vNickname.length >= 2 && vNickname.length <= 20) {
        if (vDay >= 1 && vDay <= 31) {
            if (vMonth >= 1 && vMonth <= 12) {
                if (vYear >= 1900 && vYear <= 2021) {
                    if (vTeamId != "") {
                        if (vCpf.value.length == 14) {
                            vResultado = true;
                        }
                    } else {
                        vResultado = false;
                    }
                } else {
                    vResultado = false;
                }
            } else {
                vResultado = false;
            }



        var vResultadoP = document.getElementById("pResultado");
        vResultado.innerHTML = vResultado;

        var obj_form = {
            name: ""
            nickname: "",
            day: 0,
            month: 0,
            year: 0,
            cpf: "",
            team_id: "",
            sport: []
        }

        obj_form.name = document.getElementById("name").value;
        obj_form.nickname = document.getElementById("nickname").value;
        obj_form.day = document.getElementById("day").value;
        obj_form.month = document.getElementById("month").value;
        obj_form.year = document.getElementById("year").value;
        obj_form.cpf = document.getElementById("cpf").value;
        obj_form.team_id = document.getElementById("team_id").value;

        var sportList = document.getElementsById("sport");

        if (sportList[0].checked) {
            obj_form.sport.push(sportList[0].innerHTML);
        }

        var vJson = JSON.stringify(obj_form);
        var vResultadoP = document.getElementById("pResultado");
        vResultadoP.innerHTML = vJason;
        }