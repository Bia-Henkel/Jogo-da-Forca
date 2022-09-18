let attempt = 6;
let dynamicList = [];
let secretWordTip;
let secretWordDrawn;
const words = [
    word000 = {
        name:'ZIMBABUE',
        tip: 'LUGARES'
    },
    word001 = {
        name:'AFEGANISTAO',
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
        name:'CONGO BRAZZAVILLE',
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
        name:'EMIRADOS ARABES UNIDOS',
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
        name:'ESLOVAQUIA',
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
        name:'GRECIA',
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
        name:'GUINE',
        tip: 'LUGARES'
    },
    word079 = {
        name:'GUINE EQUATORIAL',
        tip: 'LUGARES'
    },
    word080 = {
        name:'GUINE BISSAU',
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
        name:'IEMEN',
        tip: 'LUGARES'
    },
    word085 = {
        name:'ILHAS MARECHAL',
        tip: 'LUGARES'
    },
    word086 = {
        name:'INDIA',
        tip: 'LUGARES'
    },
    word087 = {
        name:'INDONESIA',
        tip: 'LUGARES'
    },
    word088 = {
        name:'IRAO',
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
        name:'ISLANDIA',
        tip: 'LUGARES'
    },
    word092 = {
        name:'ISRAEL',
        tip: 'LUGARES'
    },
    word093 = {
        name:'ITALIA',
        tip: 'LUGARES'
    },
    word094 = {
        name:'JAMAICA',
        tip: 'LUGARES'
    },
    word095 = {
        name:'JAPAO',
        tip: 'LUGARES'
    },
    word096 = {
        name:'JIBUTI',
        tip: 'LUGARES'
    },
    word097 = {
        name:'JORDANIA',
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
        name:'LETONIA',
        tip: 'LUGARES'
    },
    word101 = {
        name:'LIBANO',
        tip: 'LUGARES'
    },
    word102 = {
        name:'LIBERIA',
        tip: 'LUGARES'
    },
    word103 = {
        name:'LIBIA',
        tip: 'LUGARES'
    },
    word104 = {
        name:'LISTENSTAINE',
        tip: 'LUGARES'
    },
    word105 = {
        name:'LITUANIA',
        tip: 'LUGARES'
    },
    word106 = {
        name:'LUXEMBURGO',
        tip: 'LUGARES'
    },
    word107 = {
        name:'MACEDONIA DO NORTE',
        tip: 'LUGARES'
    },
    word108 = {
        name:'MADAGASCAR',
        tip: 'LUGARES'
    },
    word109 = {
        name:'MALASIA',
        tip: 'LUGARES'
    },
    word110 = {
        name:'MALAUI',
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
        name:'MAURICIA',
        tip: 'LUGARES'
    },
    word116 = {
        name:'MAURITANIA',
        tip: 'LUGARES'
    },
    word117 = {
        name:'MEXICO',
        tip: 'LUGARES'
    },
    word118 = {
        name:'MIANMAR',
        tip: 'LUGARES'
    },
    word119 = {
        name:'MICRONESIA',
        tip: 'LUGARES'
    },
    word120 = {
        name:'MOCAMBIQUE',
        tip: 'LUGARES'
    },
    word121 = {
        name:'MOLDAVIA',
        tip: 'LUGARES'
    },
    word122 = {
        name:'MONACO',
        tip: 'LUGARES'
    },
    word123 = {
        name:'MONGOLIA',
        tip: 'LUGARES'
    },
    word124 = {
        name:'MONTENEGRO',
        tip: 'LUGARES'
    },
    word125 = {
        name:'NAMIBIA',
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
        name:'NICARAGUA',
        tip: 'LUGARES'
    },
    word129 = {
        name:'NIGER',
        tip: 'LUGARES'
    },
    word130 = {
        name:'NIGERIA',
        tip: 'LUGARES'
    },
    word131 = {
        name:'NORUEGA',
        tip: 'LUGARES'
    },
    word132 = {
        name:'NOVA ZELANDIA',
        tip: 'LUGARES'
    },
    word133 = {
        name:'OMA',
        tip: 'LUGARES'
    },
    word134 = {
        name:'PAISES BAIXOS',
        tip: 'LUGARES'
    },
    word135 = {
        name:'PALAU',
        tip: 'LUGARES'
    },
    word136 = {
        name:'PANAMA',
        tip: 'LUGARES'
    },
    word137 = {
        name:'PAPUA NOVA GUINE',
        tip: 'LUGARES'
    },
    word138 = {
        name:'PAQUISTAO',
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
        name:'POLONIA',
        tip: 'LUGARES'
    },
    word143 = {
        name:'PORTUGAL',
        tip: 'LUGARES'
    },
    word144 = {
        name:'QUENIA',
        tip: 'LUGARES'
    },
    word145 = {
        name:'QUIRGUISTAO',
        tip: 'LUGARES'
    },
    word146 = {
        name:'QUIRIBATI',
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
        name:'REPÚBLICA DEMOCRATICA DO CONGO',
        tip: 'LUGARES'
    },
    word151 = {
        name:'REPÚBLICA DOMINICANA',
        tip: 'LUGARES'
    },
    word152 = {
        name:'ROMENIA',
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
        name:'SALOMAO',
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
        name:'SAO CRISTOVAO E NEVES',
        tip: 'LUGARES'
    },
    word160 = {
        name:'SAO MARINHO',
        tip: 'LUGARES'
    },
    word161= {
        name:'SAO TOME E PRINCIPE',
        tip: 'LUGARES'
    },
    word162 = {
        name:'SAO VICENTE E GRANADINAS',
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
        name:'SERVIA',
        tip: 'LUGARES'
    },
    word167 = {
        name:'SINGAPURA',
        tip: 'LUGARES'
    },
    word168 = {
        name:'SIRIA',
        tip: 'LUGARES'
    },
    word169 = {
        name:'SOMALIA',
        tip: 'LUGARES'
    },
    word170 = {
        name:'SRI LANCA',
        tip: 'LUGARES'
    },
    word171 = {
        name:'SUDAO',
        tip: 'LUGARES'
    },
    word172 = {
        name:'SUDAO DO SUL',
        tip: 'LUGARES'
    },
    word173 = {
        name:'SUECIA',
        tip: 'LUGARES'
    },
    word174 = {
        name:'SUICA',
        tip: 'LUGARES'
    },
    word175 = {
        name:'SURINAME',
        tip: 'LUGARES'
    },
    word176 = {
        name:'TAILANDIA',
        tip: 'LUGARES'
    },
    word177 = {
        name:'TAIUA',
        tip: 'LUGARES'
    },
    word178 = {
        name:'TAJIQUISTAO',
        tip: 'LUGARES'
    },
    word179 = {
        name:'TANZANIA',
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
        name:'TUNISIA',
        tip: 'LUGARES'
    },
    word185 = {
        name:'TURCOMENISTAO',
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
        name:'UCRANIA',
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
        name:'USBEQUISTAO',
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
        name:'ZAMBIA',
        tip: 'LUGARES'
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
        openModal("PARABENS!" , "SerA que você consegue acertar novamente?")
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
