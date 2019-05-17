import React from 'react';

export default React.createContext({
    bigcards:[
        { key:'1',content:'Przepiąkna sala weselna na 250 osób', alt:"Zdjecia sali", src:require("../assets/example-card-img.png") , btn:'Zobacz zjdecia sali'},
        { key:'2',content:'Własnoręcznie przygotowane dekoracje kwiatowe.', alt:"Zdjecia dekoracji", src:require("../assets/zdjecie-glowne-dekoracje.png"), btn:'Zobacz zjdecia dekoracji'},
        { key:'3',content:'Catering przygotowują nasi kucharze na miejscu', alt:"Zdjecia bufetu", src:require("../assets/zdjecie-glowne-bufet.png"), btn:'Zobacz zjdecia bufetu'},
        { key:'4',content:'Państwa wesele odbędzie się w pięknym otoczeniu przyrody', alt:"Zdjecie dekoracji", src:require("../assets/zdjecie-glowne-pleneru.png"), btn:'Zobacz zjdecia pleneru'},
    ],
    smallcards:[
        {key:'1', alt:'wesela', src:require("../assets/example-card-img.png"), title:'Wesela', content:'Marzysz o pięknej sali z antresolą? A może o weselu plenerowym pod namiotem? Czegokolwiek pragniesz, z nami jest to w zasięgu ręki!'},
        {key:'2', alt:'dekoracji', src:require("../assets/small-card-dekoracje.png"), title:'Dekoracje', content:'Pani Ula, nasza florystka, spełni marzenia i zatroszczy się o każdą Twoją potrzebę. Przygotuje dekoracje do kościoła, ślubu plenerowego, domu, samochodu i tortu.'},
        {key:'3', alt:'imprez okolicznościowych', src:require("../assets/small-card-imprezy.png"), title:'Imprezy okolicznościowe', content:'Przed Tobą Chrzest, 30-ste urodziny, Jubileusz, Rocznica ślubu, wieczór panieńsku lub kawalerski? Każde przyjęcie okolicznościowe jest dla nas wydarzeniem szczególnym – bez względu na rozmiar czy okazję.'},
        {key:'4', alt:'komunii', src:require("../assets/small-card-komunie.png"), title:'Komunie', content:'Jędrzejewski gwarantuje profesjonalną obsługę i wyjątkową, rodzinną atmosferę. Dzięki temu, że nasz obiekt posiada duży ogród, kort tenisowy, piłkarzyki i trampolinę, dzieci również będą się wspaniale bawiły.'},
        {key:'5', alt:'przyjecia weselne', src:require("../assets/small-card-przyjecia.png"), title:'Przyjęcia weselne', content:'Wolisz mniejsze przyjęcie dla rodziny, niż huczne wesele do 6 rano, nie chcesz jednak odejmować wagi temu wydarzeniu? Zrób u nas przyjęcie weselne! To świetna alternatywa dla szalonych całonocnych wesel.'},
    ],
    menu:[
        {name:"Przekąski"},
        {name:"Słodki bufet"},
        {name:"Uroczysty tort"},     
        {name:"Meble na stół wiejski"},
        {name:"Słodki bufet"},
        {name:"Uroczysty tort"},     
        {name:"Meble na stół wiejski"},
    ]
})

