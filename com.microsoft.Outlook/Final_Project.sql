use gold04_database;

/*drop table Customer;

drop table lineleap;

drop table location;

drop table teams;

drop table employee;

CREATE TABLE Customer(
customer_id VARCHAR(10),
first_name VARCHAR(30),
last_name VARCHAR(30),
birthdate Character(20),
email VARCHAR(50),
zip_code character(10),
credit_card_number VARCHAR(20),
PRIMARY KEY(customer_id));

CREATE TABLE Teams(
team_id VARCHAR(10),
time_in VARCHAR(15),
time_out VARCHAR(15),
PRIMARY KEY(team_id));

CREATE TABLE Location(
bar_id VARCHAR(10),
title VARCHAR(20),
bar_capacity VARCHAR(5),
num_customers VARCHAR(5),
num_employees VARCHAR(5),
team_id VARCHAR (10),
address VARCHAR(50),
city VARCHAR(30),
zip_code Character(9),
PRIMARY KEY(bar_id),
Constraint fk_belongsTo_teams
FOREIGN KEY(team_id) REFERENCES teams(team_id));

CREATE TABLE LineLeap(
receipt_num VARCHAR(10),
credit_card VARCHAR(16),
billing_address VARCHAR(30),
item_quantity VARCHAR(10),
reservation_time VARCHAR(20),
customer_id VARCHAR(10),
bar_id VARCHAR(10),
PRIMARY KEY(receipt_num),
Constraint fk_belongsTo_customer
FOREIGN KEY(customer_id) REFERENCES customer(customer_id),
Constraint fk_belongsTo_location
FOREIGN KEY(bar_id) REFERENCES location(bar_id));

CREATE TABLE Employee(
employee_id VARCHAR(10),
first_name VARCHAR(30),
last_name VARCHAR(30),
position VARCHAR(20),
team_id VARCHAR(10),
PRIMARY KEY(employee_id),
Constraint fk_belongsTo_team
FOREIGN KEY(team_id) REFERENCES teams(team_id));*/

