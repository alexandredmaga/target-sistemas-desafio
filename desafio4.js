/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de 
representação que cada estado teve dentro do valor total mensal da distribuidora.

*/

const faturamento = {
	
	estados : [

		{	
			estado: 'SP',
			valor: 67836.43
		},
			
		{
			estado: 'RJ',
			valor: 36678.66
		},
		{
			estado : 'MG',
			valor:  29229.88
		},
		{
			estado : 'ES',
			valor:  27165.48
		},
		{
			estado : 'Outros',
			valor: 19849.53
		}

	],
	
	total: () => {
		
		let soma = 0

		for(estado of faturamento.estados){
			soma += estado.valor 
			 
		}

		return soma
	},

	percentualEstados : () => {
		let total = faturamento.total()
		
		for(estado in faturamento.estados) {
			let faturamentoEstado = faturamento.estados[estado].valor
			let nomeEstado = faturamento.estados[estado].estado  

			let percentual = (faturamentoEstado / total) * 100	
				
			console.log(`${nomeEstado} faturou ${faturamentoEstado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e possui ${percentual.toFixed(2)}% do valor total mensal da distribuidora`)
		}

	}
}

//TOTAL DE FATURAMENTO MENSAL
console.log(`O faturamento mensal da distribuidora foi de ${faturamento.total().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.\n`)

//PERCENTUAL DE CADA ESTADO (O valor só não fica totalmente exato devido ao arrendodamento, que deixa o resultado melhor! )
faturamento.percentualEstados()