# eslint-config-hyfe
基于eslint配置的前端代码扫描规则，适用于海云数据前端团队。

##使用方式
该配置会同步发布到npm上面，可以通过两种方式使用。一种方式为clone本项目，另外一种为npm install eslint-config-hyfe。

### clone本项目
使用流程如下：

```
$ git clone https://github.com/baizn/eslint-config-hyfe
$ cd eslint-config-hyfe
$ npm link
```

然后进入自己的项目目录，执行：

```
npm link eslint-config-hyfe
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