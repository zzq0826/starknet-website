Технологічні інновації в блокчейні розвивалися протягом останніх кількох років - STARK, SNARK, EIP-1559, Об'єднання Ethereum — це все величезні технологічні досягнення. Тим не менш, дизайн інтерфейсу та інтерфейсу не вдалося зберегти. Люди все ще застрягають на 16-ти словесних фраз і потрапляють у воду без централізованого посередника все ще занадто лякає для багатьох. На борту наступного мільярда користувачів в Web3 важливо, щоб покращити досвід залучення користувачів.

Як показав FTX (і Геміні, Цельсій і Mt. Gox), збереження самодовіри до активів є критично важливим. Однак, до недавнього часу, самолюбні гаманці були незграбними і заплутаними для середньостатистичного користувача. Більшість людей запам'ятовують свої паролі в Інтернеті щомісячно; як очікуються користувачі зберігати фраза насіння та приватні ключі, в безпеці назавжди?

Простіше кажучи, це кошмар безпеки. Як ми бачили незліченну кількість разів, неправильний крок, будь то ініційовані поганими суб'єктами чи недбалою, можуть призвести до втрати мільйонів доларів.

Як перший контактний момент для нових користувачів криптовалют, Ethereum гаманці повинні бути легкими для використання, захищеними та забезпеченими, щоб пристосуватися до потреб кожного користувача. Для інтегрування фінансових продуктів Web2 з функціями Web3.

Це саме те, чого досягає абстракція рахунку.

Уточнення абстракцій покращує безпеку та безпеку продуктів самонабору гаманців, видаливши залежність користувачів від приватного ключа та зробивши гаманці більш запрограмованими. Завдяки цій вдосконаленій UX, некустонабір гаманців може нарешті масштабувати до мільйонів основних крипто-користувачів.

Але щоб повністю зрозуміти вплив доповідей абстракції, ми повинні оновити себе до того, як працюють рахунки Ethereum.

### Основи рахунків Ethereum

Існує два типи облікових записів Ethereum:

1. Зовнішні облікові записи (EOA)
2. Облікові записи контракту (CA)

Давайте розберемо кожен з нас трохи далі.

### Зовнішні рахунки

Зовнішні облікові записи, такі як MetaMask і Coinbase Wallet, є типовим типом облікового запису для користувачів Ethereum. Кожен ЕОА складається з приватного та відкритого ключа, що називається гострим повітрям.

