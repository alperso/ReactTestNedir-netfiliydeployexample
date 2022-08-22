import {render, screen} from '@testing-library/react'; //render:render etmemi saglıyor //screen: o anda domda olan bir nesneyi yakalamak için kullanılır
//örn: const linkElement=screen.getByText(/learn react/i); (biz gidip id si veya clası şu olan alabiliriz.)
import userEvent from '@testing-library/user-event';
import Todo from "./index";
import {fireEvent} from "@testing-library/dom";


describe('Todo List Test', () => {
    // Şimdi bizim butonu ve inputu bilmem lazım
    // Butona ve inputa erişmem lazım

    let addBtn, addInput, container;
    beforeEach(() => { //Her test çalışmasından önce bir şey olsun istiyorum
        console.log("Her testten hemen önce çalışacagım");
        container = document.createElement('div');
        render(<Todo/>);//todoyu git render et
        addBtn = screen.getByText("Add"); //Add texti olan butonu getir
        addInput = screen.getByLabelText("Text"); //Text olan içerigi labeli getir //placeholder varsa onunlada erişebilirim

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
    test('Default List Geliyor Mu Testi', () => {
        const items = screen.getAllByText(/Item/i);//item ile başlayanları al
        expect(items.length).toEqual(3);//Default olan 3 değer eşit olmalı diyorum
    });
    test('Input ve Btn dokumanda bulunmalı', () => {
        expect(addBtn).toBeInTheDocument();//Buton var mı
        expect(addInput).toBeInTheDocument();//Input var mı
    });
    test('Inputa string girilip butona basılınca listeye eklenmeli', () => {
        //inputu doldur
        const name = "Alper";
        userEvent.type(addInput, name);//hangi inputa yazacaksın,ne yazacaksın

        //butona tıkla
        fireEvent.click(screen.getByText("Add"));

        //bekliyoruz bir şeyin olmasını --listeye yeni bir eleman ekleniyor mu
        // const eklenmiselement = screen.getByText('Item Alper');

        //DİKKAT   !!!!!!!!!!!!     Başına Item ekliyyordum ınsert ederken
        expect(screen.getByText('Item Alper')).toBeInTheDocument();//git dokumanda benim testte ekledıgım name yani alper var mı


    });


})
