function add(x,y)
{
    document.write(x + y);
}

function subtract(x,y)
{
    document.write(x - y);
}

function multiply(x,y)
{
    document.write(x * y);
}

function divide(x,y)
{
    document.write(x / y);
}

function mathProb(x,y,operationsign)
        {
            switch(operationsign)
            {
                case "+":
                    var add = (x + y);
                    document.write("x + y" + " = " + add);
                    break;
                    
                case "-":
                    var subtract = (x - y); 
                    document.write("x - y" + " = " + subtract);
                    break;
                    
                case "*":
                    var multiply = (x * y);
                    document.write("x * y" + " = " + multiply);
                    break;
                    
                case "/":
                    var divide = (x / y);
                    document.write("x / y" + " = " + divide);
                    break;
                    
                default:
                    document.write("You did not specify and operand.")
            }
            
        } 
