let attempt = 6;
let dynamicList = [];
let secretWordTip;
let secretWordDrawn;

const words = [
    word000 = {
        name:'ZIMBABUE',
        tip: 'PAISES'
    },
    word001 = {
        name:'AFEGANISTAO',
        tip: 'PAISES'
    },
    word002 = {
        name:'AFRICA DO SUL',
        tip: 'PAISES'
    },
    word003 = {
        name:'ALBANIA',
        tip: 'PAISES'
    },
    word004 = {
        name:'ALEMANHA',
        tip: 'PAISES'
    },
    word005 = {
        name:'ANDORRA',
        tip: 'PAISES'
    },
    word006 = {
        name:'ANGOLA',
        tip: 'PAISES'
    },
    word007 = {
        name:'ARABIA SAUDITA',
        tip: 'PAISES'
    },
    word008 = {
        name:'ARGELIA',
        tip: 'PAISES'
    },
    word009 = {
        name:'ARGENTINA',
        tip: 'PAISES'
    },
    word010 = {
        name:'ARMENIA',
        tip: 'PAISES'
    },
    word011 = {
        name:'AUSTRALIA',
        tip: 'PAISES'
    },
    word012 = {
        name:'AUSTRIA',
        tip: 'PAISES'
    },
    word013 = {
        name:'AZERBAIJAO',
        tip: 'PAISES'
    },
    word014 = {
        name:'BAHAMAS',
        tip: 'PAISES'
    },
    word015 = {
        name:'BANGLADEXE',
        tip: 'PAISES'
    },
    word016 = {
        name:'BARBADOS',
        tip: 'PAISES'
    },
    word017 = {
        name:'BAREM',
        tip: 'PAISES'
    },
    word018 = {
        name:'BELGICA',
        tip: 'PAISES'
    },
    word019 = {
        name:'BELIZE',
        tip: 'PAISES'
    },
    word020 = {
        name:'BENIM',
        tip: 'PAISES'
    },
    word021 = {
        name:'BIELORRUSSIA',
        tip: 'PAISES'
    },
    word022 = {
        name:'BOLIVIA',
        tip: 'PAISES'
    },
    word023 = {
        name:'BOSNIA E HERZEGOVINA',
        tip: 'PAISES'
    },
    word024 = {
        name:'BOTSUANA',
        tip: 'PAISES'
    },
    word025 = {
        name:'BRASIL',
        tip: 'PAISES'
    },
    word026 = {
        name:'BRUNEI',
        tip: 'PAISES'
    },
    word027 = {
        name:'BULGARIA',
        tip: 'PAISES'
    },
    word028 = {
        name:'BURQUINA FASO',
        tip: 'PAISES'
    },
    word029 = {
        name:'BURUNDI',
        tip: 'PAISES'
    },
    word030 = {
        name:'BUTAO',
        tip: 'PAISES'
    },
    word031 = {
        name:'CABO VERDE',
        tip: 'PAISES'
    },
    word032 = {
        name:'CAMAROES',
        tip: 'PAISES'
    },
    word033 = {
        name:'CAMBOJA',
        tip: 'PAISES'
    },
    word034 = {
        name:'CANADA',
        tip: 'PAISES'
    },
    word035 = {
        name:'CATAR',
        tip: 'PAISES'
    },
    word036 = {
        name:'CAZAQUISTAO',
        tip: 'PAISES'
    },
    word037 = {
        name:'CHADE',
        tip: 'PAISES'
    },
    word038 = {
        name:'CHILE',
        tip: 'PAISES'
    },
    word039 = {
        name:'CHINA',
        tip: 'PAISES'
    },
    word040 = {
        name:'CHIPRE',
        tip: 'PAISES'
    },
    word041 = {
        name:'COLOMBIA',
        tip: 'PAISES'
    },
    word042 = {
        name:'COMORES',
        tip: 'PAISES'
    },
    word043 = {
        name:'CONGO BRAZZAVILLE',
        tip: 'PAISES'
    },
    word044 = {
        name:'COREIA DO NORTE',
        tip: 'PAISES'
    },
    word045 = {
        name:'COREIA DO SUL',
        tip: 'PAISES'
    },
    word046 = {
        name:'COSOVO',
        tip: 'PAISES'
    },
    word047 = {
        name:'COSTA DO MARFIM',
        tip: 'PAISES'
    },
    word048 = {
        name:'COSTA RICA',
        tip: 'PAISES'
    },
    word049 = {
        name:'CROACIA',
        tip: 'PAISES'
    },
    word050 = {
        name:'CUAITE',
        tip: 'PAISES'
    },
    word051 = {
        name:'CUBA',
        tip: 'PAISES'
    },
    word052 = {
        name:'DINAMARCA',
        tip: 'PAISES'
    },
    word053 = {
        name:'DOMINICA',
        tip: 'PAISES'
    },
    word054 = {
        name:'EGITO',
        tip: 'PAISES'
    },
    word055 = {
        name:'EMIRADOS ARABES UNIDOS',
        tip: 'PAISES'
    },
    word056 = {
        name:'EQUADOR',
        tip: 'PAISES'
    },
    word057 = {
        name:'ERITREIA',
        tip: 'PAISES'
    },
    word058 = {
        name:'ESLOVAQUIA',
        tip: 'PAISES'
    },
    word059 = {
        name:'ESLOVENIA',
        tip: 'PAISES'
    },
    word060 = {
        name:'ESPANHA',
        tip: 'PAISES'
    },
    word061 = {
        name:'ESSUATINI',
        tip: 'PAISES'
    },
    word062 = {
        name:'ESTADO DA PALESTINA',
        tip: 'PAISES'
    },
    word063 = {
        name:'ESTADOS UNIDOS',
        tip: 'PAISES'
    },
    word064 = {
        name:'ESTONIA',
        tip: 'PAISES'
    },
    word065 = {
        name:'ETIOPIA',
        tip: 'PAISES'
    },
    word066 = {
        name:'FIJI',
        tip: 'PAISES'
    },
    word067 = {
        name:'FILIPINAS',
        tip: 'PAISES'
    },
    word068 = {
        name:'FINLANDIA',
        tip: 'PAISES'
    },
    word069 = {
        name:'FRANCA',
        tip: 'PAISES'
    },
    word070 = {
        name:'GABAO',
        tip: 'PAISES'
    },
    word071 = {
        name:'GAMBIA',
        tip: 'PAISES'
    },
    word072 = {
        name:'GANA',
        tip: 'PAISES'
    },
    word073 = {
        name:'GEORGIA',
        tip: 'PAISES'
    },
    word074 = {
        name:'GRANADA',
        tip: 'PAISES'
    },
    word075 = {
        name:'GRECIA',
        tip: 'PAISES'
    },
    word076 = {
        name:'GUATEMALA',
        tip: 'PAISES'
    },
    word077 = {
        name:'GUIANA',
        tip: 'PAISES'
    },
    word078 = {
        name:'GUINE',
        tip: 'PAISES'
    },
    word079 = {
        name:'GUINE EQUATORIAL',
        tip: 'PAISES'
    },
    word080 = {
        name:'GUINE BISSAU',
        tip: 'PAISES'
    },
    word081 = {
        name:'HAITI',
        tip: 'PAISES'
    },
    word082 = {
        name:'HONDURAS',
        tip: 'PAISES'
    },
    word083 = {
        name:'HUNGRIA',
        tip: 'PAISES'
    },
    word084 = {
        name:'IEMEN',
        tip: 'PAISES'
    },
    word085 = {
        name:'ILHAS MARECHAL',
        tip: 'PAISES'
    },
    word086 = {
        name:'INDIA',
        tip: 'PAISES'
    },
    word087 = {
        name:'INDONESIA',
        tip: 'PAISES'
    },
    word088 = {
        name:'IRAO',
        tip: 'PAISES'
    },
    word089 = {
        name:'IRAQUE',
        tip: 'PAISES'
    },
    word090 = {
        name:'IRLANDA',
        tip: 'PAISES'
    },
    word091 = {
        name:'ISLANDIA',
        tip: 'PAISES'
    },
    word092 = {
        name:'ISRAEL',
        tip: 'PAISES'
    },
    word093 = {
        name:'ITALIA',
        tip: 'PAISES'
    },
    word094 = {
        name:'JAMAICA',
        tip: 'PAISES'
    },
    word095 = {
        name:'JAPAO',
        tip: 'PAISES'
    },
    word096 = {
        name:'JIBUTI',
        tip: 'PAISES'
    },
    word097 = {
        name:'JORDANIA',
        tip: 'PAISES'
    },
    word098 = {
        name:'LAUS',
        tip: 'PAISES'
    },
    word099 = {
        name:'LESOTO',
        tip: 'PAISES'
    },
    word100 = {
        name:'LETONIA',
        tip: 'PAISES'
    },
    word101 = {
        name:'LIBANO',
        tip: 'PAISES'
    },
    word102 = {
        name:'LIBERIA',
        tip: 'PAISES'
    },
    word103 = {
        name:'LIBIA',
        tip: 'PAISES'
    },
    word104 = {
        name:'LISTENSTAINE',
        tip: 'PAISES'
    },
    word105 = {
        name:'LITUANIA',
        tip: 'PAISES'
    },
    word106 = {
        name:'LUXEMBURGO',
        tip: 'PAISES'
    },
    word107 = {
        name:'MACEDONIA DO NORTE',
        tip: 'PAISES'
    },
    word108 = {
        name:'MADAGASCAR',
        tip: 'PAISES'
    },
    word109 = {
        name:'MALASIA',
        tip: 'PAISES'
    },
    word110 = {
        name:'MALAUI',
        tip: 'PAISES'
    },
    word111 = {
        name:'MALDIVAS',
        tip: 'PAISES'
    },
    word112 = {
        name:'MALI',
        tip: 'PAISES'
    },
    word113 = {
        name:'MALTA',
        tip: 'PAISES'
    },
    word114 = {
        name:'MARROCOS',
        tip: 'PAISES'
    },
    word115 = {
        name:'MAURICIA',
        tip: 'PAISES'
    },
    word116 = {
        name:'MAURITANIA',
        tip: 'PAISES'
    },
    word117 = {
        name:'MEXICO',
        tip: 'PAISES'
    },
    word118 = {
        name:'MIANMAR',
        tip: 'PAISES'
    },
    word119 = {
        name:'MICRONESIA',
        tip: 'PAISES'
    },
    word120 = {
        name:'MOCAMBIQUE',
        tip: 'PAISES'
    },
    word121 = {
        name:'MOLDAVIA',
        tip: 'PAISES'
    },
    word122 = {
        name:'MONACO',
        tip: 'PAISES'
    },
    word123 = {
        name:'MONGOLIA',
        tip: 'PAISES'
    },
    word124 = {
        name:'MONTENEGRO',
        tip: 'PAISES'
    },
    word125 = {
        name:'NAMIBIA',
        tip: 'PAISES'
    },
    word126 = {
        name:'NAURU',
        tip: 'PAISES'
    },
    word127 = {
        name:'NEPAL',
        tip: 'PAISES'
    },
    word128 = {
        name:'NICARAGUA',
        tip: 'PAISES'
    },
    word129 = {
        name:'NIGER',
        tip: 'PAISES'
    },
    word130 = {
        name:'NIGERIA',
        tip: 'PAISES'
    },
    word131 = {
        name:'NORUEGA',
        tip: 'PAISES'
    },
    word132 = {
        name:'NOVA ZELANDIA',
        tip: 'PAISES'
    },
    word133 = {
        name:'OMA',
        tip: 'PAISES'
    },
    word134 = {
        name:'PAISES BAIXOS',
        tip: 'PAISES'
    },
    word135 = {
        name:'PALAU',
        tip: 'PAISES'
    },
    word136 = {
        name:'PANAMA',
        tip: 'PAISES'
    },
    word137 = {
        name:'PAPUA NOVA GUINE',
        tip: 'PAISES'
    },
    word138 = {
        name:'PAQUISTAO',
        tip: 'PAISES'
    },
    word140 = {
        name:'PARAGUAI',
        tip: 'PAISES'
    },
    word141 = {
        name:'PERU',
        tip: 'PAISES'
    },
    word142 = {
        name:'POLONIA',
        tip: 'PAISES'
    },
    word143 = {
        name:'PORTUGAL',
        tip: 'PAISES'
    },
    word144 = {
        name:'QUENIA',
        tip: 'PAISES'
    },
    word145 = {
        name:'QUIRGUISTAO',
        tip: 'PAISES'
    },
    word146 = {
        name:'QUIRIBATI',
        tip: 'PAISES'
    },
    word147 = {
        name:'REINO UNIDO',
        tip: 'PAISES'
    },
    word148 = {
        name:'REPÚBLICA CENTRO-AFRICANA',
        tip: 'PAISES'
    },
    word149 = {
        name:'REPÚBLICA CHECA',
        tip: 'PAISES'
    },
    word150 = {
        name:'REPÚBLICA DEMOCRATICA DO CONGO',
        tip: 'PAISES'
    },
    word151 = {
        name:'REPÚBLICA DOMINICANA',
        tip: 'PAISES'
    },
    word152 = {
        name:'ROMENIA',
        tip: 'PAISES'
    },
    word153 = {
        name:'RUANDA',
        tip: 'PAISES'
    },
    word154 = {
        name:'RÚSSIA',
        tip: 'PAISES'
    },
    word155 = {
        name:'SALOMAO',
        tip: 'PAISES'
    },
    word156 = {
        name:'SALVADOR',
        tip: 'PAISES'
    },
    word157 = {
        name:'SAMOA',
        tip: 'PAISES'
    },
    word158 = {
        name:'SANTA LÚCIA',
        tip: 'PAISES'
    },
    word159 = {
        name:'SAO CRISTOVAO E NEVES',
        tip: 'PAISES'
    },
    word160 = {
        name:'SAO MARINHO',
        tip: 'PAISES'
    },
    word161= {
        name:'SAO TOME E PRINCIPE',
        tip: 'PAISES'
    },
    word162 = {
        name:'SAO VICENTE E GRANADINAS',
        tip: 'PAISES'
    },
    word163 = {
        name:'SEICHELES',
        tip: 'PAISES'
    },
    word164 = {
        name:'SENEGAL',
        tip: 'PAISES'
    },
    word165 = {
        name:'SERRA LEOA',
        tip: 'PAISES'
    },
    word166 = {
        name:'SERVIA',
        tip: 'PAISES'
    },
    word167 = {
        name:'SINGAPURA',
        tip: 'PAISES'
    },
    word168 = {
        name:'SIRIA',
        tip: 'PAISES'
    },
    word169 = {
        name:'SOMALIA',
        tip: 'PAISES'
    },
    word170 = {
        name:'SRI LANCA',
        tip: 'PAISES'
    },
    word171 = {
        name:'SUDAO',
        tip: 'PAISES'
    },
    word172 = {
        name:'SUDAO DO SUL',
        tip: 'PAISES'
    },
    word173 = {
        name:'SUECIA',
        tip: 'PAISES'
    },
    word174 = {
        name:'SUICA',
        tip: 'PAISES'
    },
    word175 = {
        name:'SURINAME',
        tip: 'PAISES'
    },
    word176 = {
        name:'TAILANDIA',
        tip: 'PAISES'
    },
    word177 = {
        name:'TAIUA',
        tip: 'PAISES'
    },
    word178 = {
        name:'TAJIQUISTAO',
        tip: 'PAISES'
    },
    word179 = {
        name:'TANZANIA',
        tip: 'PAISES'
    },
    word180 = {
        name:'TIMOR-LESTE',
        tip: 'PAISES'
    },
    word181 = {
        name:'TOGO',
        tip: 'PAISES'
    },
    word182 = {
        name:'TONGA',
        tip: 'PAISES'
    },
    word183 = {
        name:'TRINDADE E TOBAGO',
        tip: 'PAISES'
    },
    word184 = {
        name:'TUNISIA',
        tip: 'PAISES'
    },
    word185 = {
        name:'TURCOMENISTAO',
        tip: 'PAISES'
    },
    word186 = {
        name:'TURQUIA',
        tip: 'PAISES'
    },
    word187 = {
        name:'TUVALU',
        tip: 'PAISES'
    },
    word188 = {
        name:'UCRANIA',
        tip: 'PAISES'
    },
    word189 = {
        name:'UGANDA',
        tip: 'PAISES'
    },
    word190 = {
        name:'URUGUAI',
        tip: 'PAISES'
    },
    word191 = {
        name:'USBEQUISTAO',
        tip: 'PAISES'
    },
    word192 = {
        name:'VANUATU',
        tip: 'PAISES'
    },
    word193 = {
        name:'VATICANO',
        tip: 'PAISES'
    },
    word194 = {
        name:'VENEZUELA',
        tip: 'PAISES'
    },
    word195 = {
        name:'VIETNAME',
        tip: 'PAISES'
    },
    word196 = {
        name:'ZAMBIA',
        tip: 'PAISES'
    }
]
function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length)

    secretWordDrawn = words[indexWord].name;
    secretWordTip = words[indexWord].tip;

}
function hiddenWord(){
    const tip = document.getElementById("tip");
    tip.innerHTML = secretWordTip;

    const wordSecret = document.getElementById("secret-word");
    wordSecret.innerHTML = " ";

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
    if (position < 0) {
        attempt--
        loadImageForce();

        if (attempt === 0) {
            openModal("DERROTA!", "Não foi dessa vez  <br> A palavra secreta era " + secretWordDrawn);
        }

    } else {
        for (i = 0; i < secretWordDrawn.length; i++) {
            if (secretWordDrawn[i] === letter) {
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
        openModal("PARABENS!" , "Será que você consegue acertar novamente?")
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

let btnRestart = document.getElementById("btnRestart");
btnRestart.addEventListener("click", function(){
    location.reload();
});

let restartModal = document.getElementById("restartModal");
btnRestart.addEventListener("onclick", function(){
    location.reload();
});

createSecretWord()
hiddenWord()

