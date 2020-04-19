
var arrA = ["Q1Ansewer4","Q2Ansewer3","Q3Ansewer1","Q4Ansewer2","Q5Ansewer3","Q6Ansewer2",  "Q7Ansewer2","Q8Ansewer4", 
"Q9Ansewer1",   "Q10Ansewer4","Q11Ansewer2","Q12Ansewer1","Q13Ansewer3","Q14Ansewer4"];
var SumRightAnswer=0;

// Create the div ContanrBody
var CreateDivContanrBody = document.createElement("div"); 
CreateDivContanrBody.setAttribute("class","ContanrBody");
// document.body.appendChild(CreateDivContanrBody); 
document.body.appendChild(CreateDivContanrBody);

var i;
for (i = 1; i <= 14; i++) {

// Create the div Qustion
    var CreateDivIQ = document.createElement("div"); 
    CreateDivIQ.setAttribute("class","IQ Q"+i);
    CreateDivIQ.setAttribute("id","IQQ"+i);
    CreateDivIQ.setAttribute("Value","0");      

    //Create Pragraph Qustion Number
    var CreatePragraph = document.createElement("p"); 
    CreatePragraph.setAttribute("class","Pragraph");
    CreatePragraph.innerText="Question Number [ " +i+ " ]";
    // Create the div pic Qustion
    var CreateDivPicQustion = document.createElement("div"); 
    CreateDivPicQustion.setAttribute("class","Pic Q"+i+"Q"+i);
    CreateDivPicQustion.setAttribute("style","background-image: url('css/assets/IQ"+i+"/q"+i+".png');")
    // Create the div pic Answer
    var CreateDivPicAnswer = document.createElement("div"); 
    CreateDivPicAnswer.setAttribute("class","Pic Q"+i+"A"+i);
    CreateDivPicAnswer.setAttribute("style","background-image: url('css/assets/IQ"+i+"/a"+i+".png');")

    // Create The Answers
    var ians;
    var countAns;
    if (i < 14){
        countAns=4;
    }else{
        countAns=9;

    }
            for (ians = 1; ians <= countAns; ians++) {
                var CreateAnswers = document.createElement("div");
                CreateAnswers.setAttribute("class","AllQA Q"+i+"Ansewer a"+ians);
                CreateAnswers.setAttribute("id","Q"+i+"Ansewer"+ians);
                CreateAnswers.setAttribute("onclick","QAnswer("+i+",'QAnsewer"+ians+"',"+countAns+")");
                CreateDivPicAnswer.appendChild(CreateAnswers);
            }

 // insert the Pragraph Qustion Number
 CreateDivIQ.appendChild(CreatePragraph);
     // insert the pic Qustion
     CreateDivIQ.appendChild(CreateDivPicQustion);
     // insert the pic Answer
     CreateDivIQ.appendChild(CreateDivPicAnswer);
     // insert the div in Cnotaner
     CreateDivContanrBody.appendChild(CreateDivIQ);
     
}
var CreateDivBtton=document.createElement("div"); 
CreateDivBtton.setAttribute("class","ContanrButton");
CreateDivContanrBody.appendChild(CreateDivBtton); 

var spanmesaage = document.createElement("span")
spanmesaage.setAttribute("class","popuptext");
spanmesaage.setAttribute("id","myPopup");
spanmesaage.innerText= "You Must Finished All Questions";


var btn = document.createElement("button");
btn.setAttribute("Class","btn");
btn.setAttribute("onclick","GetTotalRsult()");
btn.innerText="Get Score";
btn.appendChild(spanmesaage);
CreateDivBtton.appendChild(btn); 

var DivCardRuslt =document.createElement("div");
var DivCardHeader =document.createElement("div");
var PScore =document.createElement("p");
var DivContainer =document.createElement("div");
var PTitle =document.createElement("p");

DivCardRuslt.appendChild(DivCardHeader); DivCardRuslt.setAttribute("class","card");
DivCardHeader.appendChild(PScore);DivCardHeader.setAttribute("class","header");PScore.setAttribute("id","labelRuselt");
DivCardRuslt.appendChild(DivContainer);
DivContainer.appendChild(PTitle);DivContainer.setAttribute("class","Container");
PScore.innerText="Total Score : 0";
PTitle.innerText="You Can See All Result Just Go Up";
CreateDivContanrBody.appendChild(DivCardRuslt); 


function QAnswer(QusNum,idname,LoopLength){
    SumRightAnswer=0;
    unselectall(QusNum,LoopLength);
    var res = idname.replace("QAnsewer", "Q" + QusNum + "Ansewer");
    document.getElementById(res).style.boxShadow = "1px 1px 20px Black";

    document.getElementById("IQQ"+QusNum).setAttribute("Value",res);
    var iloop;
    for (iloop=1; iloop<=14 ;iloop++){
              if (arrA.includes(document.getElementById("IQQ"+iloop).getAttribute("Value"))){
            SumRightAnswer+=1;
        }
    }
}
function unselectall(QusNum,LoopLength){
    var i;
    for (i = 1; i <= LoopLength; i++) {
        document.getElementById('Q'+QusNum+'Ansewer' + i ).style.boxShadow = "0px 0px 0px White";
    }
}

function GetTotalRsult(){
    // window.scrollTo(0,document.body.scrol);
    // window.scrollTo(0,document.querySelector(".card").scrollHeight);

    // const fs = require('fs') ;
    // // Data which will write in a file. 
    // let data = "Total Score : " + SumRightAnswer + " / 14";
    // // Write data in 'Output.txt' . 
    // fs.writeFile('Output.txt', data, (err));

    
    

    var iloop; var iGren;
    var popup = document.getElementById("myPopup");
    for (iloop=1; iloop<=14 ;iloop++){
        if ((document.getElementById("IQQ"+iloop).getAttribute("Value"))=="0"){
            popup.classList.add("show"); //You Must Finished All
            break;
        }else{
    document.getElementById("labelRuselt").innerText="Total Score : " + SumRightAnswer + " / 14" ;
    DivCardRuslt.classList.add("show");
    popup.classList.remove("show");
    for (iGren=1; iGren<=14 ;iGren++){
        var redValue= document.getElementById("IQQ"+iGren).getAttribute('value');

       
        // if (arrA.includes(redValue)){
            // }else{ }
            
                  document.getElementById(redValue).style.border="solid 0px red"
                  document.getElementById(redValue).style.boxShadow = "0px 0px 20px red"; 

            document.getElementById(arrA[iGren-1]).style.border="solid 0px green"
           document.getElementById(arrA[iGren-1]).style.boxShadow = "0px 0px 20px Green";    
       

        
            
        }
      
       
        }
    }
    
}




    // var fso = new ActiveXObject("Scripting.FileSystemObject");
    // var fh = fso.CreateTextFile("Output.txt", 8, true);
    // fh.WriteLine("Total Score : " + "SumRightAnswer" + " / 14");
    // fh.Close();

    	

   
    

//     var fs = require('fs');
// fs.appendFile('Output.txt', 'new data', function (err) {
//   if (err) {
//     // append failed
//     alert("append failed");
//   } else {
//     // done
//     alert("done");
//   }
// })