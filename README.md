# eslint-config-hyfe
基于eslint配置的前端代码扫描规则，适用于海云数据前端团队。

## 使用方式
```
$ npm install eslint-config-hyfe --save-dev
// 或使用yarn安装
$ yarn add eslint-config-hyfe --dev
```

在项目根目录下新建.eslintrc文件，内容为：

```
{
    "extends": "eslint-config-hyfe"
}
```

或如下：

```
{
    "extends": "hyfe"
}
```

当然，也可以直接在.eslintrc文件中添加规则覆盖该配置。

### npm 地址

[基于Eslint的扫描规则](https://www.npmjs.com/package/eslint-config-hyfe)

### 更新记录

#### 2018-05-08

- 增加React相关规则
- 更新`README.md`文档

#### 2018-02-11
- no-debugger：由error修改为warn
- keyword-spacing：由off修改为warn
- space-before-function-paren：新增该规则，不允许function后面留空格
- keyword-spacing：新增该规则，关键词后面留空格，if、for和while例外
- no-invalid-this：由error改为warn

#### 2017-11-10
- array-bracket-spacing：禁止数组两端出现空格
