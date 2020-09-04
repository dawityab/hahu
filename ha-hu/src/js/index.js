
console.log("me");

function him(){
    var me = 35;
    var her = 29;
    return console.log(me + her);
}
him();



var fidel = [{
    id: 0,
    name:'ሀ',
    sound_fidel:'sound/tom-1.mp3',
   
    },
    {
    id: 1,
    name:'',
    sound_fidel:'sound/tom-2.mp3'
    },
    {
    id: 2,
    name:'ሂ',
    sound_fidel:'sound/tom-3.mp3'
   
    },
    {
    id: 3,
    name:'ሃ',
    sound_fidel:'sound/tom-4.mp3'
    },
    {
    id: 4,
    name:'ሄ',
    sound_fidel:'sound/tom-1.mp3'
   
    },
    {
    id: 5,
    name:'ህ',
    sound_fidel:'sound/tom-2.mp3'
    },
    {
    id: 6,
    name:'ሁ',
    sound_fidel:'sound/tom-3.mp3'
   
    }
    
];


var j ;
var i ;
var cur_fidel;
var boredLetter;


   
        cur_fidel = document.querySelectorAll('.ha-pe');
      
       
        function fidelGebeta(){
            for( j = 0; j < cur_fidel.length; j++){
         cur_fidel[j].addEventListener('click', function(){
           
            document.querySelector('.letter-bored').classList.add("visible");
           
            document.querySelector('.letter-bored').textContent = this.innerHTML;
            var audio = document.querySelector('.sounds');
            //   boredLetter = document.querySelector('.letter-bored').innerHTML;
             
            // audio.addEventListener('click',function(){
           // document.querySelector('.letter-bored').audio.perentNode.textContent = this.innerHTML;

             })
           

              
        
             console.log(boredLetter);
            
             console.log(cur_fidel.length);
             console.log(fidel.length);
       
        }
    }

    fidelGebeta();
      
               
               
    

        
       
  
            
        //         cur_fidel = document.querySelectorAll('.ha-pe');
       
        //         for( j = 0; j < cur_fidel.length; j++){
                
        //          cur_fidel[j].addEventListener('click', function(){
        //          var cur_letter = this.innerHTML;
        //          if( letters(this.innerHTML) === this.innerHTML)
        //          letters(this.innerHTML);
                
            
        //         }); 
        //     }

        //          function letters()  {
                // switch(event){
                //     case 'ሀ':
                     
                //     var he = new Audio("sound/0.mp3");
                //     he.play();
                //     break;
                //     case 'ሁ':
                //     var hu = new Audio("sound/1.mp3");
                //     hu.play();
                //     break;
                //     case 'ሂ':
                //     var hi = new Audio("sound/2.mp3");
                //     hi.play();
                //     break;
                //     default:
                // } 
            
            
        // }
        
    
        
    //             if(cur_fidel[j] === 'ሀ'){
    //                 var he = new Audio("sound/0.mp3");
    //                he.play();
    //             }
    //             else if(cur_fidel[j] === 'ሁ'){
    //                 var hu = new Audio("sound/1.mp3");
    //                hu.play();
    //             }
    //             else if(cur_fidel[j] === 'ሂ'){
    //                 var hi = new Audio("sound/2.mp3");
    //                   hi.play();

    //             }
    //            }
            
        
      
                 
           
                 

    //    }





       ////////////// Array////////
       

      
  
         
        
        
    
