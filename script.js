
document.addEventListener("DOMContentLoaded", function () {
  alert("Hoş geldiniz!");
  const form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);
});


function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  // Verileri nasil kontrol edebilirim??? 
  console.log(`İsim: ${name}, Email: ${email}, Mesaj: ${message}`);
  alert("Mesajınız başarıyla gönderildi!");
}
// TODO 3: Tema değiştirme fonksiyonu
function toggleTheme() {
  //
  // Görevler:
  // - Açık/koyu tema arasında geçiş yapın
  // - body'nin class'ını değiştirin
  // - Kullanıcı tercihini localStorage'a kaydedin
  //
}

// TODO 4: Menü öğelerine tıklandığında çalışacak fonksiyon
function handleNavigation(event) {
  //
  // Görevler:
  // - Varsayılan davranışı engelleyin
  // - Aktif menü öğesini belirgin hale getirin
  // - Sayfa içi kaydırma animasyonu ekleyin
  //
}

// TODO 5: Görsel yükleme hatalarını işleyen fonksiyon
function handleImageError(img) {
  //
  // Görevler:
  // - Hata durumunda yedek görsel gösterin
  // - Kullanıcıya bilgi verin
  //
}

// TODO 6: Sayfa kaydırma olayını işleyen fonksiyon
function handleScroll() {
  //
  // Görevler:
  // - Scroll pozisyonunu alın
  // - Belirli bir noktadan sonra "Yukarı Çık" butonunu gösterin
  // - Header'ın stilini güncelleyin
  //
}

// TODO 7: Sayfa yüklendiğinde kaydedilmiş temayı uygulama
function applyStoredTheme() {
  //
  // Görevler:
  // - localStorage'dan tema tercihini okuyun
  // - Temayı uygulayın
  //
}
