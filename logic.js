// Basic Unit of logic
function LogicExpression() {
    this.toString = function() {
        return "[empty]";
    }
    this.equals = function(other) {
        return this.toString() === other.toString();
    }
}

// Basic Logic Expressions
function Variable(char) {
    LogicExpression.call(this);
    this.name = char;
    this.toString = function() {
        return this.name;
    }
}
function And(left, right) {
    LogicExpression.call(this);
    this.left = left;
    this.right = right;
    this.toString = function() {
        return "(" + this.left.toString() + " &and; " + this.right.toString() + ")";
    }
}
function Or(left, right) {
    LogicExpression.call(this);
    this.left = left;
    this.right = right;
    this.toString = function() {
        return "(" + this.left.toString() + " &or; " + this.right.toString() + ")";
    }
}
function Not(expr) {
    LogicExpression.call(this);
    this.expr = expr;
    this.toString = function() {
        return "&not;" + expr;
    }
}


function Step(num, expr, just) {
    this.num = num;
    this.expression = expr;
    this.justification = just;
    
    this.equals = function(other) {
        return this.expression.equals(other.expression);
    }
    
    this.draw = function(canvas, offset) {
        let ctx = canvas.getContext("2d");
        
        let charOffset = 3;
        
        // Draw the square
        ctx.fillStyle = 
        ctx.fillRect(0, height * offset, width, height);
    }
    
    this.getNode = function() {
        let colors = ["gray", "white"];
        
        let node = document.createElement("p");
        let text = document.createTextNode(this.expression);
        node.appendChild(text);
        
        return node;
    }
}


let x = new Variable("x");
let y = new Variable("y");
let and = new And(x, y);
let or = new Or(and, y);
let tmp = new Not(or);

console.log(tmp.toString());