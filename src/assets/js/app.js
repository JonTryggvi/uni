import $ from 'jquery'
import whatInput from 'what-input'
import Global from './global';
import Header from './partials/component-header'
window.$ = $
// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
let siteBody = Global.cacheBody();
Header.init(siteBody)

$(document).foundation()
