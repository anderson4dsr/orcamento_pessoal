
class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}
}

	class Bd{

		constructor(){
			let id = localStorage.getItem('id')

			if(id === null) {
				localStorage.setItem('id', 0)
			}
		}

		getProximoId() {
			// getItem :recuperar um dado dentro de local storage
			let procimoId = localStorage.getItem('id')
			return parseInt(proximoId) + 1
		}

		// para acessar o recursor LOCAL STORAGE para armazenamento das informacoes no browser
		gravar(d) {
		//nós iremos armazernar o objetos despesa ondem estao contidos as informacoes
		//precisamos converter nosso objeto literal(despesa) para uma notacao (JSON) usando(JSON.stringFy(d))
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))


		localStorage.setItem('id', id)
	}

}

function cadastrarDespesa(){
	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	let despesa = new Despesa(
		ano.value,
		mes.value, 
		dia.value, 
		tipo.value, 
		descricao.value, 
		valor.value

		)

	Bd.gravar(despesa)
}

// para acessar o recursor LOCAL STORAGE para armazenamento das informacoes no browser

