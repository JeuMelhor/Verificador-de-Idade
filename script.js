function verificar() {
   var data = new Date()
   var anoAtual = data.getFullYear()
   var fano=document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if(fano.value.length == 0 || Number(fano.value>anoAtual)){
       alert('[ERRO] Verifique os dados e tente novamente')
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade = anoAtual - Number(fano.value)
       var gênero = ''
       var img=document.createElement('img')
       img.setAttribute('id','foto')

       if (fsex[0].checked){
           gênero = 'Homem'
           if(idade>=0 && idade<10){
               img.setAttribute('src', 'img/menino.png')
           }else if(idade<21){
               img.setAttribute('src', 'img/jovemHomem.png')
           }else if(idade<50){
               img.setAttribute('src', 'img/homemAdulto.png')
           }else{
               img.setAttribute('src', 'img/idoso.png')
           }
       }else if (fsex[1]){
           gênero='Mulher'
           if(idade>=0 && idade<10){
            img.setAttribute('src', 'img/menina.png')
        }else if(idade<21){
            img.setAttribute('src','img/jovemMulher.png')
        }else if(idade<50){
            img.setAttribute('src', 'img/mulherAdulta.png')
        }else{
            img.setAttribute('src', 'img/idosa.png')
        }
       }
       res.innerHTML= `Detectamos ${gênero} com ${idade} anos` 
       res.appendChild(img)
       //res.style.textAlign = 'center' //-> centralizando por JS esse item na tela 
       
   }
    
}