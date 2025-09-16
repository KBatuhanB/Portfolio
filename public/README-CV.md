# CV Dosyası Ekleme Rehberi

## CV İndirme Özelliği İçin Yapılacaklar:

### 1. CV Dosyasını Hazırlayın
- CV'nizi PDF formatında hazırlayın
- Dosya adını `cv.pdf` olarak kaydedin
- Dosya boyutunun makul olduğundan emin olun (tercihen 5MB'dan küçük)

### 2. CV Dosyasını Projeye Ekleyin
CV dosyanızı aşağıdaki konuma kopyalayın:
```
c:\Users\Kelami Batuhan\Documents\JavaScript\Portfolyo\public\cv.pdf
```

### 3. Alternatif İsimler
Eğer farklı bir dosya adı kullanmak istiyorsanız, `PersonalInfo.jsx` dosyasındaki `handleResumeDownload` fonksiyonunu güncelleyin:

```javascript
const pdfUrl = '/your-cv-filename.pdf'; // Bu satırı değiştirin
```

### 4. Test Etme
1. CV dosyasını `public` klasörüne yerleştirdikten sonra
2. Geliştirme sunucusunu yeniden başlatın: `npm run dev`
3. "Download CV" butonuna tıklayın
4. CV'nizin indirildiğini veya yeni sekmede açıldığını kontrol edin

### 5. Dosya Yolu Kontrol
Eğer CV indirilmiyorsa:
- Dosya adının tam olarak `cv.pdf` olduğundan emin olun
- Dosyanın `public` klasöründe olduğundan emin olun
- Browser konsolunda hata mesajı olup olmadığını kontrol edin

### 6. Online Deployment İçin
Siteyi canlıya aldığınızda CV dosyasının da upload edildiğinden emin olun.
