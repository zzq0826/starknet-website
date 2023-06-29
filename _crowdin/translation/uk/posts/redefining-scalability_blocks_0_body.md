Масштабність блокчейн завжди була темою. Майже кожна блокчейн мережа торкається високої кількості транзакцій за секунду (ТЕС) як точка продажу. Однак, TPS не є дійсною метричною для порівняння блокчейн мереж з - це робить перед вами складність обчислити їхню відносну продуктивність. Більше того, цифри ТЕС зазвичай надходять ціною - що ставить питання - робити такі мережі насправді масштабно, чи вони просто збільшують свій результат?

Отже, давайте вивчатимемо, як визначати масштабність, яку компроміси робляться для досягнення цього, і чому Колодячі лерації є остаточним рішенням масштабованості.

### Не всі транзакції зроблені рівними

По-перше, нам потрібно встановити своє твердження, що проста та зручна метрика ТЕС не є точним показником масштабованості.

Для компенсації вузлів для виконання транзакцій (а для відключення користувачів від спаму в мережі з непотрібними обчисленнями), blockchains стягує плату пропорційною обчисленню навантаженню, що накладається на блокчейн. У Ethereum складність обчислювального тягаря вимірюється в*газі.*Оскільки газ є дуже зручним виміром складності транзакцій, термін буде використовуватися у цій статті для не-Ethereum blockchains, хоча зазвичай це конкретний Ethereum.

Транзакції значно відрізняються у складності, а отже, скільки газу вони споживають. Біткойн, піонери надійних транзакцій від одноранга, підтримує лише рудиментарний Bitcoin скрипт. Ці прості перекази від адреси до використання маленького газу. Навпаки, розумні договірні ланцюги, такі як Ethereum або Solana підтримують віртуальну техніку та мови програмування з повною течією, що дозволяють більш складні транзакції. Отже, такі програми, як Uniswap вимагають набагато більше газу.

Ось чому немає сенсу порівняти ТЕС з різними блокчейнами. Натомість ми повинні порівняти пропускну здатність обчислень - або пропускної здатності.

Всі блокчеїни мають розмір (змінний) блоку та час для блоку, який визначає, скільки*одиниць обчислення*можна обробити за блок і як*швидко*буде додано новий блок. Разом, ці дві змінні визначають пропускну здатність*розміщену*blockchain.

### Що обмежує масштабність?

Blockchains мають бути максимально децентралізовані, всеохоплюючі мережі. Для цього два фундаментальні властивості повинні зберігатися під контролем.

#### **1. Вимоги до обладнання**

Децентралізація blockchain мережі визначається здатністю найслабшого вузла в мережі, щоб перевірити блокчейн і утримувати свій стан. Тому витрати на запуск вузла (апаратне забезпечення, пропускна здатність, і сховище) слід зберігати якомога низько, щоб забезпечити якомога більше осіб, щоб стати допустимими учасниками нескінченної мережі.

#### Зростання стану 2**.**

Зростання держави відноситься до того, як швидко зростає блокчейн. Чим більше проходить блокчейн, тим швидше зростає. Повні вузли зберігають історію мережі, і вони повинні мати можливість підтвердити стан мережі. Стан Ethereum зберігається та посилається на ефективні структури, такі як дерева. Зі зростом держави, додаються нові листя та гілки, що робить до них все складнішим та трудомістким для виконання певних дій. Коли ланцюг росте за розміром, він погіршує найгірше виконання вузлів, що призводить до постійно зростаючого часу для перевірки нових блоків. З часом це також збільшує загальний час, необхідний для синхронізації всього вузла.

### Детальні наслідки збільшення наповнення штам

#### 1. Кількість вузлів

Мінімальні вимоги до запуску вузла і підрахунку вузлів:

* Біткоін1: 350 Гб дискового простору на диску, 5 Мбіт/с, 1 Гб оперативної пам'яті, ЦП >1 Гб. **Кількість вузлів: ~10,000**
* Ethereum2: 500 GB+ SSD дисковий простір, 25 Mbit/s з'єднання, 4–8GB оперативної пам'яті, ЦП - 2 - 4 ядра. **Кількість вузлів: ~6,000**
* Solana3: 1.5TB+ SSD дисковий простір, 300 Мбіт/с з'єднання, 128GB ЦП 12+ ядер. **Кількість вузлів: ~1,200**

Зверніть увагу, що чим більша кількість процесора, пропускної здатності і виставлення до вузлів, необхідних для пропуску блокчейна, все менше вузлів у мережі — що веде до слабшої децентралізації та менш інклюзивної мережі.

