// import 'assets/js/words.js';
// let jsWords = document.createElement('script');
// jsWords.src = 'assets/js/words.js';
// document.head.appendChild(jsWords);

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
    },
    word197 = {
        name:'URUTU',
        tip: 'ANIMAL'
    },
    word198 = {
        name:'VEADO',
        tip: 'ANIMAL'
    },
    word199 = {
        name:'VEADO MATEIRO',
        tip: 'ANIMAL'
    },
    word200 = {
        name:'VESPA',
        tip: 'ANIMAL'
    },
    word201 = {
        name:'XEXEU',
        tip: 'ANIMAL'
    },
    word202 = {
        name:'ZEBRA',
        tip: 'ANIMAL'
    },
    word203 = {
        name:'ZORRILHO',
        tip: 'ANIMAL'
    },
    word204 = {
        name:'CISNE',
        tip: 'ANIMAL'
    },
    word205 = {
        name:'CIVETA',
        tip: 'ANIMAL'
    },
    word206 = {
        name:'COALA',
        tip: 'ANIMAL'
    },
    word207 = {
        name:'COBAIA',
        tip: 'ANIMAL'
    },
    word208 = {
        name:'COBRA-CEGA',
        tip: 'ANIMAL'
    },
    word209 = {
        name:'COELHO',
        tip: 'ANIMAL'
    },
    word210 = {
        name:'CONDOR',
        tip: 'ANIMAL'
    },
    word211 = {
        name:'CORVINA',
        tip: 'ANIMAL'
    },
    word212 = {
        name:'CORVO',
        tip: 'ANIMAL'
    },
    word213 = {
        name:'CROCODILO',
        tip: 'ANIMAL'
    },
    word214 = {
        name:'CURIMBATA',
        tip: 'ANIMAL'
    },
    word215 = {
        name:'DOURADO',
        tip: 'ANIMAL'
    },
    word216 = {
        name:'DRAGAO DE COMODO',
        tip: 'ANIMAL'
    },
    word217 = {
        name:'ELEFANTE',
        tip: 'ANIMAL'
    },
    word218 = {
        name:'EMA',
        tip: 'ANIMAL'
    },
    word219 = {
        name:'ESQUILO',
        tip: 'ANIMAL'
    },
    word220 = {
        name:'FOCA',
        tip: 'ANIMAL'
    },
    word221 = {
        name:'GAFANHOTO',
        tip: 'ANIMAL'
    },
    word222 = {
        name:'GALINHA DA ANGOLA',
        tip: 'ANIMAL'
    },
    word223 = {
        name:'GALINHA',
        tip: 'ANIMAL'
    },
    word224 = {
        name:'GAMBA',
        tip: 'ANIMAL'
    },
    word225 = {
        name:'GANSO',
        tip: 'ANIMAL'
    },
    word226 = {
        name:'GAROUPA',
        tip: 'ANIMAL'
    },
    word227 = {
        name:'GATO',
        tip: 'ANIMAL'
    },
    word228 = {
        name:'GATO DO MATO',
        tip: 'ANIMAL'
    },
    word229 = {
        name:'GAVIAO',
        tip: 'ANIMAL'
    },
    word230 = {
        name:'',
        tip: 'ANIMAL'
    },
    word231 = {
        name:'GIRAFA',
        tip: 'ANIMAL'
    },
    word232 = {
        name:'GOLFINHO',
        tip: 'ANIMAL'
    },
    word233 = {
        name:'GORILA',
        tip: 'ANIMAL'
    },
    word234 = {
        name:'GRALHA',
        tip: 'ANIMAL'
    },
    word235 = {
        name:'GUARA',
        tip: 'ANIMAL'
    },
    word236 = {
        name:'HAMSTER',
        tip: 'ANIMAL'
    },
    word237 = {
        name:'HIPOPOTAMO',
        tip: 'ANIMAL'
    },
    word238 = {
        name:'HOMEM',
        tip: 'ANIMAL'
    },
    word239 = {
        name:'JABURU',
        tip: 'ANIMAL'
    },
    word240 = {
        name:'JABUTI',
        tip: 'ANIMAL'
    },
    word241 = {
        name:'JACARE',
        tip: 'ANIMAL'
    },
    word242 = {
        name:'JACUTINGA',
        tip: 'ANIMAL'
    },
    word243 = {
        name:'JAGUATIRICA',
        tip: 'ANIMAL'
    },
    word244 = {
        name:'JARARACA',
        tip: 'ANIMAL'
    },
    word245 = {
        name:'JOAO DE BARRO',
        tip: 'ANIMAL'
    },
    word246 = {
        name:'JOBOIA',
        tip: 'ANIMAL'
    },
    word247 = {
        name:'LAGARTIXA',
        tip: 'ANIMAL'
    },
    word248 = {
        name:'LAGARTO',
        tip: 'ANIMAL'
    },
    word249 = {
        name:'LAMBARI',
        tip: 'ANIMAL'
    },
    word250 = {
        name:'LEAO',
        tip: 'ANIMAL'
    },
    word251 = {
        name:'LEBRE',
        tip: 'ANIMAL'
    },
    word252 = {
        name:'LEOPARDO',
        tip: 'ANIMAL'
    },
    word253 = {
        name:'LHAMA',
        tip: 'ANIMAL'
    },
    word254 = {
        name:'LIBELLULA',
        tip: 'ANIMAL'
    },
    word255 = {
        name:'LINCE',
        tip: 'ANIMAL'
    },
    word399 = {
        name:'LOBO',
        tip: 'ANIMAL'
    },
    word256 = {
        name:'LOMBRIGA',
        tip: 'ANIMAL'
    },
    word257 = {
        name:'LONTRA',
        tip: 'ANIMAL'
    },
    word258 = {
        name:'LULA',
        tip: 'ANIMAL'
    },
    word259 = {
        name:'MARRECO',
        tip: 'ANIMAL'
    },
    word260 = {
        name:'MICO AMARELO',
        tip: 'ANIMAL'
    },
    word261 = {
        name:'MICO LEAO',
        tip: 'ANIMAL'
    },
    word262 = {
        name:'MICO PRETO',
        tip: 'ANIMAL'
    },
    word263 = {
        name:'MICO RUIVO',
        tip: 'ANIMAL'
    },
    word264 = {
        name:'MOSQUITO DA DENGUE',
        tip: 'ANIMAL'
    },
    word265 = {
        name:'NAMORADO',
        tip: 'ANIMAL'
    },
    word266 = {
        name:'ONÇA',
        tip: 'ANIMAL'
    },
    word267 = {
        name:'ORANGOTANGO',
        tip: 'ANIMAL'
    },
    word268 = {
        name:'OSTRA JAPONESA',
        tip: 'ANIMAL'
    },
    word269 = {
        name:'OSTRA',
        tip: 'ANIMAL'
    },
    word270 = {
        name:'PACA',
        tip: 'ANIMAL'
    },
    word271 = {
        name:'PACU',
        tip: 'ANIMAL'
    },
    word272 = {
        name:'PANDA GIGANTE',
        tip: 'ANIMAL'
    },
    word273 = {
        name:'PAPAGAIO',
        tip: 'ANIMAL'
    },
    word274 = {
        name:'PATO',
        tip: 'ANIMAL'
    },
    word275 = {
        name:'PAVAO',
        tip: 'ANIMAL'
    },
    word276 = {
        name:'PEIXE ESPADA',
        tip: 'ANIMAL'
    },
    word277 = {
        name:'PERU',
        tip: 'ANIMAL'
    },
    word278 = {
        name:'PICA PAU',
        tip: 'ANIMAL'
    },
    word279 = {
        name:'PINGÜIM',
        tip: 'ANIMAL'
    },
    word279 = {
        name:'PINTADO',
        tip: 'ANIMAL'
    },
    word280 = {
        name:'PIOLHO',
        tip: 'ANIMAL'
    },
    word281 = {
        name:'PIRANHA',
        tip: 'ANIMAL'
    },
    word282 = {
        name:'PIRAROCU',
        tip: 'ANIMAL'
    },
    word283 = {
        name:'POLVO',
        tip: 'ANIMAL'
    },
    word284 = {
        name:'POMBO',
        tip: 'ANIMAL'
    },
    word285 = {
        name:'PORCO',
        tip: 'ANIMAL'
    },
    word286 = {
        name:'PORCO DO MATO',
        tip: 'ANIMAL'
    },
    word287 = {
        name:'PROTOZOARIO',
        tip: 'ANIMAL'
    },
    word288 = {
        name:'PULGA',
        tip: 'ANIMAL'
    },
    word289 = {
        name:'PULGAO',
        tip: 'ANIMAL'
    },
    word290 = {
        name:'PUMA',
        tip: 'ANIMAL'
    },
    word291 = {
        name:'QUERO QUERO',
        tip: 'ANIMAL'
    },
    word292 = {
        name:'RA',
        tip: 'ANIMAL'
    },
    word293 = {
        name:'RAPOSA',
        tip: 'ANIMAL'
    },
    word294 = {
        name:'RATO',
        tip: 'ANIMAL'
    },
    word295 = {
        name:'RINOCERONTE',
        tip: 'ANIMAL'
    },
    word296 = {
        name:'ROBALO',
        tip: 'ANIMAL'
    },
    word297 = {
        name:'SABIA',
        tip: 'ANIMAL'
    },
    word298 = {
        name:'SAGÜI',
        tip: 'ANIMAL'
    },
    word299 = {
        name:'SALMAO',
        tip: 'ANIMAL'
    },
    word300 = {
        name:'SAPO CURURU',
        tip: 'ANIMAL'
    },
    word301 = {
        name:'SAPO',
        tip: 'ANIMAL'
    },
    word302 = {
        name:'SARACURA',
        tip: 'ANIMAL'
    },
    word303 = {
        name:'SARDINHA',
        tip: 'ANIMAL'
    },
    word304 = {
        name:'',
        tip: 'ANIMAL'
    },
    word305 = {
        name:'TAMANDUA',
        tip: 'ANIMAL'
    },
    word306 = {
        name:'TATU',
        tip: 'ANIMAL'
    },
    word307 = {
        name:'TICO TICO',
        tip: 'ANIMAL'
    },
    word308 = {
        name:'TIGRE',
        tip: 'ANIMAL'
    },
    word309 = {
        name:'TOURO',
        tip: 'ANIMAL'
    },
    word310 = {
        name:'VACA',
        tip: 'ANIMAL'
    },
    word311 = {
        name:'RAIRA',
        tip: 'ANIMAL'
    },
    word312 = {
        name:'TUCANO',
        tip: 'ANIMAL'
    },
    word313 = {
        name:'TUCUNARE',
        tip: 'ANIMAL'
    },
    word314 = {
        name:'UIRAPURU',
        tip: 'ANIMAL'
    },
    word315 = {
        name:'URSO',
        tip: 'ANIMAL'
    },
    word316 = {
        name:'URUBU',
        tip: 'ANIMAL'
    },
    word317 = {
        name:'URUBU',
        tip: 'ANIMAL'
    },
    word318 = {
        name:'ABELHA',
        tip: 'ANIMAL'
    },
    word319 = {
        name:'ACARO DA SARNA',
        tip: 'ANIMAL'
    },
    word320 = {
        name:'AGUIA CHILENA',
        tip: 'ANIMAL'
    },
    word321 = {
        name:'AGUIA CINZENTA',
        tip: 'ANIMAL'
    },
    word322 = {
        name:'AGUIA DOURADA',
        tip: 'ANIMAL'
    },
    word323 = {
        name:'ALBATROZ',
        tip: 'ANIMAL'
    },
    word324 = {
        name:'ALCE',
        tip: 'ANIMAL'
    },
    word325 = {
        name:'ANTA',
        tip: 'ANIMAL'
    },
    word326 = {
        name:'ANTRAX',
        tip: 'ANIMAL'
    },
    word327 = {
        name:'ARANHA CARANGUEJEIRA',
        tip: 'ANIMAL'
    },
    word328 = {
        name:'ARANHA MARROM',
        tip: 'ANIMAL'
    },
    word329 = {
        name:'ARAPONGA',
        tip: 'ANIMAL'
    },
    word330 = {
        name:'ARARA VERMELHA',
        tip: 'ANIMAL'
    },
    word331 = {
        name:'ARATU',
        tip: 'ANIMAL'
    },
    word332 = {
        name:'ASNO',
        tip: 'ANIMAL'
    },
    word333 = {
        name:'AVESTRUZ',
        tip: 'ANIMAL'
    },
    word334 = {
        name:'BACILO DO TIFO',
        tip: 'ANIMAL'
    },
    word335 = {
        name:'BALEIA AZUL',
        tip: 'ANIMAL'
    },
    word336 = {
        name:'BARATA',
        tip: 'ANIMAL'
    },
    word337 = {
        name:'BEIJA-FLOR',
        tip: 'ANIMAL'
    },
    word338 = {
        name:'BEM-TE-VI',
        tip: 'ANIMAL'
    },
    word339 = {
        name:'BICHO-DA-SEDA',
        tip: 'ANIMAL'
    },
    word340 = {
        name:'BICHO-PREGUIÇA',
        tip: 'ANIMAL'
    },
    word341 = {
        name:'BORBOLETA',
        tip: 'ANIMAL'
    },
    word342 = {
        name:'BUFALO',
        tip: 'ANIMAL'
    },
    word343 = {
        name:'BUGIO PRETO',
        tip: 'ANIMAL'
    },
    word344 = {
        name:'CABRA',
        tip: 'ANIMAL'
    },
    word345 = {
        name:'CAGADO',
        tip: 'ANIMAL'
    },
    word346 = {
        name:'CALANGO',
        tip: 'ANIMAL'
    },
    word347 = {
        name:'CAMALEAO',
        tip: 'ANIMAL'
    },
    word348 = {
        name:'CAMELO',
        tip: 'ANIMAL'
    },
    word349 = {
        name:'CACHORRO',
        tip: 'ANIMAL'
    },
    word350 = {
        name:'CAPIVARA',
        tip: 'ANIMAL'
    },
    word351 = {
        name:'CARANGUEJO',
        tip: 'ANIMAL'
    },
    word352 = {
        name:'CARDEAL',
        tip: 'ANIMAL'
    },
    word353 = {
        name:'CARNEIRO',
        tip: 'ANIMAL'
    },
    word354 = {
        name:'CARPA',
        tip: 'ANIMAL'
    },
    word355 = {
        name:'CARRAPATO',
        tip: 'ANIMAL'
    },
    word356 = {
        name:'CASCAVEL',
        tip: 'ANIMAL'
    },
    word357 = {
        name:'CASTOR',
        tip: 'ANIMAL'
    },
    word358 = {
        name:'CAVALO',
        tip: 'ANIMAL'
    },
    word359 = {
        name:'CHACAL',
        tip: 'ANIMAL'
    },
    word360 = {
        name:'CHIMPANZE',
        tip: 'ANIMAL'
    },
    word361 = {
        name:'CHUPIM',
        tip: 'ANIMAL'
    },
    word362 = {
        name:'CIGARRA',
        tip: 'ANIMAL'
    },
]

