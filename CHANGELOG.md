# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.8...v1.2.0) (2022-01-14)

# [1.2.0-alpha.8](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.7...v1.2.0-alpha.8) (2021-12-16)


### Bug Fixes

* 修复日志文件可能不存在的问题 ([235c66c](https://github.com/ben-lau/task-workflow/commit/235c66c988603227c4abd1eab5c4712b72b4af05))



# [1.2.0-alpha.7](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.6...v1.2.0-alpha.7) (2021-12-16)


### Bug Fixes

* 修复合并文件无法保持自己分支的问题,修改日志为同步写入 ([3307e3c](https://github.com/ben-lau/task-workflow/commit/3307e3c78c14a7405f9e87c6d9b9e9a37b545c78))



# [1.2.0-alpha.6](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.5...v1.2.0-alpha.6) (2021-12-13)


### Bug Fixes

* 修复部分提示文案,添加shell命令参数 ([50ad50d](https://github.com/ben-lau/task-workflow/commit/50ad50d60a2848447876e0d2adf99c5e159fcab2))



# [1.2.0-alpha.5](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.4...v1.2.0-alpha.5) (2021-12-13)


### Bug Fixes

* 修复合并冲突的提交信息错误问题 ([9df5277](https://github.com/ben-lau/task-workflow/commit/9df527745a1aebc9fcfbdb75f0c5fa2aeadae84f))



# [1.2.0-alpha.4](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.3...v1.2.0-alpha.4) (2021-12-13)


### Bug Fixes

* 修复error日志 ([d952c9f](https://github.com/ben-lau/task-workflow/commit/d952c9fba900540d31d48a0b8b7a13146f86d93f))



# [1.2.0-alpha.3](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.2...v1.2.0-alpha.3) (2021-12-09)


### Features

* 添加检出文件功能,并在合并方法内嵌入检出文件 ([acda6af](https://github.com/ben-lau/task-workflow/commit/acda6afda5f258fa58f5a04559c3e616300107b9))



# [1.2.0-alpha.2](https://github.com/ben-lau/task-workflow/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2021-11-25)



# [1.2.0-alpha.1](https://github.com/ben-lau/task-workflow/compare/v1.1.10...v1.2.0-alpha.1) (2021-11-20)


### Features

* 重构日志系统,修改shell实现,修改部分逻辑,添加执行埋点 ([d74166c](https://github.com/ben-lau/task-workflow/commit/d74166cfe3581a70c26f48b8b3452a6540237f4e))



## [1.1.10](https://github.com/ben-lau/task-workflow/compare/v1.1.9...v1.1.10) (2021-11-09)


### Bug Fixes

* 修复原有workstart在全局上无法获取项目内部workflow静态属性的问题 ([efa7443](https://github.com/ben-lau/task-workflow/commit/efa744332f0f61e5da5b8efc06f1e76024b0fb7f))



## [1.1.9](https://github.com/ben-lau/task-workflow/compare/v1.1.8...v1.1.9) (2021-11-04)


### Bug Fixes

* 修复compose已知问题,修改部分类型 ([bc304ae](https://github.com/ben-lau/task-workflow/commit/bc304aed97b4ccdedf71aab85775a10c3416b547))



## [1.1.8](https://github.com/ben-lau/task-workflow/compare/v1.1.7...v1.1.8) (2021-10-20)


### Bug Fixes

* 修复loading遮罩了询问的问题 ([f838e56](https://github.com/ben-lau/task-workflow/commit/f838e56fee5cc1295962390abf92ecaf9e3869ba))



## [1.1.7](https://github.com/ben-lau/task-workflow/compare/v1.1.6...v1.1.7) (2021-10-20)


### Features

* 新增提交检测更改数 ([e06d88e](https://github.com/ben-lau/task-workflow/commit/e06d88e2410abe50bb95d75d1a85dcf14c3b7394))



## [1.1.6](https://github.com/ben-lau/task-workflow/compare/v1.1.5...v1.1.6) (2021-08-31)


### Bug Fixes

* 回退原有冲突检测 ([1008d9c](https://github.com/ben-lau/task-workflow/commit/1008d9c89937685773516918371ac1e407a79e8b))



## [1.1.5](https://github.com/ben-lau/task-workflow/compare/v1.1.4...v1.1.5) (2021-08-31)


### Bug Fixes

* 修复冲突检测判断问题 ([57f3f5c](https://github.com/ben-lau/task-workflow/commit/57f3f5ce853cd415a85f60b2c48946d29a091752))



## [1.1.4](https://github.com/ben-lau/task-workflow/compare/v1.1.3...v1.1.4) (2021-08-31)


### Bug Fixes

* 修复冲突检测可能会在无意义空格中提示 ([dd33b7f](https://github.com/ben-lau/task-workflow/commit/dd33b7f1441151acfabaa2cbbfbc5bc253b955b9))



## [1.1.3](https://github.com/ben-lau/task-workflow/compare/v1.1.2...v1.1.3) (2021-08-27)


### Bug Fixes

* 修复pull时可能没远程分支的判断 ([69dd4a3](https://github.com/ben-lau/task-workflow/commit/69dd4a389ee354fba9e3dc674f7c078e0acb6bea))



## [1.1.2](https://github.com/ben-lau/task-workflow/compare/v1.1.1...v1.1.2) (2021-08-02)


### Bug Fixes

* 修复merge和pull在某些情况不进入报错 ([5dca20f](https://github.com/ben-lau/task-workflow/commit/5dca20ff0e3ae0c1a7f72adec84309a675fba9ad))



## [1.1.1](https://github.com/ben-lau/task-workflow/compare/v1.1.0...v1.1.1) (2021-05-21)


### Bug Fixes

* 修复gitInSlinent ([5fea8f9](https://github.com/ben-lau/task-workflow/commit/5fea8f9f5a616fd9cda4ae95a5c1456811e5b919))



# [1.1.0](https://github.com/ben-lau/task-workflow/compare/v1.0.30...v1.1.0) (2021-05-21)


### Bug Fixes

* 修复git方法永不走catch的问题,重置shell.run指令,新增shell.exec指令 ([fd0a1aa](https://github.com/ben-lau/task-workflow/commit/fd0a1aa3eab882ee75cb2ec9d5473b0654faf700))



## [1.0.30](https://github.com/ben-lau/task-workflow/compare/v1.0.29...v1.0.30) (2021-05-13)


### Bug Fixes

* shell.run 支持输出颜色 ([6ad11c2](https://github.com/ben-lau/task-workflow/commit/6ad11c2d35eef890c4f05dd1caa6e1c3b8b83468))



## [1.0.29](https://github.com/ben-lau/task-workflow/compare/v1.0.28...v1.0.29) (2021-03-11)


### Bug Fixes

* 修复非英文环境git的冲突检查问题 ([f613437](https://github.com/ben-lau/task-workflow/commit/f613437d295816e699cdd99d353c18633d40af48))



## [1.0.28](https://github.com/ben-lau/task-workflow/compare/v1.0.27...v1.0.28) (2021-03-03)


### Features

* 新增获取用户配置方法 ([1736986](https://github.com/ben-lau/task-workflow/commit/1736986b6f719d3744034b069559966957c255fc))



## [1.0.27](https://github.com/ben-lau/task-workflow/compare/v1.0.26...v1.0.27) (2021-02-19)


### Features

* merge增加fast forward可选参数 ([a8b9e72](https://github.com/ben-lau/task-workflow/commit/a8b9e7242d7d2f6e986f47fd0ec66d0cf4b6d36d))



## [1.0.26](https://github.com/ben-lau/task-workflow/compare/v1.0.25...v1.0.26) (2021-02-03)


### Bug Fixes

* 修复检出本地分支的问题 ([71898b6](https://github.com/ben-lau/task-workflow/commit/71898b6b82e646e834d74d04a82ce8d12f64c000))



## [1.0.25](https://github.com/ben-lau/task-workflow/compare/v1.0.24...v1.0.25) (2021-01-09)


### Bug Fixes

* 修复分支不存在时的报错问题 ([6e73141](https://github.com/ben-lau/task-workflow/commit/6e73141d508e34738d58175f0657b793480269db))



## [1.0.24](https://github.com/ben-lau/task-workflow/compare/v1.0.23...v1.0.24) (2021-01-08)


### Bug Fixes

* 修复强推询问的问题 ([ebb3dd4](https://github.com/ben-lau/task-workflow/commit/ebb3dd4845dcb2e25cad2687482f75f7534a4443))



## [1.0.23](https://github.com/ben-lau/task-workflow/compare/v1.0.22...v1.0.23) (2021-01-07)


### Bug Fixes

* 修复引用路径无效的问题 ([83c9903](https://github.com/ben-lau/task-workflow/commit/83c99038a9713d20a894cb0aab5304795bf79d23))



## [1.0.22](https://github.com/ben-lau/task-workflow/compare/v1.0.21...v1.0.22) (2021-01-06)


### Bug Fixes

* 修复强推指令问题 ([230e109](https://github.com/ben-lau/task-workflow/commit/230e109a8e62ffc08aa9581542442d89650515a8))



## [1.0.21](https://github.com/ben-lau/task-workflow/compare/v1.0.20...v1.0.21) (2021-01-06)


### Bug Fixes

* 修复获取文件列表方法返回 ([7f633f9](https://github.com/ben-lau/task-workflow/commit/7f633f99db805d837adaae01129b071f187a1db1))



## [1.0.20](https://github.com/ben-lau/task-workflow/compare/v1.0.19...v1.0.20) (2021-01-06)


### Features

* 新增部分git方法和fs方法,修复一些参数bug ([c406bac](https://github.com/ben-lau/task-workflow/commit/c406bac96be3e7d48c971aa64681d39ceb9b0d97))



## [1.0.19](https://github.com/ben-lau/task-workflow/compare/v1.0.18...v1.0.19) (2021-01-05)


### Bug Fixes

* 修复提交信息引号位置问题 ([6abb5fb](https://github.com/ben-lau/task-workflow/commit/6abb5fb9f6c7e720ea647f566c5fe5784fee414a))



## [1.0.18](https://github.com/ben-lau/task-workflow/compare/v1.0.17...v1.0.18) (2021-01-05)


### Bug Fixes

* 允许merge传入信息 ([c527763](https://github.com/ben-lau/task-workflow/commit/c527763df62d634a297cdfd8595c3c6b69729561))



## [1.0.17](https://github.com/ben-lau/task-workflow/compare/v1.0.16...v1.0.17) (2021-01-05)


### Bug Fixes

* 优化合并时提交信息 ([e00fb4d](https://github.com/ben-lau/task-workflow/commit/e00fb4d08240833190298024208143ac320eb943))



## [1.0.16](https://github.com/ben-lau/task-workflow/compare/v1.0.15...v1.0.16) (2021-01-04)



## [1.0.15](https://github.com/ben-lau/task-workflow/compare/v1.0.14...v1.0.15) (2021-01-04)


### Bug Fixes

* 添加错误退出码 ([74f7be0](https://github.com/ben-lau/task-workflow/commit/74f7be0948e5bb47e7057a5231023526e8c0e663))



## [1.0.14](https://github.com/ben-lau/task-workflow/compare/v1.0.13...v1.0.14) (2021-01-04)


### Features

* 新增部分获取上次提交方法,修改克隆提示,修改命令名称 ([80af240](https://github.com/ben-lau/task-workflow/commit/80af240621d68daf0f7592807bbab8a0b55bdcea))



## [1.0.13](https://github.com/ben-lau/task-workflow/compare/v1.0.12...v1.0.13) (2020-12-22)


### Bug Fixes

* 修复获取待提交不包含合并的问题 ([49e6e70](https://github.com/ben-lau/task-workflow/commit/49e6e706f7da246940ba00fdf376e7bdd64ab84e))



## [1.0.12](https://github.com/ben-lau/task-workflow/compare/v1.0.11...v1.0.12) (2020-12-22)


### Bug Fixes

* 修复错误打印的问题 ([fcbcc38](https://github.com/ben-lau/task-workflow/commit/fcbcc389d6b3a8209147948154d4ac21fea9056f))



## [1.0.11](https://github.com/ben-lau/task-workflow/compare/v1.0.10...v1.0.11) (2020-12-22)


### Bug Fixes

* 修改部分提示友好度,修复合并方法没拉远程分支问题,移除无用模块打包 ([3c75982](https://github.com/ben-lau/task-workflow/commit/3c75982c5ba237648e2daece8ff79c4968b3e2ce))



## [1.0.10](https://github.com/ben-lau/task-workflow/compare/v1.0.9...v1.0.10) (2020-12-22)


### Bug Fixes

* 修复merge request打不开的问题 ([a29f916](https://github.com/ben-lau/task-workflow/commit/a29f916dfe76a864f5361ad996eafa1e881bcda5))



## [1.0.9](https://github.com/ben-lau/task-workflow/compare/v1.0.8...v1.0.9) (2020-12-22)


### Features

* 新增 git status ([a0e04fc](https://github.com/ben-lau/task-workflow/commit/a0e04fca4345fe76c5d85366a3deb096cd31b916))



## [1.0.8](https://github.com/ben-lau/task-workflow/compare/v1.0.7...v1.0.8) (2020-12-22)


### Features

* 新增mr提示,常量模块分层,shell命令输出到控制台 ([2d0560c](https://github.com/ben-lau/task-workflow/commit/2d0560c79115395da0f88d10f8f5003c511158e3))
* 更改文档,新增skip选项 ([f4a3594](https://github.com/ben-lau/task-workflow/commit/f4a359436796ecc819c16cc31f17ef88cb31a792))



## [1.0.7](https://github.com/ben-lau/task-workflow/compare/v1.0.6...v1.0.7) (2020-12-21)


### Features

* 新增git config方法 ([46829e8](https://github.com/ben-lau/task-workflow/commit/46829e8717135237ae493efda95361fc8ef01254))



## [1.0.6](https://github.com/ben-lau/task-workflow/compare/v1.0.5...v1.0.6) (2020-12-17)


### Bug Fixes

* 修复进入路径和创建文件夹的bug ([55530b6](https://github.com/ben-lau/task-workflow/commit/55530b66bf6d45237585dbfde2587ade11fc37f9))



## [1.0.5](https://github.com/ben-lau/task-workflow/compare/v1.0.4...v1.0.5) (2020-12-17)


### Features

* 修改分支名实现 ([44be4f3](https://github.com/ben-lau/task-workflow/commit/44be4f381120ac0885ace4880a4f5dc9ef516dbb))



## [1.0.4](https://github.com/ben-lau/task-workflow/compare/v1.0.3...v1.0.4) (2020-12-17)


### Bug Fixes

* 回退获取分支名实现,优化了指令错误提示 ([a176a11](https://github.com/ben-lau/task-workflow/commit/a176a11a68d605311a75557e8ee10c196795ec5a))
* 更改获取分支名的任务实现 ([9cde2c5](https://github.com/ben-lau/task-workflow/commit/9cde2c5fd20af1955b204902dd3194c6234c5472))



## [1.0.3](https://github.com/ben-lau/task-workflow/compare/v1.0.2...v1.0.3) (2020-12-17)


### Bug Fixes

* 修改获取当前分支名的指令 ([1ff82a6](https://github.com/ben-lau/task-workflow/commit/1ff82a611353a7734743a75df16a6a2e5bda712d))



## [1.0.2](https://github.com/ben-lau/task-workflow/compare/v1.0.1...v1.0.2) (2020-12-17)


### Bug Fixes

* 修改克隆流程 ([8f85648](https://github.com/ben-lau/task-workflow/commit/8f8564894f7af2efb4f94270275ff74617ec72c7))
* 修改指令 ([33679f7](https://github.com/ben-lau/task-workflow/commit/33679f7f4dd86328fc04f2ec04c26f7dcb39db0e))


### Features

* 增加克隆任务 ([7d9cdd9](https://github.com/ben-lau/task-workflow/commit/7d9cdd99dcca6dcd36a0ad42c789d3793be70bb6))
* 新增克隆任务,增加传入promise函数参数支持 ([3aae44a](https://github.com/ben-lau/task-workflow/commit/3aae44ab4537658cb3cf9a16c709d2a00a5146d9))



## [1.0.1](https://github.com/ben-lau/task-workflow/compare/v1.0.0...v1.0.1) (2020-12-14)


### Bug Fixes

* 修复获取当前分支的问题 ([ce0316e](https://github.com/ben-lau/task-workflow/commit/ce0316e68679db24465e302e365d702a98e4945f))



# [1.0.0](https://github.com/ben-lau/task-workflow/compare/9d51157014eb65776b4f6d95893f7bfa40374141...v1.0.0) (2020-12-14)


### Bug Fixes

* **doc.drawio:** 流程图背景修改 ([9d51157](https://github.com/ben-lau/task-workflow/commit/9d51157014eb65776b4f6d95893f7bfa40374141))
* 修复判断是否存在本地分支的bug ([2fb1192](https://github.com/ben-lau/task-workflow/commit/2fb1192ee88f3b0ff37656cda772351755979fa2))
* 修复合并时message规范 ([e04fdf0](https://github.com/ben-lau/task-workflow/commit/e04fdf05fdc3c641d050326d3451a72167ed3f2d))


### Features

* 修改了一些工具方法，尝试了一些初始化手段 ([60680ae](https://github.com/ben-lau/task-workflow/commit/60680ae05c82199519f3d111b79891a072343edd))
* 基本完成流程闭环,新增流程类和方法型任务创建器 ([b34cada](https://github.com/ben-lau/task-workflow/commit/b34cadaddccee97cb36a7466081e2332a720e3d4))
* 完善一些api和尝试了一些配置 ([f06f8af](https://github.com/ben-lau/task-workflow/commit/f06f8afcf0427733cc0be90ab4e90c72dd4d96b6))
* 更新流程图和一些配置 ([1e4a734](https://github.com/ben-lau/task-workflow/commit/1e4a73477f20b3d7e985276b44a632ed5183f950))
