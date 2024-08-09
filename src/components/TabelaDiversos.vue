<template>
     <table style="width:100%">
          <tr>
            <th>item</th>
            <th>nome do produto</th>
            <th>imagens</th>
          </tr>
          <tr>
            <td><center>carlos sainz Jr</center></td>
            <td><center>nacionalidade espanhola</center></td>
            <td><center><img src="https://sairdobrasil.com/wp-content/uploads/2007/12/espanha-bandeira2.jpg" width="80px"></center></td>
          </tr>
          <tr>
            <td><center>equipe</center></td>
            <td><center>Forza FERRARI </center></td>
            <td><center><img src="https://thumbs.dreamstime.com/b/logo-ferrari-124870830.jpg" width="90px"></center></td>
          </tr>
          <tr>
            <td><center>Colega de equipe</center></td>
            <td><center>Charles Leclerc</center></td>
            <td><center><img src="https://cdn-2.motorsport.com/images/mgl/YMdm7R32/s800/charles-leclerc-ferrari.jpg" width="90px"></center></td>
          </tr>
          <tr>
            <td><center>total de vitorias</center></td>
            <td><center>São três vitorias </center></td>
            <td><center><img src="https://www.logotipo.pt/wp-content/uploads/2018/03/artigo-F1-novo-2.jpg" width="80px"></center></td>
          </tr>
          <tr>
            <td><center>modelo do carro</center> </td>
            <td> <center>SF24 </center></td>
            <td><center><img src="https://www.carlossainz.es/upload/media/press/0001/15/c15c9a4227f112a0ad7c3a9b1d07553b6fe8d6a2.jpeg" width="94px"></center></td>
          </tr>
        </table>
    </template>
    
    <script>
    export default {
        name: 'TabelaDiversos',
        props: {
            msg: String 
        }
    }
    </script>
    
    <!--Add "scoped" atribute to limite css to this component only-->
    <style scoped></style>
    