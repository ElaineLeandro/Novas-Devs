function save (){
    var nome = $("#nome").val();
    alert(nome);
    
    $.get("../../backend/indexmock.txt",
    function(data){
        $("#conteudo").html(data);
    }
    )
} 
function insereLinhaTabela(){
    tabela= document.getElementById("minhaTabela");
    novaLinha = tabela.insertRow();

    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("nome").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("nasc").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML=document.getElementById("cep").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.querySelector('input[name=sexo]:checked').value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("tel").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("email").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML=document.getElementById("civil").value;
}
