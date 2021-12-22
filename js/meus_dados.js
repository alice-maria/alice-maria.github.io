class Eu{
    idade
    email
    conhecimentos

    constructor(idade,email,conhecimentos){
        this.idade=idade
        this.email=email
        this.conhecimentos=conhecimentos
    }

    meApresentar(){
        return "Ola, sou a Maria, tenho "+this.idade+
        " anos, pode entrar em contato comigo pelo e-mail "+this.email+
        "no momento aprendi sobre:"+this.aprendizado()
    }
    aprendizado(){
        let texto=""
        for(let contador=0;contador<conhecimentos.length;contador++){
            texto+="<br>"+this.conhecimentos[contador]
        }
        return texto
    }
}



let conhecimentos=[
    "Algoritmos 1 (pseudocódigo com Visualg)",
    "Algoritmos 2 (linguagem de programação javascript)"
]

let minha_pessoa = new Eu(32,"mriaalicematos@gmail.com",conhecimentos)
document.writeln(minha_pessoa.meApresentar())