// Base a ser utilizada
const alunosDaEscola = [{
  nome: "Henrique",
  notas: [],
  cursos: [],
  faltas: 5
}, {
  nome: "Edson",
  notas: [],
  cursos: [],
  faltas: 2
}, {
  nome: "Bruno",
  notas: [10, 9.8, 9.6],
  cursos: [],
  faltas: 0
}, {
  nome: "Guilherme",
  notas: [10, 9.8, 9.6],
  cursos: [{
    nomeDoCurso: "Full Stack",
    dataMatricula: new Date
  }],
  faltas: 0
}, {
  nome: "Carlos",
  notas: [],
  cursos: [],
  faltas: 0
}, {
  nome: "Lucca",
  notas: [10, 9.8, 9.6],
  cursos: [{
    nomeDoCurso: "UX",
    dataMatricula: new Date
  }],
  faltas: 0
}];


function adicionarAluno(nome) {
  if (nome) {
    alunosDaEscola.push({
      nome,
      notas: [],
      cursos: [],
      faltas: 0
    })
    console.log(`${nome} foi adicionado com sucesso!`);
  } else {
    console.log(`Falha ao adicionar aluno.`);
  }
}

function listarAlunos() {
  let formataData = data => {
    let mes = (data.getMonth() + 1)
    mes = mes < 10 ? '0' + mes : mes
    let dia = data.getDate()
    dia = dia < 10 ? '0' + dia : dia

    return dia + "/" + mes + "/" + data.getFullYear()
  }
  console.log('-'.repeat(50));

  for (const aluno of alunosDaEscola) {
    console.log(`Nome: ${aluno.nome}
Notas: ${aluno.notas.join(', ') || "não há"}
Cursos: ${aluno.cursos.map(curso => `${curso.nomeDoCurso} | Matrícula: ${formataData(curso.dataMatricula)}`).join('\n\t      ')}
Faltas: ${aluno.faltas}
${'-'.repeat(50)}`);
  }
}

function buscarAluno(nome) {
  for (const aluno of alunosDaEscola) {
    if (aluno.nome == nome) {
      console.log(`${nome} encontrado na lista de alunos`)
      return aluno
    }
  }
  console.log(`${nome} não foi encontrado na lista de alunos`)
}

function matricularAluno(aluno, curso) {
  if (aluno) {
    aluno.cursos.push({
      nomeDoCurso: curso,
      dataMatricula: new Date
    })
    console.log(`${aluno.nome} foi cadastrado em ${curso} com sucesso!`);
    return
  }
  console.log(`Erro ao cadastrar! ${aluno} inválido.`);
}

const validaAluno = aluno => aluno && aluno.cursos.length > 0

function aplicarFalta(aluno) {
  if (!validaAluno(aluno)) {
    console.log("Aluno inválido");
    return
  }
  aluno.faltas++
  console.log(`Falta aplicada com sucesso!`);
}

function aplicarNota(aluno, nota) {
  if (!validaAluno(aluno)) {
    console.log("Aluno inválido");
    return
  }
  aluno.notas.push(nota)
  console.log(`Nota aplicada com sucesso!`);
}

function aprovarAluno(aluno) {
  if (!validaAluno(aluno)) {
    console.log("Aluno inválido");
    return
  }
  let resultado = (aluno.notas.reduce((acc, nota) => acc + nota) / aluno.notas.length) > 7 && aluno.faltas <= 3

  if (resultado)
    console.log(`${aluno.nome} foi aprovado!`);
  else
    console.log(`${aluno.nome} foi reprovado!`);
}

listarAlunos()