#### **TL;DR**

نحن نقوم ببناء StarkNet في أربع خطوات:

* الخطوة 0 - المؤسسات (مكتملة*)
* الخطوة الأولى - الكواكب: منفرد التطبيق
* الخطوة الثانية - التشكيلات: تعداد التطبيقات
* الخطوة الثالثة - الكون: الدوران اللامركزي

ونتوقع أن تكون الخطوة التي قمت بها في غضون بضعة أشهر قصيرة، وكن في طريقنا إلى الخطوات الثانية & الثالثة بحلول نهاية عام 2021.

### **مقدمة**

StarkWare يقوم ببناء StarkNet ، وهي لا مركزية ولا تصرح لها ولا رقابة تعمل بقدرة STARK-ZK-Rollup L2 التي تدعم الحساب العام عبر إيثيريوم. إنها مبنية على لغة تورينغ الكاملة[القاهرة](https://www.cairo-lang.org/).

المطورون، سيتمكن المستخدمون وعقدة StarkNet من القيام بكل ما يمكن توقعه من رتل L2 غير مسموح به: قد يقوم المطورون ببناء تطبيقات لتنفيذ منطق الأعمال الخاص بهم ونشرهم على StarkNet. قد يرسل المستخدمون المعاملات إلى StarkNet لتنفيذها، تماما كما يتفاعلون مع Ethereum اليوم. وسيتم تحفيز نقاط StarkNet والمشاركين على التشفير الاقتصادي لضمان عمل الشبكة بكفاءة وإنصاف.

سيتم دفعات جميع معاملات StarkNet بشكل دوري، وسيتم إثبات صلاحيتها في دليل STARK يتم التحقق منه على Ethereum. وبما أن الجهد الحسابي المطلوب للتحقق من براهين STARK صغير للغاية بالمقارنة مع الحساب المثبت، فإن StarkNet سوف تقوم بمقياس Ethereum بترتيب الحجم.

بما أن جميع تحويلات ولاية StarkNet سوف يتم إثباتها ستارك، فلن يتم قبول سوى التحولات الصالحة في إيثيريوم. سيتم نشر جميع البيانات المطلوبة لإعادة بناء حالة StarkNet الكاملة على السلسلة. أي شخص سيتمكن من تشغيل عقدة StarkNet الخاصة به. هذه الخصائص ستجعل StarkNet آمنة وغير صالحة مثل إيثيريوم.

لقد ظللنا نعيش فيها لمدة ثلاث سنوات، وقد أنجزت بالفعل بعض المعالم البارزة في تحويل "الرياضيات القمر" إلى برمجيات ذات درجة إنتاج وكفاءة تعمل على "إيثيريوم". الطريقة التي يفعل بها StarkWare الأشياء هي معالجة المشاكل الصعبة أولاً ، بناء التكنولوجيا الأساسية ، ثم تحريرها للإنتاج بطريقة مجزأة. وسنواصل البناء على هذا النحو ونحن نصل بشركة StarkNet إلى نهايتها.

![](/assets/ontheroad_02.png)

**الخطوة 0 - المؤسسات**

أكملت StarkWare وضع بعض الأسس الهامة لـ StarkNet.

#### **Cairo**

[القاهرة](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)هو اطاره الخاص بلغة Turing-Complete الرفيعة المستوى & لانتاج اثبات STARK للحساب العام. وبدلا من "دوائر" مجمّعة التصنيع اليدوي أو آر آر آر آر آر، يمكن لمطوِّر التطبيق أن يستخدم القاهرة لتحديد أي منطق تجاري، وإثبات أنه خارج السلسلة، والتحقق على السلسلة. القاهرة[قيد الإنتاج على Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)، وهي أيضا[متاحة للمطورين](http://cairo-lang.org/).

في غضون أسبوعين سوف نطلق على شبكة إثيريوم العامة نسخة ألفا من خدمة الدليل العام للقاهرة. *هذا سيتيح للمطورين بناء تطبيقاتهم الخاصة باستخدام القاهرة، تنفيذ أي منطق تجاري يرغبون فيه. سوف يرسلون رمز القاهرة الخاص بهم إلى GPS ليتم إثباته، ثم يقومون بالتحقق على السلسلة.*

ويتيح النظام العالمي لتحديد المواقع دليلا واحدا على سلامة تنفيذ تطبيقات منفصلة ومستقلة تماما، وبذلك توفر لتلك التطبيقات القدرة على استهلاك نفقات الغاز للتحقق من الأدلة فيما بينها.

والقاهرة والنظام العالمي لتحديد المواقع هما أساس StarkNet - وقرارنا بتحويل كليهما من الخارج إلى مطورين يزودهما بالتعرض المبكر لهذه التكنولوجيا، ليس فقط حتى يتمكنوا من البدء في البناء فوق ذلك، بل وأيضاً حتى يمكنهم التأثير على تطور StarkNet.

وسنواصل تطوير القاهرة على أساس احتياجات مجتمع المطورين وردود أفعاله. سوف نعزز هذه اللغة مع ميزات جديدة، بناء الجملة والبنايات التي تحسن من استخدامها، وسنواصل تطوير وتحسين أدوات القاهرة: جامعات وتعقب وتصحيح الأخطاء وإدماجها في برامج التنمية المتكاملة المشتركة.

ستجعل StarkNet القاهرة تعمل تحت القاعة.

#### **مكدس برامج STARK**

طورت StarkWare نظام مقاومة أقوى في النظام الإيكولوجي، وقد كان[مباشرًا على Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)لمدة شهور. طور StarkWare أيضًا[ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20)، مثلنا مفتوح المصدر ، والذي هو 20 X أسرع من أي مثال آخر؛ وهي توفر[توقيعات لا تعرف مطلقا وتوقيعات ما بعد الكمية](https://twitter.com/StarkWareLabs/status/1331930111227080709) على حد سواء.

قياس*قياساتنا*- ليس الاستقراء، أو الوعود - يتضمن معالجة 300 ألف معاملة في دليل واحد على صيانة الشبكة، تحقيق[رقم قياسي عالمي في Rollup: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). وفي هذه العملية، حققنا الرقم القياسي العالمي لكفاءة غاز رولوب: 315 غاز/تك، بأحجام أرخص من المعاملات على Ethereum L1.

هذه التقنية ستكون حجر الزاوية لطبقة إثبات اللامركزية من StarkNet، ومن ثم سوف نصدر المزيد من البروتينات المعززة كجزء من تطوير StarkNet(المزيد عن ذلك في موقع مدونة قادم).

#### **StarkEx**

StarkEx هو محرك قابلية التوسع L2 لدينا. إنها تخدم عملاء[DeversiFi](https://twitter.com/deversifi)على Mainnet منذ يونيو/حزيران 2020. ستقوم بتشغيل[dYdX](https://twitter.com/dydxprotocol)و[ImmutableX](https://twitter.com/Immutable)بدءاً ببضعة أسابيع قصيرة. يمكن لـ StarkEx التعامل مع منطق التداول المعقد (التداول الفوري، المشتقات، NFTs) فضلا عن المدفوعات.

كان تطوير StarkEx طريقتنا لتغذية سلسلة أدواتنا واختبارها مقابل احتياجات العالم الحقيقي. لا يوجد شيء مثل طلبات التطبيقات الفعلية والمستخدمين الأحياء لمساعدة الأدوات على النضج والتطور. كما أنه يساعدنا على فهم العناصر التي ينبغي معالجتها لخدمة النظام الإيكولوجي بشكل أفضل - على سبيل المثال، التكامل مع المحافظ ومستكشفي الكتل.

StarkEx هو مثال حي على القدرة على توسيع نطاق التطبيقات باستخدام ZK-Rollup الموجود في STARK، وهو أول تطبيق في الإنتاج في مينيت مكتوب في القاهرة. وعلى هذا النحو، سيكون أيضا أحد التطبيقات التي تعمل على StarkNet.

![](/assets/ontheroad_03.png)

### **الطريق إلى الأمام**

#### **الخطوة الأولى - الكواكب: منفرد التطبيق**

ستمكن هذه الخطوة المطورين من بناء ونشر تطبيقاتهم القابلة للتطوير على StarkNet.

عند هذه النقطة، سيكون كل مثيل StarkNet قادراً على تشغيل تطبيق واحد. أمثلة مختلفة قد تدير تطبيقات مختلفة.\
إطار StarkNet سوف يتضمن ما يلي:

* وكان من الضروري إنشاء آليات لتوليد براهين ستارك لمنطق القاهرة التعسفي، ثم تقديمها والتحقق منها في إيثيريوم.
* التفاعلات مع L1 Ethereum: إيداعات وسحوبات من الرموز L1 L1، نشر بيانات على السلسلة، آليات الهروب تحمي مستخدمي StarkNet من مشغلي StarkNet الخبيث، الخ.
* إدارة أرصدة المستخدمين L2، وتخزين التطبيق والذاكرة.

سيكون بإمكان المطورين التركيز فقط على بناء منطق الأعمال لتطبيقهم، ثم انتقل إلى الإنتاج: قم بنشره وتشغيله بحجم على StarkNet.

ما يمكننا من بناء حسابية عامة قابلة للتطوير ZK-Rollup هو مزيج ما يلي:

* القاهرة، وهي لغة برمجة عامة الغرض كاملة
* مكدس ستارك القوي (مثلث ومحقق)، الذي يمكن من تجميع حسابات ضخمة في دليل واحد

#### **الخطوة الثانية - التشكيلات: تعداد التطبيقات**

الخطوة التالية سوف تدعم تطبيقات متعددة تعمل على نفس مثيل StarkNet والوصول إلى نفس حالة L2 العالمية. ومن شأن ذلك أن يتيح إمكانية التشغيل المتبادل بين التطبيقات المختلفة، فضلا عن انخفاض تكلفة الغاز بسبب تحسن وفورات الحجم.

القاهرة، ومكدس ستارك القوي، والنظام العالمي لتحديد المواقع يوسع الميزة التنافسية لـ StarkNet، في دعم التدوير المتعدد التطبيقات.

وفي هذه المرحلة، ستصبح StarkNet إطار عمل كامل لتشغيل*تطبيقات متعددة*مع أي منطق اعتباطي للأعمال التجارية فوق إيثيريوم، مع كل حالة يقوم بتشغيلها مشغل واحد.

وقد يقوم المشغل الآن بتشغيل عقدة StarkNet ويمكن لمطوري التطبيقات أن يستخدموا عقودهم عليها. من منظور المستخدمين، يبدو StarkNet الآن ويشعر مثل إيثيريوم، مع مقياس أعلى.

#### **الخطوة الثالثة - الكون: الدوران اللامركزي**

والخطوة الأخيرة في تطور شبكة StarkNet هي تحقيق اللامركزية في عملها.

الأسئلة المثيرة للاهتمام&دال التي نتصدى لها الآن والتي تؤثر على هذه المرحلة تشمل `1` استخدام ZK-Rollups لتحسين آليات الوصول إلى توافق الآراء. `2` تصميم آليات اقتصادية مشفرة لتحفيز المساهمين والمشغلين في StarkNet اللامركزيين (متسلسلات المعاملات، المثيلات، إلخ. أن تعمل بكفاءة وعدالة وأمان

### **خاتمة**

StarkWare يقوم ببناء StarkNet ، وهو نظام لامركزي لا يسمح باستخدام STARK-Rollup L2 على Ethereum ، يدعم الحوسبة العامة استناداً إلى لغة القاهرة.

ستمكن StarkNet التطبيقات من توسيع نطاقها دون تعريض الأمان للخطر، المستخدمين لدفع رسوم معاملات معقولة، والنظام الإيكولوجي بأكمله لنمو بشكل كبير والوفاء بوعده.

يسرنا أن ندعو مجتمع المطور إلى[الانضمام إلينا](https://twitter.com/StarkWareLtd)في هذه الرحلة.

**تحديث (نوفمبر 2021):**StarkNet Alpha حية على ماين إيثيريوم