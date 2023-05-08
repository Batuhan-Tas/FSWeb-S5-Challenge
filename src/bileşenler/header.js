const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //


  const createDiv = document.createElement('div');
  createDiv.classList.add('header');

  const createSpan = document.createElement('span');
  createSpan.classList.add('date');
  createSpan.textContent = tarih;

  const createHeadline = document.createElement('h1');
  createHeadline.textContent = baslik;

  const createSpan2 = document.createElement('span');
  createSpan2.classList.add('temp');
  createSpan2.textContent = yazi;

  createDiv.appendChild(createSpan);
  createDiv.appendChild(createHeadline);
  createDiv.appendChild(createSpan2);

  return createDiv;

  



}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const header = document.querySelector(secici);
  header.appendChild(Header('Yazılım Dünyası Gelişmeleri','8 Mayıs 2023','Lorem ipsum'));
 
  return header;
}

export { Header, headerEkleyici }
