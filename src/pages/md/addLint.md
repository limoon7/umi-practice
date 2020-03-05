# 需要在各个项目中增加 lint

[toc]

## 项目范围

- [x] 1. ui 库：ui 通用组件 -branch develop
  - [x] eslint
  - [x] commitlint
  - [x] prettier
  - [x] stylelint
- [x] 2. utils 库：工具集 -branch develop
  - [x] eslint
  - [x] commitlint
- [x] 3. new-ui 库：taro 实现小程序+h5 -branch develop
  - [x] eslint (使用项目原有)
  - [x] commitlint
  - [x] prettier
  - [x] stylelint
- [x] 4. api 库：ui 组件 -branch develop
  - [x] eslint
  - [x] commitlint
  - [x] prettier
- [x] 5. points 库：ui 组件 -branch develop
  - [x] eslint
  - [x] commitlint
  - [x] prettier
- [x] 6. taskbox 库：ui 组件 -branch develop
  - [x] eslint
  - [x] commitlint
  - [x] prettier
  - [x] stylelint

* [x] 7. mine》个人中心 -branch develop
  - [x] eslint (使用项目原有)
  - [x] commitlint
  - [x] prettier
  - [x] stylelint
* [x] 8. sf-channel》频道页：现有的一些 活动页也在其中，如今日值得抢，新品时令，七鲜餐桌等 -branch develop
  - [x] commitlint
  - [x] prettier(使用项目原有)
  - [x] stylelint
* [x] 9. sf-activity》一些活动：如订单抽大奖，top100，N 件 M 元等 -branch develop
  - [x] eslint (使用项目原有)
  - [x] commitlint
  - [x] prettier
  - [x] stylelint
* [x] 10. 老 m 站》一些订单页，菜谱页，售后页，余额页，优惠券页。非组件搭建而成。 -branch develop
  - [x] commitlint
* [x] 11. fight-group》拼团业务 -branch develop
  - [x] eslint (使用项目原有)
  - [x] commitlint
  - [x] prettier
  - [x] stylelint
* [x] 12. groupon-game》接龙业务 -branch develop
  - [x] eslint (使用项目原有)
  - [x] commitlint
  - [x] prettier
  - [x] stylelint
* [ ] 13. 7freh-minapp-taro》小程序 -branch develop-addLint
  - [x] eslint (使用项目原有)
  - [x] commitlint
  - [x] prettier
  - [x] stylelint
  - [ ] pre-commit 有一些问题
* [x] 14. mstone：魔法石改版 -branch develop
  - [x] commitlint

## eslint

eslint 校验使用 eslint-config-airbnb 的规则进行校验。如果有自定义配置可以在 rules 中写入。

"off" 或者 0：关闭规则。

"warn" 或者 1：打开规则，并且作为一个警告（不影响 exit code）。

"error" 或者 2：打开规则，并且作为一个错误（exit code 将会是 1）

