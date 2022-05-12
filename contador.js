function contar(){
	let ini = document.getElementById('ini')
	let fim = document.getElementById('fim')
	let pass = document.getElementById('pass')
	let res = document.getElementById('res')
	if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
		alert('erro! Confira os dados e tete novamente')
	}else {
		res.innerHTML = 'Contando...'
		let i = Number(ini.value)
		let f = Number(fim.value)
		let p = Number(pass.value)
		if ( p == 0 ){
			p = 1
		}
		if (i < f){
			for (let c = i ; c <= f ; c += p){
				res.innerHTML += ` ${c} \u{1F449}`
			}
		}else{
			for (let c = i ; c >= f ; c -= p){
				res.innerHTML += ` ${c} \u{1F449}`
			}
		}
		
		res.innerHTML += ` \u{2705}`
	}
}