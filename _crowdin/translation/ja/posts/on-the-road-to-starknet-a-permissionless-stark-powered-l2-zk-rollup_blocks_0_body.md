#### **TL;DR**

StarkNetを4ステップで構築中です。

* Step 0 — 基礎 (completed*)
* Step I — Planets: シングルアプリロール
* Step II — Constellation: Multi-App Rollups
* ステップIII - 宇宙:分散ロールアップ

私たちは数ヶ月で私が展開するステップを期待しています 2021年末までにステップII & IIIに向かう途中でよくなってください。

### **はじめに**

StarkWareは、Ethereum上での一般的な計算をサポートする分散型、許可なし、検閲耐性のあるSTARK-RollupであるStarkNetを構築しています。 これは、チューリングコンプリートの[カイロ言語](https://www.cairo-lang.org/) に基づいています。

開発者： ユーザーとStarkNetノードは、権限のないL2ロールアップから期待されるすべてのことを行うことができます。開発者は、独自のビジネスロジックを実装し、StarkNetにデプロイするアプリケーションを構築できます。 ユーザーは、今日のEthereumとやり取りするように、StarkNetにトランザクションを送信することができます。 StarkNetノードと参加者は、ネットワークが効率的かつ公平に動作するように暗号経済的にインセンティブを与えられます。

すべてのStarkNetトランザクションは定期的にバッチ処理され、その有効性はEthereumで検証されるためにSTARK証明で証明されます。 STARK証明を検証するために必要な計算作業は、証明された計算に比べて指数関数的に小さいため、StarkNetはEthereumを大きさ順に拡張します。

StarkNetの状態遷移はすべてSTARK証明されるので、有効なもののみがEthereumで受け入れられます。 完全な StarkNet 状態を再構築するために必要なすべてのデータは、チェーン上で公開されます。 誰もが自分のStarkNetノードを実行することができます。 これらのプロパティは、Ethereumと同様に安全で権限のないStarkNetになります。

私たちは３年間この問題に取り組んできました そしてすでに「Moon Math」をEthereum上で実行されているプロダクショングレードで効率的なソフトウェアに変えることで驚くべきマイルストーンを達成しています。 StarkWareのやり方は、ハードな問題に最初に対処し、コア技術を構築し、それを断片的な形で生産にリリースすることです。 私たちはStarkNetを完成させるため、このように構築し続けます。

![](/assets/ontheroad_02.png)

**ステップ0 — 基礎**

StarkWareはStarkNetのためのいくつかの重要な基盤を敷設完了しました。

#### **Cairo**

[カイロ](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20)は、一般的な計算のための STARK 証明を生成するためのターニングコンプリートなハイレベル言語 & フレームワークです。 複雑な「回路」や「AIR」を手作業で作成する代わりに、アプリケーション開発者はビジネスロジックを定義するためにカイロを使用し、オフチェーンで証明され、オンチェーンで検証されます。 Cairo は[メインネット](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20)の本番環境で、[開発者は](http://cairo-lang.org/) を利用できます。

数週間後、私たちは公開EthereumテストネットでCairoのGeneric Proof Service(GPS)のAlpha版を発売します。 *これにより、開発者はCairoを使用して独自のアプリケーションを構築し、必要なビジネスロジックを実装することができます。 彼らは彼らのカイロコードをGPSに送信して証明され、その後チェーン上で検証されます。*

GPSは、単一の証明により、完全に独立したアプリケーションの実行の整合性を主張します。 それによって検証を行うガスの費用を軽減する能力が得られます

カイロとGPSはStarkNetの基礎です - 開発者に両方を外部化するという私たちの決定は、この技術への早期露出を彼らに提供します。 彼らがその上に構築し始めることができるだけでなく、StarkNetの進化に影響を与える可能性もあります。

開発者コミュニティのニーズとフィードバックに基づき、今後もカイロの開発を進めてまいります。 我々は、そのユーザビリティを向上させる新機能、構文、および組み込みによって、この言語を強化します。 そして、カイロのツール(コンパイラ、トレース/デバッガ、共通のIDEとの統合)の開発と改善を継続します。

StarkNetは、カイロをボンネットの下で走らせる。

#### **STARKソフトウェアスタック**

StarkWareはエコシステムの中で最も強力な証明システムを開発し、[Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0)で数ヶ月間稼働しています。 StarkWare has also developed [ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), our open-source prover, which is 20X faster than any other prover; it offers both [zero-knowledge and post-quantum-secure signatures](https://twitter.com/StarkWareLabs/status/1331930111227080709).

Our scaling *measurements* — not extrapolations, nor promises — include the processing of 300K transactions in a single proof on Mainnet, achieving [the world record in Rollup throughput: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). この過程で、Rollupガス効率の世界記録を達成しました:315 gas/tx、Ethereum L1でのトランザクションよりも大きく安い。

この技術は、StarkNetの分散型証明層の礎となります。 それゆえ、StarkNetの開発の一環として追加的で強化されたプロバーをリリースします(詳細は今後のブログ記事でご覧ください)。

#### **StarkEx**

StarkExはL2スケーラビリティエンジンです。 2020年6月からメインネットで[DeversiFi](https://twitter.com/deversifi)のお客様にサービスを提供しています。 数週間後に[dYdX](https://twitter.com/dydxprotocol)と[ImmutableX](https://twitter.com/Immutable)の両方に電力を供給します。 StarkExは、複雑な取引ロジック(スポット取引、デリバティブ、NFT)や支払いを処理できます。

StarkExを開発することは、私たちのツールチェーンをドッグフード化し、現実世界のニーズに対してテストする方法でした。 実際のアプリケーションやライブユーザーが、成熟して進化するツールを支援するための要求は何もありません。 また、エコシステムにより良いサービスを提供するために必要な要素を理解するのに役立ちます。例えば、ウォレットとの統合やエクスプローラのブロックなどです。

StarkEx は、STARK ベースの ZK-Rolup を使用してアプリケーションを拡張する機能のライブ例です。 そして、カイロで書かれた Mainnet での生産における最初のアプリケーションです。 そのため、StarkNetで動作するアプリケーションの1つにもなります。

![](/assets/ontheroad_03.png)

### **前方の道**

#### **Step I — Planets: シングルアプリロール**

このステップにより、開発者は独自のスケーラブルなアプリケーションを StarkNet 上に構築し、展開することができます。

この時点で、各StarkNetインスタンスは単一のアプリケーションを実行することができます。 異なるインスタンスが異なるアプリケーションを実行する可能性があります。\
StarkNetフレームワークには以下のものが含まれます。

* 任意のカイロロジック用にSTARKプルーフを生成し、Ethereum上でそれらを送信して検証するために必要なメカニズム。
* L1イーサリアムとの相互作用:L1トークンの入出金、チェーンデータの公開、エスケープメカニズムは、StarkNetユーザーを悪意のあるStarkNetオペレータから保護します。
* L2ユーザー残高、およびアプリケーションのストレージとメモリの管理。

開発者はアプリケーションのビジネスロジックの構築に専念することができます。 そして本番環境に移行します。展開して StarkNet で大規模に実行します。

スケーラブルな ZK-Rollup を構築できるのは以下の組み合わせです。

* Cairo, これは汎用的なチューリングコンプリートプログラミング言語です
* 膨大な計算を単一の証明にまとめることを可能にする、当社の強力なSTARKスタック(証明書と検証書)です。

#### **Step II — Constellation: Multi-App Rollups**

次のステップでは、同じStarkNetインスタンス上で実行される複数のアプリケーションをサポートし、同じグローバルL2状態にアクセスします。 これにより、異なるアプリケーション間の相互運用性と、スケールメリットの改善によりガスコストの削減が可能になります。

Cairo、パワフルなSTARKスタック、GPSは、マルチアプリのロールアップをサポートする上でStarkNetの競争優位性を増幅します。

この段階で StarkNetは、Ethereumの上に任意のビジネスロジックを備えた*複数の*アプリケーションを実行するための完全に機能するフレームワークになります。 各インスタンスは1つの演算子によって実行されます

オペレータは StarkNet ノードを立ち上げ、アプリケーション開発者はそのノードに契約を展開することができます。 ユーザーの観点からは、StarkNetはEthereumのように見え、より高いスケールで感じられます。

#### **ステップIII - 宇宙:分散ロールアップ**

StarkNetの進化の最後のステップは、その操作を分散化しています。

この段階に影響を与える興味深いR&Dの質問には、(i)コンセンサスを改善するためにZKロールアップを使用することが含まれます。 そして(2)分散型StarkNetの貢献者とオペレータ(トランザクションシーケンサー、諺など)にインセンティブを与える暗号経済メカニズムの設計。 効率的かつ公正かつ確実に機能させることができます

### **結論**

StarkWareは、カイロ言語に基づく一般的な計算をサポートするEthereum上でSTARK搭載のL2 ZKロールアップであるStarkNetを構築しています。

StarkNetは、セキュリティを損なうことなくアプリケーションを拡張できるようになります。 ユーザーは合理的な取引手数料を支払い、エコシステム全体が大幅に成長し、その約束を果たすために。

私たちは、開発者コミュニティに、この旅に[](https://twitter.com/StarkWareLtd)参加してもらうよう、喜んで招待します。

**Update (2021年11月):**StarkNet Alpha is live on Ethereum Mainnet