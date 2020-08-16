//test to check if js is attached correctly


//module for conversion formulas
var formulas=(function(){
    const kelvin=273;
    return{

      kelvinToCelsius:(val) => {
           let temp=val-kelvin;
           return temp;
      },
      kelvinToFarenheit:(val) => {
           let temp=9/5*(val-kelvin)+32
           return temp;
      },
      celsiusToKelvin:(val) => {
           let temp=val+kelvin;
           return temp;
      },
      celsiusToFarenheit:(val) => {
          let temp=9/5*(val)+32;
          return temp;
      },
      farnheitToKelvin:(val) => {
          let temp=5/9*(val-32)+kelvin;
          return temp;
      },
      farenheitToCelsius:(val) => {
          let temp=5/9*(val-32);
          return temp;
      }


    }




})();
// module for taking and displaying in input
var uiController=(function(){

var DoMString={

    kelvin:'.kelvin',
    celsius:'.celsius',
    farenheit:'.farenheit'
};
return{
    getDomString:function(){
        return DoMString;
    },
    getInput:function(){

      return{
          kelvinInput:document.querySelector(DoMString.kelvin).value,
          celsiusInput:document.querySelector(DoMString.celsius).value,
          farenheitInput:document.querySelector(DoMString.farenheit).value
        


      }
    },
    displayOnUi:function(){
        
     return{

      kelToCel:data => {
        document.querySelector(DoMString.celsius).value=data;
      },
      kelToFar:data => {
        document.querySelector(DoMString.farenheit).value=data;
      },
      celToKel:data => {
        document.querySelector(DoMString.kelvin).value=data;
        
      },
      celToFar:data => {
        document.querySelector(DoMString.farenheit).value=data;
      },
      farToKel:data => {
        document.querySelector(DoMString.kelvin).value=data;
        
        
      },
      farToCel:data => {
        document.querySelector(DoMString.celsius).value=data;

  


     }
    }




}
}
})();
// module for communication between  upper two modules(formulas and uiController)
var appController=(function(calc,ui){
    
    //event listener call back function expression
    var result=function(event){
        let input=ui.getInput();
        const Item=event.target;
        let view=ui.displayOnUi();
        
        //calling calculations function 
        if(Item.classList[0]==="kelvin" ){
            let fieldInput=parseInt(input.kelvinInput);
          let kToC=(calc.kelvinToCelsius(fieldInput));
          view.kelToCel(kToC);
          let kToF=(calc.kelvinToFarenheit(fieldInput));
          view.kelToFar(kToF);
         
        }
        else if(Item.classList[0]==="celsius"){
            let fieldInput=parseInt(input.celsiusInput);
            let cToK=calc.celsiusToKelvin(fieldInput);
            view.celToKel(cToK);
            let cToF=calc.celsiusToFarenheit(fieldInput);
            view.celToFar(cToF);
            
        }
        else if(Item.classList[0]==="farenheit")
        {   let fieldInput=parseInt(input.farenheitInput);
            let fToC=calc.farenheitToCelsius(fieldInput);
            view.farToCel(fToC);
            let fToK=calc.farnheitToKelvin(fieldInput);
            view.farToKel(fToK);
        }
        
    }
      //setup event listener

document.querySelector('form').addEventListener('input',result);




})(formulas,uiController);
