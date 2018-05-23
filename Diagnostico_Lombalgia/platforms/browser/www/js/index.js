/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        $("#second").hide();
         $("#third").hide();
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
     
        //Primeiro Clique
        $("#pri").click(function(){
          $("#first").hide(); 
           $("#second").show();  
       });
        
        //Segundo Clique - Opções 1
        $("#sec1").click(function(){
               $("#second").hide();  
            localStorage.primeiraEscolha = 1;
            $("#third").show();
        });
        
           //Segundo Clique - Opções 2
        $("#sec2").click(function(){
               $("#second").hide();  
            localStorage.primeiraEscolha = 2;
            $("#third").show();
        });
        
           //Segundo Clique - Opções 3
        $("#sec3").click(function(){
               $("#second").hide();  
            localStorage.primeiraEscolha = 3;
            $("#third").show();
        });
        
         //Terceiro Clique - Opções 1
        $("#thi1").click(function(){
               $("#third").hide(); 
            localStorage.segundaEscolha = 1;
            $("#fourth").show();
        });
        
           //Terceiro Clique - Opções 2
        $("#thi2").click(function(){
               $("#third").hide();  
            localStorage.segundaEscolha = 2;
            $("#fourth").show();
        });
        
           //Terceiro Clique - Opções 3
        $("#thi3").click(function(){
               $("#third").hide();  
            localStorage.segundaEscolha = 3;
            $("#fourth").show();
        });
        
          //Terceiro Clique - Opções 4
        $("#thi4").click(function(){
               $("#third").hide();  
            localStorage.segundaEscolha = 4;
            $("#fourth").show();
        });
        
             //Quarto Clique - Opções 1
        $("#fou1").click(function(){
               $("#fourth").hide(); 
            localStorage.terceiraEscolha = 1;
            $("#fifth").show();
        });
        
           //Quarto Clique - Opções 2
        $("#fou2").click(function(){
               $("#fourth").hide();  
            localStorage.terceiraEscolha = 2;
            $("#fifth").show();
        });
        
           //Quarto Clique - Opções 3
        $("#fou3").click(function(){
               $("#fourth").hide();  
            localStorage.terceiraEscolha = 3;
            $("#fifth").show();
        });
        
          //Quarto Clique - Opções 4
        $("#fou4").click(function(){
               $("#fourth").hide();  
            localStorage.terceiraEscolha = 4;
            $("#fifth").show();
        });
        
            
             //Quinto Clique - Opções 1
        $("#fif1").click(function(){
               $("#fifth").hide(); 
            localStorage.quartaEscolha = 1;
            $("#sixty").show();
        });
        
           //Quinto Clique - Opções 2
        $("#fif2").click(function(){
               $("#fifth").hide();  
            localStorage.quartaEscolha = 2;
            $("#sixty").show();
        });
        
           //Sexto Clique - Opções 1
        $("#six1").click(function(){
               $("#sixty").hide(); 
            localStorage.quintaEscolha = 1;
               teste();
            $("#seventh").show();
        });
        
           //Sexto Clique - Opções 2
        $("#six2").click(function(){
               $("#sixty").hide();  
            localStorage.quintaEscolha = 2;
             teste();
            $("#seventh").show();
        });
        
        //Função para determinar o final
        function teste(){
            //Caso seja o botão 1 no inicio
            if (localStorage.getItem('primeiraEscolha') == 1){
                if (localStorage.getItem('segundaEscolha') == 1){
                     if (localStorage.getItem('terceiraEscolha') == 1){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                  $("resultado").html("Desfecho 1"); 
                            }
                          }
                     }
                }
            }
        };
        
        console.log('Received Event: ' + id);
    }
};

app.initialize();