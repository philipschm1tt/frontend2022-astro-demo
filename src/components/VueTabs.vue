<script setup>
    import { Tab, Tabs } from 'vant'
</script>

<template>
<Tabs client:load="vue">
    <Tab title="First Tab" client:load="vue">
        <div>
            <h3>Lorem Ipsum</h3>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor
                invidunt
                ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo
                duo
                dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor
                sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor
                invidunt
                ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
        </div>
    </Tab>
    <Tab title="Second Tab" client:load="vue">
        <div>
            <h3>Duis autem</h3>
            <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                consequat,
                vel
                illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                qui
                blandit
                praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
                ipsum
                dolor
                sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet
                dolore
                magna
                aliquam erat volutpat.
            </p>
        </div>
    </Tab>
</Tabs>
</template>

<style>
	:root{--van-black: #000;--van-white: #fff;--van-gray-1: #f7f8fa;--van-gray-2: #f2f3f5;--van-gray-3: #ebedf0;--van-gray-4: #dcdee0;--van-gray-5: #c8c9cc;--van-gray-6: #969799;--van-gray-7: #646566;--van-gray-8: #323233;--van-red: #ee0a24;--van-blue: #1989fa;--van-orange: #ff976a;--van-orange-dark: #ed6a0c;--van-orange-light: #fffbe8;--van-green: #07c160;--van-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);--van-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);--van-primary-color: var(--van-blue);--van-success-color: var(--van-green);--van-danger-color: var(--van-red);--van-warning-color: var(--van-orange);--van-text-color: var(--van-gray-8);--van-text-color-2: var(--van-gray-6);--van-text-color-3: var(--van-gray-5);--van-text-link-color: #576b95;--van-active-color: var(--van-gray-2);--van-active-opacity: .6;--van-disabled-opacity: .5;--van-background-color: var(--van-gray-1);--van-background-color-light: var(--van-white);--van-padding-base: 4px;--van-padding-xs: 8px;--van-padding-sm: 12px;--van-padding-md: 16px;--van-padding-lg: 24px;--van-padding-xl: 32px;--van-font-size-xs: 10px;--van-font-size-sm: 12px;--van-font-size-md: 14px;--van-font-size-lg: 16px;--van-font-weight-bold: 500;--van-line-height-xs: 14px;--van-line-height-sm: 18px;--van-line-height-md: 20px;--van-line-height-lg: 22px;--van-base-font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;--van-price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;--van-animation-duration-base: .3s;--van-animation-duration-fast: .2s;--van-animation-timing-function-enter: ease-out;--van-animation-timing-function-leave: ease-in;--van-border-color: var(--van-gray-3);--van-border-width-base: 1px;--van-border-radius-sm: 2px;--van-border-radius-md: 4px;--van-border-radius-lg: 8px;--van-border-radius-max: 999px}html{-webkit-tap-highlight-color:transparent}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif}a{text-decoration:none}input,button,textarea{color:inherit;font:inherit}a:focus,input:focus,button:focus,textarea:focus,[class*=van-]:focus{outline:none}ol,ul{margin:0;padding:0;list-style:none}@keyframes van-slide-up-enter{0%{transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave{to{transform:translate3d(0,100%,0)}}@keyframes van-slide-down-enter{0%{transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave{to{transform:translate3d(0,-100%,0)}}@keyframes van-slide-left-enter{0%{transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-leave{to{transform:translate3d(-100%,0,0)}}@keyframes van-slide-right-enter{0%{transform:translate3d(100%,0,0)}}@keyframes van-slide-right-leave{to{transform:translate3d(100%,0,0)}}@keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@keyframes van-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.van-fade-enter-active{animation:var(--van-animation-duration-base) van-fade-in both var(--van-animation-timing-function-enter)}.van-fade-leave-active{animation:var(--van-animation-duration-base) van-fade-out both var(--van-animation-timing-function-leave)}.van-slide-up-enter-active{animation:van-slide-up-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-up-leave-active{animation:van-slide-up-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-slide-down-enter-active{animation:van-slide-down-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-down-leave-active{animation:van-slide-down-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-slide-left-enter-active{animation:van-slide-left-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-left-leave-active{animation:van-slide-left-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-slide-right-enter-active{animation:van-slide-right-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-right-leave-active{animation:van-slide-right-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-clearfix:after{display:table;clear:both;content:""}.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.van-safe-area-top{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.van-safe-area-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-haptics-feedback{cursor:pointer}.van-haptics-feedback:active{opacity:var(--van-active-opacity)}[class*=van-hairline]:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid var(--van-border-color);transform:scale(.5)}.van-hairline,.van-hairline--top,.van-hairline--left,.van-hairline--right,.van-hairline--bottom,.van-hairline--surround,.van-hairline--top-bottom{position:relative}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after,.van-hairline-unset--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}

	.van-tab__panel,.van-tab__panel-wrapper{flex-shrink:0;box-sizing:border-box;width:100%}
	.van-tab__panel-wrapper--inactive{height:0;overflow:visible}

	:root{--van-tab-text-color: var(--van-gray-7);--van-tab-active-text-color: var(--van-text-color);--van-tab-disabled-text-color: var(--van-text-color-3);--van-tab-font-size: var(--van-font-size-md);--van-tab-line-height: var(--van-line-height-md);--van-tabs-default-color: var(--van-danger-color);--van-tabs-line-height: 44px;--van-tabs-card-height: 30px;--van-tabs-nav-background-color: var(--van-background-color-light);--van-tabs-bottom-bar-width: 40px;--van-tabs-bottom-bar-height: 3px;--van-tabs-bottom-bar-color: var(--van-danger-color)}
	.van-tab{position:relative;display:flex;flex:1;align-items:center;justify-content:center;box-sizing:border-box;padding:0 var(--van-padding-base);color:var(--van-tab-text-color);font-size:var(--van-tab-font-size);line-height:var(--van-tab-line-height);cursor:pointer}.van-tab--active{color:var(--van-tab-active-text-color);font-weight:var(--van-font-weight-bold)}.van-tab--disabled{color:var(--van-tab-disabled-text-color);cursor:not-allowed}.van-tab--grow{flex:1 0 auto;padding:0 var(--van-padding-sm)}
	.van-tab--shrink{flex:none;padding:0 var(--van-padding-xs)}.van-tab--card{color:var(--van-tabs-default-color);border-right:var(--van-border-width-base) solid var(--van-tabs-default-color)}.van-tab--card:last-child{border-right:none}.van-tab--card.van-tab--active{color:var(--van-white);background-color:var(--van-tabs-default-color)}.van-tab--card--disabled{color:var(--van-tab-disabled-text-color)}.van-tab__text--ellipsis{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.van-tabs{position:relative}.van-tabs__wrap{overflow:hidden}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__nav{position:relative;display:flex;background:var(--van-tabs-nav-background-color);-webkit-user-select:none;user-select:none}.van-tabs__nav--complete{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.van-tabs__nav--complete::-webkit-scrollbar{display:none}.van-tabs__nav--line{box-sizing:content-box;height:100%;padding-bottom:15px}.van-tabs__nav--line.van-tabs__nav--shrink,.van-tabs__nav--line.van-tabs__nav--complete{padding-right:var(--van-padding-xs);padding-left:var(--van-padding-xs)}.van-tabs__nav--card{box-sizing:border-box;height:var(--van-tabs-card-height);margin:0 var(--van-padding-md);border:var(--van-border-width-base) solid var(--van-tabs-default-color);border-radius:var(--van-border-radius-sm)}.van-tabs__nav--card.van-tabs__nav--shrink{display:inline-flex}.van-tabs__line{position:absolute;bottom:15px;left:0;z-index:1;width:var(--van-tabs-bottom-bar-width);height:var(--van-tabs-bottom-bar-height);background:var(--van-tabs-bottom-bar-color);border-radius:var(--van-tabs-bottom-bar-height)}.van-tabs__track{position:relative;display:flex;width:100%;height:100%;will-change:left}.van-tabs__content--animated{overflow:hidden}.van-tabs--line .van-tabs__wrap{height:var(--van-tabs-line-height)}.van-tabs--card>.van-tabs__wrap{height:var(--van-tabs-card-height)}
</style>