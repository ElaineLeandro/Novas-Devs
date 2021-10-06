function save (){
    
    var nome = $("#nome").val();
    alert(nome);    
    alert("ola mamae");
    $.get("../../backend/indexmock.txt",
    function(data){
        $("#conteudo").html(data);
    }
    )
} 
function mostraPokemon(){
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/12/"
      }).done(function(resultado) {
        alert(resultado.name + resultado.sprites.back_default);
        console.log(resultado);
        $('#sprite').html("<img src='"+resultado.sprites.back_default+"'>");             
      }).fail(function(jqXHR, textStatus, msg){
        alert("erro ao realizar requisição");
   }); 
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
