# #介绍

SandDance是一个基于Web的应用程序，使用户可以轻松地探索，识别和交流有关数据。 SandDance提供了数据可视化，模式识别等功能。 它拥有本身动态或者由开发者自定义的动态改变，来查看**单个**或者**聚合**的数据。

SandDance支持**团队协作**，允许多人使用相同的数据集。因此，在人工智能平台上，同一个项目中的所有成员，可以使用相同的数据集，利用SandDance的协作特性，使用团队的共享数据集来创建可视化效果。

甚至利用这样的团队协作的特性，深入使用之后，可以在一个团队中建立**管理员**的角色，管理相关数据集或者选择数据集的动态生成界面等等。



# 使用平台

### 直接在网站上使用

### PowerBI

### Azure Data Studio 

### VsCode extension

### Observable

Observable可以之后深入了解，因为人工智能平台前端使用Angular，所以之后通过Observabal来使用SandDance的可能性也会比较高



# SandDance提供的一些组件



### sanddance

基于canvas，由画布为核心。

API：https://sanddance.js.org/docs/sanddance/v2/api/

#### 安装

1. 通过scripts标签直接在html中加载依赖

   ``` html
   <script src="https://unpkg.com/vega@^5.8/build/vega.js" charset="utf-8"></script>
   <script src="https://unpkg.com/deck.gl@~6.4/deckgl.min.js"></script>
   <script src="https://unpkg.com/@msrvida/sanddance@^2/dist/umd/sanddance.js"></script>
   
   // 然后SandDance作为全局变量就可以直接使用
   SandDance.use(vega, deck, deck, luma);
   ```

   总结：

   这个方法没办法在Angular中使用，在index.html中添加标签且下载库之后，可以在index.html添加script使用SandDance这个全局变量，但是并不能够直接在其他组件中使用。 至于如何将它使用，还需要再深度了解。

   

   使用这个方法，我简单地做了一个demo，在html外链了一个script文件。

   

2. 通过Node直接安装

   在package.json直接添加以下依赖，然后npm i

   ``` js
   "@deck.gl/core": "6.4",
   "@deck.gl/layers": "6.4",
   "@msrvida/sanddance": "^2",
   "luma.gl": "6.4", // 此处是SandDance的Github的说明，但是由于版本更新，所以需要选择版本安装。 “6.4.2” 或者 “6.4.3”
   "vega": "^5.8"
   ```

   ``` js
   import * as deck from '@deck.gl/core';
   import * as layers from '@deck.gl/layers';
   import * as luma from 'luma.gl';
   import * as vega from 'vega';
   import * as SandDance from '@msrvida/sanddance';
   
   SandDance.use(vega, deck, layers, luma);
   ```

   总结： 这个方法目前也没有能够直接在Angular项目中使用。由于luma这个库的问题，使用Angular 9 和Angular 8都会报错，初步推测是版本的问题。



### sanddance-react

基于React

#### 安装

直接react项目下，在package.json中添加

```js
"@deck.gl/core": "6.4",
"@deck.gl/layers": "6.4",
"@msrvida/sanddance-react": "^2",
"luma.gl": "6.4", // 此处在react中可以使用，不同于angular
"vega": "^5.8"
```

总结： 新建了一个react项目后，也可以顺利运行Demo。



### sanddance-explorer

具有UI的核心SandDance可视化画布，用于启用数据探索，可在基于React的应用程序中使用。通俗来说，就是生成的界面，可以有一些输入，选择项来进行详细的数据展示

#### 安装

直接在react项目下，在package.json中添加

``` js
"@deck.gl/core": "6.4",
"@deck.gl/layers": "6.4",
"@msrvida/sanddance-explorer": "^2",
"luma.gl": "6.4",
"office-ui-fabric-react": "6.204.4",
"vega": "^5.8"
```

 总结： 在react项目中可以使用，但是github中展示的例子，由于css没有做的原因，会有显示的问题。但是功能是可以用的。



# 小结

如果使用要sanddance来构建视图，直接用javascript是最简单的。但是考虑到项目结构等等问题，可能还是要选择framework，在sanddance能够提供的组件的基础上，构建视图，会更简单。目前为止，sanddance对于react的支持比较多，至于如何在angular中也能使用，需要多深入了解，再进行探索。

这是对于sanddance的初步的总结。后续正式开始写项目的时候，还要再细看API等等东西。