```
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  rules: {
    'prettier/prettier': 'error',
    "quotes": [2, "single"], //单引号
    "no-console": 0, //不禁用console
    "no-debugger": 2, //禁用debugger
    "no-var": 0, //对var警告
    "semi": 0, //不强制使用分号
    "no-irregular-whitespace": 0, //不规则的空白不允许
    "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
    "eol-last": 0, //文件以单一的换行符结束
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    "no-underscore-dangle": 0, //标识符不能以_开头或结尾
    "no-alert": 2, //禁止使用alert confirm prompt
    "no-lone-blocks": 0, //禁止不必要的嵌套块
    "no-class-assign": 2, //禁止给类赋值
    "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-dupe-args": 2, //函数参数不能重复
    "no-empty": 2, //块语句中的内容不能为空
    "no-func-assign": 2, //禁止重复的函数声明
    "no-invalid-this": 0, //禁止无效的this，只能用在构造器，类，对象字面量
    "no-redeclare": 2, //禁止重复声明变量
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-this-before-super": 0, //在调用super()之前不能使用this或super
    "no-undef": 2, //不能有未定义的变量
    "no-use-before-define": 2, //未定义前不能使用
    "camelcase": 0, //强制驼峰法命名
    "jsx-quotes": [2, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    "react/display-name": 0, //防止在React组件定义中丢失displayName
    "react/forbid-prop-types": [2, {"forbid": ["any"]}], //禁止某些propTypes
    "react/jsx-boolean-value": 2, //在JSX中强制布尔属性符号
    "react/jsx-closing-bracket-location": 1, //在JSX中验证右括号位置
    "react/jsx-curly-spacing": [2, {"when": "never", "children": true}], //在JSX属性和表达式中加强或禁止大括号内的空格。
    "react/jsx-indent-props": [2, 4], //验证JSX中的props缩进
    "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    "react/jsx-max-props-per-line": [1, {"maximum": 1}], // 限制JSX中单行上的props的最大数量
    "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
    "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
    "react/jsx-no-literals": 0, //防止使用未包装的JSX字符串
    "react/jsx-no-undef": 1, //在JSX中禁止未声明的变量
    "react/jsx-pascal-case": 0, //为用户定义的JSX组件强制使用PascalCase
    "react/jsx-sort-props": 2, //强化props按字母排序
    "react/jsx-uses-react": 1, //防止反应被错误地标记为未使用
    "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    "react/no-danger": 0, //防止使用危险的JSX属性
    "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
    "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
    "react/no-direct-mutation-state": 2, //防止this.state的直接变异
    "react/no-multi-comp": 2, //防止每个文件有多个组件定义
    "react/no-set-state": 0, //防止使用setState
    "react/no-unknown-property": 2, //防止使用未知的DOM属性
    "react/prefer-es6-class": 2, //为React组件强制执行ES5或ES6类
    "react/prop-types": 0, //防止在React组件定义中丢失props验证
    "react/react-in-jsx-scope": 2, //使用JSX时防止丢失React
    "react/self-closing-comp": 0, //防止没有children的组件的额外结束标签
    "react/sort-comp": 2, //强制组件方法顺序
    "no-extra-boolean-cast": 0, //禁止不必要的bool转换
    "react/no-array-index-key": 0, //防止在数组中遍历中使用数组key做索引
    "react/no-deprecated": 1, //不使用弃用的方法
    "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
    "no-unreachable": 1, //不能有无法执行的代码
    "comma-dangle": 2, //对象字面量项尾不能有逗号
    "no-mixed-spaces-and-tabs": 0, //禁止混用tab和空格
    "prefer-arrow-callback": 0, //比较喜欢箭头回调
    "arrow-parens": 0, //箭头函数用小括号括起来
    "arrow-spacing": 0 //=>的前/后括号
  }
}

```

## commit

Commit message 格式

```
type(scope?): subject

注意冒号后面有空格。
```

