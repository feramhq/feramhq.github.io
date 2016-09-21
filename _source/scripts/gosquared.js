// GoSquared trackig code

// eslint-disable-next-line
!function (identifier) {
  identifier = window._gs = window._gs || function () {
    // eslint-disable-next-line
    (identifier.q = identifier.q || []).push(arguments)
  }

  const scriptElement = document.createElement('script')
  scriptElement.src = '//d1l6p2sc9645hc.cloudfront.net/tracker.js'

  const firstScriptElement = document.getElementsByTagName('script')[0]
  firstScriptElement.parentNode
    .insertBefore(scriptElement, firstScriptElement)
}('_gs')

window._gs('GSN-723182-O')
