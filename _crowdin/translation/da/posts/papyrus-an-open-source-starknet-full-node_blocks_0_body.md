# Papyrus: En Open-Source StarkNet Fuld Knude
## Papyrus bliver et centralt element i den decentraliserede StarkNet infrastruktur
**TL;DR**
* Papyrus er en Rust implementering af en StarkNet fuld node * Det vil skabe grundlag for den nye StarkNet Sequencer, som vil dramatisk forbedre StarkNet ‘ s gennemløb * Papyrus vil bidrage til at fremme præstation og decentralisering. Nu, hvor StarkNet har opnået fremragende anvendelighed, disse er dens vigtigste udviklingsprioriteter
## Indledning
I dag introducerer vi Papyrus, en Rust-implementering af en StarkNet fuld knude, som vil bidrage til at bane vejen for massebrug af StarkNet. The[Papyrus full node](https://github.com/starkware-libs/papyrus)will track StarkNet state as it evolves over time and allow users and developers to query this state via[StarkNet’s JSON-RPC](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json). Papyrus vil skabe grundlaget for den nye StarkNet Sequencer, som vil dramatisk forbedre StarkNet ‘ s gennemløb om et par måneder. Papyrus slutter sig til andre StarkNet fulde knudepunkter — Pathfinder og Juno — som er ansvarlige for synkronisering med og vedligeholdelse af StarkNet tilstand. I tråd med vores løbende overgang til open source StarkNet stakken, Papyrus er open source under Apache 2.0 licens.
## Papyrus - grundlaget for en optimeret Sequencer
Tidligt på vi erklærede, at[faserne i StarkNet udvikling](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)er: (i) Funktionalitet og brugervenlighed først, efterfulgt af ii) skala og præstationer og endelig iii) decentralisering. StarkNet har opnået fremragende brugervenlighed, og nu systemets ydeevne er den vigtigste prioritet, med decentralisering picking up damp. Forbedring af systemets ydeevne er ved at blive behandlet ved at forbedre udførelsen af Sequencer, som er ansvarlig for StarkNet blok produktion. Den Sequencer er den “maskine”, at ordrer og udfører transaktioner, når de er indsendt. Papyrus vil give StarkNet Sequencer et effektivt lager, som vil bidrage til at forbedre gennemstrømningen. For det første betyder det, at sequenceren vil opretholde en lokal DB snarere end en cloud-baseret DB. Derudover vil Papyrus gemme en flad nøgle/værdi opbevaring, hvilket betyder, at det vil interagere direkte med staten, i stedet for at nå det gennem Merkle-Patricia stier.
## Styrkelse og decentralisering af StarkNet Stack
I øjeblikket er der to hold, der udvikler en StarkNet fuld knudepunkt. Der er s[Pathfinder](https://github.com/eqlabs/pathfinder)af Equilibrium, implementeret i Rust, og[Juno](https://github.com/NethermindEth/juno)af Nethermind, der arbejder hen imod den første officielle version af deres Golang gennemførelse. Papyrus slutter sig i dag til denne sunde blanding og fremmer decentralisering og afskedigelse. Tilføjelse af en anden fuld node og gøre det open source hjælper med at give de mange forskellige kundeimplementeringer, som er en vigtig indikator for styrken af et decentraliseret netværk og for cementering af dets status som et offentligt gode.
## Nuværende udgivelse og fremtidige planer
Den aktuelle version giver dig mulighed for at synkronisere med staten StarkNet og få adgang til StarkNet hele historien. I øjeblikket er JSON-RPC spec kun delvist understøttet, du kan spore fremskridt[her](https://github.com/starkware-libs/papyrus#endpoints). Papyrus er ved at blive åbnet nu, indtil fuld udgivelse til offentlig brug inden for et par måneder. Ud over at arbejde på fuld kompatibilitet med[JSON-RPC spec](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json), Papyrus holdet, sammen med Pathfinder og Juno, vil arbejde på at danne grundlaget for[StarkNet P2P lag](https://github.com/starknet-io/starknet-p2p-specs). At have forskellige noder er i stand til at kommunikere og synkronisere gennem P2P lag er et stort spring mod et decentraliseret StarkNet. Endvidere, evnen til at synkronisere fra jævnaldrende (i modsætning til situationen i dag, hvor hver node kommunikerer med en centraliseret API) bør drastisk forbedre synkroniseringstiden. For at opsummere, Papyrus er den tredje fulde knude til at deltage i StarkNet økosystemet. Det er udgivet under en open source licens (Apache 2.0) og vil udgøre en afgørende del af infrastrukturen i den decentraliserede StarkNet.