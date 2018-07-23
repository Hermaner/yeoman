
## Build Setup

``` bash
# 安装依赖
npm install

# 调试环境 serve with hot reload at localhost:8091
npm run dev
# 一键修复eslint代码格式
npm run lint

# 生产环境 build for production with minification
npm run build

```
本地默认访问端口为8091，需要更改的童鞋请到项目目录文件`config/index.js`修改。


## 目录结构
```
webpack
 |---build
 |---src
     |---assets    #资源
     |---css/common.css  #css
     |---font/    #字体图标
     |---js/common.js    #自己定义的全局通用事件
     |---js/config.js    #项目的配置
     |---js/main.js    #入口文件
     |---js/filter.js    #注册vue的全局过滤器
     |---js/router.js    #全局路由
     |---js/storage.js    #缓存方法
 |---components 组件
     |---Button.vue  按钮组件
     |---hb-head.vue  head组件
|---views    #各个页面模块，模块名可以自定义哦！
     |---home    #一级目录
        |---list    #二级目录
             |---index.html
             |---index.js
             |---page.vue
             |---store.js	 
......

  ```

最终生成连接：http:// localhost:8034/home/list.html，
  从目录结构上，各种组件、页面模块、资源等都按类新建了文件夹，方便我们储存文件。
例如

``` stylus
|---shop    一级目录
 |---couponList    二级目录
   |---index.html
   |---index.js
   |---page.vue
   |---store.js	 
```
就是我们访问时的地址：

``` stylus
http://localhost:8034/shop/couponList.html
```


还有一点要注意的，所有目录文件格式必须严格按照此树形，
