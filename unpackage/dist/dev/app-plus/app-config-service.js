
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/login","pages/login/forget","pages/login/register","pages/user/user_pts","pages/my/my","pages/map_index/map_index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#666666"},"tabBar":{"color":"#bfbfbf","selectedColor":"#1296db","borderStyle":"black","iconWidth":"24px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"定位","iconPath":"static/map_1.png","selectedIconPath":"static/map.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/my_1.png","selectedIconPath":"static/my.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"locate_app","compilerVersion":"2.6.16","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"定位","navigationBarShadow":{"colorType":"grey"}}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/forget","meta":{},"window":{"navigationBarTitleText":"修改密码","navigationBarShadow":{"colorType":"grey"}}},{"path":"/pages/login/register","meta":{},"window":{"navigationBarTitleText":"添加用户","navigationBarShadow":{"colorType":"grey"}}},{"path":"/pages/user/user_pts","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","navigationBarShadow":{"colorType":"grey"}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationBarShadow":{"colorType":"grey"}}},{"path":"/pages/map_index/map_index","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","navigationBarShadow":{"colorType":"grey"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});