可参照 [commitlint rules](https://commitlint.js.org/#/reference-rules) 进行自定义配置

规则由名称和配置数组组成，配置数组包含 [level,applicable,value]

1. Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error.
2. Applicable always|never: never inverts the rule.
3. Value: value to use for this rule.

rule 由 name 和配置数组组成，如：'name:[0, 'always', 72]'，数组中第一位为 level，可选 0,1,2，0 为 disable，1 为 warning，2 为 error，第二位为应用与否，可选 always|never，第三位为该 rule 的值。

比如我们的 type 配置为 `'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert', 'test']],`,如果 type 的类型不在上述规则的枚举中，commit 信息的时候会报错,并且无法 commit，配置为 0 会忽视直接 commit，配置为 1 会提示 warning，但仍能 commit

## pretter

```
module.exports = {
  "printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80
  "tabWidth": 2, //一个tab代表几个空格数，默认为80
  "useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  "singleQuote": false, //字符串是否使用单引号，默认为false，使用双引号
  "jsxSingleQuote": true, // jsx文件字符串使用单引号
  "jsxBracketSameLine": true,
  "semi": false, //行位是否使用分号，默认为true
  "trailingComma": "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"
  "bracketSpacing": true //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
}

```

## cssLint:style-lint

style-lint 使用 stylelint-config-standard 进行 lint，同时使用 stylelint-order 进行 css 属性排序。自定义配置可在 rules 中写入。

# 各项添加(js 项目)

```
npm i eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-babel eslint-plugin-react babel-eslint babel-plugin-import  --save-dev
```

```
npm install prettier --save-dev
npm install lint-staged husky --save-dev
npm install  @commitlint/config-conventional @commitlint/cli --save-dev
npm install stylelint stylelint-config-standard stylelint-order --save-dev
```

jnpm install --save-dev

```
"devDependencies": {
    "@commitlint/cli": "^8.2.0",
    "@commitlint/config-conventional": "^8.2.0",
    "babel-eslint": "^10.0.3",
    "babel-plugin-import": "^1.12.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.3.0",
    "eslint-plugin-babel": "^5.3.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-react": "^7.14.3",
    "husky": "^3.0.5",
    "lint-staged": "^9.3.0",
    "prettier": "^1.18.2",
    "stylelint": "^11.0.0",
    "stylelint-config-standard": "^19.0.0",
    "stylelint-order": "^3.1.1"
  }
```

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "lint": "stylelint src --fix && eslint src --fix"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.js": [
      "prettier --write",
      "eslint --ext .js --fix",
      "git add"
    ],
    "src/**/*.jsx": [
      "prettier --write",
      "eslint --ext .jsx",
      "git add"
    ],
    "src/**/*.scss": [
      "prettier --write",
      "stylelint --syntax scss && stylelint --fix scss",
      "git add"
    ],
    "src/**/*.css": [
      "stylelint --fix",
      "prettier --write",
      "git add"
    ]
  },
```

# 问题

1. ts 项目采用 eslint 还需要特别配置(ts 不加)
2. 目前存在一个问题：

   1. pre-commit hooks 会在 commit-msg hooks 之前执行
   2. pre-commit 执行 eslint --fix 校验 && 自动修复成功之后，commit 会直接执行，此时提交的是代码未 lint 修复之前的代码
   3. 可以通过加 `git add`，这样能够直接 commit 修复过的代码。
   4. 但加上`git add`之后，如果 commit-msg 校验失败，会存在 commit 丢失的问题
   5. 现在我想明白了，不是代码丢失，，而是，我用来测试时修改的代码，被自动修复之后，就变成没有更改了，所以会不展示。

3. 修改项目 && 及修改分支和范围
4. question：加了 lint-staged，会对 修改的文件 进行 lint。也不是个问题，这样也有利于平滑 lint 代码。
5. 如果 husky 无效，可以尝试删除.git 下的 hooks，并删除包重新安装。
6. eslint 是直接通过 cli 方式启动，所以在 lint 后加上 --fix 即可执行修复
7. eslint 与 prettier 冲突的部分可以在 eslint 中重定义或者在 .eslintrc 中的 extends 中配置 `"plugin:prettier/recommended"`。[参考](https://segmentfault.com/a/1190000016109913)
8. 安装 husky 之后不能再安装 pre-commit 包，否则会冲突（原因待查）

# 总结

1. 在 git 中提供了 hook,就是在触发代码提交,push 等一系列操作的时候,提供了触发其他程序的钩子.
2. husky 管理 git hooks
3. git hooks 中主要使用 pre-commit 和 commit-msg，pre-commit 中实现各种 lint 以及 lint 后的 fix。commit-msg 主要进行 提交信息的校验
4. 执行顺序：
   1. 前置（pre）钩子，在动作完成前调用
   2. 后置（post）钩子，在动作完成后执行
5. lint-staged ： 只 lint 我们当前 commit 的文件
