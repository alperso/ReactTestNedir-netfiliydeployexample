import {render, screen} from '@testing-library/react'; //render:render etmemi saglıyor //screen: o anda domda olan bir nesneyi yakalamak için kullanılır
//örn: const linkElement=screen.getByText(/learn react/i); (biz gidip id si veya clası şu olan alabiliriz.)
import userEvent from '@testing-library/user-event';
import Counter from "./counter";
// it veya test Fonksiyonu(birbrinin aynısı)
// örn:it should be a valit e mail address (gibi bir uyarı hatırlatmasında her yazmada başındaki it ifadesinden benzetme yapmışlar
// her defasında yazmak yerine bir fonk oluşturalım demişler)
// örn:
// butona basıldıgında sayı bir artmalı
// butona basıldıgında bir şey olmalı


// Aciklama :Artır buton testi  (bu açıklamayla patlarsa hangi testin patladıgını görüyorum)
// it('Artır Buton testi', () => {
//     render(<Counter/>);//test edilecek componenti render ettim
//     const countElement = screen.getByText('0');//il çalıştıgında içinde 0 yazan tanımı bul dedim
//     const artirBtnElement = screen.getByText("Artır");///dom daki nesnelerden texti Artir olani getirdim
//     userEvent.click(artirBtnElement);//butona tıklattırdım
//     expect(countElement).toHaveTextContent("1");//butonun görevi neydi count +1 yapmak bak bakalım bu çalışıyor mu
//     //countElement contenti butona basıldıgında 1 oluyor mu
//
//
// });
// test('Azalt Buton testi', () => {
//     render(<Counter/>);//test edilecek componenti render ettim
//     const countElement = screen.getByText('0');//il çalıştıgında içinde 0 yazan tanımı bul dedim
//     const azaltBtnElement = screen.getByText("Azalt");///dom daki nesnelerden texti Artir olani getirdim
//     userEvent.click(azaltBtnElement);//butona tıklattırdım
//     expect(countElement).toHaveTextContent("-1");//butonun görevi neydi count +1 yapmak bak bakalım bu çalışıyor mu
//     //countElement contenti butona basıldıgında 1 oluyor mu
// });

// Bu sayfayı daha temiz test kodu yazabiliriz. (2 kere render ediliyor countElement 2 kere getiriliyor)

describe('Counter Test', () => {
    //describe testin içindeki tüm testler için şunları diyorum (boşuna 2 kere tekrar etme)
    let countElement, azaltBtnElement, artirBtnElement;
    beforeEach(() => { //Artir Buton Testinden önce çalıştı, Azalt Buton Testinden önce 2 defa çalıştı
        console.log("Her testten hemen önce çalışacagım");
        render(<Counter/>);
        countElement = screen.getByText('0'); //getir
        azaltBtnElement = screen.getByText("Azalt"); //getir
        artirBtnElement = screen.getByText("Artır"); //getir
    });//testler çalışmadan önce bunları yap ismi Counter Test Olsun // Tüm testlerden önce çalışır

    // beforeAll(() => {// bu ise tüüüüm testlerden önce 1 kereye mahsus çalışır
    //     console.log("İlk başta 1 Kere çalışacagım Tüm");
    // })
    //
    // afterEach(()=>{//her test bittikten sonra çalışacagım
    //     //Artir Buton Testi bitti çalıştım, Azalt Buton Testi bitti çalştım...
    //     console.log("1 test bittikten sonra çalıştım")
    // })
    //
    // afterAll(()=>{//bütün test bittikten sonra
    //     console.log("En son 1 kere çalışacagım bütün testler bitti")
    // })
    //--------------------------------------------------------------------
    test('Azalt Buton testi', () => {
        userEvent.click(azaltBtnElement);//butona tıklattırdım
        expect(countElement).toHaveTextContent("-1");//butonun görevi neydi count +1 yapmak bak bakalım bu çalışıyor mu
        //countElement contenti butona basıldıgında 1 oluyor mu
    });
    it('Artır Buton testi', () => {

        userEvent.click(artirBtnElement);//butona tıklattırdım
        expect(countElement).toHaveTextContent("1");//butonun görevi neydi count +1 yapmak bak bakalım bu çalışıyor mu
        //countElement contenti butona basıldıgında 1 oluyor muw

    });

})



