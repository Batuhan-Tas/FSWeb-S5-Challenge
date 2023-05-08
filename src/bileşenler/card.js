import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const createCard = document.createElement('div');
  createCard.classList.add('card');

  const createHeadline2 = document.createElement('div');
  createHeadline2.classList.add('headline');
  createHeadline2.textContent = makale.anabaslik;

  const createAuthor = document.createElement('div');
  createAuthor.classList.add('author');

  const createContainer = document.createElement('div');
  createContainer.classList.add('img-container');

  const createPhoto = document.createElement('img');
  createPhoto.src = makale.yazarFoto;

  const createYazar = document.createElement('span');
  createYazar.textContent = makale.yazarAdi+ ' tarafından';

  createContainer.appendChild(createPhoto);
  createAuthor.appendChild(createContainer);
  createAuthor.appendChild(createYazar);
  createCard.appendChild(createHeadline2);
  createCard.appendChild(createAuthor);

  return createCard;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const cardEkle = document.querySelector(secici);

  axios
    .get('http://localhost:5001/api/makaleler')
    .then((res) => {
      for(let key in res.data.makaleler){
        for(let i=0;i<res.data.makaleler[key].length;i++){
          cardEkle.appendChild(Card(res.data.makaleler[key][i]));
        }
      }
      
    })

    return cardEkle;

}

export { Card, cardEkleyici }