#### 2. Час синхронізації повного вузла

При запуску вузла вперше він повинен бути синхронізований з усіма існуючими вузлами, завантаженням, і дійсно, стан мережі весь шлях від блоку генезису до кінчика ланцюжка. Цей процес повинен бути настільки швидким та ефективним, як можливо, щоб дозволити комусь виступати як бездозволу учасник протоколу.

Забираючи Джеймсон Lopps[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)і[2021 Тести Синхронізації вузла](https://blog.lopp.net/2021-altcoin-node-sync-tests/)як індикатор, Таблиця 1 порівнює час, необхідний для синхронізації повного вузла Bitcoin та Ethereum проти Солани на середньому споживацькому класі.

![Таблиця 1. Порівняння технології блокування та порівняння вузлів](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Таблиця 1. Порівняння технології блокування та порівняння вузлів")

Таблиця 1 демонструє, що збільшення пропускної здатності тривати довший час синхронізації, оскільки потрібно обробляти та зберігати більше даних.

У той час як вдосконалення програмного забезпечення для вузла постійно робляться для зменшення завдання зростаючого блокчейна (зниження місця диску, швидше швидкість синхронізації, сильніша стійкість до збоїв, модуляризація певних компонентів та ін. , очевидно, вузли не можуть йти в темпі з збільшенням пропускної здатності.

### Як слід визначити масштабування?

Масштабованість є найбільш неправильною точкою в просторі блокчейн. Хоча підвищення пропускної здатності бажано, це лише одна частина головоломки.

***Масштабованість**означає**більше транзакцій**для**тієї ж апаратної**.*

З цієї причини масштабованість може бути розділена на дві категорії.

#### Масштабовність секвенсора

Послідовність описує акт упорядкування та обробки транзакцій в мережі. Як раніше встановлено, будь-який блокчейн може тривіально збільшити свою пропускну здатність, збільшуючи розмір блоку та скорочуючи час блоку - до точки, коли негативний вплив на його децентралізацію вважається занадто значним. Але, налаштування цих простих параметрів не надає необхідних покращень. Теоретично Ethereum EVM може працювати з[до ~2000 ТЕС](https://twitter.com/dankrad/status/1459607325854121989), якого недостатньо для обслуговування довгострокового попиту на простір блоків. Для масштабування послідовності Солана зробив деякі вражаючі нововведення: скориставшись паралельним виконавчим середовищем та розумним механізмом консенсусу який дозволяє набагато ефективніший спосіб пропускання. Але, незважаючи на свої покращення, вона не достатня і не масштабована. Оскільки Solana збільшує свої можливості, апаратні витрати на керування вузлом і процеси також збільшуються.

#### Масштабованість перевірки

*Перевірка масштабованості описує підходи, які збільшує пропускну здатність без обтяження вузлів із постійно зростаючими апаратними витратами.*, зокрема, це посилається на криптографічні нововведення, такі як підтвердження дійсності. Вони є причиною того, що Rollups чутливості можуть стабільно масштабувати блокчейн.

**Що таке надійність?**

Підтвердження (також відомих як "ZK-Rollups") переміщує обчислення і державне зберігання за ланцюгом, але зберігає невелику кількість певних даних на ланцюжку. Розумний контракт на базовій блокчейні підтримує корінь штату Роллап. На Rollup партія надзвичайно стиснених транзакцій разом з поточним коренем стану надсилаються до поза-ланцюгового Prover. Провер обчислює транзакції, створює підтвердження про результати та новий корінь штату та посилає його на мережу Verifier. Verifier перевіряє достовірність, і розумний контракт, який підтримує стан Rollup, оновлює його до нової держави, наданої в Prover.

**Як масштабувати анімацію із однаковими апаратними вимогами?**

Незважаючи на те, що Provers потребують високого класу, вони не впливають на децентралізацію блокчейну; оскільки дійсність транзакцій гарантується математичними доведеннями, які перевіряються.

Важливо відповідати вимогам для перевірки доказів. Оскільки дані, задіяні у вигляді високостиснутих та значною мірою абстрагуються через обчислення, його вплив на вузли основного блокчейна є мінімальним*.*

Верифікатори (вузли Ethereum) не потребують додаткового обладнання, і розмір пакетів не збільшує вимоги до обладнання. Тільки державні переходи та невелика кількість даних для виклику необхідно обробляти та зберігати вузли. Це дозволяє використовувати всі Ethereum вузли для перевірки пакетів Rollup за допомогою наявного обладнання.

**Чим більше транзакцій, тим дешевше стає**

У традиційних ланцюгах блоків, чим більше транзакцій відбувається, дорожче він для всіх, коли заповнюється простір блоків - і користувачу потрібно обійти один одного на ринку платні, щоб отримати в тому числі свої транзакції.

При збільшенні дії динаміка зворотна. Верифікація групи транзакцій за Ethereum має певну ціну. У міру зростання кількості транзакцій між пакетом зростає вартість перевірки пакета зростає з експоненціально меншою швидкістю. Додавання більшої кількості транзакцій до пакета призводить до дешевших комісій транзакцій, навіть якщо вартість пакетної перевірки збільшується, так як вона є амортизованою серед всіх транзакцій всередині пакета. Процеси ліквідності хочуть якомога більше транзакцій в пакеті - щоб оплата за перевірку могла бути поширена серед усіх користувачів. У міру того, як пакетний розмір зростає до нескінченності, амортизована плата за кожну транзакцію конвертується в нуль, і. ., чим більше транзакцій за розкручуванням чинності, тим дешевше вони отримують для всіх.

dYdX, додаток від дільниці дійсності (дільниця), який часто бачить пакетні розміри більш, ніж 12 000 транзакцій. Порівнюючи споживання газу в тих же операціях в Майннеті проти чинного розкручування ілюструє приріст масштабності:

Встановлення транзакції dYdX на Mainnet:**200 000 газу**

Розрахування транзакції dYdX на StarkEx:**<500 gas**

Ще один спосіб на це дивитися: Основна кількість витрат витрат користувачів у межах однієї пайки.

#### Чому оптимістичні рулетки не настільки масштабовані, як можна вважати,

Теоретично оптимістичні ролети забезпечують майже такі ж переваги масштабованості, як і розгортання валідності. Але є одна важлива відмінність: оптимістичні прогулянки оптимізуються для середнього випадку, тоді як Колодячі Колоди оптимізуються в найгіршому випадку. Оскільки блокчейн працюють в надзвичайно змагальних умовах, оптимізація для найгіршого випадку - єдиний спосіб досягти безпеки.

У найгіршому випадку оптимістичного руху транзакції користувача не будуть перевірятися перевіркою шахрайства. Таким чином, для участі в шахрайстві, користувач мусить синхронізувати Ethereum повний вузол, повний вузол L2, та обчислити підозрілу саму транзакцію.

У найгіршому випадку Validity Rollup, користувачеві потрібно буде синхронізувати лише Ethereum повний вузол для перевірки доведення дійсності, зберігаючи себе обчислювальний тягар.

На противагу валідним землеробствам, оптимістичні масштабування витрат рублів лінійно з кількістю транзакцій замість кількості користувачів, що робить їх дорожчими.

### Остаточна прив'язка головоломки - Постійний доступ до держави Роллап

Для забезпечення валідності транзакцій, користувачам потрібно запускати лише вузол Ethereum. Тим не менш, користувачі і розробники можуть хотіти переглядати, а також запускати, держава і виконання Rollup для різних цілей. *індексація L2 вузла*заповнює це потрібно ідеально. Він не тільки дозволяє користувачам бачити транзакції в мережі, але для функціонування екосистеми необхідна і частина інфраструктури. Індексери, такі як «Грап», Алхімія, Інфур»; мережі Oracle типу Chainlink і блокують дослідників, всі вони повністю підтримуються допустимим, індексуючи L2 вузол.

### Висновок

Багато підходів до подолання масштабів блокчейна помилково зосереджені на збільшенні*потужності*. Але це нехтування впливає на вузли: постійно зростаючі вимоги обладнання для обробки блоків та зберігання історії мережі, і як це гальмує децентралізацію мережі.

З появою криптографії із наданням перевірки дійсності, ланцюжок блоків може досягти**справжньої масштабованості**, яка не вантажує вузли з постійно зростаючими витратами та дозволяє широку децентралізацію. Більше транзакцій з потужними та складнішими обчисленнями для одного апаратного забезпечення тепер можливі, інвертування платної дилеми ринку в процесі - чим більше діяльності для ліквідності Ролап, тим дешевше!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)і[Louis Guthmann](https://twitter.com/GuthL)

1 з<https://bitcoin.org/en/bitcoin-core/features/requirements>

2 з[https://ethereum.org/en/developers/docs/node-and-clients/](https://ethereum.org/en/developers/docs/nodes-and-clients/)

3 з<https://docs.solana.com/running-validator/validator-reqs>

4 сильно спрощено та скориговано для середнього розміру динамічних блоків