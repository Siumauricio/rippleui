# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.12.1](https://github.com/Siumauricio/rippleui/compare/v1.12.0...v1.12.1) (2023-04-23)


### Bug Fixes

* **file-input:** add support for firefox and add rounded to button on safari ([#95](https://github.com/Siumauricio/rippleui/issues/95)) ([14a3262](https://github.com/Siumauricio/rippleui/commit/14a3262d1ec44b3e57b4cf6d3c4d4c7b457c0c20))

## [1.12.0](https://github.com/Siumauricio/rippleui/compare/v1.11.0...v1.12.0) (2023-04-16)


### Features

* **input-file:** input-file component ([d187acf](https://github.com/Siumauricio/rippleui/commit/d187acfea2e9dbd0574474dd73860a1f7eaeb201))
* **v1.11.0:** docs ([557ce78](https://github.com/Siumauricio/rippleui/commit/557ce78963baf2d4328d4a93a9d53398c7703669))

## [1.11.0](https://github.com/Siumauricio/rippleui/compare/v1.10.1...v1.11.0) (2023-04-09)

### Features

- **spinner:** spinner component ([eb83aff](https://github.com/Siumauricio/rippleui/commit/eb83aff381ee98f99dc15bfaa6bcd098c1c65960))

### Refactor

- **switch:** set gray-7 to border hover ([4f5325b](https://github.com/Siumauricio/rippleui/commit/4f5325b7d80f4959aaa4e6e4caeabec1de769471))

### [1.10.1](https://github.com/Siumauricio/rippleui/compare/v1.10.0...v1.10.1) (2023-03-30)

### Refactor

- remove default font ([4b8b4a9](https://github.com/Siumauricio/rippleui/commit/4b8b4a914a6aafae2d5f8cfa2cee7f3ab1354d45))

## [1.10.0](https://github.com/Siumauricio/rippleui/compare/v1.9.2...v1.10.0) (2023-03-20)

### Features

- **button, checkbox, input, radio, select, textarea:** add solid variant ([53a0e54](https://github.com/Siumauricio/rippleui/commit/53a0e546389d0518bc969250eea6e5bdda5261d0))
- **sidebar:** sidebar component ([e99276f](https://github.com/Siumauricio/rippleui/commit/e99276f541236cd53a589bf1bfcb40c559c61aee))

### Bug Fixes

- **tooltip:** set value instead variable ([28c3aa9](https://github.com/Siumauricio/rippleui/commit/28c3aa9a837d10500618429960edf392493da43e))

### [1.9.2](https://github.com/Siumauricio/rippleui/compare/v1.9.1...v1.9.2) (2023-03-05)

### Refactor

- **checkbox, radio, range, switch:** set static white value ([f3ccb18](https://github.com/Siumauricio/rippleui/commit/f3ccb1859fbb7f9e8a5afec9976620566584f776)) [#39](https://github.com/Siumauricio/rippleui/issues/39)
- **config:** remove white and black colors ([ad88491](https://github.com/Siumauricio/rippleui/commit/ad884915099bb6be0137cfa0c4de864a0f61a8f0)) [#39](https://github.com/Siumauricio/rippleui/issues/39)

### [1.9.1](https://github.com/Siumauricio/rippleui/compare/v1.9.0...v1.9.1) (2023-03-04)

### Features

- **config:** add standalone-cli executables ([f170e2b](https://github.com/Siumauricio/rippleui/commit/f170e2b4f49f3501be10d182dc87ec1038e5419b))
- **skeleton:** add static variant ([c7e8137](https://github.com/Siumauricio/rippleui/commit/c7e813704a1fadfc809b675cc65625f7cdc50f9a))

### Refactor

- **config:** add example of standalone cli ([2019a8b](https://github.com/Siumauricio/rippleui/commit/2019a8bfc7a96d338fcec174c1544120462353d4))
- **menu,popover,button,dropdown:** prevent components vibrate on click ([6b41ef8](https://github.com/Siumauricio/rippleui/commit/6b41ef8bca9cc6b004993c13f76491e59be0fd78))

### Breaking Changes

- Change tokens colors to not clash with tailwind colors ([c2f1171](https://github.com/Siumauricio/rippleui/commit/c2f1171302dd7aae119a8b97fdaec2441c960c4e)) #39
  Since the classes that we use are clashing with tailwindcss default colors.
  The colors have the same name the only thing will change is the last `token` and follow the same semantic as [RadixUI](https://www.radix-ui.com/docs/colors/palette-composition/the-scales#colors) e.g:

|  Old Token  | New Token |
| :---------: | :-------: |
| bg-blue-500 | bg-blue-6 |
| bg-red-900  | bg-red-10 |

## [1.9.0](https://github.com/Siumauricio/rippleui/compare/v1.8.1...v1.9.0) (2023-02-12)

### Features

- **menu:** menu component ([f151b47](https://github.com/Siumauricio/rippleui/commit/f151b470487e32a9d324b13dd4aedf4605776163))
- **popover:** popover component ([3ff80c2](https://github.com/Siumauricio/rippleui/commit/3ff80c2d5374f49e80fe99c107d57db507024151))

### Refactor

- **button:** set text color to default variant ([895d034](https://github.com/Siumauricio/rippleui/commit/895d034861083041047358db14968cc0942d2aca))
- **dropdown:** add center bottom and top variant ([4793894](https://github.com/Siumauricio/rippleui/commit/4793894837884ac3e472301e91d85f51b9c33793))
- **dropdown:** removed border and add scale to dropdown item ([2dacaf7](https://github.com/Siumauricio/rippleui/commit/2dacaf7b807fe67a1e5a18d3cbfdf772a7238924))
- **dropdown:** removed margin to menu ([20c7502](https://github.com/Siumauricio/rippleui/commit/20c7502375ce3e46d77802c59a47b419b6b05ca2))
- **dropdown:** set width only to a main menu class ([83a7417](https://github.com/Siumauricio/rippleui/commit/83a7417c4f952e029852b2dd6047f9370e62b4b2))
- **dropdown:** simplify selectors and change transition duration on transform ([7e31aa6](https://github.com/Siumauricio/rippleui/commit/7e31aa6394aa7ea02a5352ee433873ae17e98a89))

### [1.8.1](https://github.com/Siumauricio/rippleui/compare/v1.8.0...v1.8.1) (2023-02-03)

### Features

- **forms:** forms component ([dbea29a](https://github.com/Siumauricio/rippleui/commit/dbea29a991461ba9b2b3a8ad8cb93a349a87deaf))

### Bug Fixes

- **progress:** Fix indeterminate progress bar on cross-platform ([92337b6](https://github.com/Siumauricio/rippleui/commit/92337b67a6b3d38b0aa725f5890e631d07a81fe9))

### Refactor

- **dot:** set display value ([632a425](https://github.com/Siumauricio/rippleui/commit/632a42583adb77f8220459942aceff23cdf42803))
- **progress:** set width by default ([31c8a16](https://github.com/Siumauricio/rippleui/commit/31c8a1601ddd969531553d0fee9cbeec64f715e4))
- **switch:** reduce transition duration ([fed5324](https://github.com/Siumauricio/rippleui/commit/fed5324c9c9dae9b4ac9d0c0746a4b91119fd1a9))

## [1.8.0](https://github.com/Siumauricio/rippleui/compare/v1.7.0...v1.8.0) (2023-01-30)

### Features

- **dot:** dot component ([a11a242](https://github.com/Siumauricio/rippleui/commit/a11a242e60b5a61173ba1f29631d12dd1828a7e9))
- **kbd:** kbd component ([5586892](https://github.com/Siumauricio/rippleui/commit/5586892f18d0a6fbe910bfdce210200b62a80f28))
- **progress:** progress bar ([0b1fc86](https://github.com/Siumauricio/rippleui/commit/0b1fc861544e1b5d5b17f520fbd3ec14d0848562))
- **range:** range component ([4d5223d](https://github.com/Siumauricio/rippleui/commit/4d5223d1af11ea8a093724eacc7b763f418b15a2))

## [1.7.0](https://github.com/Siumauricio/rippleui/compare/v1.6.2...v1.7.0) (2023-01-25)

### Features

- **divider:** divider component ([c3b67d9](https://github.com/Siumauricio/rippleui/commit/c3b67d9c9399fb11da102d720af53ec8c9e77712))
- **link:** link component ([ddde65c](https://github.com/Siumauricio/rippleui/commit/ddde65c8de7ae68623be4566555a9b4faf0f8a24))
- **pagination:** pagination component ([853564c](https://github.com/Siumauricio/rippleui/commit/853564c95ccef803f8a6f93f6497008bb9ad463b))
- **skeleton:** skeleton component ([b50e16f](https://github.com/Siumauricio/rippleui/commit/b50e16f74f691a5e64af24baa7ce7cb3240ed99c))
- **stepper:** add stepper component ([875385c](https://github.com/Siumauricio/rippleui/commit/875385c85d3a2dae6bf40f1b01f768e1a36a5eef))

### Bug Fixes

- **radio:** center the circle ([0206530](https://github.com/Siumauricio/rippleui/commit/0206530dc13b2d588c6159590f1cfce370c92c1c))

### [1.6.2](https://github.com/Siumauricio/rippleui/compare/v1.6.1...v1.6.2) (2023-01-20)

### Bug Fixes

- **inputs:** add focus state ([823dcc7](https://github.com/Siumauricio/rippleui/commit/823dcc78188c56e75519609ed0fcf5a50cb3133f))

### [1.6.1](https://github.com/Siumauricio/rippleui/compare/v1.6.0...v1.6.1) (2023-01-19)

### Bug Fixes

- Dark mode with 'media' is not supported ([41d24ce](https://github.com/Siumauricio/rippleui/commit/41d24ce8030ca3fef67da1ce2eb2ffdc8d2d754d))

## [1.6.0](https://github.com/Siumauricio/rippleui/compare/v1.5.0...v1.6.0) (2023-01-15)

### Features

- **config:** add prefix option ([349498a](https://github.com/Siumauricio/rippleui/commit/349498af48cdc99ee33142e9262e87352c8a1cf7))

### Bug Fixes

- **tooltip:** allow to use breakpoints ([99de37e](https://github.com/Siumauricio/rippleui/commit/99de37ed10e2e4a2720b71a70c2537f5b49199fa))

### Refactor

- add custom color ([fb16455](https://github.com/Siumauricio/rippleui/commit/fb16455e7fcdfa4a6592bc288e530e83bb3cfcf7))
- **button-group:** add direction to horizontal class ([c14f6d2](https://github.com/Siumauricio/rippleui/commit/c14f6d2447d060f9bdb58730cf2c74cd483315d0))
- **card:** change shadow box to sm ([4ca5d94](https://github.com/Siumauricio/rippleui/commit/4ca5d94840424434dbc9955bb34dc6da63ce1aa6))
- **config:** update types ([baceb83](https://github.com/Siumauricio/rippleui/commit/baceb83c2733d3713e145d163a163ced768c5d4f))
- **input and select:** adjust height to be more standard size ([6073359](https://github.com/Siumauricio/rippleui/commit/607335948f211addc8b4173a6002a0c46467afdc))
- **landing-page:** update design and add new sections ([fc504e4](https://github.com/Siumauricio/rippleui/commit/fc504e43658675fa78ea29a1111e385e136fc222))
- **tabs:** support for radio tabs ([f8b0e89](https://github.com/Siumauricio/rippleui/commit/f8b0e895c2e09ab0dc3f55d25f55597f9779d241))

## [1.5.0](https://github.com/Siumauricio/rippleui/compare/v1.4.0...v1.5.0) (2023-01-07)

### Features

- accordion component ([894e39d](https://github.com/Siumauricio/rippleui/commit/894e39d6123653ce49952da6a4954ed5b64c23a2))
- tabs component ([bd855b3](https://github.com/Siumauricio/rippleui/commit/bd855b39dc715692516ba8cc77b64491e2976922))

### Bug Fixes

- **navbar:** add backdrop saturate to navbar glass and update colors to radixUI ([a71d9a7](https://github.com/Siumauricio/rippleui/commit/a71d9a7a0c714c3c48b71e5b66b74e502e7edcc2))

### Refactor

- **config:** add safelist on production styles.css for CDN purposes ([367975b](https://github.com/Siumauricio/rippleui/commit/367975b46936da0f5a4c53e6fc0b94aa7a106293))
- **new-pallete:** add slate color ([07b9249](https://github.com/Siumauricio/rippleui/commit/07b92496c365fe67e1430c388d0bd70103b9fd3c))
- **new-types:** expand pallete scalle ([0b83ec4](https://github.com/Siumauricio/rippleui/commit/0b83ec4f04b387ea1832d9b6acf85e8de28bc35e))
- **base:** add highlight color tap ([e9f47a8](https://github.com/Siumauricio/rippleui/commit/e9f47a82bacd7b6a03f50f96006ffe97278b3dc4))
- **base:** device highlight transparent ([0fd3717](https://github.com/Siumauricio/rippleui/commit/0fd3717e6dbde6c4982fb456f9e06751a91b446f))
- **button:** prevent select content ([faace23](https://github.com/Siumauricio/rippleui/commit/faace23a8461833ac8d56381226538072eb1fb38))
- **card:** update to radixUI colors ([711d704](https://github.com/Siumauricio/rippleui/commit/711d7047a6b1f2a9f7666e9cc872af3699d647a8))
- **button:** change loader color ([2da97bb](https://github.com/Siumauricio/rippleui/commit/2da97bb4d7e226bb3a4987ff26293f8fe5865108))
- **utilities:** clean utilities ([c326698](https://github.com/Siumauricio/rippleui/commit/c3266983cd8e68293292763ba205cd2089d19a9b))
- **components-colors:** update colors to new radixUI colors ([0bec47d](https://github.com/Siumauricio/rippleui/commit/0bec47d7526affa94213269baf654588f3d2b04d))
- **config:** force match at init in regexExpr safelist ([58047da](https://github.com/Siumauricio/rippleui/commit/58047daded7958faac92efd014d5f65b791bebb9))
- **config:** separate utilities to another config ([e3aa62b](https://github.com/Siumauricio/rippleui/commit/e3aa62baf625c983e74ef59f51f1944889173634))
- **navbar:** set gray-50 instead of gray-100 ([23ed3d9](https://github.com/Siumauricio/rippleui/commit/23ed3d928e4d0d0b4e86f946a5e778e6c7b0e2f6))
- **table:** prevent text content wrap ([dd5f3ed](https://github.com/Siumauricio/rippleui/commit/dd5f3ed010603eb127680d427bda311c59630a7f))
- **background-colors:** update background borders ([0efce60](https://github.com/Siumauricio/rippleui/commit/0efce60f79b8bc64c87cd1aa50e1830ea9186704))
- **tab:** update to radixUI colors ([29fdcf0](https://github.com/Siumauricio/rippleui/commit/29fdcf025cc956478b3f9a52b9be7e73d460043c))
- **theme:** use radixUI pallete ([b514482](https://github.com/Siumauricio/rippleui/commit/b51448205eef5d1ae785964fbe2266a2ca44e64c))

## [1.4.0](https://github.com/Siumauricio/rippleui/compare/v1.3.3...v1.4.0) (2022-12-30)

### Features

- **config:** support for theme customization ([9fa2904](https://github.com/Siumauricio/rippleui/commit/9fa2904c49b5844bdf03f12794fc75135fd24f13))
- **config:** types for rippleui theme config ([e3a5910](https://github.com/Siumauricio/rippleui/commit/e3a5910ac2b39491d6a6b3d4ec050360abc710e4))

### Refactor

- **base:** removed duplicate selector ([97f80fa](https://github.com/Siumauricio/rippleui/commit/97f80fa5859921cbb3919e2d6f7a302559fe208b))
- move the base to separate config ([b376066](https://github.com/Siumauricio/rippleui/commit/b376066599e8e230062f6abb951263d22b9798ea))
- set type to configValue ([a98490b](https://github.com/Siumauricio/rippleui/commit/a98490b2677e66d0fb2b3d2baca760431378da67))
- update colors type ([b52afd5](https://github.com/Siumauricio/rippleui/commit/b52afd5c76b88ffe8d78f7f977c9074eea0f047e))
- update themes type ([05440f6](https://github.com/Siumauricio/rippleui/commit/05440f67f4b4587f89b15265080a0c968fe7748b))

### [1.3.3](https://github.com/Siumauricio/rippleui/compare/v1.3.2...v1.3.3) (2022-12-26)

### Features

- **config:** utils function for convert and handle opacity ([45da8a1](https://github.com/Siumauricio/rippleui/commit/45da8a1e6317e0f85d8733d58ef95f2ee3d1ece3))

### Refactor

- **base:** removed base styles ([a40b60b](https://github.com/Siumauricio/rippleui/commit/a40b60b6a57ad2e629fe2a861e33e9a457ecc700))
- **button:** change button size props ([491921e](https://github.com/Siumauricio/rippleui/commit/491921e6af8489bf147182987012061b938cdaac))
- **components:** add rgb function to each variable ([5755038](https://github.com/Siumauricio/rippleui/commit/5755038ba01e80b1b4a4ade6f2448988a6117624))
- **config:** change type return to colors ([76574d9](https://github.com/Siumauricio/rippleui/commit/76574d9cabdb209fbf92c40731015865a8402933))
- **config:** convert hexa to rgb ([9ec6174](https://github.com/Siumauricio/rippleui/commit/9ec61744c856546205558afc0ce2b386174d6630))
- **config:** inject base bg and text color by default ([d0cb4d5](https://github.com/Siumauricio/rippleui/commit/d0cb4d5049bf49a6b637fc3fbd9c83ac509247f4))
- **config:** trigger function when color called ([68d8201](https://github.com/Siumauricio/rippleui/commit/68d82014126731a3571d7185f29f1639c4017530))
- **dropdown:** reduce z-index to z-49 ([df5e6ce](https://github.com/Siumauricio/rippleui/commit/df5e6ceb3c82c76081ca43f8a803f5d481193bc1))
- **modal:** increase z-index to be in front of navbar ([0fac4e0](https://github.com/Siumauricio/rippleui/commit/0fac4e0ca500a3700e3c53ac479b0b310886dc5d))
- **utilites:** add hide-scrollbar ([4bb05b9](https://github.com/Siumauricio/rippleui/commit/4bb05b9f8467f6bbcdca6e17cb2855573f988566))

### [1.3.2](https://github.com/Siumauricio/rippleui/compare/v1.3.1...v1.3.2) (2022-12-25)

### Bug Fixes

- add h-screen to drawer and overlay ([5e4c7b8](https://github.com/Siumauricio/rippleui/commit/5e4c7b877b2bba64698fe7c41245e620e7c21d4d))
- change disabled class to native disabled selector ([7b95eeb](https://github.com/Siumauricio/rippleui/commit/7b95eeb524c532b11b70f41bfc14c9fc5ca54466))
- **dropdown:** left and right positions stay at center ([0c2ca61](https://github.com/Siumauricio/rippleui/commit/0c2ca61e3840b61e3f35aa372d16708d24dfb515))

### Refactor

- **button:** set min-height ([260691a](https://github.com/Siumauricio/rippleui/commit/260691ac9ca218e04fa81b527494164f621308ea))
- reduced gap in navbar positions ([7a2f942](https://github.com/Siumauricio/rippleui/commit/7a2f942b079f9d14a89152a30c066c97b596b5b1))
- set display flex and set min-height by default ([2027922](https://github.com/Siumauricio/rippleui/commit/2027922659bb6d5b8f01e467437164f063f84d23))

### [1.3.1](https://github.com/Siumauricio/rippleui/compare/v1.3.0...v1.3.1) (2022-12-19)

### Features

- add layouts ([7475b58](https://github.com/Siumauricio/rippleui/commit/7475b58e0da519c6caa7baa065d468ff4ffdb52b))
- add mdx base components ([f88bf05](https://github.com/Siumauricio/rippleui/commit/f88bf050d613eba4f3d2cb8b732a71c354298662))
- add new docs components ([a90dfd4](https://github.com/Siumauricio/rippleui/commit/a90dfd47c0da214f4db2a8fb0c3ce1a19cc72eea))
- base components ([7608a88](https://github.com/Siumauricio/rippleui/commit/7608a88e4020c40258f9b73d3dc47956a6bb0bc0))
- codeblocks added ([a81d7c5](https://github.com/Siumauricio/rippleui/commit/a81d7c58fa017c3e79f13ffcbc34374d6eb926ef))
- components docs added ([6acc665](https://github.com/Siumauricio/rippleui/commit/6acc665887f08b1d38914d2997b76373f9e59e2d))
- document page ([3d37f4b](https://github.com/Siumauricio/rippleui/commit/3d37f4b30e71901da57d8050de37ca045275f819))
- fn to convert string to slug ([f982143](https://github.com/Siumauricio/rippleui/commit/f982143b6f76f5703a10240f4001d771c5a506ef))
- fn to get all paths of content dir ([31cab5d](https://github.com/Siumauricio/rippleui/commit/31cab5dcb3a3fbf3f9933ee7e49cf3bf863d5c3f))
- hook to copy content ([9cabe3c](https://github.com/Siumauricio/rippleui/commit/9cabe3cfe9b2dfbaf477256a2b95a977657b0d13))
- new icons ([23c8e5a](https://github.com/Siumauricio/rippleui/commit/23c8e5addabf98a106afdbefb677da9c90dba360))
- one dark theme pro ([102d097](https://github.com/Siumauricio/rippleui/commit/102d09713f365d6584751066b5c3a7e8975f1873))
- render mdx content of content dir ([bdee639](https://github.com/Siumauricio/rippleui/commit/bdee6398dedbd175a36188fbbc05dd6d364e71de))
- textarea docs ([3f59aee](https://github.com/Siumauricio/rippleui/commit/3f59aeeba2c12b290abb77216bdf3a90053edeb8))

### Bug Fixes

- duplicate dark query css ([a8bf967](https://github.com/Siumauricio/rippleui/commit/a8bf967f7a6a89a7e7743e46d304a7e4f3df8d9e))

### Refactor

- add active state to navbar ([201c806](https://github.com/Siumauricio/rippleui/commit/201c8066fd353e0114bfcd09b49373c3548b06b1))
- add by default color to p tag ([70ee73d](https://github.com/Siumauricio/rippleui/commit/70ee73d01f77942634cdd696fe8018da64095c3f))
- add layout to initial screen ([77b00b1](https://github.com/Siumauricio/rippleui/commit/77b00b169774f25f8cd7474e38678730eebd6307))
- add mdx path ([39f7499](https://github.com/Siumauricio/rippleui/commit/39f7499174c83ee7b6809babe7889799398dc4ec))
- add new components ([3ed1a37](https://github.com/Siumauricio/rippleui/commit/3ed1a37495e0dce6fbb3a7f7422646408c6a065f))
- add state and close on click item ([8146276](https://github.com/Siumauricio/rippleui/commit/81462764dfb691b0bdb44a4e9c907e758f4d0a83))
- add types to have a getLayout fn ([6069eb6](https://github.com/Siumauricio/rippleui/commit/6069eb6a84910cc5e9b36b1de34ff6fb77c1930e))
- change description to have more sense ([1f1e99c](https://github.com/Siumauricio/rippleui/commit/1f1e99ce93b68a037eec16c954185a5df052c917))
- change property names ([41d3f5b](https://github.com/Siumauricio/rippleui/commit/41d3f5bf457c25af43206d8cf25af4d8971d6b15))
- changed wrong title ([e61b6b4](https://github.com/Siumauricio/rippleui/commit/e61b6b401d85fe5c0ede83f52e1a6bbd9283e50b))
- move navbar to main wrapper to prevent modal and drawers go behind the nav ([b2f9294](https://github.com/Siumauricio/rippleui/commit/b2f929464389ccd97c07f0ca00254050903f1ddf))
- removed component item ([e1a48d5](https://github.com/Siumauricio/rippleui/commit/e1a48d587dd4d46312172b1c319966f8dc7f4177))
- removed layout dir ([081f4a5](https://github.com/Siumauricio/rippleui/commit/081f4a5d6d2d4e12187316fa4b86acc851d9ef04))

## [v1.3.1] - 2022-12-19

### :sparkles: New Features

- [`23c8e5a`](https://github.com/Siumauricio/rippleui/commit/23c8e5addabf98a106afdbefb677da9c90dba360) - new icons _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`7475b58`](https://github.com/Siumauricio/rippleui/commit/7475b58e0da519c6caa7baa065d468ff4ffdb52b) - add layouts _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`f88bf05`](https://github.com/Siumauricio/rippleui/commit/f88bf050d613eba4f3d2cb8b732a71c354298662) - add mdx base components _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`31cab5d`](https://github.com/Siumauricio/rippleui/commit/31cab5dcb3a3fbf3f9933ee7e49cf3bf863d5c3f) - fn to get all paths of content dir _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`9cabe3c`](https://github.com/Siumauricio/rippleui/commit/9cabe3cfe9b2dfbaf477256a2b95a977657b0d13) - hook to copy content _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`102d097`](https://github.com/Siumauricio/rippleui/commit/102d09713f365d6584751066b5c3a7e8975f1873) - one dark theme pro _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`3d37f4b`](https://github.com/Siumauricio/rippleui/commit/3d37f4b30e71901da57d8050de37ca045275f819) - document page _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`bdee639`](https://github.com/Siumauricio/rippleui/commit/bdee6398dedbd175a36188fbbc05dd6d364e71de) - render mdx content of content dir _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`f982143`](https://github.com/Siumauricio/rippleui/commit/f982143b6f76f5703a10240f4001d771c5a506ef) - fn to convert string to slug _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`7608a88`](https://github.com/Siumauricio/rippleui/commit/7608a88e4020c40258f9b73d3dc47956a6bb0bc0) - base components _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`a81d7c5`](https://github.com/Siumauricio/rippleui/commit/a81d7c58fa017c3e79f13ffcbc34374d6eb926ef) - codeblocks added _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`3f59aee`](https://github.com/Siumauricio/rippleui/commit/3f59aeeba2c12b290abb77216bdf3a90053edeb8) - textarea docs _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`a90dfd4`](https://github.com/Siumauricio/rippleui/commit/a90dfd47c0da214f4db2a8fb0c3ce1a19cc72eea) - add new docs components _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`6acc665`](https://github.com/Siumauricio/rippleui/commit/6acc665887f08b1d38914d2997b76373f9e59e2d) - components docs added _(commit by [@Siumauricio](https://github.com/Siumauricio))_

### :bug: Bug Fixes

- [`a8bf967`](https://github.com/Siumauricio/rippleui/commit/a8bf967f7a6a89a7e7743e46d304a7e4f3df8d9e) - duplicate dark query css _(commit by [@Siumauricio](https://github.com/Siumauricio))_

### :recycle: Refactors

- [`39f7499`](https://github.com/Siumauricio/rippleui/commit/39f7499174c83ee7b6809babe7889799398dc4ec) - add mdx path _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`6069eb6`](https://github.com/Siumauricio/rippleui/commit/6069eb6a84910cc5e9b36b1de34ff6fb77c1930e) - add types to have a getLayout fn _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`77b00b1`](https://github.com/Siumauricio/rippleui/commit/77b00b169774f25f8cd7474e38678730eebd6307) - add layout to initial screen _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`081f4a5`](https://github.com/Siumauricio/rippleui/commit/081f4a5d6d2d4e12187316fa4b86acc851d9ef04) - removed layout dir _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`e61b6b4`](https://github.com/Siumauricio/rippleui/commit/e61b6b401d85fe5c0ede83f52e1a6bbd9283e50b) - changed wrong title _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`41d3f5b`](https://github.com/Siumauricio/rippleui/commit/41d3f5bf457c25af43206d8cf25af4d8971d6b15) - change property names _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`e1a48d5`](https://github.com/Siumauricio/rippleui/commit/e1a48d587dd4d46312172b1c319966f8dc7f4177) - removed component item _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`1f1e99c`](https://github.com/Siumauricio/rippleui/commit/1f1e99ce93b68a037eec16c954185a5df052c917) - change description to have more sense _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`b2f9294`](https://github.com/Siumauricio/rippleui/commit/b2f929464389ccd97c07f0ca00254050903f1ddf) - move navbar to main wrapper to prevent modal and drawers go behind the nav _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`3ed1a37`](https://github.com/Siumauricio/rippleui/commit/3ed1a37495e0dce6fbb3a7f7422646408c6a065f) - add new components _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`8146276`](https://github.com/Siumauricio/rippleui/commit/81462764dfb691b0bdb44a4e9c907e758f4d0a83) - add state and close on click item _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`201c806`](https://github.com/Siumauricio/rippleui/commit/201c8066fd353e0114bfcd09b49373c3548b06b1) - add active state to navbar _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`70ee73d`](https://github.com/Siumauricio/rippleui/commit/70ee73d01f77942634cdd696fe8018da64095c3f) - add by default color to p tag _(commit by [@Siumauricio](https://github.com/Siumauricio))_

### :wrench: Chores

- [`eda0320`](https://github.com/Siumauricio/rippleui/commit/eda0320d8ef30bb86387d26f3f73a9f31b5952dd) - add packages for mdx _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`f448ca3`](https://github.com/Siumauricio/rippleui/commit/f448ca3dff33a2c5e055c61f87240a54cb937e7a) - add gradient bg _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`75344bb`](https://github.com/Siumauricio/rippleui/commit/75344bbb69a2bd52e83a1819ad7368244dc7a6cd) - **docs**: :arrow*up: upgrade rippleui package *(commit by [@Siumauricio](https://github.com/Siumauricio))\_
- [`9cb4e58`](https://github.com/Siumauricio/rippleui/commit/9cb4e5879e50820f9e4615ef24f9d1522aa61db1) - add versionrc config _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`56de9a9`](https://github.com/Siumauricio/rippleui/commit/56de9a988a81404f4139426d1524d6e0b10f1799) - add types for prevent takes docs dir _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`94bd1e0`](https://github.com/Siumauricio/rippleui/commit/94bd1e03dec8f4881625d5517995e410156ecdaf) - **release**: 1.3.1 _(commit by [@Siumauricio](https://github.com/Siumauricio))_

## [1.3.0](https://github.com/Siumauricio/rippleui/compare/v1.2.2...v1.3.0) (2022-12-15)

### Features

- alert component ([a453e35](https://github.com/Siumauricio/rippleui/commit/a453e35d7d99ea612f95f93e46e86565492a8f03))
- card component ([b891366](https://github.com/Siumauricio/rippleui/commit/b8913666cdadf32677271d4ff625629cf029e314))
- drawer component ([89082c2](https://github.com/Siumauricio/rippleui/commit/89082c250ab10eefa40ad8a6041edfeb35c8036d))
- table component ([a4aa301](https://github.com/Siumauricio/rippleui/commit/a4aa3011d1af1e1f3f5c76f13e48b567d067e899))

### [1.2.2](https://github.com/Siumauricio/rippleui/compare/v1.2.1...v1.2.2) (2022-12-14)

### Features

- breadcrumb component ([c65ef71](https://github.com/Siumauricio/rippleui/commit/c65ef71da68e8b7a76571a8a3511362de638992f))

## [v1.2.2] - 2022-12-14

### :sparkles: New Features

- [`c65ef71`](https://github.com/Siumauricio/rippleui/commit/c65ef71da68e8b7a76571a8a3511362de638992f) - breadcrumb component _(commit by [@Siumauricio](https://github.com/Siumauricio))_

### :wrench: Chores

- [`9ec7777`](https://github.com/Siumauricio/rippleui/commit/9ec7777c20c20e3f9716eba07f8c08d666b42d80) - update docs _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`88553d1`](https://github.com/Siumauricio/rippleui/commit/88553d1c4a85ce764b3a486bd9d32dc533b7e06e) - update logo _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`c40dfd5`](https://github.com/Siumauricio/rippleui/commit/c40dfd55dc961dd66d67212b0940bae4ca9c465a) - breadcrumb component _(commit by [@Siumauricio](https://github.com/Siumauricio))_
- [`40731fd`](https://github.com/Siumauricio/rippleui/commit/40731fd3260809883b4cc4746a9846f318930dab) - **release**: 1.2.2 _(commit by [@Siumauricio](https://github.com/Siumauricio))_

## [1.2.0](https://github.com/Siumauricio/rippleui/compare/v1.1.0...v1.2.0) (2022-12-08)

### Features

- avatar component ([8e3285c](https://github.com/Siumauricio/rippleui/commit/8e3285c3a97f514e281dc8dbc50bc353a39fa12d))
- navbar component ([896543c](https://github.com/Siumauricio/rippleui/commit/896543cc8a48cdc013a8149f8b5802adf86a05c2))

### Bug Fixes

- remove truncate for not break dropdown or tooltips ([8a7b513](https://github.com/Siumauricio/rippleui/commit/8a7b513f4a4dcc578ca5a21c80a35c3f11f7539c))

## [1.1.0](https://github.com/Siumauricio/rippleui/compare/v1.0.0...v1.1.0) (2022-12-07)

### Features

- badge component ([7a403f1](https://github.com/Siumauricio/rippleui/commit/7a403f16897ea5b30ff9db7c573753842670201a))
- button-group component ([6f22df2](https://github.com/Siumauricio/rippleui/commit/6f22df2fb13237651e9613492a76ae6c2bef7190))
- checkbox component ([606ce9b](https://github.com/Siumauricio/rippleui/commit/606ce9b4934d5cb36fe4af5023b560deac5d137f))
- dropdown component ([2597a6d](https://github.com/Siumauricio/rippleui/commit/2597a6da725030cec8207edee05541206f677d3b))
- modal component ([a954055](https://github.com/Siumauricio/rippleui/commit/a95405554a29b9476de4dfefbee5c7529aff77e2))
- radio component ([688b796](https://github.com/Siumauricio/rippleui/commit/688b79602aca5b537c3e19c812ce05ef1679fbce))
- select component ([d72b170](https://github.com/Siumauricio/rippleui/commit/d72b1702e694337eb0aaed5e772f916e02962532))
- switch component ([a484c09](https://github.com/Siumauricio/rippleui/commit/a484c09b8b46a552e0321fa148fe5d2ab023d598))
- textarea component ([17e1deb](https://github.com/Siumauricio/rippleui/commit/17e1deb59d579634fb0961826dce9e71e1953460))
- tooltip component ([2995b66](https://github.com/Siumauricio/rippleui/commit/2995b6625c374b5721e8ead99d93ea1c86dbe8a6))

### Bug Fixes

- remove scroll when modal opened, remove lag issues on IOS ([c759cc7](https://github.com/Siumauricio/rippleui/commit/c759cc761b3ee05dcd55086a9b79a9dd171dc049))

## 1.0.0 (2022-12-03)

### Features

- add background, text and primary colors to each color-schema ([c68234b](https://github.com/Siumauricio/rippleui/commit/c68234b1902ccea44bae765234c21c7ddf202ed3))
- add base css variables ([85c461e](https://github.com/Siumauricio/rippleui/commit/85c461e378e0e551433233f154ef3423ee20b73a))
- add btn styles ([87af1bf](https://github.com/Siumauricio/rippleui/commit/87af1bf0fe7fc34a51bd78794413f9ee73523a8d))
- add dist source ([b260325](https://github.com/Siumauricio/rippleui/commit/b260325871c5410606ba978306a9fc4c404ec4ca))
- add docs website ([773aa3e](https://github.com/Siumauricio/rippleui/commit/773aa3e186e65d8a1299201e54e9439d94dbe68d))
- add initial project ([33906aa](https://github.com/Siumauricio/rippleui/commit/33906aa61e21ff479cd1089520b357010be85c0b))
- add input base css ([bb8756a](https://github.com/Siumauricio/rippleui/commit/bb8756a299cf34475d3ff5ddef334fbd3d399ae7))
- add input css ([0d182e1](https://github.com/Siumauricio/rippleui/commit/0d182e1c7b41ea3b6ab58373a856f8397cacf6de))
- add light colors ([d2be926](https://github.com/Siumauricio/rippleui/commit/d2be926efc3337a80291c4f23dfa8b6fafd270a3))
- add script to minify js code ([ba04efa](https://github.com/Siumauricio/rippleui/commit/ba04efaa6212a1fa4b1833d047e557cd7eb7fca9))
- add tailwind config ([5cf1852](https://github.com/Siumauricio/rippleui/commit/5cf18529670e5afb383acda16350d0b462b79ff7))
- add theme-change for dark mode ([52f2d4c](https://github.com/Siumauricio/rippleui/commit/52f2d4cda2c45ae0d69e02adfe21e1b34a106861))
- create each layer ([fc732bb](https://github.com/Siumauricio/rippleui/commit/fc732bb3c597c2b109b3290cc9d4df95ea452222))
- finish button ([d0e99b1](https://github.com/Siumauricio/rippleui/commit/d0e99b1b10c0709a0fd5fd19f2ed411acfe2de83))

### Bug Fixes

- remove text breaking cause by w-fit ([b5c3d8b](https://github.com/Siumauricio/rippleui/commit/b5c3d8b42ba742f68c7dcef96c32eb9eded372fe))
- resolve the path of each css layer ([3e43031](https://github.com/Siumauricio/rippleui/commit/3e43031e81d628fad997f03ec00fae7f33a0c0d1))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

[v1.1.0]: https://github.com/Siumauricio/rippleui/compare/v1.0.0...v1.1.0
[v1.2.0]: https://github.com/Siumauricio/rippleui/compare/v1.1.0...v1.2.0
[v1.2.2]: https://github.com/Siumauricio/rippleui/compare/v1.2.1...v1.2.2
[v1.3.0]: https://github.com/Siumauricio/rippleui/compare/v1.2.2...v1.3.0
[v1.3.1]: https://github.com/Siumauricio/rippleui/compare/v1.3.0...v1.3.1
