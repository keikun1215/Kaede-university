function push(stat, url) {
  history.pushState(stat, '', url);
  return history.state
}
function change(tml) {
  $('#main').html(tml)
}
$('.annai').click((e) => {
  window.location.href = './mensetsu.html'
})
$('.logo').click((e) => {
  window.location.href = './index.html'
})
