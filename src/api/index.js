import ajax from './ajax'
//

/*
//4.获取一次性验证码
export const reqCaptcha =()=>ajax('/api/captcha')

// 5、用户名密码登陆
export const pwdLogin =({name,pwd,captcha})=>ajax('/api/login_pwd',{name,pwd,captcha},'POST')

//6、发送短信验证码

export const sendCode = (phone)=>ajax('/api/sendcode',{phone})

// 7、手机号验证码登陆
export const sendLogin =({phone,code})=>ajax('/api/login_sms',{phone,code},'POST')
*/


//获取首页导航列表的信息
export const reqShopNav =()=>ajax('/homepage')

//获取分类的数据
// categorys
export const reqCategorys =()=>ajax('/categorys')

//获取全部品牌的数据
export const reqAllBrands=()=>ajax('/allbrands')

//获取品牌数据
export const reqBrand =()=>ajax('/brand')



