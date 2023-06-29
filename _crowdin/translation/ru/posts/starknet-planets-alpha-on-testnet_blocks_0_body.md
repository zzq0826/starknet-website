### **TL;DR**

* [StarkNet Planets Alpha](https://voyager.online/)— первый шаг на нашей дороге к Mainnet — теперь живет в Testnet!
* [StarkNet](https://starkware.co/product/starknet/)является беспозвоночной туринг-полной ZK-Rollup1.
* Разработчики могут использовать свою бизнес-логику в умном контракте и беспрепятственно развертывать ее на StarkNet.
* Состояние переходов StarkNet доказано вне цепи, а затем проверяется по цепочке.
* Как и Ethereum, пользователи могут напрямую взаимодействовать с этими смарт-контрактами.

### **Введение**

Мы[анонсировали](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880)схему[StarkNet](https://starkware.co/product/starknet/)в Ян 2021 году. Решения о масштабируемости Священного Грааля будут способствовать i) произвольным смарт-контрактам с ii) композиционной способностью iii) функционируют в рамках децентрализованной сети. Сегодня мы объявляем об установке на testnet Шаг 1: StarkNet Planets Alpha. Система Alpha поддерживает произвольные смарт-контракты. Позднее в этом году будет оказана поддержка, и за этим последовать децентрализация.

Для нас очень важно быть полностью прозрачными и правильно излагать ожидания. Цель этой должности состоит в том, чтобы четко перечислить то, что уже поддерживается, и какие функции до сих пор не реализованы. То, что мы сегодня выпускаем, это Работа в тестовой сети. Мы считаем, что этот выпуск будет способствовать формированию здоровой экосистемы вокруг StarkNet и ее инструментов. Мы хотим вовлечь разработчиков в создание сети и получать от сообщества постоянную обратную связь.

### **Что такое StarkNet Planets Alpha?**

**Функциональность:**Alpha позволяет разработчикам писать и устанавливать контракты StarkNet для общих вычислений. В белом списке нет — любой разработчик может написать и развернуть любой контракт, который ему нужен. Пользователи могут взаимодействовать с этими договорами, отправляя им транзакции и проверяя их состояние. Все контракты существуют в одном государстве2. Обновления в этом состоянии доказываются вне цепи и проверяются по цепочке — в Alpha, верификация выполняется на тестовой сети.

**StarkNet OS:**Эта функциональность поддерживается новой операционной системой, которую мы называем StarkNet OS. Он предлагает*доказанные*переходы состояния на StarkNet. Разработчики Ethereum могут считать его эквивалентом EVM: отвечают за вызов смарт-контрактных функций, обработку хранения контрактов и т.д. Мы опубликуем отдельный пост, описывающий архитектуру StarkNet ОС.

**Что нет в Альфе?**Альфа по-прежнему отсутствует некоторые ключевые возможности, такие как взаимодействие L1<>L2, данные по цепочке и совместимость. Подробнее об этом ниже.

#### **Получение ног с мокрыми**

Начните с нашего[обучения и документации](https://www.cairo-lang.org/docs/hello_starknet/).

Затем вы можете прочитать на[образце смарт-контракта AMM](http://cairo-lang.org/docs/hello_starknet/amm.html)который мы написали и развернули на StarkNet. Это простой AMM, и вы можете взаимодействовать с ним[здесь](https://starkware-amm-demo.netlify.app/swap). Теперь вы готовы писать и развертывать смарт-контракты на StarkNet. Проводник блоков для StarkNet —[Voyager](https://voyager.online/)— позволяет любому исследовать состояние StarkNet.\
Помогив ноги, мы верим, что вы будете лучше подготовлены к строительству на StarkNet, по мере того, как мы продолжаем использовать дополнительные возможности. Мы уже заняты планированием первого взлома, а также семинаров для разработчиков.

### **Следующие шаги для StarkNet**

Ключевые возможности, которые все еще отсутствуют в Alpha, будут реализованы начиная с предстоящих недель. К их числу относятся:

* L1<>L2 Взаимодействие, например возможность внесения и вывода средств в L1.
* On-chain data: публикация всех изменений в хранилище на Ethereum.
* Составляемость: позволяет контрактам общаться друг с другом.

С этими возможностями мы будем готовы довести StarkNet до Ethereum Mainnet. Мы называем этот шаг в эволюции созвездий StarkNet, и когда мы достигнем этого, вы сможете строить и беспрепятственно развертывать на Ethereum масштабируемые L2 dApps.

#### **Экосистема StarkNet**

Мы очень волнуемся экосистемой, которая строится вокруг StarkNet, поэтому мы приостановимся поблагодарить наших коллег до сих пор.

Мы тесно сотрудничаем с[Нидерландами](https://twitter.com/nethermindeth)и командой Нубия,[Алексей Акхунов](https://twitter.com/realLedgerwatch)(Эригон) &[Игорь Мандрин](https://twitter.com/mandrigin)(шлюз. m),[Iddo Bentov](https://www.cs.cornell.edu/~iddo/),[dOrg](https://twitter.com/dOrg_tech),[Prof. Tim Roughgarden](https://twitter.com/algo_class),[Prof. Джереми Авигад](https://www.andrew.cmu.edu/user/avigad/)& Иоав Сегинер, последнее, но не в последнюю очередь — команда[Парадигма](https://twitter.com/paradigm).\
Наши ранние партнеры —[dYdX](https://twitter.com/dydxprotocol),[Неизменяемые](https://twitter.com/Immutable),[DeversiFi](https://twitter.com/deversifi), а также[Сортировка](https://twitter.com/SorareHQ),[Celer](https://twitter.com/CelerNetwork), и другие — предоставляют нам бесценный вклад из первого дня, и позвольте нам построить производственно-оценочную сеть для реальных пользователей.\
Мы продолжаем удивлять качеством контента, создаваемого сообществом, такими людьми, как[Боббинский резьбар](https://twitter.com/bobbinth),[Даниэль Крони](https://github.com/danielkroeni/cairo-playground/blob/main/anon-bank/README.md),[Adrian Hamelink](https://twitter.com/adr1anh),[perama](https://twitter.com/eth_worm),[Francesco Ceccon](https://twitter.com/ceccon_me),[Илиан Мальчев](http://twitter.com/imalchev), и[команды Александрии](https://blockchainpartner.fr/).

Мы хотим увидеть, что сообщество создаст на всех фронтах: инструментах разработчика, контенте и, конечно, приложениях StarkNet, которые они создают. Давайте продолжим разговор в ваших любимых медиа-файлах:[discord](https://discord.gg/uJ9HZTUk2Y),[Twitter](https://twitter.com/CairoLang),[электронная почта](mailto:info@starkware.co), в ближайшее время используя самые децентрализованные формы связи: f2f.

1 Мы не являемся поклонниками термина «ZK-Rollup», поскольку, математически, это не нулевое знание, но вы все знаете, что мы имеем в виду

2 В отличие от отдельного состояния, поддерживаемого для текущего развертывания StarkEx, на Mainnet

**Обновление (ноябрь 2021):**StarkNet Alpha живет на Ethereum Mainnet