INSERT INTO customers(customer_id,first_name,last_name,birthdate,zip,email,credit_card_num)
VALUES (9226406285,'James','Butt',1981-03-29,70116,'jbutt@gmail.com,4567'),
(7033089605,'Josephine','Darakjy',1970-07-31,48116,'josephine_darakjy@darakjy.org',3160),
(7006761837,Art,Venere,1963-06-16,8014,art@venere.org,5751),
5548895297,Lenna,Paprocki,1977-12-04,99501,lpaprocki@hotmail.com,7808),
8912136373,Donette,Foller,1977-04-17,45011,donette.foller@cox.net,6211),
9009264119,Simona,Morasca,1900-05-02,44805,simona@morasca.com,8783),
7544210529,Mitsue,Tollner,1995-06-13,60632,mitsue_tollner@yahoo.com,827),
843484858,Leota,Dilliard,1958-06-30,95111,leota@hotmail.com,414),
9858919924,Sage,Wieser,1959-06-09,57105,sage_wieser@cox.net,4062),
762245158,Kris,Marrier,1987-11-13,21224,kris@gmail.com,8009),
9884670606,Minna,Amigon,1975-02-05,19443,minna_amigon@yahoo.com,1850),
2109746536,Abel,Maclead,1995-05-19,11953,amaclead@gmail.com,9389),
1581854808,Kiley,Caldarera,1972-02-24,90034,kiley.caldarera@aol.com,8511),
4506766700,Graciela,Ruta,1996-06-26,44023,gruta@cox.net,6950),
1945035462,Cammy,Albares,1958-02-23,78045,calbares@gmail.com,2538),
2961406098,Mattie,Poquette,1966-08-22,85013,mattie@aol.com,26),
3212484106,Meaghan,Garufi,1970-05-18,37110,meaghan@hotmail.com,4287),
2026339210,Gladys,Rim,1992-12-05,53207,gladys.rim@rim.org,7006),
4287198498,Yuki,Whobrey,1959-07-15,48180,yuki_whobrey@aol.com,6778),
5653807119,Fletcher,Flosi,1967-10-04,61109,fletcher.flosi@yahoo.com,2360),
5658791409,Bette,Nicka,1994-12-14,19014,,7691),
2685154299,Veronika,Inouye,1993-10-26,95111,vinouye@aol.com,2421),
6303174886,Willard,Kolmetz,1972-11-20,75062,willard@hotmail.com,2509),
5684400641,Maryann,Royster,1980-05-01,12204,mroyster@royster.com,9484),
8761263463,Allene,Iturbide,1989-07-29,54481,allene_iturbide@cox.net,4657),
8599841904,Chanel,Caudy,1900-05-03,66218,chanel.caudy@caudy.org,2643),
4024847073,Ezekiel,Chui,1969-07-07,21601,ezekiel@chui.com,429),
7769815940,Willow,Kusko,1975-03-19,10011,wkusko@yahoo.com,4208),
2198818821,Bernardo,Figeroa,1963-12-06,77301,bfigeroa@aol.com,1623),
3838859149,Ammie,Corrio,1981-05-12,43215,ammie@corrio.com,7205),
6679854964,Francine,Vocelka,1981-06-16,88011,,8424),
7497895446,Ernie,Stenseth,1993-08-31,7660,ernie_stenseth@aol.com,4486),
2217499209,Alishia,Sergi,1993-07-28,10025,asergi@gmail.com,1927),
6930408270,Solange,Shinko,1967-12-01,70002,solange@shinko.com,7702),
5056644429,Jose,Stockham,1969-02-10,10011,jose@yahoo.com,726),
2468041514,Rozella,Ostrosky,1983-09-14,93012,rozella.ostrosky@ostrosky.com,293),
2875636698,Kati,Rulapaugh,1961-08-22,67410,kati.rulapaugh@hotmail.com,8702),
790935736,Youlanda,Schemmer,1962-06-21,97754,youlanda@aol.com,4301),
940374486,Dyan,Oldroyd,1982-07-29,66204,doldroyd@aol.com,1809),
4133833524,Roxane,Campain,1985-01-04,99708,roxane@hotmail.com,7479),
4471059794,Lavera,Perin,1978-12-11,33196,lperin@perin.org,7198),
9145116781,Erick,Ferencz,1964-08-15,99712,,3430),
8651108608,Fatima,Saylors,1983-11-14,55343,fsaylors@saylors.org,850),
4101464601,Jina,Briddick,1989-11-09,2128,jina_briddick@briddick.com,5873),
6166816647,Emerson,Bowley,1993-11-10,53711,emerson.bowley@bowley.org,3483),
1578005680,Blair,Malet,1996-04-14,19132,bmalet@yahoo.com,6819),
8250763923,Brock,Bolognia,1988-10-31,10003,bbolognia@yahoo.com,8952),
6129914164,Lorrie,Nestle,1989-05-11,37388,lnestle@hotmail.com,3619),
7976496101,Sabra,Uyetake,1959-06-17,29201,sabra@uyetake.org,9671),
8126214838,Marjory,Mastella,1982-11-06,19087,mmastella@mastella.com,2534),
3632158109,Karl,Klonowski,1960-12-13,8822,karl_klonowski@yahoo.com,1016),
5980373227,Tonette,Wenner,1991-05-04,11590,twenner@aol.com,8683),
223860549,Amber,Monarrez,1992-12-25,19046,amber_monarrez@monarrez.org,8909),
8583891297,Shenika,Seewald,1958-05-05,91405,shenika@gmail.com,7017),
7266059677,Delmy,Ahle,1961-05-05,2909,delmy.ahle@hotmail.com,6842),
1364439525,Deeanna,Juhas,1995-08-27,19006,deeanna_juhas@gmail.com,6587),
2125325655,Blondell,Pugh,1961-01-30,2904,bpugh@aol.com,7426),
6245738390,Cecily,Hollack,1984-11-06,78731,cecily@hollack.org,9696),
7566373655,Carmelina,Lindall,1994-11-14,80126,carmelina_lindall@lindall.com,7353),
6205550188,Maurine,Yglesias,1991-08-31,53214,maurine_yglesias@yglesias.com,9545),
6125707473,Tawna,Buvens,1960-03-29,10009,tawna@gmail.com,125),
765915727,Penney,Weight,1985-07-06,99515,penney_weight@aol.com,7832),
9125316616,Elly,Morocco,1965-02-05,16502,,6051),
6589006361,Ilene,Eroman,1986-09-12,21061,ilene.eroman@hotmail.com,7914),
3412517515,Kallie,Blackwood,1974-01-03,94104,kallie.blackwood@gmail.com,8257),
7147078292,Johnetta,Abdallah,1963-06-15,27514,johnetta_abdallah@aol.com,5503),
3076703393,Bobbye,Rhym,1992-06-27,94070,brhym@rhym.com,3474),
7566911591,Micaela,Rhymes,1986-04-21,94520,micaela_rhymes@gmail.com,1709),
1520961709,Tamar,Hoogland,1959-03-09,43140,tamar@hotmail.com,9845),
9574362616,Moon,Parlato,1991-08-18,14895,moon@yahoo.com,592),
5750292500,Laurel,Reitler,1985-04-20,21215,laurel_reitler@reitler.com,5577),
77410475,Delisa,Crupi,1991-03-28,7105,delisa.crupi@crupi.com,1744),
3647344635,Viva,Toelkes,1967-07-22,60647,viva.toelkes@gmail.com,4520),
5474249452,Elza,Lipke,1976-05-30,7104,elza@yahoo.com,8404),
5307472590,Devorah,Chickering,1968-10-23,88101,devorah@hotmail.com,1556),
7724761021,Timothy,Mulqueen,1991-08-12,10309,timothy_mulqueen@mulqueen.org,2114),
4722610382,Arlette,Honeywell,1984-10-28,32254,ahoneywell@honeywell.com,5162),
2146475623,Dominque,Dickerson,1984-01-19,94545,dominque.dickerson@dickerson.org,9374),
1250768100,Myra,Munns,1974-10-23,76040,mmunns@cox.net,3851),
8374863659,Stephaine,Barfield,1975-05-23,90247,stephaine@barfield.com,5238),
2067649574,Lai,Gato,1966-11-27,60201,lai.gato@gato.org,1830),
5779162098,Stephen,Emigh,1981-09-08,44302,stephen_emigh@hotmail.com,4569),
3756798711,Tyra,Shields,1979-12-24,19106,tshields@gmail.com,9071),
5605448339,Cory,Gibes,1977-10-31,91776,cory.gibes@gmail.com,7817),
2500930834,Danica,Bruschke,1980-01-12,76708,danica_bruschke@gmail.com,1086),
9587916553,Wilda,Giguere,1961-08-11,99501,,7092),
2682210880,Carma,Vanheusen,1994-10-08,94577,carma@cox.net,3331),
6885431156,Malinda,Hochard,1984-12-24,46202,malinda.hochard@yahoo.com,6687),
6937150971,Natalie,Fern,1964-12-12,82901,natalie.fern@hotmail.com,5685),
7948840487,Lisha,Centini,1987-12-30,22102,lisha@centini.org,5225),
620017270,Arlene,Klusman,1979-03-22,70112,arlene_klusman@gmail.com,2090),
7031602552,Alease,Buemi,1979-10-06,80303,alease@buemi.com,5817),
6013581733,Louisa,Cronauer,1977-10-31,94577,louisa@cronauer.com,5613),
9708670746,Angella,Cetta,1980-01-12,96817,angella.cetta@hotmail.com,7370),
2421214538,Cyndy,Goldammer,1961-08-11,55337,cgoldammer@cox.net,7702),
7882541634,Rosio,Cork,1978-03-04,27263,rosio.cork@gmail.com,5250),
4985918327,Twana,Felger,1984-12-24,97224,twana.felger@felger.org,8878),
952115225,Estrella,Samu,1964-12-12,53511,estrella@aol.com,864),
3551470792,Donte,Kines,1987-12-30,1602,dkines@hotmail.com,8221),
3520491645,Tiffiny,Steffensmeier,1979-03-22,33133,tiffiny_steffensmeier@cox.net,1566),
3408216700,Edna,Miceli,1979-10-06,16502,emiceli@miceli.org,304),
1805654993,Sue,Kownacki,1977-10-31,75149,sue@aol.com,7785),
6183250316,Jesusa,Shin,1980-01-12,37388,jshin@shin.com,3363),
4777127451,Rolland,Francescon,1961-08-11,7501,rolland@cox.net,7487),
834173491,Pamella,Schmierer,1978-03-04,33030,pamella.schmierer@schmierer.org,8931),
8750479462,Glory,Kulzer,1994-10-08,21117,gkulzer@kulzer.org,6318),
4632808265,Shawna,Palaspas,1984-12-24,91362,shawna_palaspas@palaspas.org,2206),
8516844630,Brandon,Callaro,1964-12-12,96819,brandon_callaro@hotmail.com,9160),
6230164269,Scarlet,Cartan,1987-12-30,31701,scarlet.cartan@yahoo.com,6017),
7019735546,Oretha,Menter,1979-03-22,2210,oretha_menter@yahoo.com,8202),
2118915253,Ty,Smith,1979-10-06,7601,,7319),
8053087994,Xuan,Rochin,1977-10-31,94403,xuan@gmail.com,6553),
9898191683,Lindsey,Dilello,1980-01-12,91761,lindsey.dilello@hotmail.com,1955),
5649060560,Devora,Perez,1961-08-11,94606,devora_perez@perez.org,574),
9570330006,Herman,Demesa,1978-03-04,12180,hdemesa@cox.net,1178),
1703512585,Rory,Papasergi,1994-10-08,18411,rpapasergi@cox.net,8255),
3887084545,Talia,Riopelle,1984-12-24,7050,talia_riopelle@aol.com,1667),
8007481894,Van,Shire,1964-12-12,8867,van.shire@shire.com,7985),
4262751378,Lucina,Lary,1987-12-30,32922,lucina_lary@cox.net,7053),
4631891163,Rolande,Spickerman,1979-10-06,96782,rolande.spickerman@spickerman.com,2398),
7891376454,Howard,Paulas,1900-05-06,80231,hpaulas@gmail.com,9090),
1446940436,Kimbery,Madarang,1980-01-12,7866,kimbery_madarang@cox.net,7720),
4553725261,Thurman,Manno,1961-08-11,8201,thurman.manno@yahoo.com,8480),
3309747954,Becky,Mirafuentes,1978-03-04,7062,becky.mirafuentes@mirafuentes.com,8670),
9848532865,Beatriz,Corrington,1994-10-08,2346,beatriz@yahoo.com,1776),
4559514059,Marti,Maybury,1984-12-24,60638,marti.maybury@yahoo.com,402),
2685440496,Nieves,Gotter,1964-12-12,97202,nieves_gotter@gmail.com,4420),
7868249694,Leatha,Hagele,1987-12-30,75227,lhagele@cox.net,6852),
337495166,Valentin,Klimek,1979-03-22,60604,vklimek@klimek.org,9343),
6117245745,Sheridan,Zane,1977-10-31,92501,sheridan.zane@zane.com,406),
9984489953,Bulah,Padilla,1980-01-12,76707,bulah_padilla@hotmail.com,8979),
6910877507,Audra,Kohnert,1961-08-11,37211,audra@kohnert.com,9319),
8637318847,Daren,Weirather,1978-03-04,53216,dweirather@aol.com,875),
3950183913,Fernanda,Jillson,1994-10-08,21655,fjillson@aol.com,8553),
5951417096,Gearldine,Gellinger,1984-12-24,75061,gearldine_gellinger@gellinger.com,2524),
8495596942,Chau,Kitzman,1964-12-12,90212,chau@gmail.com,3048),
4239115170,Theola,Frey,1987-12-30,11758,theola_frey@frey.com,6304),
9806555297,Cheryl,Haroldson,1979-03-22,8401,cheryl@haroldson.org,5236),
552033937,Laticia,Merced,1979-10-06,45203,lmerced@gmail.com,8241),
6977254318,Carissa,Batman,1977-10-31,97401,carissa.batman@yahoo.com,3991),
4493683341,Lezlie,Craghead,1980-01-12,27577,lezlie.craghead@craghead.org,2328),
7325960174,Ozell,Shealy,1961-08-11,10002,oshealy@hotmail.com,953),
8634889248,Arminda,Parvis,1978-03-04,85017,arminda@parvis.com,7356),
1676161830,Reita,Leto,1994-10-08,46240,reita.leto@gmail.com,182),
5043414189,Yolando,Luczki,1984-12-24,13214,yolando@cox.net,1805),
7104897268,Lizette,Stem,1964-12-12,8002,lizette.stem@aol.com,9732),
5799260206,Gregoria,Pawlowicz,1987-12-30,11530,gpawlowicz@yahoo.com,6689),
1709664137,Carin,Deleo,1979-03-22,72202,cdeleo@deleo.com,1476),
95800718,Chantell,Maynerich,1979-10-06,55101,chantell@yahoo.com,778),
4170678573,Dierdre,Yum,1977-10-31,19134,dyum@yahoo.com,3185),
5159442019,Larae,Gudroe,1980-01-12,70360,larae_gudroe@gmail.com,4347),
1788687587,Latrice,Tolfree,1961-08-11,11779,latrice.tolfree@hotmail.com,8261),
7324777019,Kerry,Theodorov,1978-03-04,95827,kerry.theodorov@gmail.com,4259),
3202733560,Dorthy,Hidvegi,1994-10-08,83704,dhidvegi@yahoo.com,2937),
4463309250,Fannie,Lungren,1984-12-24,78664,fannie.lungren@yahoo.com,6319),
9938085660,Evangelina,Radde,1964-12-12,19123,evangelina@aol.com,7188),
8654711782,Novella,Degroot,1987-12-30,96720,novella_degroot@degroot.org,872),
6380842908,Clay,Hoa,1979-03-22,89502,choa@hoa.org,3813),
6337433487,Jennifer,Fallick,1979-10-06,60090,jfallick@yahoo.com,8102),
9433306778,Irma,Wolfgramm,1977-10-31,7869,irma.wolfgramm@hotmail.com,5581),
6003704161,Eun,Coody,1980-01-12,29301,eun@yahoo.com,5555),
7560437014,Sylvia,Cousey,1961-08-11,21074,sylvia_cousey@cousey.org,3833),
3975605664,Nana,Wrinkles,1978-03-04,10553,nana@aol.com,6099),
7074416555,Layla,Springe,1994-10-08,10011,layla.springe@cox.net,3409),
4637143508,Joesph,Degonia,1984-12-24,94710,joesph_degonia@degonia.org,7923),
5476945951,Annabelle,Boord,1964-12-12,1742,annabelle.boord@cox.net,5677),
9116864554,Stephaine,Vinning,1987-12-30,94104,stephaine@cox.net,9721),
6989773360,Nelida,Sawchuk,1979-03-22,7652,nelida@gmail.com,4037),
4187611249,Marguerita,Hiatt,1979-10-06,94561,marguerita.hiatt@gmail.com,4886),
3379164387,Carmela,Cookey,1977-10-31,60623,ccookey@cookey.org,1760),
9539969416,Junita,Brideau,1980-01-12,7009,jbrideau@aol.com,9888),
4479009044,Claribel,Varriano,1961-08-11,43551,claribel_varriano@cox.net,3924),
9633657914,Benton,Skursky,1978-03-04,90248,benton.skursky@aol.com,7667),
8657935506,Hillary,Skulski,1900-05-05,34448,hillary.skulski@aol.com,9357),
9309568785,Merilyn,Bayless,1984-12-24,95054,merilyn_bayless@cox.net,5447),
2112516794,Teri,Ennaco,1964-12-12,18201,,6554),
7108548857,Merlyn,Lawler,1987-12-30,7304,merlyn_lawler@hotmail.com,1664),
4853814540,Georgene,Montezuma,1979-03-22,94583,gmontezuma@cox.net,4272),
4230989289,Jettie,Mconnell,1979-10-06,8807,jmconnell@hotmail.com,685),
7928172969,Lemuel,Latzke,1977-10-31,11716,lemuel.latzke@gmail.com,4017),
2154224393,Melodie,Knipp,1980-01-12,91362,mknipp@gmail.com,2017),
9639966356,Candida,Corbley,1961-08-11,8876,candida_corbley@hotmail.com,6503),
5667005623,Karan,Karpin,1978-03-04,97005,karan_karpin@gmail.com,2905),
9893618422,Andra,Scheyer,1994-10-08,97302,andra@gmail.com,5834),
3162072077,Felicidad,Poullion,1984-12-24,8077,fpoullion@poullion.com,6984),
7085513039,Belen,Strassner,1964-12-12,30135,belen_strassner@aol.com,9312),
2052096778,Gracia,Melnyk,1987-12-30,32216,gracia@melnyk.com,8801),
4248146881,Jolanda,Hanafan,1979-03-22,4401,jhanafan@gmail.com,8769),
6285745025,Barrett,Toyama,1979-10-06,76060,barrett.toyama@toyama.org,3103),
6710537346,Helga,Fredicks,1977-10-31,14228,helga_fredicks@yahoo.com,3348),
502872504,Ashlyn,Pinilla,1980-01-12,33054,apinilla@cox.net,8770),
6918152041,Fausto,Agramonte,1961-08-11,10038,fausto_agramonte@yahoo.com,5845),
7231257439,Ronny,Caiafa,1978-03-04,19103,ronny.caiafa@caiafa.org,1146),
3260035074,Marge,Limmel,1994-10-08,32536,marge@gmail.com,6909),
9222536234,Norah,Waymire,1984-12-24,94107,norah.waymire@gmail.com,5816),
2712259316,Aliza,Baltimore,1964-12-12,95132,aliza@aol.com,3060),
8869013432,Mozell,Pelkowski,1987-12-30,94080,mpelkowski@pelkowski.org,9994),
9344679277,Viola,Bitsuie,1979-03-22,91325,viola@gmail.com,5287),
6682115465,Franklyn,Emard,1979-10-06,19103,femard@emard.com,1784),
9863886203,Willodean,Konopacki,1977-10-31,70506,willodean_konopacki@konopacki.org,9352),
5005936579,Beckie,Silvestrini,1980-01-12,48126,beckie.silvestrini@silvestrini.com,7006),
8330055614,Rebecka,Gesick,1961-08-11,78754,rgesick@gesick.org,6026),
684384293,Frederica,Blunk,1978-03-04,75207,frederica_blunk@gmail.com,9560),
9537227384,Glen,Bartolet,1994-10-08,98070,glen_bartolet@hotmail.com,7031),
4741526125,Freeman,Gochal,1984-12-24,19320,freeman_gochal@aol.com,5752),
4480899339,Vincent,Meinerding,1979-10-06,19143,vincent.meinerding@hotmail.com,8249),
8873343988,Rima,Bevelacqua,1977-10-31,90248,rima@cox.net,6076),
9555796271,Glendora,Sarbacher,1980-01-12,94928,gsarbacher@gmail.com,3657),
5269621641,Avery,Steier,1961-08-11,32803,avery@cox.net,4540),
9216156010,Cristy,Lother,1978-03-04,92025,cristy@lother.com,3034),
6426396312,Nicolette,Brossart,1994-10-08,1581,nicolette_brossart@brossart.com,6250),
8568307573,Tracey,Modzelewski,1984-12-24,77301,tracey@hotmail.com,207),
3625614778,Virgina,Tegarden,1979-10-06,53226,virgina_tegarden@tegarden.com,174),
7044422433,Tiera,Frankel,1977-10-31,91731,tfrankel@aol.com,4516),
8607499650,Alaine,Bergesen,1980-01-12,10701,alaine_bergesen@cox.net,6870),
5240356773,Earleen,Mai,1961-08-11,75227,earleen_mai@cox.net,2529),
1060992639,Leonida,Gobern,1978-03-04,39530,leonida@gobern.org,8573),
6129248808,Ressie,Auffrey,1994-10-08,33134,ressie.auffrey@yahoo.com,4901),
1296322104,Justine,Mugnolo,1984-12-24,10048,jmugnolo@yahoo.com,1295),
2693691697,Eladia,Saulter,1979-10-06,7446,,498),
4426535253,Chaya,Malvin,1977-10-31,48103,chaya@malvin.com,7147),
5658860438,Gwenn,Suffield,1980-01-12,11729,gwenn_suffield@suffield.org,3985),
1143201339,Salena,Karpel,1961-08-11,44707,skarpel@cox.net,7531),
9049408159,Yoko,Fishburne,1978-03-04,6511,yoko@fishburne.com,1573),
1363936121,Taryn,Moyd,1994-10-08,22030,taryn.moyd@hotmail.com,3821),
5220897728,Katina,Polidori,1984-12-24,1887,katina_polidori@aol.com,8919),
7873122215,Rickie,Plumer,1979-10-06,43613,rickie.plumer@aol.com,1997),
9566601424,Alex,Loader,1977-10-31,98409,alex@loader.com,5982),
2361960742,Lashon,Vizarro,1980-01-12,95661,lashon@aol.com,4008),
5522483450,Lauran,Burnard,1961-08-11,82501,lburnard@burnard.com,7147),
9342589913,Ceola,Setter,1978-03-04,4864,ceola.setter@setter.org,3985),
238287423,My,Rantanen,1994-10-08,18954,my@hotmail.com,7531),
7717275525,Lorrine,Worlds,1984-12-24,33614,lorrine.worlds@worlds.com,7519),
5726678791,Peggie,Sturiale,1979-10-06,92020,peggie@cox.net,8260),
4526724432,Marvel,Raymo,1977-10-31,77840,mraymo@yahoo.com,9000),
1140276267,Daron,Dinos,1980-01-12,60035,daron_dinos@cox.net,9741),
6152108141,An,Fritz,1961-08-11,8401,an_fritz@hotmail.com,1048);

