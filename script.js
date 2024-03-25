document.getElementById("ulkeSecim").addEventListener("change", function() {
    var secilenUlke = this.value;
    var detaylar = "";
    
    // Seçilen ülkeye göre detayları oluştur
    switch(secilenUlke) {
        case "sicilya":
            detaylar = "Sıcak sahilleri ile içinizi ısıtan Sicilya koyları sizi masallarda hissettirecek.";
            break;
        case "como-golu":
            detaylar = "İnsanda hemen kalkıp gitme isteği uyandıran bir güzelliğe sahip Como Gölü.";
            break;
        case "giethoorn":
            detaylar = "Masalsı evleri ile keşke bu evlerde yaşasam diyeceksiniz.";
            break;
        case "singapur":
            detaylar = "Doğasıyla ve mimarisiyle size iyi gelecek en etkileyici yerlerden biri.";
            break;
        case "berlin":
            detaylar = "Özgün ve sıradışı müzeleri ile sizi şaşırtacak bir yer.";
            break;
        default:
            detaylar = "Lütfen bir ülke seçiniz.";
    }
    
    // Detayları ekrana göster
    document.getElementById("detaylar").innerHTML = detaylar;
});
