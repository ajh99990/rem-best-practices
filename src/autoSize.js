import { isMobile } from "./helper"
import _ from 'lodash'

//方案1:根据ua设置字体大小
export function setDomFontSizeByUa() {
  const isMobileDev = isMobile()
  let fontsize = '';
  let width = document.documentElement.clientWidth || document.body.clientWidth;
  if (isMobileDev) {
    fontsize = width / 375 + 'px'
  }
  else {
    fontsize = width / 1920 + 'px'
  }
  (document.getElementsByTagName('html')[0].style)['font-size'] = fontsize;
}

//方案2:根据设备宽度设置字体大小
export function setDomFontSizeByWidth() {
}

let setDomFontSizeDebounce = _.debounce(setDomFontSizeByUa, 400) //做个防抖
window.addEventListener('resize', setDomFontSizeDebounce); 