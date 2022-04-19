
export const numDiscriminant = (input) => {
    if (input) {
        return input.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        
    }
}
export const numDiscriminantInput = (input) => {
    if (input) {
        if (input.toString().includes(" ")) {
            input = input.toString().replace(/\s/g, "");
          }
            return input.toString().replace(/,/g, "").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",").replace(/ /g,'').replace(/^(\.){0,1}(.*)/,function (g1,g2,g3) { 
                var prefix =''; 
                if(g2 == '.') {
                    prefix = '0.'
                } 
                return prefix + g3
            });
        
    }
}

export  const discountPrice = (price, discount,type,dollar) => {

    console.log(price)
if(discount){
    
    if (type === "percentage") {
        return numDiscriminant(((100 - discount) * price) / 100) + " " + "%"
      }
      if (type === "dollar") {
        return numDiscriminant(dollar) + " " + "doller"
      }
      if (type === "toman") {
          if(discount?.value){
              return (price - discount?.value)  + " " + "toman";
          }else{
              return 
  
          }
      }
}else {
      return numDiscriminant(price - discount);
    }
  };


export const clearDiscriminant = (input) => {
    if (input) {
        return input.toString().replace(/,/g, "");
        
    }
}

export const numberRegex = /^[0-9,.]+$/;

export const decimalLimitInput =(originWallet) => {    
    if (originWallet === "usdt") {
        return /^\d{0,100}(\.\d{0,2})?$/
    } else if (originWallet === "irr" ) {
        return /^\d{0,100}(\.\d{0,0})?$/
    } else {
        return new RegExp(`^\\d{0,100}([0-9,.])?(\\.\\d{0,${originWallet}})?$`)
    }

}


//important ^\..*$


// originWallet === "usdt" ? /^\d{0,100}(\.\d{0,2})?$/ : originWallet === "irr" ? /^\d{0,100}(\.\d{0,0})?$/ : {
    
//     let newString = new RegExp(originWallet,"g")

//     string.replace(newString,"##regex##")

//     return string
//     // new RegExp('^\d{0,100}(\.\d{0,5})?$') 

// }


// \d+\.\d\d(?!\d)
// ^\d{1,6}(\.\d{1,5})?$
// \B(?<!\.\d*)(?=(\d{3})+(?!\d))