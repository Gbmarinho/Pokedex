// API endpoint --------------------------------------------
const fetchConfig = {
    method: 'GET'
}
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const PriGeracao = document.querySelector('#PrimeiraGeracao');
const SegGeracao = document.querySelector('#SegundaGeracao');
const TerGeracao = document.querySelector('#TerceiraGeracao');
const QuarGeracao = document.querySelector('#QuartaGeracao');
const QuinGeracao = document.querySelector('#QuintaGeracao');
const SexGeracao = document.querySelector('#SextaGeracao');
const SetGeracao = document.querySelector('#SetimaGeracao');
const OitGeracao = document.querySelector('#OitavaGeracao');


async function limpar(alvo) {
    // Remove todos os descendentes da <div id="alvo">
    alvo.innerText = "";
}

function createPokemonate9(data, geracao, num){
    const div = document.createElement('div');
   
    
    var cont = 0;
    for(j of data.types){
        cont++;
    }
    if(cont == 1){
        div.innerHTML = `
        <div class="content-pokemon ${data.types[0].type.name}">
            <div class="img-pokemon">
                <div class="circle-img"></div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
            </div>
            <div class="infos-pokemon">
                <p class="num-pokemon">#${num}</p>
                <p  class="name-pokemon">${data.name}</p>
                <p  class="type-pokemon">${data.types[0].type.name}</p>
            </div>
        </div>
        `
    }
    if(cont == 2){
        div.innerHTML = `
        <div class="content-pokemon ${data.types[0].type.name}">
            <div class="img-pokemon">
                <div class="circle-img"></div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
            </div>
            <div class="infos-pokemon">
                <p class="num-pokemon">#${num}</p>
                <p class="name-pokemon">${data.name}</p>
                <p class="type-pokemon">${data.types[0].type.name} | ${data.types[1].type.name}</p>
            </div>
        </div>
        `
    }
        
    geracao.appendChild(div);
}

async function createPokemon(data, geracao){
    const div = document.createElement('div');
    
    var cont = 0;
    for(j of data.types){
        cont++;
    }
    if(cont == 1){
        div.innerHTML = `
        <div class="content-pokemon ${data.types[0].type.name}">
            <div class="img-pokemon">
                <div class="circle-img"></div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
            </div>
            <div class="infos-pokemon">
                <p class="num-pokemon">#${data.id}</p>
                <p class="name-pokemon">${data.name}</p>
                <p class="type-pokemon">${data.types[0].type.name}</p>
            </div>
        </div>
        `
    }
    if(cont == 2){
        div.innerHTML = `
        <div class="content-pokemon ${data.types[0].type.name}">
            <div class="img-pokemon">
                <div class="circle-img"></div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
            </div>
            <div class="infos-pokemon">
                <p class="num-pokemon">#${data.id}</p>
                <p class="name-pokemon">${data.name}</p>
                <p class="type-pokemon">${data.types[0].type.name} | ${data.types[1].type.name}</p>
            </div>
        </div>
        `
    }
    geracao.appendChild(div);
}

async function getPokemon1geracao(){
    for(let i = 1; i <= 151; i++){
        
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            if(i<10){
                var a = "00"+ String(i)
                createPokemonate9(data, PriGeracao, a);
            }if(i>9 && i<100){
                var a = "0"+ String(i)
                createPokemonate9(data, PriGeracao, a);
            }if(i>99){
                createPokemon(data, PriGeracao);
            }
            
        })
        .catch(error => console.error(error))
     }
}
async function getPokemon2geracao(){
    for(let i = 152; i <= 251; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            createPokemon(data, SegGeracao);
        })
        .catch(error => console.error(error))
     }
}
async function getPokemon3geracao(){
    for(let i = 252; i <= 386; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            createPokemon(data, TerGeracao);
        })
        .catch(error => console.error(error))
     }
}
async function getPokemon4geracao(){
    for(let i = 387; i <= 493; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            createPokemon(data, QuarGeracao);
        })
        .catch(error => console.error(error))
     }
}
async function getPokemon5geracao(){
    for(let i = 494; i <= 649; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            createPokemon(data, QuinGeracao);
        })
        .catch(error => console.error(error))
     }
}
async function getPokemon6geracao(){
    for(let i = 650; i <= 721; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            createPokemon(data, SexGeracao);
        })
        .catch(error => console.error(error))
     }
}
async function getPokemon7geracao(){
    for(let i = 722; i <= 807; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            createPokemon(data, SetGeracao);
        })
        .catch(error => console.error(error))
     }
}
async function getPokemon8geracao(){
    for(let i = 808; i <= 897; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            createPokemon(data, OitGeracao);
        })
        .catch(error => console.error(error))
     }
}




$('.oitGeracao').click(function(e){
    $('#PrimeiraGeracao').css("opacity", "0");
    limpar(PriGeracao)
    $('#SegundaGeracao').css("opacity", "0");
    limpar(SegGeracao)
    $('#TerceiraGeracao').css("opacity", "0");
    limpar(TerGeracao)
    $('#QuartaGeracao').css("opacity", "0");
    limpar(QuarGeracao)
    $('#QuintaGeracao').css("opacity", "0");
    limpar(QuinGeracao)
    $('#SextaGeracao').css("opacity", "0");
    limpar(SexGeracao)
    $('#SetimaGeracao').css("opacity", "0");
    limpar(SetGeracao)

    getPokemon8geracao()
    $('#OitavaGeracao').css("opacity", "1");
})
$('.priGeracao').click(function(e){
    $('#SegundaGeracao').css("opacity", "0");
    limpar(SegGeracao)
    $('#TerceiraGeracao').css("opacity", "0");
    limpar(TerGeracao)
    $('#QuartaGeracao').css("opacity", "0");
    limpar(QuarGeracao)
    $('#QuintaGeracao').css("opacity", "0");
    limpar(QuinGeracao)
    $('#SextaGeracao').css("opacity", "0");
    limpar(SexGeracao)
    $('#SetimaGeracao').css("opacity", "0");
    limpar(SetGeracao)
    $('#OitavaGeracao').css("opacity", "0");
    limpar(OitGeracao)

    getPokemon1geracao()
    $('#PrimeiraGeracao').css("opacity", "1");
})

