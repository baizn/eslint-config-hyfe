
//  0 = off, 1 = warn, 2 = error
const WARN = 'warn'
const ERROR = 'error'
const OFF = 'off'

// 建议使用2个空格缩进
const SPACE_NUM = 2

// 建议圈复杂度最大为15
const COMPLEXITY_MAX_NUM = 15

// 变量命名长度限定在1-20个字符之间
const MIN_NAME_LENGTH = 1
const MAX_NAME_LENGTH = 30

// 函数最大嵌套层次建议为4层
const MAX_DEPTH_NUM = 4

// 回调函数嵌套最多建议3层
const MAX_NESTED_CALLBACK_NUM = 3

// 每个文件建议不超过500行代码
const FILE_MAX_LINES = 500

// 每行中最多不能超过2个表达式
const MAX_STATEMENTS_PER_LINE = 2

// 只能使用一个空格分割
const MULTIPLE_EMPTY_LINES = 1

// 每个函数体内的代码不超过150行
const MAX_STATEMENTS_NUM = 150

// 函数的参数个数不能超过5个
const MAX_FUNCTION_PARAMS = 5

// 强制每行代码或注释最多不超过100个字符
const MAX_LINES_LEN = 100

/**
 * 自定义eslint规则
 * @autor: baizn
 * @date: 2016-10-17
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'standard-react'
  ],
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    'sourceType': 'module'
  },
  rules: {
    // off规则
    // 允许使用console
    'no-console': OFF,
    // 允许使用短符号进行类型转换
    'no-implicit-coercion': OFF,

    // warn规则
    'no-debugger': WARN,
    // 建议使用2个空格缩进
    'indent': [WARN, SPACE_NUM],
    // 不建议出现尾逗号
    'comma-dangle': WARN,
    // 建议使用===和!==
    'eqeqeq': WARN,
    // 不建议使用对象的内置属性
    'no-prototype-builtins': WARN,
    // 建议使用有效的 JSDoc 注释
    'valid-jsdoc': [WARN, {
      requireReturn: false
    }],
    // 不建议在finally 语句块中出现控制流语句
    'no-unsafe-finally': WARN,
    // 不建议超过指定程序中允许的最大环路复杂度
    'complexity': [WARN, {
      max: COMPLEXITY_MAX_NUM
    } ],
    // 建议所有控制语句使用一致的括号风格
    'curly': WARN,
    // 不建议在非赋值或条件语句中使用new操作符
    'no-new': WARN,
    // 建议文件末尾至少保留一个空行
    'eol-last': WARN,
    // 建议标识符的命名长度必须为1-30个字符
    'id-length': [WARN, {
      'min': MIN_NAME_LENGTH,
      'max': MAX_NAME_LENGTH
    } ],
    // 建议语句块中最大可嵌套深度为4
    'max-depth': [WARN, {
      'max': MAX_DEPTH_NUM
    } ],
    // 建议每个文件不超过500行，不包含空白行和注释
    'max-lines': [WARN, FILE_MAX_LINES],
    // 建议回调函数中最大嵌套不超过3层
    'max-nested-callbacks': [WARN, {
      'max': MAX_NESTED_CALLBACK_NUM
    } ],
    // 建议使用扩展运算符而非apply方法
    'prefer-spread': WARN,
    // 建议使用字符串模板而不是字符串拼接
    'prefer-template': WARN,
    // 不建议使用分号
    'semi': [WARN, 'never'],
     /**
      * 关键字前必须要有一个空格，关键字后不要空格
      * import和from不用遵循此规则，所以只警告
      */
    'keyword-spacing': [WARN, {
      'overrides': {
        'if': {
          'after': true
        },
        'for': {
          'after': true
        },
        'while': {
          'after': true
        }
      }
    } ],
    // 代码中多次出现的没有明确含义的数字，建议由常量取代
    'no-magic-numbers': OFF,
    // 不建议出现未使用过的表达式，callback && callback()这种是允许的
    'no-unused-expressions': WARN,
    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': WARN,
    // 建议每行代码或注释最多不超过100个字符，不包括正则表达式和有url的行
    'max-len': [WARN, MAX_LINES_LEN],
    // 允许条件语句中出现赋值操作符，前提是它们被圆括号括起来
    'no-cond-assign': [WARN, 'except-parens'],

    // error规则
    // function后不留空格
    'space-before-function-paren': [ERROR, 'never'],
    // 关键词后面留空格，if、for和while例外
    'keyword-spacing': [ERROR, { 
      'overrides': { 
        'if': { 'after': false }, 
        'for': { 'after': false }, 
        'while': { 'after': false } 
      }
    }],
    // 建议使用单引号
    'quotes': [ERROR, 'single'],
    // 禁止使用其他未声明的变量
    'no-undef': ERROR,
    // else之前return的话不建议再有else分支
    'no-else-return': ERROR,
    // 禁止扩展原生对象
    'no-extend-native': ERROR,
    // 禁止出现空函数
    'no-empty-function': ERROR,
    // switch中不能缺少default分支
    'default-case': ERROR,
    // 禁止出现冗余的括号
    'no-extra-parens': ERROR,
    // for-in循环中必须有一个if语句，过滤掉原型链上的属性
    'guard-for-in': ERROR,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': ERROR,
    // 禁止使用eval
    'no-eval': ERROR,
    // 禁止使用不必要的标签
    'no-extra-label': ERROR,
    // 禁止使用var num = .5 或 var num = 2.的情况
    'no-floating-decimal': ERROR,
    // 禁止使用隐式的eval，如setTimeout中使用
    'no-implied-eval': ERROR,
    // 禁止不必要的嵌套块
    'no-lone-blocks': ERROR,
    // 禁止在循环中定义函数
    'no-loop-func': ERROR,
    // 禁止出现多个空格
    'no-multi-spaces': ERROR,
    /**
     * 禁止出现多行字符串
     * 错误示例：
     * var x = 'Line 1 \
         Line 2'
     * 正确示例：
     *  var x = 'Line 1\n'
         + 'Line 2'
     */
    'no-multi-str': ERROR,
    // 禁止对原生对象赋值
    'no-native-reassign': ERROR,
    // 禁止对String、Number和Boolean使用new操作符
    'no-new-wrappers': ERROR,
    // 禁止对function的参数重新赋值
    'no-param-reassign': ERROR,
    // 禁止不必要的call和apply调用
    'no-useless-call': ERROR,
    // 禁止在return语句中赋值
    'no-return-assign': ERROR,
    // 禁止使用逗号操作符
    'no-sequences': ERROR,
    // 禁止不必要的字符串拼接，如'ab' + 'd'
    'no-useless-concat': ERROR,
    // 禁止不必要的转义，如'\''
    'no-useless-escape': ERROR,
    // 禁止使用with语句
    'no-with': ERROR,
    // parseInt()中必须使用基数
    'radix': ERROR,
    // IIFE函数使用必须括号括起来
    'wrap-iife': ERROR,
    // 禁止catch语句中的参数与外层作用域中的变量同名
    'no-catch-shadow': ERROR,
    // 禁止var声明与外层作用域的变量同名
    'no-shadow': ERROR,
    // 禁止覆盖关键字，如NaN、Infinity、undefined、eval、arguments等
    'no-shadow-restricted-names': ERROR,
    // 禁止在变量定义之前使用它
    'no-use-before-define': ERROR,
    // 强制使用驼峰命名法
    'camelcase': ERROR,
    /**
     * 强制使用如下风格的括号：
     * function foo() {
          return true;
        }

        if (foo) {
          bar();
        }
     */
    'brace-style': [ERROR, '1tbs'],
    // 禁止数组两端出现空格
    'array-bracket-spacing': [ERROR, 'never'],
    // 要求中缀操作符周围有空格
    'space-infix-ops': ERROR,
    // 要求注释 // 或 /* 后至少留一个空格
    'spaced-comment': [ERROR, 'always'],
    // 强制单行代码内使用一个或多个空格
    'block-spacing': [ERROR, 'always'],
    // 强制逗号放到元素尾部
    'comma-style': ERROR,
    // 禁止计算属性中使用空格
    'computed-property-spacing': ERROR,
    // 强制所有不包含单引号的 JSX 属性值使用单引号
    'jsx-quotes': [ERROR, 'prefer-single'],
    // 函数的参数个数不能超过5个
    'max-params': [ERROR, {
      'max': MAX_FUNCTION_PARAMS
    } ],
    // 每个函数体内的代码不超过150行
    'max-statements': [ERROR, {
      'max': MAX_STATEMENTS_NUM
    } ],

    // 构造函数首字母必须大写，调用时候必须使用new
    'new-cap': ERROR,

    // 调用无参构造函数时必须带括号
    'new-parens': ERROR,
    'no-multiple-empty-lines': [ERROR, {
      'max': MULTIPLE_EMPTY_LINES
    } ],

    // 每行中最多不能超过2个表达式
    'max-statements-per-line':  [ERROR, {
      'max': MAX_STATEMENTS_PER_LINE
    }],

    // 禁止function后出现空格
    'no-spaced-func': ERROR,

    // ------------------React Rules-----------------------//
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [OFF],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [WARN, {
      'forbid': [ // This rule encourages prop types that more specifically document their usage.
        'any',
        'array', // use arrayOf instead (https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
        'object' // use shape instead (https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
      ]
    }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': [OFF],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': [OFF],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': [ERROR, 'always'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [OFF],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': [OFF],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [ERROR, {
      'order': [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }]
  }
}
