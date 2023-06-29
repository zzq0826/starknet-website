# Jak StarkNet revolučně mění krypto podpis
## *Vypnuto komplexními klíči, s ID obličeje. Případová studie o souhrnu účtů*
V okamžiku, kdy lidé dokážou k podpisu krypto transakcí použít známé metody jako obličej ID, uvidíme boom v sebevazbě. Každý ví, že provozování vlastní peněženky je originální krypto ideál, ale je zastrašující a lidé místo toho přijímají výměny. Toto je případová studie, jak Braavos používá funkci StarkNet nazvanou Abstrakce účtu k získání mnohem intuitivnějšího způsobu používání vaší peněženky.
## Představujeme Abstrakci účtu
Po skandálu FTX je otázka relevantnější než kdy jindy. Proč se lidé stále rozhodnou dát své krypto centralizovaným institucím, místo aby je nechávali samy se? Odpověď zní: pro většinu lidí je sebepéče složitá. Semenné věty jsou obnovovacím mechanismem „nejhoršího“ a odrazují mnohé (dokonce i některé z nejtvrdošíjnějších odslizů). Odpověď na tuto výzvu: Abstrakce účtu. Abstrakce účtu umožňuje, aby peněženky splnily (a překročily) očekávání UX uživatelů Web2, jako je podpis transakce pomocí Face ID nebo dvoufaktorové ověření. Umožňuje segmentaci účtu a omezení utrácení a nakonec umožňuje jednoduché obnovení účtu a odstranění klíčových frází dohromady. Je to revoluce pro UI a UX.
## StarkNet
StarkNet, přední Validity Rollup, má několik klíčových vlastností, které z něj činí nejslibnější řešení pro měřítko Ethereum. Na základě důkazů STARK poskytuje nízké poplatky za plyn bez ohrožení bezpečnosti Etherea. Záznam o důkazech STARK pohánějících StarkEx obsahuje 800B v kumulativním obchodním objemu, 300M transakcích a 90M NFT. Schopnosti důkazů STARK poskytovat nízké poplatky spolu s výkonem Abstrakce účtu, povolil Braavosu vyvíjet inovativní možnosti peněženky, o které usiluje.
## Kontext
Většina hlavních blockchainů, včetně Bitcoinu a Etherea, použijte eliptickou křivku kryptografických podpisů secp256k1 (viz[](http://ethanfast.com/top-crypto.html)pro úplný seznam). Realizace této eliptické křivky je považována za robustní – používá ji mnoho blockchainů a stála ve zkoušce času. Není však kompatibilní se schématem šifrovacího podpisu, které je dostupné v hardwarových bezpečnostních modulech mobilních zařízení (HSM), jako jsou iPhones a Android (Pixel a další) telefony. Tato zařízení používají jinou křivku – secp256r1 (nazývanou také NIST-P256). To znamená, že uživatelé těchto blockchainů nemohou využít bezpečnostních čipů na svých zařízeních a pokud chtějí získat vysokou úroveň zabezpečení, musí mít výchozí nastavení pro hardwarové peněženky. To vážně omezuje jakoukoliv UX inovaci o tom, jak se mohou uživatelé přihlásit do peněženky a schvalovat transakce (typická je všudypřítomnost seed-frází). StarkNet nepodporuje secp256r1 a má vlastní vlastní vlastní křivku, která je nakřivá STARKem. Na rozdíl od jiných blockchainů má však StarkNet na své platformě nativně k dispozici abstrakce, která otevírá nový svět příležitostí pro UX aplikace peněženky. Braavos využil tuto schopnost k zavedení hardwarového Signeru.
## Hardwarový podepisovatel
Hardwarový podepisovatel se skládá ze dvou hlavních částí:
* Zabezpečený subsystém v mobilním zařízení uživatelů * Účet chytrý kontrakt, který může spustit libovolnou logiku (jako například Abstrakce účtu)
## Bezpečný podsystém
Hardwarový igner využívá zabezpečený subsystém zabudovaný v uživatelském zařízení – iPhone’s**Secure Enclave**nebo Android Phone’s**Titan**HSM – k ochraně účtu. ![](https://miro.medium.com/max/1400/0*EPm8q10ykvFGnvcv) Zabezpečený čip / Titan je samostatný a izolovaný subsystém, zcela oddělené od procesoru aplikace, který může generovat soukromé klíče a podepisovat zprávy. Vytváří klíče pomocí interního generátoru skutečných čísel (TRNG) a podepisuje zprávy přes eliptickou křivku NIST-P256 (secp256r1) pomocí interního akcelerátoru veřejného klíče (PKA). Soukromé klíče nikdy neopustí bezpečný systém a jsou neznámé/nepřístupné nikomu, dokonce ani uživateli, nebo samotné aplikaci. To znamená, že i když se jádro aplikačního procesoru stane ohroženým, zůstanou uživatelské klíče bezpečné! ![](https://miro.medium.com/max/1400/0*yHJ--fK8keNdTci8)
## Hlubší skákání do bezpečného klonování
Během výrobního procesu čipových zařízení se produkuje TRNG UID (Unique Identifier) a skladuje se v PKA. Nelze si ji přečíst a nikdy ji neopustit, je tedy neznámý i pro bezpečný procesor a pro provozní systém zabezpečeného procesoru (SepOS). Toto UID je náhodné číslo, které je jedinečné pro každé zařízení a používá se k zašifrování všech ostatních klíčů, které budou v budoucnu generovány na tomto zařízení. Způsob, jakým funguje, je následující: aplikace požádá SepOS o vygenerování nové dvojice klíčů, SepOS vydá Secure Enclave TRNG pokyn, aby vygeneroval klíč a šifroval jej (pomocí UID). Aplikace pak může požádat ze SepOS o dešifrování klíče a podepsat zprávu pomocí vygenerovaného klíče. Během celého procesu generovaný klíč nezanechává enklávu a není nikomu znám. (Další informace o Secure Enclave, navštivte[zde](https://support.apple.com/en-il/guide/security/sec59b0b31ff/web)). způsob výstavby a fungování zabezpečené účasti, společně se skutečností, že je cílem útoků mocných korporací a vlád po celém světě, je důvodem, proč jeho bezpečnost překračuje standardní hardwarové peněženky.
## Abstrakce účtu
Síla Braavos jako chytré kontrakty založené na peněžence StarkNet, spočívá v tom, že se skládá ze dvou pilířů:
* Klientská strana (např. aplikace), která uživateli umožňuje zkontrolovat a podepisovat transakce a poslat je do řetězce. * Stránka řetězu — má účet chytrý kontrakt, který může používat libovolnou logiku; a zejména v našem případě proveďte libovolný podpis**ověření**. Aplikace podepíše transakci pomocí bezpečnostního modulu mobilního zařízení a odešle ji do online řetězce smlouvy účtu, který ji může ověřit. Jak bylo uvedeno výše, bezpečnostní modul pro iPhones a Android telefony používá šifrování s názvem NIST-P256 (secp256r1), které není kompatibilní s žádným hlavním kryptografickým schématem blockchainu, včetně StarkNet. To je důvod, proč mít chytrý smluvní účet on-line, který prochází všemi transakcemi a může provozovat libovolnou logiku, je zásadní pro používání těchto HSMS na iPhonech a telefonech se systémem Android. ![](https://miro.medium.com/max/1400/0*1gItqYMJgmpu_fXc)
## Biometrie
Jak uživatel schvaluje transakci prostřednictvím Braavos peněženky? Může škodlivá aplikace jednoduše automaticky podepsat transakci bez souhlasu uživatele? Ne!! cool na vestavěném bezpečnostním modulu v mobilních zařízeních, jako je Secure Enclave, podporuje vlastní biometrické ověření identity uživatele. To znamená, že i samotný souhlas k podpisu transakce se provádí přímo versus Secure Enclave. Schválení neprojde žádostí a uživatel bude muset schválit transakci se svým otiskem prstu nebo identifikací obličeje.
## Zpětné získání
Pokud nikdo nezná soukromý klíč, co se stane, když se zařízení ztratí nebo se stane blokováno? Jak může uživatel získat zpět kontrolu nad účtem? V Braavosu bude mít účet dva veřejné klíče – klíč hardwaru, který bude použit k podpisu všech transakcí, a klíč odvozený z klíčových slov, která mohou podepsat pouze jednu transakci – „Požadavek na odstranění hardwarového signeru“. Tento požadavek nebude proveden okamžitě, ale bude mít spíše časové zpoždění 4 dnů (nastavitelné), aby uživatel mohl použít hardwarový podpis, aby tuto žádost zrušil. To znamená, že pokud bude zařízení odcizeno/ztraceno/cihnuto, uživatelé budou moci obnovit svůj účet do 4 dnů. Pokud je však jejich semínko ukradeno a útočník vydá žádost o odstranění hardwarového signalizátora, uživatel automaticky (a opakovaně) obdrží oznámení do svého mobilního zařízení a bude schopen zrušit požadavek a zachovat veškerý majetek v bezpečí.
## Summary
Funkce Hardware Signer nabízí jak nejmodernější úroveň bezpečnosti pro uživatele šifrování, tak uživatelé zkušeností jsou využíváni z web2. V tomto smyslu je podepsání transakce tak hladké a bezplatné jako platba s platbou za Apple/Google. To je jen jeden, ale význačný příklad síly peněženky StarkNet, chytré kontrakty (a. .a Abstrakce účtu) a nový prostor pro design. Předpokládáme rozvoj stále většího počtu nově vznikajících schopností, které povedou krypto průmysl k lepší a inkluzivnější budoucnosti, zajištění nových i stávajících uživatelů s neohroženým zabezpečením spolu s neohroženým UX.