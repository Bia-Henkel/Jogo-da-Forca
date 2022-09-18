let attempt = 6;
let dynamicList = [];
let secretWordTip;
let secretWordDrawn;

const words = [
    word000 = {
        name:'ZIMBÁBUE',
        tip: 'LUGARES'
    },
    word001 = {
        name:'AFEGANISTÃO',
        tip: 'LUGARES'
    },
    word002 = {
        name:'AFRICA DO SUL',
        tip: 'LUGARES'
    },
    word003 = {
        name:'ALBANIA',
        tip: 'LUGARES'
    },
    word004 = {
        name:'ALEMANHA',
        tip: 'LUGARES'
    },
    word005 = {
        name:'ANDORRA',
        tip: 'LUGARES'
    },
    word006 = {
        name:'ANGOLA',
        tip: 'LUGARES'
    },
    word007 = {
        name:'ARABIA SAUDITA',
        tip: 'LUGARES'
    },
    word008 = {
        name:'ARGELIA',
        tip: 'LUGARES'
    },
    word009 = {
        name:'ARGENTINA',
        tip: 'LUGARES'
    },
    word010 = {
        name:'ARMENIA',
        tip: 'LUGARES'
    },
    word011 = {
        name:'AUSTRALIA',
        tip: 'LUGARES'
    },
    word012 = {
        name:'AUSTRIA',
        tip: 'LUGARES'
    },
    word013 = {
        name:'AZERBAIJAO',
        tip: 'LUGARES'
    },
    word014 = {
        name:'BAHAMAS',
        tip: 'LUGARES'
    },
    word015 = {
        name:'BANGLADEXE',
        tip: 'LUGARES'
    },
    word016 = {
        name:'BARBADOS',
        tip: 'LUGARES'
    },
    word017 = {
        name:'BAREM',
        tip: 'LUGARES'
    },
    word018 = {
        name:'BELGICA',
        tip: 'LUGARES'
    },
    word019 = {
        name:'BELIZE',
        tip: 'LUGARES'
    },
    word020 = {
        name:'BENIM',
        tip: 'LUGARES'
    },
    word021 = {
        name:'BIELORRUSSIA',
        tip: 'LUGARES'
    },
    word022 = {
        name:'BOLIVIA',
        tip: 'LUGARES'
    },
    word023 = {
        name:'BOSNIA E HERZEGOVINA',
        tip: 'LUGARES'
    },
    word024 = {
        name:'BOTSUANA',
        tip: 'LUGARES'
    },
    word025 = {
        name:'BRASIL',
        tip: 'LUGARES'
    },
    word026 = {
        name:'BRUNEI',
        tip: 'LUGARES'
    },
    word027 = {
        name:'BULGARIA',
        tip: 'LUGARES'
    },
    word028 = {
        name:'BURQUINA FASO',
        tip: 'LUGARES'
    },
    word029 = {
        name:'BURUNDI',
        tip: 'LUGARES'
    },
    word030 = {
        name:'BUTAO',
        tip: 'LUGARES'
    },
    word031 = {
        name:'CABO VERDE',
        tip: 'LUGARES'
    },
    word032 = {
        name:'CAMAROES',
        tip: 'LUGARES'
    },
    word033 = {
        name:'CAMBOJA',
        tip: 'LUGARES'
    },
    word034 = {
        name:'CANADA',
        tip: 'LUGARES'
    },
    word035 = {
        name:'CATAR',
        tip: 'LUGARES'
    },
    word036 = {
        name:'CAZAQUISTAO',
        tip: 'LUGARES'
    },
    word037 = {
        name:'CHADE',
        tip: 'LUGARES'
    },
    word038 = {
        name:'CHILE',
        tip: 'LUGARES'
    },
    word039 = {
        name:'CHINA',
        tip: 'LUGARES'
    },
    word040 = {
        name:'CHIPRE',
        tip: 'LUGARES'
    },
    word041 = {
        name:'COLOMBIA',
        tip: 'LUGARES'
    },
    word042 = {
        name:'COMORES',
        tip: 'LUGARES'
    },
    word043 = {
        name:'CONGO-BRAZZAVILLE',
        tip: 'LUGARES'
    },
    word044 = {
        name:'COREIA DO NORTE',
        tip: 'LUGARES'
    },
    word045 = {
        name:'COREIA DO SUL',
        tip: 'LUGARES'
    },
    word046 = {
        name:'COSOVO',
        tip: 'LUGARES'
    },
    word047 = {
        name:'COSTA DO MARFIM',
        tip: 'LUGARES'
    },
    word048 = {
        name:'COSTA RICA',
        tip: 'LUGARES'
    },
    word049 = {
        name:'CROACIA',
        tip: 'LUGARES'
    },
    word050 = {
        name:'CUAITE',
        tip: 'LUGARES'
    },
    word051 = {
        name:'CUBA',
        tip: 'LUGARES'
    },
    word052 = {
        name:'DINAMARCA',
        tip: 'LUGARES'
    },
    word053 = {
        name:'DOMINICA',
        tip: 'LUGARES'
    },
    word054 = {
        name:'EGITO',
        tip: 'LUGARES'
    },
    word055 = {
        name:'EMIRADOS ÁRABES UNIDOS',
        tip: 'LUGARES'
    },
    word056 = {
        name:'EQUADOR',
        tip: 'LUGARES'
    },
    word057 = {
        name:'ERITREIA',
        tip: 'LUGARES'
    },
    word058 = {
        name:'ESLOVÁQUIA',
        tip: 'LUGARES'
    },
    word059 = {
        name:'ESLOVENIA',
        tip: 'LUGARES'
    },
    word060 = {
        name:'ESPANHA',
        tip: 'LUGARES'
    },
    word061 = {
        name:'ESSUATINI',
        tip: 'LUGARES'
    },
    word062 = {
        name:'ESTADO DA PALESTINA',
        tip: 'LUGARES'
    },
    word063 = {
        name:'ESTADOS UNIDOS',
        tip: 'LUGARES'
    },
    word064 = {
        name:'ESTONIA',
        tip: 'LUGARES'
    },
    word065 = {
        name:'ETIOPIA',
        tip: 'LUGARES'
    },
    word066 = {
        name:'FIJI',
        tip: 'LUGARES'
    },
    word067 = {
        name:'FILIPINAS',
        tip: 'LUGARES'
    },
    word068 = {
        name:'FINLANDIA',
        tip: 'LUGARES'
    },
    word069 = {
        name:'FRANCA',
        tip: 'LUGARES'
    },
    word070 = {
        name:'GABAO',
        tip: 'LUGARES'
    },
    word071 = {
        name:'GAMBIA',
        tip: 'LUGARES'
    },
    word072 = {
        name:'GANA',
        tip: 'LUGARES'
    },
    word073 = {
        name:'GEORGIA',
        tip: 'LUGARES'
    },
    word074 = {
        name:'GRANADA',
        tip: 'LUGARES'
    },
    word075 = {
        name:'GRÉCIA',
        tip: 'LUGARES'
    },
    word076 = {
        name:'GUATEMALA',
        tip: 'LUGARES'
    },
    word077 = {
        name:'GUIANA',
        tip: 'LUGARES'
    },
    word078 = {
        name:'GUINÉ',
        tip: 'LUGARES'
    },
    word079 = {
        name:'GUINÉ EQUATORIAL',
        tip: 'LUGARES'
    },
    word080 = {
        name:'GUINÉ-BISSAU',
        tip: 'LUGARES'
    },
    word081 = {
        name:'HAITI',
        tip: 'LUGARES'
    },
    word082 = {
        name:'HONDURAS',
        tip: 'LUGARES'
    },
    word083 = {
        name:'HUNGRIA',
        tip: 'LUGARES'
    },
    word084 = {
        name:'IÉMEN',
        tip: 'LUGARES'
    },
    word085 = {
        name:'ILHAS MARECHAL',
        tip: 'LUGARES'
    },
    word086 = {
        name:'ÍNDIA',
        tip: 'LUGARES'
    },
    word087 = {
        name:'INDONÉSIA',
        tip: 'LUGARES'
    },
    word088 = {
        name:'IRÃO',
        tip: 'LUGARES'
    },
    word089 = {
        name:'IRAQUE',
        tip: 'LUGARES'
    },
    word090 = {
        name:'IRLANDA',
        tip: 'LUGARES'
    },
    word091 = {
        name:'ISLÂNDIA',
        tip: 'LUGARES'
    },
    word092 = {
        name:'ISRAEL',
        tip: 'LUGARES'
    },
    word093 = {
        name:'ITÁLIA',
        tip: 'LUGARES'
    },
    word094 = {
        name:'JAMAICA',
        tip: 'LUGARES'
    },
    word095 = {
        name:'JAPÃO',
        tip: 'LUGARES'
    },
    word096 = {
        name:'JIBUTI',
        tip: 'LUGARES'
    },
    word097 = {
        name:'JORDÂNIA',
        tip: 'LUGARES'
    },
    word098 = {
        name:'LAUS',
        tip: 'LUGARES'
    },
    word099 = {
        name:'LESOTO',
        tip: 'LUGARES'
    },
    word100 = {
        name:'LETÓNIA',
        tip: 'LUGARES'
    },
    word101 = {
        name:'LÍBANO',
        tip: 'LUGARES'
    },
    word102 = {
        name:'LIBÉRIA',
        tip: 'LUGARES'
    },
    word103 = {
        name:'LÍBIA',
        tip: 'LUGARES'
    },
    word104 = {
        name:'LISTENSTAINE',
        tip: 'LUGARES'
    },
    word105 = {
        name:'LITUÂNIA',
        tip: 'LUGARES'
    },
    word106 = {
        name:'LUXEMBURGO',
        tip: 'LUGARES'
    },
    word107 = {
        name:'MACEDÓNIA DO NORTE',
        tip: 'LUGARES'
    },
    word108 = {
        name:'MADAGÁSCAR',
        tip: 'LUGARES'
    },
    word109 = {
        name:'MALÁSIA',
        tip: 'LUGARES'
    },
    word110 = {
        name:'MALÁUI',
        tip: 'LUGARES'
    },
    word111 = {
        name:'MALDIVAS',
        tip: 'LUGARES'
    },
    word112 = {
        name:'MALI',
        tip: 'LUGARES'
    },
    word113 = {
        name:'MALTA',
        tip: 'LUGARES'
    },
    word114 = {
        name:'MARROCOS',
        tip: 'LUGARES'
    },
    word115 = {
        name:'MAURÍCIA',
        tip: 'LUGARES'
    },
    word116 = {
        name:'MAURITÂNIA',
        tip: 'LUGARES'
    },
    word117 = {
        name:'MÉXICO',
        tip: 'LUGARES'
    },
    word118 = {
        name:'MIANMAR',
        tip: 'LUGARES'
    },
    word119 = {
        name:'MICRONÉSIA',
        tip: 'LUGARES'
    },
    word120 = {
        name:'MOÇAMBIQUE',
        tip: 'LUGARES'
    },
    word121 = {
        name:'MOLDÁVIA',
        tip: 'LUGARES'
    },
    word122 = {
        name:'MÓNACO',
        tip: 'LUGARES'
    },
    word123 = {
        name:'MONGÓLIA',
        tip: 'LUGARES'
    },
    word124 = {
        name:'MONTENEGRO',
        tip: 'LUGARES'
    },
    word125 = {
        name:'NAMÍBIA',
        tip: 'LUGARES'
    },
    word126 = {
        name:'NAURU',
        tip: 'LUGARES'
    },
    word127 = {
        name:'NEPAL',
        tip: 'LUGARES'
    },
    word128 = {
        name:'NICARÁGUA',
        tip: 'LUGARES'
    },
    word129 = {
        name:'NÍGER',
        tip: 'LUGARES'
    },
    word130 = {
        name:'NIGÉRIA',
        tip: 'LUGARES'
    },
    word131 = {
        name:'NORUEGA',
        tip: 'LUGARES'
    },
    word132 = {
        name:'NOVA ZELÂNDIA',
        tip: 'LUGARES'
    },
    word133 = {
        name:'OMÃ',
        tip: 'LUGARES'
    },
    word134 = {
        name:'PAÍSES BAIXOS',
        tip: 'LUGARES'
    },
    word135 = {
        name:'PALAU',
        tip: 'LUGARES'
    },
    word136 = {
        name:'PANAMÁ',
        tip: 'LUGARES'
    },
    word137 = {
        name:'PAPUA NOVA GUINÉ',
        tip: 'LUGARES'
    },
    word138 = {
        name:'PAQUISTÃO',
        tip: 'LUGARES'
    },
    word140 = {
        name:'PARAGUAI',
        tip: 'LUGARES'
    },
    word141 = {
        name:'PERU',
        tip: 'LUGARES'
    },
    word142 = {
        name:'POLÓNIA',
        tip: 'LUGARES'
    },
    word143 = {
        name:'PORTUGAL',
        tip: 'LUGARES'
    },
    word144 = {
        name:'QUÉNIA',
        tip: 'LUGARES'
    },
    word145 = {
        name:'QUIRGUISTÃO',
        tip: 'LUGARES'
    },
    word146 = {
        name:'QUIRIBÁTI',
        tip: 'LUGARES'
    },
    word147 = {
        name:'REINO UNIDO',
        tip: 'LUGARES'
    },
    word148 = {
        name:'REPÚBLICA CENTRO-AFRICANA',
        tip: 'LUGARES'
    },
    word149 = {
        name:'REPÚBLICA CHECA',
        tip: 'LUGARES'
    },
    word150 = {
        name:'REPÚBLICA DEMOCRÁTICA DO CONGO',
        tip: 'LUGARES'
    },
    word151 = {
        name:'REPÚBLICA DOMINICANA',
        tip: 'LUGARES'
    },
    word152 = {
        name:'ROMÉNIA',
        tip: 'LUGARES'
    },
    word153 = {
        name:'RUANDA',
        tip: 'LUGARES'
    },
    word154 = {
        name:'RÚSSIA',
        tip: 'LUGARES'
    },
    word155 = {
        name:'SALOMÃO',
        tip: 'LUGARES'
    },
    word156 = {
        name:'SALVADOR',
        tip: 'LUGARES'
    },
    word157 = {
        name:'SAMOA',
        tip: 'LUGARES'
    },
    word158 = {
        name:'SANTA LÚCIA',
        tip: 'LUGARES'
    },
    word159 = {
        name:'SÃO CRISTÓVÃO E NEVES',
        tip: 'LUGARES'
    },
    word160 = {
        name:'SÃO MARINHO',
        tip: 'LUGARES'
    },
    word161= {
        name:'SÃO TOMÉ E PRÍNCIPE',
        tip: 'LUGARES'
    },
    word162 = {
        name:'SÃO VICENTE E GRANADINAS',
        tip: 'LUGARES'
    },
    word163 = {
        name:'SEICHELES',
        tip: 'LUGARES'
    },
    word164 = {
        name:'SENEGAL',
        tip: 'LUGARES'
    },
    word165 = {
        name:'SERRA LEOA',
        tip: 'LUGARES'
    },
    word166 = {
        name:'SÉRVIA',
        tip: 'LUGARES'
    },
    word167 = {
        name:'SINGAPURA',
        tip: 'LUGARES'
    },
    word168 = {
        name:'SÍRIA',
        tip: 'LUGARES'
    },
    word169 = {
        name:'SOMÁLIA',
        tip: 'LUGARES'
    },
    word170 = {
        name:'SRI LANCA',
        tip: 'LUGARES'
    },
    word171 = {
        name:'SUDÃO',
        tip: 'LUGARES'
    },
    word172 = {
        name:'SUDÃO DO SUL',
        tip: 'LUGARES'
    },
    word173 = {
        name:'SUÉCIA',
        tip: 'LUGARES'
    },
    word174 = {
        name:'SUÍÇA',
        tip: 'LUGARES'
    },
    word175 = {
        name:'SURINAME',
        tip: 'LUGARES'
    },
    word176 = {
        name:'TAILÂNDIA',
        tip: 'LUGARES'
    },
    word177 = {
        name:'TAIUÃ',
        tip: 'LUGARES'
    },
    word178 = {
        name:'TAJIQUISTÃO',
        tip: 'LUGARES'
    },
    word179 = {
        name:'TANZÂNIA',
        tip: 'LUGARES'
    },
    word180 = {
        name:'TIMOR-LESTE',
        tip: 'LUGARES'
    },
    word181 = {
        name:'TOGO',
        tip: 'LUGARES'
    },
    word182 = {
        name:'TONGA',
        tip: 'LUGARES'
    },
    word183 = {
        name:'TRINDADE E TOBAGO',
        tip: 'LUGARES'
    },
    word184 = {
        name:'TUNÍSIA',
        tip: 'LUGARES'
    },
    word185 = {
        name:'TURCOMENISTÃO',
        tip: 'LUGARES'
    },
    word186 = {
        name:'TURQUIA',
        tip: 'LUGARES'
    },
    word187 = {
        name:'TUVALU',
        tip: 'LUGARES'
    },
    word188 = {
        name:'UCRÂNIA',
        tip: 'LUGARES'
    },
    word189 = {
        name:'UGANDA',
        tip: 'LUGARES'
    },
    word190 = {
        name:'URUGUAI',
        tip: 'LUGARES'
    },
    word191 = {
        name:'USBEQUISTÃO',
        tip: 'LUGARES'
    },
    word192 = {
        name:'VANUATU',
        tip: 'LUGARES'
    },
    word193 = {
        name:'VATICANO',
        tip: 'LUGARES'
    },
    word194 = {
        name:'VENEZUELA',
        tip: 'LUGARES'
    },
    word195 = {
        name:'VIETNAME',
        tip: 'LUGARES'
    },
    word196 = {
        name:'ZÂMBIA',
        tip: 'LUGARES'
    }
]
function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length)

    secretWordDrawn = words[indexWord].name;
    secretWordTip = words[indexWord].tip;

    console.log(indexWord)
    console.log(secretWordTip)
    console.log(secretWordDrawn)
}
function hiddenWord(){
    const tip = document.getElementById("tip");
    tip.innerHTML = secretWordTip;

    const wordSecret = document.getElementById("secret-word");
    wordSecret.innerHTML = " ";//secretWordDrawn;

    for(i = 0; i < secretWordDrawn.length; i ++) {
        if (dynamicList[i] === undefined) {
            if (secretWordDrawn[i] === " ") {
                dynamicList[i] = " ";
                wordSecret.innerHTML = wordSecret.innerHTML + "<div class='spaceLetters'>" + dynamicList[i] + "</div>"
            } else {
                dynamicList[i] = "&nbsp;"
                wordSecret.innerHTML = wordSecret.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
            }
        } else {
            if (secretWordDrawn[i] === " ") {
                dynamicList[i] = " ";
                wordSecret.innerHTML = wordSecret.innerHTML + "<div class='spaceLetters'>" + dynamicList[i] + "</div>"
            } else {
                wordSecret.innerHTML = wordSecret.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
            }
        }
    }
}


