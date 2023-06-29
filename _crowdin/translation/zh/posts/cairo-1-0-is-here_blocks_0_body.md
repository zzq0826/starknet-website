### TL;DR

* 开罗1.0 第一版在这里！
* 开发者可以开始写作和测试 Cairo 1.0 程序
* 今后几周内将实现与旧版开罗的功能对等性
* StarkNet 合同的支持将添加到即将推出的StarkNet Alpha 版本

### 二. 背景

我们很高兴地宣布，第一个公开版开罗1.0版现已出版。 这是开罗演变过程中的一个重要里程碑。 它是在2020年首次引入的，作为一种全面的编程语言，有效地编写STARK可证明的程序。 开罗1.0语是一种类似冲锋利的高级语言。 像Rust一样，它是为了让开发人员能够轻松地写下高效和安全的代码。

自成立以来，Cairo 已被用于构建第 2 层应用程序，这些应用程序[处理](https://dashboard.starkware.co/starkex)超过 7900 亿美元的交易，处理了超过 3 亿笔交易并铸造了超过 9000 万个 NFT，所有这些都在链下执行并在以太坊上结算STARK 证明保证的数学完整性。 开罗成为区块链[生态系统](https://defillama.com/languages)中第四个最常用的编程语言。 开罗一世获释。 我们的目标是使语言更容易获得，更方便用户，同时也引进新的特征，加强安全和方便。

开罗1.0最重要的变化之一是语法。 我们从**Rust**中获得灵感，创建一种更容易阅读和写入的更方便开发者的语言。 开罗新版允许撰写更安全的代码（强化打字、所有权和借款，等等），同时也更加明确。

Cairo 1.0 还引入了 Sierra，这是一种新的中间表示，可确保每运行</strong>Cairo 就可以证明**。 这使得开罗1.0特别适合于在StarkNet这样一个没有许可的网络中使用，它能够在那里提供强有力的DoS保护和防止新闻检查。 您可以在我们的[previous](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)post 中阅读更多关于 Sierra 的信息。</p>

## 首次驯服！

### 今天你能做什么？

开发者可以开始编写、编译和测试 Cairo 1.0 程序！ 我们鼓励开发者开始尝试开罗1.0并习惯新的语法和功能。

由于开罗1.0版仍在积极开发，新功能不断添加，请参阅[开罗存储库](https://github.com/starkware-libs/cairo/)获取最新更新。

### 接下来是什么？

目前是开罗1。 还缺少一些旧版本开罗所支持的功能([详情请查看此表格](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md))。 我们的下一个里程碑预计将在今后几周内完成，它将提供开罗1.0地物与较老的地物对等。 您可以在此处</a>跟踪里程碑

的进度。</p> 



### Starknet支持

在开罗写入StarkNet合同得到支持(尽管某些特征仍然缺失)。 然而，StarkNet尚未支持开罗1.0合同的部署和执行。 计划在今后几周实施的StarkNet Alpha V0.11.0将引入部署和运行开罗1.0合同的能力。 升级到v0.11.0将标志着向仅运行开罗1.0合同的系统过渡期的开始。 这个过渡时期将以[雷格尼斯](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4)结束，预计几个月后结束。

![](/assets/0_odxbxeacqdwizlfw.jpg)



### 让我们来建造吧！

StarkNet的目标是利用STARK的数学完整性指数化以太坊。 而且开罗会议的目标是使开发者能够获得这种指数规模。 可获取性是指一种高效、易读写、安全使用的编程语言。 我们希望开罗1.0版的发行将鼓励更多的开发商加入StarkNet，扩大以满足全球需求。