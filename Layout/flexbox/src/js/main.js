import '../css/index.scss';
import $ from '../../js/jquery-3.3.1.js';
function say(){
    console.log("here runs");

    $.ajax("README.md").then(function(data){
        console.log("0-----");
        console.log(data);
        var a = document.createElement("div");
        a.innerText = data;
        a.id = "test";
        a.style = "color:red;"
        var body = document.body;
        body.appendChild(a);
     },function(err){
         console.log("err")
         console.log(err)
     });
 
}
//say();