function chosenLetterVerification(letter){
    if(attempt > 0 ) {
        changeStyleLetter("key-" + letter);
        compareList(letter);
        hiddenWord()
    }
}
function changeStyleLetter(key){
    document.getElementById(key).style.background = "#CDB38B";
    document.getElementById(key).style.pointerEvents = "none";
    document.getElementById(key).style.color = "#fff";
}
function compareList(letter){
    const position = secretWordDrawn.indexOf(letter)
    if(position < 0){
        attempt--
        loadImageForce();

        if(attempt === 0){
            openModal("DERROTA!", "Não foi dessa vez  <br> A palavra secreta era " + secretWordDrawn);
        }

    } else {
        for(i = 0; i < secretWordDrawn.length; i++){
            if(secretWordDrawn[i] === letter){
                dynamicList[i] = letter;
            }
        }
    }

    let win = true;
    for(i = 0; i < secretWordDrawn.length; i++){
        if(secretWordDrawn[i] !== dynamicList[i]){
            win = false;
        }
    }

    if(win === true){
        openModal("PARABÉNS!" , "Será que você consegue acertar novamente?")
            attempt = 0;
    }
}

function loadImageForce(){
    switch (attempt) {
        case 5:
            document.getElementById("image").style.background = "url('./assets/img/forca01.png')";
            break;
        case 4:
            document.getElementById("image").style.background = "url('./assets/img/forca02.png')";
            break;
        case 3:
            document.getElementById("image").style.background = "url('./assets/img/forca03.png')";
            break;
        case 2:
            document.getElementById("image").style.background = "url('./assets/img/forca04.png')";
            break;
        case 1:
            document.getElementById("image").style.background = "url('./assets/img/forca05.png')";
            break;
        case 0:
            document.getElementById("image").style.background = "url('./assets/img/forca06.png')";
            break;
        default:
            document.getElementById("image").style.background = "url('./assets/img/forca.png')";
            break
    }
}

function openModal(title, message){
    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message

    let modal = new bootstrap.Modal(document.getElementById('myModal'))
    modal.show();
}

let btnRestart = document.querySelector("#btnRestart");
btnRestart.addEventListener("click", function(){
    location.reload();
});

createSecretWord()
hiddenWord()
