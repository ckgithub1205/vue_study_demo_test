# vue_supermarket_demo_study

# 跟着老师学习vue项目记录

## 1.项目目录结构划分

```
src
 -- assets
	--- css
	--- img
 -- compnents
	--- common                # 这里放置与业务无关的组件，在其他项目中也可以使用
	--- content               # 这里放置与业务有关的组件，只能本项目中使用
 -- router
 -- store
 -- views
 -- network                  # 网络请求相关的文件
	-- request.js
 -- common                   # 可以创建一些公共的js文件

```

* normalize.css 文件，是第三方文件,可以用来做初始化css样式的操作
* 新建base.css文件，所有的公用样式都可以写在里面


## vue.config.js的使用
- 1.可以在里面设置路径别名,  如果是import引入的文件，前面不需要加~,如果是标签属性里面引入的就需要加

## .editconfig 文件
- 可以在里面设置规范

## 底部tabbar的开发，已经开发过了，可以在别的项目中抽取出来

### 抽取的时候主要注意一下几个问题：
* 1.引用路径问题
* 2.需要创建对应的路由，在src/router/index.js中