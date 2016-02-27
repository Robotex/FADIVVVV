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
* [Per altri problemi tecnici andate qui](https://github.com/Robotex/FADIVVVV/issues)

## Curiosità tecniche
Lo script abilita la riproduzione dei video estendendo il supporto ai flussi HLS anche a browser che non sono compatibili con HLS nativamente. Questo avviene aggiungendo un modulo scritto da me al player projekktor utilizzato dal sito e correggendo quindi il controllo che ne indica la compatibilità.

La gestione del flusso HLS è implementata dalla libreria [hls.js](https://github.com/dailymotion/hls.js/)
