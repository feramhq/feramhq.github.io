!function (r, m) {
  window.GoogleAnalyticsObject = r
  window[r] = window[r] || function () {
      (window[r].q = window[r].q || []).push(arguments)
  }
  window[r].l = Number(new Date())
  const scriptElement = document.createElement('script')
  m = document.getElementsByTagName('script')[0]
  scriptElement.async = 1
  scriptElement.src = 'https://www.google-analytics.com/analytics.js'
  m.parentNode.insertBefore(scriptElement, m)
}('ga')

ga('create', 'UA-79167454-1', 'auto')
ga('send', 'pageview')