Всі транзакції авторизовані і підписані приватними ключами. Після підписання трансакції, EVM перевіряє, що підпис дійсний за допомогою адреси облікового запису EOA. Логіка, що закодована в EVM твердить, що обліковий запис (об'єкт з вашими токенами) і приватний ключ (signer) з'єднані в якості одиниці.

Втрата власного ключа означає втрату коштів або навіть контроль над вашим аккаунтом назавжди.

### Договірні рахунки

Тим часом контрагенти, синонімні з абстракцією облікового запису, є розумні договори, розгорнуті на blockchain. Ці договори контролюються кодовою логікою і не потребують приватних ключів. На відміну від EOAs, контракти не можуть починати операції. Натомість їх операції спрацьовують інструкції з EOAs.

### Чому обліковий запис абстракції має значення

абстракція облікового запису тягне за собою обробку логіки авторизації окремо від EOAs, перетворення кожного рахунку в розумний контракт який можна пристосувати, щоб задовольнити потреби будь-якої особи.

Як пояснюється Аргентом співзасновником та головним науковим офіцер Джуліен Нізет в недавньому[Подія Старк @ Home](https://www.crowdcast.io/e/7olimxqv), ця гнучка логіка авторизації дає свободу розробникам гратися з можливостями облікового запису, такими як…

**Апаратні підписи:**Використання захищеного анклаву iPhone або Android для перетворення будь-якого смартфона в апаратний гаманець. Звідси користувачі можуть перевірити транзакції за допомогою біометричних даних, таких як відбиток пальця чи ідентифікатор Apple Face ID. Ми вже почали бачити самокупні гаманці, такі як Braavos[, розкривають цю функцію](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Дозволяє користувачам оплачувати плату за газ в будь-якому токені, або навіть мати механізм оплати в третіх сторін для транзакцій.

**Соціальне відновлення:**У разі втрати або компрометованого закритого ключа користувачі можуть авторизувати новий ключ як законний власник гаманця. Це може включати різні методи відновлення через довірені контакти, апаратні гаманці або сторонні сервіси. Ідея полягає у тому, щоб полегшити відновлення доступу до Вашого облікового запису так само як відновлення паролю для вашого банківського рахунку за допомогою електронної пошти.

**Мультифакторна аутентифікація:**Подібно до загальноприйнятої практики Web2 2FA. користувачі можуть налаштувати два (або більше) методи аутентифікації для своїх крипто-гаманців, де транзакція підписана лише тоді, коли користувач підтверджує затвердження через другий варіант, наприклад, електронну пошту або SMS. Користувачі можуть також налаштувати обмеження щоденних переказів або списки адрес облікових записів, при яких гаманець автоматично блокується взаємодію.

**Квантова стійка до гас-ефективні сигнали:**Схема поточного підпису Ethereum, ECDSA - це обчислювальна широка (читання: вища плата за газ) і може бути порушена квантовими комп'ютерами. Через абстракцію підпису різні договори облікового запису використовують більш ефективні та безпечні схеми підписів. StarkNet використовує свою власну прієтну криву, сприятливу до СТАР.

Not only do these features provide users with greater security and more flexibility, but more importantly, result in a much **better** user experience.

Слухав Віталік Бутерін як "давню мрію" для розробників Ethereum інновацій навколо абстракції, головним чином EIP-2938 та EIP-3074, проходили з 2020 року. Однак обидва необхідні компроміси навколо безпеки та реалізації. [ЕIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), найбільш перспективний розвиток досі, пропонує версію абстракції облікового запису, не вимагаючи змін в протоколі Ethereum.

### **Докладна абстракція та Starknet**

На відміну від Bitcoin і Ethereum, які переробляють свої поточні протоколи для підтримки абстракції облікових записів,[StarkNet](https://starkware.co/starknet/)реалізували бухгалтерську абстракцію з першого дня. У поєднанні з масштабованими можливостями нашого доведення до СТАР, потенціал для інновацій гаманця обмежений. Ось чому наступне покоління самовпевнених гаманців, таких як Аргент та Браавос, зараз будуються на нашій мережі.

Підхід StarkNett схожий на EIP-4337,[визнаючи, що](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)повна абстракція аккаунта все одно призведе до заплутаного UX і[може відкрити двері](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)для нападу на послідовників. Це, скоріше, спрямовано на досягнення як абстракції підписів, так і платіжної абстракції, шляхом муталізації деяких необхідних на та позаланцюгову інфраструктуру.

І хоча ще більше роботи потрібно робити, абстракція облікового запису набирає силу за межами малого кола криптовалют. У грудні[Visa запропонувала ідею](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)використання реконструкції облікового запису для встановлення автоматичних повторюваних платежів на StarkNet. Використання делегативного облікового запису, користувачі можуть надати дозвіл, щоб ініціювати платіж перед затвердженим розумним договором. Звідти розумний контракт буде запрограмовано на вирахування встановленої суми платежу на певний день, протягом зазначеного періоду часу. Хоча Візовий досі не розкрив своїх планів щодо власних послуг, лише інтерес говорить про томи, і може передбачити світ, де такі платформи, як Netflix та Spotify можуть використовувати криптовалюту.

Що скажете, що буде на майбутнє, то лише час покаже. Але одне є впевненим. Шляхом полегшення та безпечне використання, абстракція облікового запису буде служити потужним каталізатором для самонабору блокчейнських гаманців для масштабування мільйонів крипто-користувачів. Ми будемо продовжувати будувати тим часом.