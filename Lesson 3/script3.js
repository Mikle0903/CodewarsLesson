function well(x){

   let arr = x.filter((x) => x == "good").length;
    return arr < 1 ?  'Fail!': 
           arr > 2 ? 'I smell a series!': "Publish!"
   }