document.addEventListener("DOMContentLoaded",function(){

    let slider=document.querySelector(".slider");

    let animazione;
    animazione=setInterval(muoviSlide_avanti,7000);

    slider.addEventListener("mouseover",function(){
     clearInterval(animazione);
 });

    slider.addEventListener("mouseleave",function(){
     animazione=setInterval(muoviSlide_avanti,4000);
 });

 //Dichiarazione e funzionamento dei pulsanti dello slider
    let pulsante_avanti=document.querySelector(".avanti");
    let pulsante_dietro=document.querySelector(".dietro");

pulsante_avanti.addEventListener("click",function(){
    muoviSlide_avanti();
    clearInterval(animazione);
})

pulsante_dietro.addEventListener("click",function(){
    muoviSlide_dietro();
    clearInterval(animazione);
})

//Inizio dichiarazioni per popup
//Funzione comparsa popup con dichiarazioni variabili


let lista_movies=document.querySelectorAll(".movies");
let lista_serie=document.querySelectorAll(".serie");
let lista_docu=document.querySelectorAll(".documentari")
let popup=document.getElementsByClassName("popup");
let vetrina=document.querySelector(".vetrina");
let sinossi=document.querySelector(".sinossi");
let trailer=document.querySelector(".trailer");
let lista_episodi=document.querySelector(".lista_episodi");
let episodi=document.querySelectorAll(".ep");


for(i=0;i<lista_movies.length;i++){
    lista_movies[i].addEventListener("click", function(){
    popup[0].style.display="flex";
})
}

for(i=0;i<lista_serie.length;i++){
    lista_serie[i].addEventListener("click", function(){
        popup[0].style.display="flex";
    })
}
for(i=0;i<lista_docu.length;i++){
    lista_docu[i].addEventListener("click", function(){
        popup[0].style.display="flex";
    })
}

// Inserzione delle sinossi e dei trailer dei singoli film
    lista_movies[0].addEventListener("click",function(){
    vetrina.style.backgroundImage="url('./images/the-prestige.webp')";
    vetrina.style.backgroundPosition="center bottom"
    vetrina.style.backgroundSize="cover";
    vetrina.style.backgroundRepeat="no-repeat";
    vetrina.style.height="45%";
    sinossi.innerHTML="<h2>The Prestige</h2> Londra, fine '800. L'illusionista Alfred Borden, detenuto in galera con l'accusa di aver ucciso il suo collega e rivale Robert Angier, viene in possesso del diario del defunto e, leggendolo, ripercorre gli anni di astio e rivalità avuti in passato, quando i due giovani erano semplici aiutanti di mister Cutter, uno scenografo esperto in illusionismo, presso il teatro Orpheum di Londra. in cui il mago Milton sta presentando un numero detto fuga subacquea: la sua assistente Julia, legata mani e piedi da due 'volontari' (in realtà sono i due assistenti: Angier, che è suo marito, e Borden), deve fuggire da una cabina piena d'acqua.";
    trailer.innerHTML="<video src='./images/ThePrestigetrailerita.mp4' controls height='100%' width='100%' poster='./images/the-prestige.webp'</video>"
    trailer.style.backgroundSize="cover";
    trailer.style.backgroundColor="black";
    trailer.style.height="50%";

})
    lista_movies[1].addEventListener("click",function(){
    vetrina.style.backgroundImage="url('./images/ouatih.jpg')";
    vetrina.style.backgroundPosition="center center"
    vetrina.style.backgroundSize="cover";
    vetrina.style.backgroundRepeat="no-repeat";
    vetrina.style.height="45%";
    sinossi.innerHTML="<h2>Once upon a time in Hollywood</h2>Alla fine degli anni cinquanta, l'attore Rick Dalton è protagonista della famosa serie TV western Bounty Law e sembra pronto a compiere il 'grande salto' a star del cinema. Nel febbraio del 1969, tuttavia, la sua carriera non è decollata come previsto e, mentre a Hollywood sta emergendo un nuovo tipo di cinema e con esso un modello d'attore diverso dal suo, Dalton si ritrova ad accettare parti da cattivo occasionale in altre serie televisive. A passarsela male è anche Cliff Booth, da dieci anni sua inseparabile controfigura, miglior amico e, da quando Dalton è stato fermato per guida in stato d'ebbrezza, autista personale.";
    trailer.innerHTML="<video src='./images/ouatih.mp4' controls height='100%' width='100%' poster='./images/ouatih.jpg'</video>"
    trailer.style.backgroundSize="cover";
    trailer.style.backgroundColor="black";
    trailer.style.height="50%";

})
    lista_movies[2].addEventListener("click",function(){
    vetrina.style.backgroundImage="url('./images/HP.jpg')";
    vetrina.style.backgroundPosition="center center"
    vetrina.style.backgroundSize="cover";
    vetrina.style.backgroundRepeat="no-repeat";
    vetrina.style.height="45%";
    sinossi.innerHTML="<h2>Harry Potter e la pietra filosofale</h2>Harry Potter ha un anno di età quando Albus Silente lo lascia davanti alla porta della casa degli zii con una lettera nella quale spiega che il bambino è orfano e ha bisogno delle cure attente e amorevoli dei suoi zii. Nella casa degli zii Harry, però, cresce infelice e solo, perché deve subire ogni tipo di angheria del cugino Dudley, un bambino cattivo e arrogante, spalleggiato e protetto dai suoi genitori. Inoltre è osteggiato e guardato con diffidenza anche a causa di strani fenomeni che lo vedono protagonista come volare sul tetto della scuola.";
    trailer.innerHTML="<video src='./images/HP.mp4' controls height='100%' width='100%' poster='./images/HP.jpg'</video>"
    trailer.style.backgroundSize="cover";
    trailer.style.backgroundColor="black";
    trailer.style.height="50%";
})
    lista_movies[3].addEventListener("click",function(){
    vetrina.style.backgroundImage="url('./images/mos.jpg')";
    vetrina.style.backgroundPosition="center center"
    vetrina.style.backgroundSize="cover";
    vetrina.style.backgroundRepeat="no-repeat";
    vetrina.style.height="45%";
    sinossi.innerHTML="<h2>Man of steel</h2>Il pianeta Krypton sta andando incontro alla sua imminente fine a causa del nucleo instabile, dovuto allo spreco di risorse naturali da parte dei kryptoniani. Lo scienziato Jor-El cerca di avvertire l'alto consiglio kryptoniano del pericolo, ma la riunione viene interrotta dal colpo di Stato tentato dal generale Zod, leader militare e fervido patriota di Krypton, che è convinto di poter salvare il pianeta dalla rovina grazie al codice genetico della stirpe kryptoniana. Jor-El e sua moglie Lara Lor-Van spediscono loro figlio neonato Kal-El, sulla Terra all'interno di una navetta spaziale.";
    trailer.innerHTML="<video src='./images/mos.mp4' controls height='100%' width='100%' poster='./images/mos.jpg'</video>"
    trailer.style.backgroundSize="cover";
    trailer.style.backgroundColor="black";
    trailer.style.height="50%";
})
    lista_movies[4].addEventListener("click",function(){
    vetrina.style.backgroundImage="url('./images/sw-ro.png')";
    vetrina.style.backgroundPosition="center center"
    vetrina.style.backgroundSize="cover";
    vetrina.style.backgroundRepeat="no-repeat";
    vetrina.style.height="45%";
    sinossi.innerHTML="<h2>Rogue One</h2>Lo scienziato Galen Erso, dopo aver lavorato per anni per l'Impero Galattico, si è ritirato sul pianeta Lah'mu, dove vive con la moglie Lyra e la figlia Jyn Erso. Galen viene raggiunto dal Direttore imperiale Orson Krennic, che uccide Lyra e costringe lo scienziato a completare la Morte Nera, una grande stazione spaziale capace di distruggere pianeti. Jyn fugge e viene salvata dal ribelle Saw Gerrera. Quindici anni dopo, Galen convince Bodhi Rook, un pilota imperiale, a portare a Gerrera un messaggio per informarli dell'esistenza della Morte Nera.";
    trailer.innerHTML="<video src='./images/ro.mp4' controls height='100%' width='100%' poster='./images/sw-ro.png'</video>"
    trailer.style.backgroundSize="cover";
    trailer.style.backgroundColor="black";
    trailer.style.height="50%";
})

// Inserzione sinossi, vetrina ed episodi delle singole serie e documentari
    lista_serie[0].addEventListener("click",function(){
        vetrina.style.backgroundImage="url('./images/ted-lasso.jpeg')";
        vetrina.style.backgroundPosition="center top"
        vetrina.style.backgroundSize="cover";
        vetrina.style.backgroundRepeat="no-repeat";
        sinossi.innerHTML="<h2>Ted Lasso</h2> Ted Lasso, coach di football americano, viene inaspettatamente assunto da Rebecca Welton, presidente del club di calcio AFC Richmond,come allenatore. Pur non sapendo nulla di calcio, Ted decide di accettare l'incarico e si trasferisce a Londra, ignaro del fatto che il suo ingaggio è un tentativo della Welton di screditare l'ex marito, precedente proprietario del Richmond."
        trailer.style.display="none";
        lista_episodi.style.display="flex";
        episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Pilota<br>Rebecca Welton, recentemente divorziata, è la nuova proprietaria dell'AFC Richmond, una squadra di Premier League in difficoltà. Per vendicarsi del suo ex marito che l'ha tradita più volte, Rebecca decide di assumere un allenatore incompetente per rovinare il club.</span>"
        episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Biscotti<br>Nel suo primo giorno all'AFC Richmond, Ted tenta di conquistare i giocatori e la dirigenza. Porta in regalo a Rebecca dei biscotti, lei respinge il suo tentativo di amicizia ma diventa ossessionata dai buonissimi biscotti.</span>"
        episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Trent Crimm:The Indipendent<br>Venuti a conoscenza che il giornale scandalistico The Sun ha delle loro foto equivocabili, Ted e Keeley vanno da Rebecca. Rebecca riesce ad interrompere la loro pubblicazione, ma Ted deve passare l'intera giornata con Trent Crimm, giornalista dell' Independent.</p></span>"
        episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Per i bambini<br>La squadra perde di nuovo, rendendo il rapporto tra Roy e Jamie ancora più teso. Rebecca, mentre si sta preparando per il ballo annuale di beneficenza.</span>"
    })

    lista_serie[1].addEventListener("click",function(){
        vetrina.style.backgroundImage="url('./images/Breaking-Bad.jpg')";
        vetrina.style.backgroundPosition="center center"
        vetrina.style.backgroundSize="cover";
        vetrina.style.backgroundRepeat="no-repeat";
        sinossi.innerHTML="<h2>Breaking Bad</h2>Walter White è un professore di chimica di Albuquerque, New Mexico, che vive con la moglie Skyler, incinta della loro secondogenita, e il figlio Walter 'Flynn' Junior, affetto da una paralisi cerebrale che gli causa problemi di linguaggio e lo costringe a camminare con l'aiuto di stampelle per muoversi. Alla soglia dei cinquant'anni scopre di avere un tumore e per far fronte alle difficoltà economiche della famiglia, Walter è costretto a svolgere un secondo lavoro come dipendente di un autolavaggio."
        trailer.style.display="none"
        lista_episodi.style.display="flex"
        episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Questione di chimica<br>Walter White è un insegnante di chimica delle superiori a cui viene diagnosticato un cancro ai polmoni. Con una nuova prospettiva di vita, inizia a spacciare droga per assicurare una stabilità economica per la famiglia.</span>"
        episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Senza ritorno<br>In seguito all'esplosione ed alla nube tossica liberatasi dal fosforo rosso, Walt e Jesse decidono di trovare un modo per sbarazzarsi dei corpi. Tornano al camper e vedono che Krazy 8 si muove sotto il telo.</span>"
        episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Conseguenze radicali <br> Walt scopre che Jesse aveva raccontato a Krazy-8 informazioni su di lui e si scaglia contro il socio, che intanto ha cominciato a fumare la metanfetamina da loro cucinata. Jesse scappa via, lasciando Walt alle prese con Krazy-8.</span>"
        episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Una malattia scomoda<br>Walt ha messo la moglie al corrente della sua malattia, e lei lo induce a rivelarlo anche a Walter Jr. e ai coniugi Schrader durante una grigliata in famiglia il giorno seguente.</span>"
    })

    lista_serie[2].addEventListener("click",function(){
        vetrina.style.backgroundImage="url('./images/bojack-horseman.jpg')";
        vetrina.style.backgroundPosition="center top"
        vetrina.style.backgroundSize="cover";
        vetrina.style.backgroundRepeat="no-repeat";
        sinossi.innerHTML="<h2>Bojack Horseman</h2>In una Hollywood in cui animali antropomorfi e umani convivono, BoJack Horseman è una star della sitcom degli anni novanta Horsin' Around; non è però riuscito a rimanere sulla cresta dell'onda dopo la chiusura della serie, e pianifica quindi di rinnovare la sua fama attraverso un'autobiografia scritta dalla ghostwriter Diane Nguyen. BoJack deve inoltre confrontarsi con altri svariati personaggi, tra i quali Princess Carolyn (sua agente), il suo strambo coinquilino Todd e Mr. Peanutbutter, attore sua 'nemesi' e fidanzato di Diane."
        trailer.style.display="none"
        lista_episodi.style.display="flex" 
        episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span></span><span>EP 1: La storia di Bojack Horseman:capitolo uno<br>BoJack Horseman è un attore dimenticato dopo il successo in una sitcom degli anni novanta che lo portò ad essere una delle celebrità più importanti di Hollywood.</span>"
        episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Bojack traditore della patria<br>BoJack viene preso di mira dai media nazionali dopo aver dato degli 'idioti' ai soldati americani.</span>"
        episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Il ritorno di Sarah<br>Quando un'amica dei vacchi tempi si trasferisce a casa di Bojack,si scatena il pandemonio.</span>"
        episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Tra Zoe e Zelda<br>Bojack decide di fare da mentore a Todd.Intanto l'ex fidanzato di Diane scrive un articolo su Mr. Peanutbutter.</span>"
    })

    lista_serie[3].addEventListener("click",function(){
        vetrina.style.backgroundImage="url('./images/suits.jpeg')";
        vetrina.style.backgroundPosition="center 40%"
        vetrina.style.backgroundSize="cover";
        vetrina.style.backgroundRepeat="no-repeat";
        sinossi.innerHTML="<h2>Suits</h2> Harvey Specter è uno dei più importanti avvocati di New York, cinico e spietato, con una passione per gli abiti sartoriali e la vita mondana. È appena diventato socio Senior dello studio legale presso cui lavora, Pearson Hardman, ruolo che lo obbliga, suo malgrado, ad assumere un giovane associato. Mike Ross è invece un giovane ragazzo estremamente intelligente, dotato di una prodigiosa memoria eidetica, che non si è mai laureato in legge,"
        trailer.style.display="none"
        lista_episodi.style.display="flex"  
        episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Pilot<br>Harvey Specter, uno dei più importanti avvocati di New York, è appena diventato socio Senior dello studio legale presso cui lavora, Pearson Hardman, ruolo che lo obbliga, suo malgrado, ad assumere un giovane associato.</span>"
        episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Errori ed omissioni<br>Durante un caso per la vendita di un prototipo di cellulare che vale 20 milioni, Harvey viene ingiustamente maltrattato da un giudice che lo accusa di essere andato a letto con sua moglie Lauren.</span>"
        episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Corsia interna<br>Harvey e Mike cercano un espediente per estromettere l'amministratore delegato di una società, tentando contemporaneamente di convincere uno dei dipendenti a prendere il suo posto.</span>"
        episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Loschi piccoli segreti<br>Quando gli viene affidato un caso di pro-bono, Mike è desideroso di dimostrare le sue capacità; ma presto scopre che quella che sembra una causa semplice non sarà così facile da vincere.</span>"
    })

    lista_serie[4].addEventListener("click",function(){
        vetrina.style.backgroundImage="url('./images/the_crown.png')";
        vetrina.style.backgroundPosition="center center"
        vetrina.style.backgroundSize="cover";
        vetrina.style.backgroundRepeat="no-repeat";
        sinossi.innerHTML="<h2>The Crown</h2> The Crown racconta la storia della regina Elisabetta II a partire dal 1947. La prima stagione copre gli anni che vanno dal matrimonio tra Elisabetta e Filippo di Edimburgo fino allo scoppio della crisi di Suez nel 1956, comprendendo, dunque, l'incoronazione della sovrana (1953) e il secondo mandato a Primo ministro di Winston Churchill."
        trailer.style.display="none"
        lista_episodi.style.display="flex"  
        episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Wolferton Splash <br> Nel 1947 la principessa Elisabetta si sposa con Filippo Mountbatten, da poco nominato duca di Edimburgo. Il padre di Elisabetta, re Giorgio VI, soffre di violenti attacchi di tosse.</span>"
        episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Hide Park Corner <br> Il re si riprende in fretta dall'operazione ma è troppo debole per effettuare il tradizionale tour del Commonwealth; decide dunque di mandare Elisabetta e Filippo al suo posto.</span>"
        episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Windsor <br> Nel 1936 re Edoardo VIII decide di abdicare al trono per poter stare con Wallis Simpson, statunitense due volte divorziata. Nel 1952 Edoardo, ora noto come duca di Windsor, fa ritorno nel Regno Unito per il funerale del fratello.</span>"
        episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Atto di Dio <br> Nel dicembre 1952 Londra si risveglia sotto una grande cappa di smog. Churchill si interessa poco alla faccenda, ritenendola una semplice nebbia. Migliaia di persone muoiono intossicate.</span>"
    })

        lista_docu[0].addEventListener("click",function(){
            vetrina.style.backgroundImage="url('./images/national_geo.jpg')";
            vetrina.style.backgroundPosition="center center"
            vetrina.style.backgroundSize="cover";
            vetrina.style.backgroundRepeat="no-repeat";
            sinossi.innerHTML="<h2>National Geographic</h2>Il 13 gennaio 1888 un gruppo di 33 persone composto da scienziati ed esploratori si riunì al Cosmos Club, un club privato situato in Lafayette Square a Washington, con l'obiettivo di creare una società «per migliorare e diffondere le conoscenze geografiche». Dopo aver stabilito un regolamento e un piano per l'organizzazione, il 27 gennaio venne fondata la National Geographic Society."
            trailer.style.display="none"
            lista_episodi.style.display="flex"
            episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Episodio 1 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Episodio 2 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Episodio 3 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Episodio 4 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
        })

        lista_docu[1].addEventListener("click",function(){
            vetrina.style.backgroundImage="url('./images/Bioethics.jpeg')";
            vetrina.style.backgroundPosition="center center"
            vetrina.style.backgroundSize="cover";
            vetrina.style.backgroundRepeat="no-repeat";
            sinossi.innerHTML="<h2>Bioethics</h2>La bioetica (dal greco antico ἔθος (o ήθος), 'èthos', carattere o comportamento, costume, consuetudine, e βίος, 'bìos', vita) è una disciplina che si occupa delle questioni morali legate alla ricerca biologica e alla medicina.La bioetica ha carattere interdisciplinare e coinvolge la filosofia, la filosofia della scienza, la medicina, la bioetica clinica, la biologia, la giurisprudenza e la sociologia."
            trailer.style.display="none"
            lista_episodi.style.display="flex"
            episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Episodio 1 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Episodio 2 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Episodio 3 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Episodio 4 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
        })

        lista_docu[2].addEventListener("click",function(){
            vetrina.style.backgroundImage="url('./images/Buffa.jpg')";
            vetrina.style.backgroundPosition="center center"
            vetrina.style.backgroundSize="cover";
            vetrina.style.backgroundRepeat="no-repeat";
            sinossi.innerHTML="<h2>Federico Buffa racconta</h2>Partendo dalla narrazione di una delle edizioni più controverse dei Giochi Olimpici, quella del 1936, racconta una storia di sport e di guerra. Una storia che ha luogo a Berlino nel 36 quando Hitler e Goebbels volevano trasformare le loro Olimpiadi, o quello che credevano che fossero le “loro” Olimpiadi, nell’apoteosi della razza ariana e del “nuovo corso”. E invece quelle Olimpiadi costruirono alcuni dei simboli più emblematici dell’uguaglianza."
            trailer.style.display="none"
            lista_episodi.style.display="flex"
            episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Episodio 1 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Episodio 2 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Episodio 3 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Episodio 4 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
        })

        lista_docu[3].addEventListener("click",function(){
            vetrina.style.backgroundImage="url('./images/ufo.jpeg')";
            vetrina.style.backgroundPosition="center center"
            vetrina.style.backgroundSize="cover";
            vetrina.style.backgroundRepeat="no-repeat";
            sinossi.innerHTML="<h2>Moment of Contact</h2>The documentary follows James Fox and his team traveling to Varginha, Brazil, where one of the most interesting encounters with extraterrestrial creatures took place back in 1996. Upon interviewing some locals, they find out that many people witnessed a 4-foot-tall alien with a large head and huge red eyes, and a couple of such strange beings were captured as well."
            trailer.style.display="none"
            lista_episodi.style.display="flex"
            episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Episodio 1 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Episodio 2 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Episodio 3 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Episodio 4 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
        })

        lista_docu[4].addEventListener("click",function(){
            vetrina.style.backgroundImage="url('./images/L-ultima-foresta.jpg')";
            vetrina.style.backgroundPosition="center center"
            vetrina.style.backgroundSize="cover";
            vetrina.style.backgroundRepeat="no-repeat";
            sinossi.innerHTML="<h2>L'Ultima Foresta</h2>In powerful images, alternating between documentary observation and staged sequences, and dense soundscapes, Luiz Bolognesi documents the Indigenous community of the Yanomami and depicts their threatened natural environment in the Amazon rainforest."
            trailer.style.display="none"
            lista_episodi.style.display="flex"
            episodi[0].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 1: Episodio 1 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[1].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 2: Episodio 2 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[2].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 3: Episodio 3 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
            episodi[3].innerHTML="<span class=copertina><img src='images/play-button.png' alt='pulsante play'></span><span>EP 4: Episodio 4 <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam, unde at voluptatum vel nesciunt tenetur quam cum non dolorum. Sequi asperiores, quod ex repellat minus necessitatibus expedita harum aliquid?</span>"
        })



//Funzione scomparsa popup
    document.querySelector(".popup a").onclick=function(){
    popup[0].style.display="none"
    vetrina.style.backgroundImage="";
    vetrina.style.backgroundPosition=""
    vetrina.style.backgroundSize="";
    vetrina.style.backgroundRepeat="";
    vetrina.style.height="";
    trailer.innerHTML="";
    trailer.style.backgroundColor="";
    trailer.style.display="block";
    trailer.style.height="";
    lista_episodi.style.display="none";

}
}) //Fine DOM


//Funzione slider avanti
function muoviSlide_avanti(){
 let imgVisibile=document.querySelector(".show");


 let imgSuccessiva=imgVisibile.nextElementSibling;



 if(imgSuccessiva==null)
 {
     imgSuccessiva=imgVisibile.parentElement.children[0];
 }

 let imgLeft=document.querySelector(".slider .moveLeft");

 imgVisibile.classList.replace("show","moveLeft");
 imgSuccessiva.classList.add("show");

 if(imgLeft!=null)
 {
     imgLeft.classList.remove("moveLeft");
 }
}

//Funzione slider dietro
function muoviSlide_dietro(){
 let imgVisibile=document.querySelector(".show")

 let imgSuccessiva=imgVisibile.previousElementSibling;

 if(imgSuccessiva==null)
 {
     imgSuccessiva=imgVisibile.parentElement.children[0];
 }

 imgVisibile.classList.replace("show","moveRigth");
 imgSuccessiva.classList.add("show");

 let imgRight=document.querySelector(".slider .moveRight");

 if(imgRight!=null)
 {
     imgRight.classList.remove("moveRight");
 }
}
//Fine funzione slider







