import { isMobile } from "./helper"
import _ from 'lodash'

//方案1:我这里是根据ua来区分移动端和pc端,您可以选择适合自己的方案
export function setDomFontSizeByUa() {
  const isMobileDev = isMobile()
  let fontsize = '';
  let width = document.documentElement.clientWidth || document.body.clientWidth;
  if (isMobileDev) {
    fontsize = width / 375 + 'px' //重点在这,375是移动端设计稿的宽度
  }
  else {
    fontsize = width / 1920 + 'px' //重点在这,1920是pc端设计稿的宽度
  }
  (document.getElementsByTagName('html')[0].style)['font-size'] = fontsize;
}

//方案2:根据设备宽度设置字体大小
export function setDomFontSizeByWidth() {
}

let setDomFontSizeDebounce = _.debounce(setDomFontSizeByUa, 400) //做个防抖
window.addEventListener('resize', setDomFontSizeDebounce); 