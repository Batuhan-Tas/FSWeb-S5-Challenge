import axios from 'axios';


const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const createTopic = document.createElement('div');
  createTopic.classList.add('topics');

  const createTab1 = document.createElement('div');
  createTab1.classList.add('tab');
  createTab1.textContent = konu[0];

  const createTab2 = document.createElement('div');
  createTab2.classList.add('tab');
  createTab2.textContent = konu[1];

  const createTab3 = document.createElement('div');
  createTab3.classList.add('tab');
  createTab3.textContent = konu[2];

  const createTab4 = document.createElement('div');
  createTab4.classList.add('tab');
  createTab4.textContent = konu[3];

  const createTab5 = document.createElement('div');
  createTab5.classList.add('tab');
  createTab5.textContent = konu[4];

  createTopic.appendChild(createTab1);
  createTopic.appendChild(createTab2);
  createTopic.appendChild(createTab3);
  createTopic.appendChild(createTab4);
  createTopic.appendChild(createTab5);

  return createTopic;


}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const seciciEkle = document.querySelector(secici);

  axios
    .get('http://localhost:5001/api/konular')
    .then((res) => {
    console.log(res.data);
    seciciEkle.appendChild(Tablar(res.data.konular));
  });

  return seciciEkle;
}

export { Tablar, tabEkleyici }
