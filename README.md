# Aggiornamento 12 luglio 2017: questo script non è più necessario, hanno finalmente aggiunto il supporto a Firefox implementando la mia idea di integrare hls.js direttamente nel loro player. Grazie vvvvid.it !

# FADIVVVV
Questo UserScript ti permette di vedere gli anime su vvvvid.it senza costringerti ad avere Adobe Flash Player installato, in particolare su Mozilla Firefox.

## Donazioni
Il progetto è stato sviluppato nel mio tempo libero, ed è gratuito e senza scopo di lucro.

**Se ti piace il mio lavoro, puoi sempre offrirmi una piccola donazione, quanto basta per prendermi una bibita ;)**

(P.S.: No, non mi va la birra :D)
* Bitcoin: 1ARWaQV2NmtTm7rjw7rfi51zkB5uyiZTBu

## Istruzioni
#### Prerequisito: Installa uno Script Manager (es. GreaseMonkey, TamperMonkey, NinjaKit, etc...)
#### Passaggio 1: [Installa lo script](https://openuserjs.org/install/Robotex/FADIVVVV_-_vvvvid.it_Anti_Flash.min.user.js)
#### Passaggio 2 (Opzionale): [Offrimi una Red Bull!](https://github.com/Robotex/FADIVVVV/blob/master/README.md#donazioni)

## Domande e problemi noti
* Alcuni spettacoli è possibile che non vengano caricati. Questo è dovuto a una malconfigurazione della loro piattaforma di streaming, ho già in mente una possibile soluzione ma se non c'è richiesta lascerei le cose così come sono.
* Dopo l'aggiornamento alla versione 1.0.1, è consigliato eseguire il logout e riloggarsi nuovamente per poter vedere correttamente i video
* [Per altri problemi tecnici andate qui](https://github.com/Robotex/FADIVVVV/issues)

## Curiosità tecniche
Lo script abilita la riproduzione dei video estendendo il supporto ai flussi HLS anche a browser che non sono compatibili con HLS nativamente. Questo avviene aggiungendo un modulo scritto da me al player projekktor utilizzato dal sito e correggendo quindi il controllo che ne indica la compatibilità.

La gestione del flusso HLS è implementata dalla libreria [hls.js](https://github.com/dailymotion/hls.js/)

## Changelog
##### 1.0.6 (April 3, 2016)
>
* Updated tags

##### 1.0.3 (April 13, 2016)
>
* Restructured code to bypass missing CORS error, now most videos should play fine
* Update hls.js library to 0.5.20

##### 1.0.2 (April 2, 2016)
>
* Add HTTPS support
* Fix urls protocol for same-origin-policy causing videos to not load
* Update hls.js library to 0.5.17

##### 1.0.1 (March 19, 2016)
> 
* Update hls.js library to 0.5.10
* Video format determination

##### 1.0.0 (February 27, 2016)
>
* Initial release
