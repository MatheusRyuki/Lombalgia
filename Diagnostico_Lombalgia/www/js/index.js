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
         $("#tela").hide();
        $("#second").hide();
         $("#third").hide();
        $("#fourth").hide();
        $("#fifth").hide();
        $("#sixty").hide();
        $("#seventh").hide();
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
            $(document.body).css({"background": "url(img/lombalgia.jpg) no-repeat center center fixed",
                "background-size": "cover", 
                 "height": "100%"
                });
        
        //Apresentação Clique
           $("#pri").click(function(){
          $("#first").hide(); 
            $("#tela").show();  
       });
        
        
        
        //Escolha da Apresentação -certa
        $("#telafin").click(function(){
          $("#tela").hide();
            $('#introducao').modal('show');  
           $("#second").show();  
       });
        
        //Escolha errada
         $("#urgencia").click(function(){
        $('#alerta').modal('show')
;  
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
            //Desfecho 1
            if (localStorage.getItem('primeiraEscolha') == 1){
                if (localStorage.getItem('segundaEscolha') == 1){
                     if (localStorage.getItem('terceiraEscolha') == 1){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                   //Desfecho 1
                                  $("#tratamento").html("Manipulação ou mobilização articular ou outra técnica que seja eficaz na melhora da dor e do movimento vertebral segmentar ou lombopelvico, exercícios terapêuticos para melhora ou manutenção da mobilidade espinhal, aconselhamento para que o paciente mantenha um estilo de vida ativo."); 
                                   $("#diagnostico").html("Lombalgia aguda com diminuição da mobilidade");
                        //Desfecho 5
                            } else if (localStorage.getItem('quintaEscolha') == 1){
                                   $("#resultado").html("Desfecho 5"); 
                            }
                          }
                     }
                    //Desfecho 2
                } else if (localStorage.getItem('segundaEscolha') == 2) {
                      if (localStorage.getItem('terceiraEscolha') == 2){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                 $("#tratamento").html("Exercícios específicos de estabilização segmentar e reeducação de movimentos fisiológicos ativos sintomáticos, para realização destes de forma assintomática nas amplitudes que vão da metade para o final do movimento. Podem ser utilizadas órteses restritivas para manter as estruturas lombossacrais em menor condição sintomática nas amplitudes de movimento que vão da metade para o final do movimento. Recomendações para cuidados domiciliares como posições de conforto e alívio da dor, transferêcias seguras, e recomendações para a manutenção de um estilo de vida ativo.");
                                   $("#diagnostico").html("Lombalgia aguda com diminuição da coordenação");
                                   //Desfecho 6
                            } else if (localStorage.getItem('quintaEscolha') == 1){
                                  $("#resultado").html("Desfecho 6");
                    
                            }
                          }
                        }
        //Desfecho 3            
        }else if (localStorage.getItem('segundaEscolha') == 3){
                      if (localStorage.getItem('terceiraEscolha') == 3){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                  $("#tratamento").html("Exercícios terapêuticos, mobilizações articulares ou trações que promovam a centralização da dor e melhore o movimento de extensão lombar, orientações quanto a utilização de posicionamentos que promovem a centralização dos sintomas, progresso para intervenções consistentes com a dor subaguda ou estratégias de intervenção para dor lombar crônica com dimiuição da coordenação do movimento."); 
                                $("#diagnostico").html("Lombalgia aguda com dor referida para membros inferiores");
                                   //Desfecho 7
                            } else if (localStorage.getItem('quintaEscolha') == 1){
                                  $("#resultado").html("Desfecho 7"); 
                            }
                    
                            }
                        }
              
            // Desfecho 4
            } else if (localStorage.getItem('segundaEscolha') == 4){
                      if (localStorage.getItem('terceiraEscolha') == 4){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                  $("#resultado").html("Desfecho 4"); 
                                   //Desfecho 8
                            } else if (localStorage.getItem('quintaEscolha') == 1){
                                  $("#resultado").html("Desfecho 8"); 
                            }
                    
                        }
                    }
            }
                //Desfecho 9
        }  if (localStorage.getItem('primeiraEscolha') == 2){
             if (localStorage.getItem('segundaEscolha') == 1){
                     if (localStorage.getItem('terceiraEscolha') == 1){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                    $("#resultado").html("Desfecho 9");
                                   //Desfecho 12
                               } else if (localStorage.getItem('quintaEscolha') == 1){
                                    $("#resultado").html("Desfecho 12"); 
                               }
                          }
                     }
                 //Desfecho 10
             } else if (localStorage.getItem('segundaEscolha') == 2){
                     if (localStorage.getItem('terceiraEscolha') == 2){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                    $("#resultado").html("Desfecho 10"); 
                                   //Desfecho 13
                               } else if (localStorage.getItem('quintaEscolha') == 1){
                                    $("#resultado").html("Desfecho 13"); 
                               } 
                          }
                     }
                 //Desfecho 11
             } else if (localStorage.getItem('segundaEscolha') == 3){
                     if (localStorage.getItem('terceiraEscolha') == 3){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                    $("#resultado").html("Desfecho 11"); 
                               //Desfecho 14
                               } else if (localStorage.getItem('quintaEscolha') == 1){
                                    $("#resultado").html("Desfecho 14"); 
                               }
                          }
                     }
             }
            //Desfecho 15
        } if (localStorage.getItem('primeiraEscolha') == 3){
                if (localStorage.getItem('segundaEscolha') == 1){
                     if (localStorage.getItem('terceiraEscolha') == 1){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                  $("#resultado").html("Desfecho 15");
                               }
                          }
                     }
                    //Desfecho 16
                } else if (localStorage.getItem('segundaEscolha') == 2){
                     if (localStorage.getItem('terceiraEscolha') == 2){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                  $("#resultado").html("Desfecho 16");
                               }
                          }
                     }
                    //Desfecho 17
                } else if (localStorage.getItem('segundaEscolha') == 3){
                     if (localStorage.getItem('terceiraEscolha') == 3){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 1){
                                  $("#resultado").html("Desfecho 17");
                               }
                          }
                     }
                }
        }
    };
        
        //Voltar ao ínicio
        $("#inicio").click(function(){
               localStorage.clear();
              $("#seventh").hide();
               $("#first").show(); 
        });
     
        console.log('Received Event: ' + id);
    }
};

app.initialize();