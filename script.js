function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    document.getElementById("output-value").innerText=num;
}

let operator = document.getElementsByClassName("operator");
for(let i = 0; i < operator.length; i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "back"){
            let output = getOutput().toString();
            if(output){
                output = output.substr(0,output.length - 1);
                printOutput(output);
            }
        }
        else{
            let history = getHistory();
            let output = getOutput();
            if(output == "" && history != ""){
                if(isNaN(history[history.length- 1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output != "" || history != ""){
                history = history + output;
                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}

let number = document.getElementsByClassName("number");
for(let i = 0; i < operator.length; i++)
{
    number[i].addEventListener('click',function(){
        output = getOutput();
        output = output + this.id;
        printOutput(output);
    })
}