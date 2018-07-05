# my-first-vue-project
test

一．	项目启动

1.	安装vue命令行工具

1.1 npm install –g vue-cli 安装cli脚手架

1.2 vue init webpack my-project

1.3 npm install 安装项目内依赖

1.4 npm run dev启动服务

二．

1. 双向绑定，页面上绑定的输入会同步到JS代码里，反之也是

2. Vue重要选项

2.1 data数据字段，在在同一个vue文件里可以使用this取值

2.2 methods方法字段，

2.3 watch 监听字段

3. Vue模板指令
	3.1 模板渲染v-text、v-html、{{}}
	3.2 模块控制隐藏v-if（直接不显示dom元素） 、v-show（通过display-none）
	3.3 循环渲染模板 v-for
	3.4 事件绑定 v-on 
	3.5 属性绑定 v-bind，可以简写为:class=”{red:isred}”,当为对象时，为布尔值，数组时为data字符串
	
三．组件间通信

1. props 用于注册组件间通信的组件，只用于父组件向子组件传数据，在子组件中注册
2. vue中component注册时可以是大写，但是写标签时应当为小写和中横线，即驼峰改为蛇形命名
3.子向父传值，需要在子组件中使用$emit定义父组件中的事件名，并将自己的值A赋值给父组件指定事件函数的参数B，再将参数B赋值给父组件的注册的值C，最后在父组件中处理数据C
