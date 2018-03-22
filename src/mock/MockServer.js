//使用mockjs提供mock接口
import  Mock from 'mockjs'
//js
import data from './data'

//向外提供homepage数据
Mock.mock('/homepage',{code:0,data:data.homepage.menus})
//向外提供categorys数据
Mock.mock('/categorys',{code:0,data:data.categorys})
//向外提供allbrands数据
Mock.mock('/allbrands',{code:0,data:data.allbrands})


//不需要引入什么东西，只需要在main.js引入加载一次就行
