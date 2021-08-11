class Display{
    constructor(displayUp, displayDown){
        this.displayUp = displayUp;
        this.displayDown = displayDown;
        this.calc = new Operation();
        this.operationType = undefined;
        this.newValor = '';
        this.valor = '';
        this.sign = {
            sumar: '+',
            dividir: '÷',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    choice(type){
        this.operationType !== 'igual' && this.calculate();
        this.operationType = type;
        this.valor = this.newValor || this.valor;
        this.newValor = '';
        this.innerValues();
    }

    innerValues(){
        this.displayDown.textContent = this.newValor;
        this.displayUp.textContent = `${this.valor} ${this.sign[this.operationType] || ''}`;
    }

    addNumber(num){
        if(num === '.' && this.newValor.includes('.')){
            return;
        }
        this.newValor = this.newValor.toString() + num.toString();
        this.innerValues();
    }

    remove(){
        this.newValor = this.newValor.toString().slice(0,-1);
        this.innerValues();
    }

    deleteAll(){
        this.valor = '';
        this.newValor = '';
        this.operationType = undefined;
        this.innerValues();
    }

    calculate(){
        const valor = parseFloat(this.valor);
        const newValor = parseFloat(this.newValor);

        if(isNaN(valor) || isNaN(newValor)) return
        this.newValor = this.calc[this.operationType](valor, newValor);
    }

}