function panggilforEach(){
    var data = "Saya ingin belajar bersama";
    var data2 = data.split(" ");
    data2.forEach(function (item, index){
        console.log('Item :',item,' Indek ke ',index);
    });
}

panggilforEach();