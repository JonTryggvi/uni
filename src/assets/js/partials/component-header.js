$ = window.$

const Header = {
  init(body){
    this.cacheDom(body)
    this.addEvents()
  },
  cacheDom(body){
    this.header = body.querySelector('header')
    this.nav = this.header.querySelector('nav')
    this.menuItems = this.nav.querySelectorAll('.menu-item')
    this.magicLine = this.nav.querySelector('.magic-line')
  },
  addEvents(){
    this.menuItems.forEach(menuItem => {
      menuItem.addEventListener('mouseover', this.handleMenuItemMouseover.bind(this))
      menuItem.addEventListener('mouseleave', this.handleMenuItemMouseleave.bind(this))
    })
  },
  handleMenuItemMouseover(e) {
    const menuItemPosition = e.target.getBoundingClientRect()
    const headerPos = this.header.getBoundingClientRect();
    console.log(headerPos)
    const menuItemWidth =   menuItemPosition.right - menuItemPosition.left
    this.setMacigLine(this.magicLine, menuItemPosition.left, menuItemPosition.right, menuItemPosition.top, menuItemWidth)
  },
  handleMenuItemMouseleave(e) {
    this.hideMagicLine(this.magicLine)
  },
  setMacigLine(line, left, right, top, width) {
    line.style.opacity = '1'
    line.style.left = left-10 + 'px'
    line.style.right = right + 'px'
    line.style.top = top + 6 + 'px'
    line.style.width = width+20 + 'px'
  },
  hideMagicLine(line) {
    line.style.opacity = '0'
  }
}
module.exports = Header
