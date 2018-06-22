const animals = {
    birds: [
      {name:'Kiwi', silhouette:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Kiwi_silhouette-by-flomar.svg/2000px-Kiwi_silhouette-by-flomar.svg.png', img:'http://www.purangikiwi.co.nz/wp-content/uploads/2016/02/kiwi_head.jpg', facts:'https://en.wikipedia.org/wiki/Kiwi'},
      {name:'Hummingbird', silhouette:'http://www.stickpng.com/assets/images/584ab343e583a46e8c837a38.png', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghVvPeMVjX3l_Cb4vhUDF2iJJDZr-6YtZP1NUUY0Z_xY10OLw', facts:'https://en.wikipedia.org/wiki/Hummingbird'},
      {name: 'Owl', silhouette: 'https://i.pinimg.com/originals/78/95/4f/78954f32223c94550d9c281927200367.png', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_0oZYxbUdwMv5c5ZuWByJvfcEPAkFGOD-PtRsPZN1rx-RJDb4g', facts: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwj9r_3aoObbAhXBkJQKHSOZBjUQFggnMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FOwl&usg=AOvVaw2cN1AslRNANooMp0U8XMk2'}
    ],
    reptiles: [
      {name:'Tuatara', silhouette:'http://www.supercoloring.com/sites/default/files/silhouettes/2015/07/tuatara-black-silhouette.svg', img:'https://www.pottonandburton.co.nz/wp-content/uploads/2015/09/tuatara.png', facts:'https://en.wikipedia.org/wiki/Tuatara'},
      {name:'Rattlesnake', silhouette:'http://www.supercoloring.com/sites/default/files/silhouettes/2015/07/rattlesnake-black-silhouette.svg', img:'https://images-na.ssl-images-amazon.com/images/I/817EVUIcMFL._SX425_.jpg', facts:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwin3sLBlubbAhUyC6YKHao6DfQQFggnMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRattlesnake&usg=AOvVaw3kdoxYxBuK7R4ROts8I9ko'},
      {name: 'Tortoise', silhouette: 'http://www.supercoloring.com/sites/default/files/silhouettes/2015/07/tortoise-black-silhouette.svg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEL5uppCfWKTiqvZuSvtdZyKJxAG2Am2rZPdlIDKcH_bUxxCU7iQ', facts: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjI2af3oebbAhVCkJQKHfvAB4IQFggnMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTortoise&usg=AOvVaw3mH_rV8C72stQ7DRsPewGn'}
    ],
    mammals: [
      {name:'Tiger', silhouette:'https://www.spreadshirt.com/image-server/v1/mp/designs/13621675,width=178,height=178/tiger-silhouette.png', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Royal_Bengal_Tiger_at_Kanha_National_Park.jpg/800px-Royal_Bengal_Tiger_at_Kanha_National_Park.jpg', facts:'https://en.wikipedia.org/wiki/Tiger', sound:'roaring', sound_file:'./Tiger7.mp3'},
      {name:'Whale', silhouette:'https://www.shareicon.net/data/512x512/2016/08/07/807997_animal_512x512.png', img:'https://i.ytimg.com/vi/je3muwxbBBU/maxresdefault.jpg', facts:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiW46zxlubbAhVMlJQKHfX0BZEQFggnMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWhale&usg=AOvVaw1GTrSVws5WcqigAXDpPTTZ'},
      {name: 'Possum', silhouette: 'https://image.flaticon.com/icons/svg/47/47419.svg', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuabtWo0fPgp7ZgHkJKxU12TJ4Bb7NQl0FOFvRfoGz4mp-FAvqQ', facts: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=11&cad=rja&uact=8&ved=0ahUKEwj0ldDHoubbAhVIX5QKHTkbBtoQFghpMAo&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPossum&usg=AOvVaw1X5fYxQkSdfJkp2yRBhM63'}
    ],
    fish:[
      {name:'Piranha', silhouette:'https://www.spreadshirt.com/image-server/v1/mp/designs/13180742,width=178,height=178/piranha-silhouette.png', img:'https://www.sickchirpse.com/wp-content/uploads/2015/03/Piranha.jpg', facts:'https://en.wikipedia.org/wiki/Piranha'},
      {name:'Seahorse', silhouette:'https://openclipart.org/image/2400px/svg_to_png/243515/1457581718.png', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGXeSOuNlGZT6UbvRNirYACTCOouFNGf6UZSFYhUiSQ-DdBNFfw', facts: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjVj9Ozl-bbAhUJHZQKHSzWBM8QFggqMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSeahorse&usg=AOvVaw1BNeJMs2-klO666Snqn65_'},
      {name: 'Snapper', silhouette: 'https://i.pinimg.com/originals/cf/d5/2b/cfd52b001b406dc142a546156684d870.png', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUj4xyw6Scj2Xa_1qJSYyyv94ZWLy7B2Amr3MAE9tjYtO280p8', facts: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjCuMuJo-bbAhVDHJQKHfFRADYQFggnMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSnapper&usg=AOvVaw06DC-NZgImHFrPeIpG7btO'}
    ]
  }

export default animals