/*select * from customer;

select * from teams;

select * from employee;

select * from location;

select * from lineleap;*/

# Q1: Report the number of occupants at Mike’s and Bogie's at 12:00:00 PM.
Select sum(l.item_quantity + b.num_employees) as "Occupants", b.title, l.reservation_time as “Time”
FROM lineleap l, location b
Where l.bar_id = b.bar_id
AND b.title = "Bogie\'s"
AND l.reservation_time = "12:00:00 PM";

# Q2: Which bars employ the most bartenders? 
Select l.title, e.position, count(e.position = "bartender") as "Bartender Count"
FROM location l, employee e
Where l.team_id= e.team_id
AND e.position = "bartender"
GROUP BY l.title DESC;

# Q3: Which locations can host the most customers?
SELECT b.title, b.num_customers as "Customer Capacity"
FROM location b
ORDER BY b.num_customers DESC;

# Q4: For each location in Tigerland, list the SUM of employees in each team, Order By bar name 
Select b.title, e.team_id, count(e.employee_id) as "Employee Count"
from teams t, location b, employee e
WHERE t.team_id = b.team_id
AND e.team_id = t.team_id
GROUP BY e.team_id;

# Q5: List the capacity limit for each venue that can hold more than 65 people and group By city.
SELECT b.city, b.title, b.bar_capacity
FROM location b
GROUP BY b.city HAVING b.bar_capacity > 65;

# Q6: List bar id with capacity less than 65 WHERE city LIKE end in “e”
Select b.bar_id, b.bar_capacity, city 
From location b
WHERE b.bar_capacity < 65
AND city = ‘%e’