$('.segGeracao').click(function(e){
    $('#PrimeiraGeracao').css("opacity", "0");
    limpar(PriGeracao)
    $('#TerceiraGeracao').css("opacity", "0");
    limpar(TerGeracao)
    $('#QuartaGeracao').css("opacity", "0");
    limpar(QuarGeracao)
    $('#QuintaGeracao').css("opacity", "0");
    limpar(QuinGeracao)
    $('#SextaGeracao').css("opacity", "0");
    limpar(SexGeracao)
    $('#SetimaGeracao').css("opacity", "0");
    limpar(SetGeracao)
    $('#OitavaGeracao').css("opacity", "0");
    limpar(OitGeracao)

    getPokemon2geracao()
    $('#SegundaGeracao').css("opacity", "1");
})

$('.terGeracao').click(function(e){
    $('#PrimeiraGeracao').css("opacity", "0");
    limpar(PriGeracao)
    $('#SegundaGeracao').css("opacity", "0");
    limpar(SegGeracao)
    $('#QuartaGeracao').css("opacity", "0");
    limpar(QuarGeracao)
    $('#QuintaGeracao').css("opacity", "0");
    limpar(QuinGeracao)
    $('#SextaGeracao').css("opacity", "0");
    limpar(SexGeracao)
    $('#SetimaGeracao').css("opacity", "0");
    limpar(SetGeracao)
    $('#OitavaGeracao').css("opacity", "0");
    limpar(OitGeracao)

    getPokemon3geracao()
    $('#TerceiraGeracao').css("opacity", "1");
})
$('.quaGeracao').click(function(e){
    $('#PrimeiraGeracao').css("opacity", "0");
    limpar(PriGeracao)
    $('#SegundaGeracao').css("opacity", "0");
    limpar(SegGeracao)
    $('#TerceiraGeracao').css("opacity", "0");
    limpar(TerGeracao)
    $('#QuintaGeracao').css("opacity", "0");
    limpar(QuinGeracao)
    $('#SextaGeracao').css("opacity", "0");
    limpar(SexGeracao)
    $('#SetimaGeracao').css("opacity", "0");
    limpar(SetGeracao)
    $('#OitavaGeracao').css("opacity", "0");
    limpar(OitGeracao)

    getPokemon4geracao()
    $('#QuartaGeracao').css("opacity", "1");
})

$('.quinGeracao').click(function(e){
    $('#PrimeiraGeracao').css("opacity", "0");
    limpar(PriGeracao)
    $('#SegundaGeracao').css("opacity", "0");
    limpar(SegGeracao)
    $('#TerceiraGeracao').css("opacity", "0");
    limpar(TerGeracao)
    $('#QuartaGeracao').css("opacity", "0");
    limpar(QuarGeracao)
    $('#SextaGeracao').css("opacity", "0");
    limpar(SexGeracao)
    $('#SetimaGeracao').css("opacity", "0");
    limpar(SetGeracao)
    $('#OitavaGeracao').css("opacity", "0");
    limpar(OitGeracao)

    getPokemon5geracao()
    $('#QuintaGeracao').css("opacity", "1");
})

$('.sextaGeracao').click(function(e){
    $('#PrimeiraGeracao').css("opacity", "0");
    limpar(PriGeracao)
    $('#SegundaGeracao').css("opacity", "0");
    limpar(SegGeracao)
    $('#TerceiraGeracao').css("opacity", "0");
    limpar(TerGeracao)
    $('#QuartaGeracao').css("opacity", "0");
    limpar(QuarGeracao)
    $('#QuintaGeracao').css("opacity", "0");
    limpar(QuinGeracao)
    $('#SetimaGeracao').css("opacity", "0");
    limpar(SetGeracao)
    $('#OitavaGeracao').css("opacity", "0");
    limpar(OitGeracao)

    getPokemon6geracao()
    $('#SextaGeracao').css("opacity", "1");
})
$('.setGeracao').click(function(e){
    $('#PrimeiraGeracao').css("opacity", "0");
    limpar(PriGeracao)
    $('#SegundaGeracao').css("opacity", "0");
    limpar(SegGeracao)
    $('#TerceiraGeracao').css("opacity", "0");
    limpar(TerGeracao)
    $('#QuartaGeracao').css("opacity", "0");
    limpar(QuarGeracao)
    $('#QuintaGeracao').css("opacity", "0");
    limpar(QuinGeracao)
    $('#SextaGeracao').css("opacity", "0");
    limpar(SexGeracao)
    $('#OitavaGeracao').css("opacity", "0");
    limpar(OitGeracao)

    getPokemon7geracao()
    $('#SetimaGeracao').css("opacity", "1");
})


getPokemon1geracao()
// const response =  fetch(urlAPI + 1, fetchConfig)
// const arrayJSON =  response.json()
// console.log(arrayJSON);
