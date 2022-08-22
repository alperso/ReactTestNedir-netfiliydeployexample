import React, {useState} from 'react';

const defaultItems = [
    {
        name: "Item a"
    },
    {
        name: "Item b"
    },
    {
        name: "Item c"
    }
]

function Todo(props) {
    const [text, setText] = useState("");//inputa veri girdigimde içine yazılacak state
    const [items, setItems] = useState(defaultItems);//listemizi tutacak array state default 3 tane degeri olsun
    const handleInput = () => {
        setItems((prev) => [...prev, {name: 'Item ' + text}])
        setText('');//state listeye eklendikten sonra inputu boş bıraktım
    }
    return (
        <div>
            {/*Örn:İnputa tıklandıntan sonra bir isim yazılacak ve form gönderildikten sonra alttaki listeye eklenecek*/}
            {/*Bakalım doğru yapıyor mu diye testini yazacagız*/}
            <label>
                Text
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>

            {/*Tıklanıldıgında setItems statine
                 önceki items statini al yeni texti ekle diyorum.Bunu yapmazsam listede hep 1 eleman olacak */}
            <button
                type="button"
                onClick={handleInput}
            >Add
            </button>

            <br/>
            <br/>
            {
                items.map((item, key) => (
                    <div key={key}>{item.name}</div>
                ))
            }

            {/*//Şimdi yazacagım test ile inputa eklenen bir değer state içine yazılıp listeleniyor mu bunun testini yapayım*/}
        </div>
    );
}

export default Todo;