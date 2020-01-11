function cekInfinit(){
  var x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  for(i=0;i<x.length;i++){
    if(isFinite(x[i]) == true){
      console.log('Angka',x[i],'NOT Infinity');
    }else{
      console.log('Angka',x[i],'Infinity');
    }
  }
}

cekInfinit();
