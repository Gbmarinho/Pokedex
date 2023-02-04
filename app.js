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
const body = document.querySelector('.ios');

function remove(check){
    var div3 = check.parentNode.parentNode;
    div3.children[0].remove();
}

async function createViewPokemon(div,data){
    const div2 = document.createElement('div');
    const header  = document.querySelector("#header-home");
    var height = data.height/10;
    var weight = data.weight/10;
    // data.stats[0].base_stat
    var cont = 0;
    for(j of data.types){
        cont++;
    }
    if(cont == 1){
        if(data.id < 10){
            div2.innerHTML = `
            <div class="viewPoke" onclick="remove(this)">
                <div class="contentView view${data.types[0].type.name}">
                    <div class="Pokeview-content">
                        <div class="id-background"><h1>#00${data.id}</h1></div>
                        <div class="img-pokemon-view">
                            <div class="acertando">
                                <div class="all-itens-poke">
                                    <div class="all-itens-poke-pri">
                                        <img class="img-type" src="assets/img${data.types[0].type.name}.png">
                                        <div class="poke-name-type">
                                            <p class="Pokeview-name-type">${data.types[0].type.name}</p>
                                            <p class="name-pok-content">${data.name}</p>
                                        </div>
                                    </div>
                                    <div class="all-itens-poke-sec">
                                        <div class="pokealturapeso">
                                            <p>Altura</p>
                                            <p>Peso</p>
                                        </div>

                                        <div class="pokealturapesoresp">
                                            <p>${height}M</p>
                                            <p>${weight}KG</p>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-pokeaaaa" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                            </div>
                        </div>
                        
                    </div>
                    <div class="status-pokemon">
                        <div class="status-pokemon-pri">
                            <p>Status</p>
                        </div>
                        <div class="status-pokemon-sec">
                            <div class="status-pokemon-name">
                                <p>Hp</p>
                                <p>Ataque</p>
                                <p>Defesa</p>
                                <p>Ataque Especial</p>
                                <p>Defesa Especial</p>
                                <p>Velocidade</p>
                            </div>
                            <div class="todas-barras-status">
                                <div class="barra-status" style="width:${data.stats[0].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[1].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[2].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[3].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[4].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[5].base_stat}px"></div>
                            </div>

                            <div class="status-pokemon-num">
                                <p>${data.stats[0].base_stat}</p>
                                <p>${data.stats[1].base_stat}</p>
                                <p>${data.stats[2].base_stat}</p>
                                <p>${data.stats[3].base_stat}</p>
                                <p>${data.stats[4].base_stat}</p>
                                <p>${data.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        }
        if(data.id>9 && data.id<100){
            div2.innerHTML = `
            <div class="viewPoke" onclick="remove(this)">
                <div class="contentView view${data.types[0].type.name}">
                    <div class="Pokeview-content">
                        <div class="id-background"><h1>#0${data.id}</h1></div>
                        <div class="img-pokemon-view">
                            <div class="acertando">
                            <div class="all-itens-poke">
                            <div class="all-itens-poke-pri">
                                <img class="img-type" src="assets/img${data.types[0].type.name}.png">
                                <div class="poke-name-type">
                                    <p class="Pokeview-name-type">${data.types[0].type.name}</p>
                                    <p class="name-pok-content">${data.name}</p>
                                </div>
                            </div>
                            <div class="all-itens-poke-sec">
                                <div class="pokealturapeso">
                                    <p>Altura</p>
                                    <p>Peso</p>
                                </div>

                                <div class="pokealturapesoresp">
                                    <p>${height}M</p>
                                    <p>${weight}KG</p>
                                </div>
                            </div>
                        </div>
                                <img class="img-pokeaaaa" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                            </div>
                        </div>
                    </div>
                    <div class="status-pokemon">
                        
                        <div class="status-pokemon-pri">
                            <p>Status</p>
                        </div>
                        <div class="status-pokemon-sec">
                            <div class="status-pokemon-name">
                                <p>Hp</p>
                                <p>Ataque</p>
                                <p>Defesa</p>
                                <p>Ataque Especial</p>
                                <p>Defesa Especial</p>
                                <p>Velocidade</p>
                            </div>
                            <div class="todas-barras-status">
                                <div class="barra-status" style="width:${data.stats[0].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[1].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[2].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[3].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[4].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[5].base_stat}px"></div>
                            </div>

                            <div class="status-pokemon-num">
                                <p>${data.stats[0].base_stat}</p>
                                <p>${data.stats[1].base_stat}</p>
                                <p>${data.stats[2].base_stat}</p>
                                <p>${data.stats[3].base_stat}</p>
                                <p>${data.stats[4].base_stat}</p>
                                <p>${data.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        }
        if(data.id>99){
            div2.innerHTML = `
            <div class="viewPoke" onclick="remove(this)">
                <div class="contentView view${data.types[0].type.name}">
                    <div class="Pokeview-content">
                        <div class="id-background"><h1>#${data.id}</h1></div>
                        <div class="img-pokemon-view">
                            <div class="acertando">
                                <div class="all-itens-poke">
                                    <div class="all-itens-poke-pri">
                                        <img class="img-type" src="assets/img${data.types[0].type.name}.png">
                                        <div class="poke-name-type">
                                            <p class="Pokeview-name-type">${data.types[0].type.name}</p>
                                            <p class="name-pok-content">${data.name}</p>
                                        </div>
                                    </div>
                                    <div class="all-itens-poke-sec">
                                        <div class="pokealturapeso">
                                            <p>Altura</p>
                                            <p>Peso</p>
                                        </div>

                                        <div class="pokealturapesoresp">
                                            <p>${height}M</p>
                                            <p>${weight}KG</p>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-pokeaaaa" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                            </div>
                        </div>
                    </div>
                    <div class="status-pokemon">
                        
                        <div class="status-pokemon-pri">
                            <p>Status</p>
                        </div>
                        <div class="status-pokemon-sec">
                            <div class="status-pokemon-name">
                                <p>Hp</p>
                                <p>Ataque</p>
                                <p>Defesa</p>
                                <p>Ataque Especial</p>
                                <p>Defesa Especial</p>
                                <p>Velocidade</p>
                            </div>
                            <div class="todas-barras-status">
                                <div class="barra-status" style="width:${data.stats[0].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[1].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[2].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[3].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[4].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[5].base_stat}px"></div>
                            </div>

                            <div class="status-pokemon-num">
                                <p>${data.stats[0].base_stat}</p>
                                <p>${data.stats[1].base_stat}</p>
                                <p>${data.stats[2].base_stat}</p>
                                <p>${data.stats[3].base_stat}</p>
                                <p>${data.stats[4].base_stat}</p>
                                <p>${data.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        }
    }else{
        if(data.id < 10){
            div2.innerHTML = `
            <div class="viewPoke" onclick="remove(this)">
                <div class="contentView view${data.types[0].type.name}">
                    <div class="Pokeview-content">
                        <div class="id-background"><h1>#00${data.id}</h1></div>
                        <div class="img-pokemon-view">
                            <div class="acertando">
                                <div class="all-itens-poke">
                                    <div class="all-itens-poke-pri">
                                        <img class="img-type" src="assets/img${data.types[0].type.name}.png">
                                        <img class="img-type" src="assets/img${data.types[1].type.name}.png">
                                        <div class="poke-name-type">
                                            <p class="Pokeview-name-type">${data.types[0].type.name} | ${data.types[1].type.name}</p>
                                            <p class="name-pok-content">${data.name}</p>
                                        </div>
                                    </div>
                                    <div class="all-itens-poke-sec">
                                        <div class="pokealturapeso">
                                            <p>Altura</p>
                                            <p>Peso</p>
                                        </div>

                                        <div class="pokealturapesoresp">
                                        <p>${height}M</p>
                                        <p>${weight}KG</p>
                                        </div>
                                    </div>
                                </div>
                                <img class="img-pokeaaaa" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                            </div>
                        </div>
                    </div>
                    <div class="status-pokemon">
                        
                        <div class="status-pokemon-pri">
                            <p>Status</p>
                        </div>
                        <div class="status-pokemon-sec">
                            <div class="status-pokemon-name">
                                <p>Hp</p>
                                <p>Ataque</p>
                                <p>Defesa</p>
                                <p>Ataque Especial</p>
                                <p>Defesa Especial</p>
                                <p>Velocidade</p>
                            </div>
                            <div class="todas-barras-status">
                                <div class="barra-status" style="width:${data.stats[0].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[1].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[2].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[3].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[4].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[5].base_stat}px"></div>
                            </div>

                            <div class="status-pokemon-num">
                                <p>${data.stats[0].base_stat}</p>
                                <p>${data.stats[1].base_stat}</p>
                                <p>${data.stats[2].base_stat}</p>
                                <p>${data.stats[3].base_stat}</p>
                                <p>${data.stats[4].base_stat}</p>
                                <p>${data.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        }
        if(data.id>9 && data.id<100){
            div2.innerHTML = `
            <div class="viewPoke" onclick="remove(this)">
                <div class="contentView view${data.types[0].type.name}">
                    <div class="Pokeview-content">
                        <div class="id-background"><h1>#0${data.id}</h1></div>
                        <div class="img-pokemon-view">
                            <div class="acertando">
                            <div class="all-itens-poke">
                            <div class="all-itens-poke-pri">
                                <img class="img-type" src="assets/img${data.types[0].type.name}.png">
                                <img class="img-type" src="assets/img${data.types[1].type.name}.png">
                                <div class="poke-name-type">
                                    <p class="Pokeview-name-type">${data.types[0].type.name} | ${data.types[1].type.name}</p>
                                    <p class="name-pok-content">${data.name}</p>
                                </div>
                            </div>
                            <div class="all-itens-poke-sec">
                                <div class="pokealturapeso">
                                    <p>Altura</p>
                                    <p>Peso</p>
                                </div>

                                <div class="pokealturapesoresp">
                                <p>${height}M</p>
                                <p>${weight}KG</p>
                                </div>
                            </div>
                        </div>
                                <img class="img-pokeaaaa" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                            </div>
                        </div>
                    </div>
                    <div class="status-pokemon">
                        
                        <div class="status-pokemon-pri">
                            <p>Status</p>
                        </div>
                        <div class="status-pokemon-sec">
                            <div class="status-pokemon-name">
                                <p>Hp</p>
                                <p>Ataque</p>
                                <p>Defesa</p>
                                <p>Ataque Especial</p>
                                <p>Defesa Especial</p>
                                <p>Velocidade</p>
                            </div>
                            <div class="todas-barras-status">
                                <div class="barra-status" style="width:${data.stats[0].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[1].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[2].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[3].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[4].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[5].base_stat}px"></div>
                            </div>

                            <div class="status-pokemon-num">
                                <p>${data.stats[0].base_stat}</p>
                                <p>${data.stats[1].base_stat}</p>
                                <p>${data.stats[2].base_stat}</p>
                                <p>${data.stats[3].base_stat}</p>
                                <p>${data.stats[4].base_stat}</p>
                                <p>${data.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        }
        if(data.id>99){
            div2.innerHTML = `
            <div class="viewPoke" onclick="remove(this)">
                <div class="contentView view${data.types[0].type.name}">
                    <div class="Pokeview-content">
                        <div class="id-background"><h1>#${data.id}</h1></div>
                        <div class="img-pokemon-view">
                            <div class="acertando">
                            <div class="all-itens-poke">
                            <div class="all-itens-poke-pri">
                                <img class="img-type" src="assets/img${data.types[0].type.name}.png">
                                <img class="img-type" src="assets/img${data.types[1].type.name}.png">
                                <div class="poke-name-type">
                                    <p class="Pokeview-name-type">${data.types[0].type.name} | ${data.types[1].type.name}</p>
                                    <p class="name-pok-content">${data.name}</p>
                                </div>
                            </div>
                            <div class="all-itens-poke-sec">
                                <div class="pokealturapeso">
                                    <p>Altura</p>
                                    <p>Peso</p>
                                </div>

                                <div class="pokealturapesoresp">
                                <p>${height}M</p>
                                <p>${weight}KG</p>
                                </div>
                            </div>
                        </div>
                                <img class="img-pokeaaaa" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png">
                            </div>
                        </div>
                    </div>
                    <div class="status-pokemon">
                        
                        <div class="status-pokemon-pri">
                            <p>Status</p>
                        </div>
                        <div class="status-pokemon-sec">
                            <div class="status-pokemon-name">
                                <p>Hp</p>
                                <p>Ataque</p>
                                <p>Defesa</p>
                                <p>Ataque Especial</p>
                                <p>Defesa Especial</p>
                                <p>Velocidade</p>
                            </div>
                            <div class="todas-barras-status">
                                <div class="barra-status" style="width:${data.stats[0].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[1].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[2].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[3].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[4].base_stat}px"></div>
                                <div class="barra-status" style="width:${data.stats[5].base_stat}px"></div>
                            </div>

                            <div class="status-pokemon-num">
                                <p>${data.stats[0].base_stat}</p>
                                <p>${data.stats[1].base_stat}</p>
                                <p>${data.stats[2].base_stat}</p>
                                <p>${data.stats[3].base_stat}</p>
                                <p>${data.stats[4].base_stat}</p>
                                <p>${data.stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        }
    }
    
    
    // var div3 = div.children[2].children[0];
    // div3.css("display", "block")
    body.insertBefore(div2, header);
    $('.viewPoke').css("display", "flex");
}

async function mostraPokemon(div, data){
    await fetch(`${baseUrl}${data}`)
        .then(response => response.json())
        .then(data => {
            createViewPokemon(div, data);    
        })
        .catch(error => console.error(error))
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
      return 'iOS';
  
    }
    else if( userAgent.match( /Android/i ) )
    {
  
      return 'Android';
    }
    else
    {
      return 'unknown';
    }
  }
var so = getMobileOperatingSystem();
if(so == 'iOS')
{
    $('.ios').css({
        'background': '#F2F2F2'
    });
}
async function limpar(alvo) {
    // Remove todos os descendentes da <div id="alvo">
    alvo.innerText = "";
}

async function createPokemonate9(data, geracao, num){
    const div = document.createElement('div');
   
    
    var cont = 0;
    for(j of data.types){
        cont++;
    }
    if(cont == 1){
        div.innerHTML = `
        <div class="content-pokemon ${data.types[0].type.name}" onclick="mostraPokemon(this, ${data.id})">
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
        <div class="content-pokemon ${data.types[0].type.name}" onclick="mostraPokemon(this, ${data.id})">
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
        <div class="content-pokemon ${data.types[0].type.name}" onclick="mostraPokemon(this, ${data.id})">
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
        <div class="content-pokemon ${data.types[0].type.name}" onclick="mostraPokemon(this, ${data.id})">
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




$('.oitGeracao').click(async function(e){
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
$('.priGeracao').click(async function(e){
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

$('.segGeracao').click(async function(e){
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

$('.terGeracao').click(async function(e){
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
$('.quaGeracao').click(async function(e){
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

$('.quinGeracao').click(async function(e){
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

$('.sextaGeracao').click(async function(e){
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
$('.setGeracao').click(async function(e){
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

var cont2 = 0;
getPokemon1geracao()
$('.menu').click(function(e){
    if(cont2 % 2 == 0){
        $('.clos').css("opacity", "1");
        $('.menu').css("opacity", "0");
    }else{
        $('.clos').css("opacity", "0");
        $('.menu').css("opacity", "1");
    }
    cont2++;
    
})