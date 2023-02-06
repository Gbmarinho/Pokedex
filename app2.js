var id = localStorage.getItem('algumaDataEspecial');
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const PriGeracao = document.querySelector('#Procurado');
const body = document.querySelector('.ios');
function remove(check){
    var div3 = check.parentNode.parentNode;
    div3.children[0].remove();
}
async function limpar(alvo) {
    // Remove todos os descendentes da <div id="alvo">
    alvo.innerText = "";
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
                        <div class="status-pokemon-content">
                        <p class="name-status">Hp</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[0].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[0].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[1].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[1].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[2].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[2].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[3].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[3].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[4].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[4].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Velocidade</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[5].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[5].base_stat}</p>
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
                        <div class="status-pokemon-content">
                        <p class="name-status">Hp</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[0].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[0].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[1].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[1].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[2].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[2].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[3].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[3].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[4].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[4].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Velocidade</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[5].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[5].base_stat}</p>
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
                        <div class="status-pokemon-content">
                        <p class="name-status">Hp</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[0].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[0].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[1].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[1].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[2].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[2].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[3].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[3].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[4].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[4].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Velocidade</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[5].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[5].base_stat}</p>
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
                        <div class="status-pokemon-content">
                        <p class="name-status">Hp</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[0].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[0].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[1].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[1].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[2].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[2].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[3].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[3].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[4].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[4].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Velocidade</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[5].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[5].base_stat}</p>
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
                        <div class="status-pokemon-content">
                        <p class="name-status">Hp</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[0].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[0].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[1].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[1].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[2].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[2].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[3].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[3].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[4].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[4].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Velocidade</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[5].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[5].base_stat}</p>
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
                        <div class="status-pokemon-content">
                        <p class="name-status">Hp</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[0].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[0].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[1].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[1].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[2].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[2].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Ataque Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[3].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[3].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Defesa Especial</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[4].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[4].base_stat}</p>
                    </div>
                    <div class="status-pokemon-content">
                        <p class="name-status">Velocidade</p>
                        <div class="barra-status"><div class="barra-branca"  style="width:${data.stats[5].base_stat}px"></div></div>
                        <p class="num-status">${data.stats[5].base_stat}</p>
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
        'background': '#83DCFF'
    });
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
    var cont13 = 0;
    
    for(let i = 1; i <= 897; i++){
        await fetch(`${baseUrl}` + String(i))
        .then(response => response.json())
        .then(data => {
            if(data.name.includes(id)){
                if(i<10){
                    var a = "00"+ String(i)
                    createPokemonate9(data, PriGeracao, a);
                }if(i>9 && i<100){
                    var a = "0"+ String(i)
                    createPokemonate9(data, PriGeracao, a);
                }if(i>99){
                    createPokemon(data, PriGeracao);
                }
                cont13++;
            }
            
            
        })
        .catch(error => console.error(error))
     }
     if(cont13 == 0){
        alert("Nao existe Pokemon com esse nome");
        window.location.replace("index.html");
     }
}
getPokemon1geracao()



