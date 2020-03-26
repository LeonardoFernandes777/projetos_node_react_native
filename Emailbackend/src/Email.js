const nodemailer = require("nodemailer");
var Lista =["janainaeleo048@gmail.com","lionblak123@gmail.com",",recrutamento@ampliarassessoria.com.br",
"jonathanvinicius212@gmail.com",
"recrutamento2@farmaciaartesanal.com",
"essencialfarmacia1@outlook.com",
"rla.rodrigues@institutocapacitare.com.br",
"drlaseranapolis@gmail.com",
"rh@florestasupermercados.com.br",
"rh@jaicar.com.br",
"rh@melcon.com.br",
"leonardo.alves@fbmfarma.com.br",
"selecao@teuto.com.br",
"ranielle.rosa@teuto.com.br",
"lorena.bastos@teuto.com.br",
"trabalheconosco@araguaia.com.br",
"trabalheconosco@embrafarma.com.br",
"recrutamentoanapolis@brainfarma.ind.br",
"bruna.squarsado@brainfarma.ind.br",
"recrutamento@geolab.com.br",
"rh@geolab.com.br",
"gfelix@genix.ind.br",
"selecao@softechbrasil.com.br",
"selecao@idealfarma.com.br",
"rh@gbio.com.br",
"erica.antunes@ype.ind.br",
"Lucasrh.consultoria@gmail.com",
"recursoshumanos@macroetiquetas.com.br",
"SELECAO@graficaallbox.ind.br",
"eduarda.souza@ype.ind.br",
"rh@bioinstinto.com.br",
"rh1@bioinstinto.com.br",
"analistarh@greenpharma.com.br",
"rh@lineaalimentos.com.br",
"recrutamento@levviale.ind.br",
"SELECAO.GO@purifarma.com.br",
"pharmalimirio@hotmail.com",
"contato@lkconsultoriarh.com.br",
"rh@lkconsultoriarh.com.br",
"rh@midwaylabs.com.br",
"otomilton@aurobindo.ind.br",
"rh@champion.ind.br",
"vagas@belma.com.br",
"GLAUCIENE.SILVA@fbmfarma.com.br",
"anna.paula@stcruz.com.br",
"recrutamento@isoeste.com.br",
"recursoshumanos@faberprint.com.br",
"RH@portoepereira.com.br",
"bruna.stival@granol.com.br",
"sabrina.vaz@granol.com.br",
"samar.gestaorh@gmail.com",
"vagaselecao537@gmail.com",
"anpbrunnoensino@gmail.com",
"kapazcursosanapolis@hotmail.com",
"sapienciacursos@gmail.com",
"anapolis@institutomix.com.br",
"anapolis@microlins.com.br",
"kellymaris@pmenos.com.br",
"dpbiofarma@gmail.com",
"curriculo.br@fresenius-kabi.com",
"curriculo@hospitaldeurgencias.com.br",
"rh@animacentrohospitalar.com.br",
"isabelaleitearaujo@gmail.com",
"drogariafarmatec@outlook.com",
"drogariasaude.certa@hotmail.com",
"rh@unimedanapolis.com.br",
"empregos@cebracanapolis.com.br",
"gestaodepessoas.recruta@gmail.com",
"farol.vagas@gmail.com",
"janio.peres@melcon.com.br",
"rh@americoadvogados.com.br",
"weslaine.monteiro@randstad.com.br",
"rh.ind2017@outlook.com",
"juliana.castro@vigor.com.br",
"recrutamento@caferancheiro.com.br",
"jerusa@sotrigo.com.br",
"centrodeensinoadvance@hotmail.com",
"rh@radarinternet.com.br",
"ana.guimaraes@caoamontadora.com.br",
"morgana@guabi.com.br",
"ampliar@ampliarassessoria.com.br",
"rh@cdaraguaia.com.br",
"tiojorge@grupoe.net.br",
"rhanapolis@brejeiro.com.br",
"gerentetreinamento.go@redeodonto.com.br",
"retaguarda.anapolis2@redeodonto.com.br",
"RH01@frigoias.com.br",
"rh@frigoias.com.br",
"rhloja1@riovermelho.net",
"bancoservice@ig.com.br",
"j.oliveira@vitamedic.ind.br",
"Rh.auxiliar@peroladistribuicao.com.br",
"rh@supervi.com.br",
"andreiasantos@supervi.com.br",
"rh@riovermelho.net",
"rh@biolinefios.com.br",
"hsantos@cartafabril.com.br",
"admanapolis@jmempilhadeira.com.br",
"RH@elmare.com.br",
"xicobaru1@gmail.com",
"gq@kelldrin.com.br",
"ediaynne.melo@rebic.com.br",
"selecao@faculdadefama.edu.br",
"rh@faculdadefama.edu.br",
"direcao.anapolis@univeritas.com",
"antonio@uniphar.com.br",
"admpda@hotmail.com",
"servicos.neoquimica@sideservice.com.br",
"RECURSOSHUMANOS@embalagensallbox.com.br",
"transportadoraadmgo@gmail.com",
"pessoalmatriz@viacaoraissa.com.br",
"talentosaga@saganet.com.br",
"curriculos@pilarrh.com.br",
"amanda.rocha@lineaalimentos.com.br",
"rh.recrutamentoanapolis@gmail.com",
"rhanapolis@hotmail.com",
"rh@zooflora.com.br",
"KARITA.EMILIANO@brainfarma.ind.br",
"jribeiro@genix.ind.br",
"drogariasaude.certa@hotmail.com",
"rh.loja03@riovermelho.net",
"rh@zooflora.com.br",
"BMACHADO@genix.ind.br",
"OLIVEIRA.OPORTUNIDADE@gmail.com",
"info.intermeios@gmail.com",
"luizfernandoscardoso@outlook.com",
"RH@gseautomotiva.com",
"rh.aps@jttlog.com.br",
"talentos@vitamedic.ind.br",
"cintia.side@gmail.com",
"cintia.alves@brainfarma.ind.br"]

contador = 0
quantidade = Lista.length
item = 0

let transporter = nodemailer.createTransport({
  maxMessages: 5,
  pool: true,
  host: "smtp.office365.com",
  port: 587,
  rateDelta: 10000,
  rateLimit:1,
  secure: false, // true for 465, false for other ports
  maxConnections: 3,
  connectionTimeout: 10000,  //adicionei agora 
  greetingTimeout: 5000,     //adicionei agora 
  socketTimeout: 5000,       //adicionei agora 
  auth: {
    user: "leonardo_fernandes.nunes@hotmail.com", // generated ethereal user
    pass: "78951jesus" // generated ethereal password
  }
});

function loop (){
  transporter.sendMail({
    attachments: [{
      filename: 'curriculoLeo.docx',
            path: 'C:\\Users\\leona\\Documents\\projetos_node_react_native\\Emailbackend\\src/path/curriculoLeo.docx'
    }],
    from: '"Leonardo Fernandes 💻☕" <leonardo_fernandes.nunes@hotmail.com>',// sender address
    to: Lista[item],  // list of receivers
    subject: "Currículo ✔", // Subject line,
    text: "Segue abaixo Currículo" ,// plain text body
    html: "<b>LEONARDO FERNANDES NUNES SILVA</b>"// html body
  }).then(message => {
      console.log(message);
  }).catch(err => {
      console.log(err)
  })
}

while(contador<quantidade){
  loop()
  contador ++
  item ++
}