// SORTEIA A PALAVRA SECRETA
function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length)

    secretWordDrawn = words[indexWord].name;
    secretWordTip = words[indexWord].tip;
}

// INCLUI A PALAVRA SECRETA NA LISTA DINAMICA E FAZ A LIGAÇÃO DA DICA CO HTML
function hiddenWord(){
    const tip = document.getElementById("tip");
    tip.innerHTML = secretWordTip;

    const wordSecret = document.getElementById("secret-word");
    wordSecret.innerHTML = " ";

    // MOSTRA VISIVELMENTE A PALAVRA ESCONDIDA
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

// VERIFICA SE AINDA TEM TENTATIVA
// ENVIA A LETRA ESCOLHIDA PARA A COMPARAÇÃO DE LISTAS
// TROCA A LETRA DE COR E DESATIVA O HOVER
function chosenLetterVerification(letter){
    if(attempt > 0 ) {
        changeStyleLetter("key-" + letter);
        compareList(letter);
        hiddenWord()
    }
}

// MUDA O ESTILO DA TECLA/LETRA E DESATIVA O HOVER
function changeStyleLetter(key){
    document.getElementById(key).style.background = "#CDB38B";
    document.getElementById(key).style.pointerEvents = "none";
    document.getElementById(key).style.color = "#fff";
}

// COMPARA A PALAVRA ESCOLHIDA COM A PALAVRA ESCONDIDA PARA VER SE DEU VITÓRIA OU DERROTA
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

// MUDA A IMAGEM DA FORCA
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

// ABRE A MODAL
function openModal(title, message){
    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message

    let modal = new bootstrap.Modal(document.getElementById('myModal'))
    modal.show();
}


// FAZ O BOTÃO DE RESTART
let btnRestart = document.getElementById("btnRestart");
btnRestart.addEventListener("click", function(){
    location.reload();
});

createSecretWord()
hiddenWord()


function teste() {
    alert("funciona!")
}

