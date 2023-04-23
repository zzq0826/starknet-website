### TL;DR

* We are releasing Cairo 1.0-alpha.2, which brings a host of new features to the language
* It is now possible to implement an ERC20 contract
* Those new linguistic features will be applicable in the upcoming StarkNet-v0.11.0 version

### Fresh new features!

Cairo 1.0 is continuing its fast improvement pace. Today’s release introduces, among other things, all the necessary features to write an ERC-20 contract.

To mention some of the new features:

* Dictionaries
* Events in contracts
* Mapping storage variables
* Trait support
* Type inference
* Methods

See the complete list in the GitHub [repository.](https://github.com/starkware-libs/cairo)

Let’s have a look at an example of an ERC20 contract (the full concrete example is, of course, on [GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) to demonstrate a use case of an event and mappings in the storage:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Jump into the water!

We continue to work on two parallel vectors:

1. Evolve Cairo 1.0 at full speed towards full-feature compatibility with the old Cairo.
2. Develop Starknet v0.11.0 that will support contracts written in Cairo 1.0

In the meanwhile, we encourage devs to start writing with Cairo 1.0 and getting familiar with it.

For any questions — you can use the Cairo 1.0 Discord [channel](https://discord.com/channels/793094838509764618/1065544063245365288).

For any suggestions or feedback — don’t hesitate to open an [issue](https://github.com/starkware-libs/cairo/issues) in the Cairo repo.