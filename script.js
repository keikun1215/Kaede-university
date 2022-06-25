function push(stat, url) {
  history.pushState(stat, '', url);
  return history.state
}
function change(tml) {
  $('#main').html(tml)
}
$('.annai').click((e) => {
  $('title').text(push({ page: '入学', name: '入学のご案内' }, '入学.po').name)
  change(`
<h1>入学のご案内</h1>
<img style="width:50%;height:auto;" src="https://cdn.discordapp.com/attachments/882156919526133773/989412141893287946/235.png" /><br>
👋🏻さよなら
`)
})
$('.logo').click((e)=>{
  $('title').text(push({ page: 'メイン', name: 'メイン' }, 'メイン.po').name)
  change(`
<h1>楓大学</h1>
こんにちは、楓大学です。真夏の候、酷暑にお疲れではないかと存じ上げます。<br>
こちらのクソジジイ達や学生達も、暑さに呻き声を上げ苦しんでいます。<br>
当大学では、サイバー学や工業、たまかす学、<br>
臨時RSA解読チーム、PayPalを落とす会、PayPayをクラックする会等<br>
素敵な犯罪がたくさんあります！<br>
国家転覆や外患誘致も狙ってるので公安には勘付かれないようにしてください！
`)
})
