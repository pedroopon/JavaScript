var totalEleitores = parseInt(prompt('Digite o numero total de eleitores: '))
var votosBrancos = parseInt(prompt('Digite o Numero de Votos Brancos'))
var votosNulos = parseInt(prompt('Digite o Numero de Votos Nulos '))

var votosValidos = totalEleitores - votosBrancos - votosNulos

var brancosPorc = votosBrancos/totalEleitores * 100
var nulosPorc = votosNulos/totalEleitores * 100
var ValidosPorc = votosValidos/totalEleitores * 100




alert('Resumo: total votos ' + totalEleitores + '\n' + 'total votos Brancos: ' + votosBrancos + '\n' + 'total votos Nulos: ' + votosNulos + '\n' + 'total votos Validos: ' + votosValidos );
alert('Porcentagens: votos brancos ' + brancosPorc + '%' + '\n' + 'votos nulos ' + nulosPorc + '%' + '\n' + 'votos Validos ' + ValidosPorc + '%' );



