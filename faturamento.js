const data = require('./dados.json')


let faturamento = {
	
	dados: data,

	menorValor : () => {
	
		let menor = data[0].valor

		for(let i = 0; i < data.length; i++) {
	
			const VALORES = data[i].valor
	
			if(VALORES !== 0){
				if(VALORES < menor)
					menor = VALORES
			}

		}

		return menor
	},

	maiorValor : () => {
	
		let maior = data[0].valor

		for(let i = 0; i < data.length; i++) {
	
			const VALORES = data[i].valor
	
			if(VALORES !== 0){
				if(VALORES > maior)
					maior = VALORES
			}

		}

		return maior
	},

	mediaMensal : () => {
	
		let cont = 0
		let soma = 0
		let media = 0

		for(let i = 0; i < data.length; i++){
		
			const VALORES = data[i].valor
		
			if(VALORES !== 0){
				cont++
				soma = soma + VALORES
		 	 }
		}

		media = soma / cont

		return media
	},

	superiorMediaMensal : () => {

		let mediaT = faturamento.mediaMensal()
		let qtd = 0

		for(let i = 0; i < data.length; i++) {
	
			const VALORES = data[i].valor
			const DIAS = data[i].dia
	
			if(VALORES !== 0){
				if(VALORES > mediaT ){
					qtd++
					console.log(`O valor de faturamento do dia ${DIAS} foi de ${VALORES.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} `)
				}
			}

		}
		console.log('\n')
		console.log(`O Número de dias no mês em que o valor de faturamento diário foi superior à \nmédia mensal foi de ${qtd} dias`)
	
	}


}

module.exports = faturamento