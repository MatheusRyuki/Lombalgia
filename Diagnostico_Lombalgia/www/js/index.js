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
                                   $("#diagnostico").html("Lombalgia aguda associada a disturbios afetivos e/ou cogitivos");
                                $("#tratamento").html("Educação e encaminhamento específico para o estado cognitivo apresentado pelo paciente, isto é, depressão, medo e catastrofização");
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
                                     $("#diagnostico").html("Lombalgia aguda associada a disturbios afetivos e/ou cogitivos");
                                $("#tratamento").html("Educação e encaminhamento específico para o estado cognitivo apresentado pelo paciente, isto é, depressão, medo e catastrofização");
                    
                            }
                          }
                        }
        //Desfecho 3            
        }else if (localStorage.getItem('segundaEscolha') == 3){
                      if (localStorage.getItem('terceiraEscolha') == 3){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                  $("#tratamento").html("Exercícios terapêuticos, mobilizações articulares ou trações que promovam a centralização da dor e melhore o movimento de extensão lombar, orientações quanto a utilização de posicionamentos que promovem a centralização dos sintomas, progresso para intervenções consistentes com a dor subaguda ou estratégias de intervenção para dor lombar crônica com dimiuição da coordenação do movimento. Progredir para intervenções consistentes com casos de lombalgia subaguda ou crônica com diminuição da coordenação do movimentos."); 
                                $("#diagnostico").html("Lombalgia aguda com dor referida para membros inferiores");
                                   //Desfecho 7
                            } else if (localStorage.getItem('quintaEscolha') == 1){
                                 $("#diagnostico").html("Lombalgia aguda associada a disturbios afetivos e/ou cogitivos");
                                $("#tratamento").html("Educação e encaminhamento específico para o estado cognitivo apresentado pelo paciente, isto é, depressão, medo e catastrofização");
                            }
                    
                            }
                        }
              
            // Desfecho 4
            } else if (localStorage.getItem('segundaEscolha') == 4){
                      if (localStorage.getItem('terceiraEscolha') == 4){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                  $("#tratamento").html("Aconselhamento ao paciente para adoção de posições e posturas que diminuem a tensão e a compressão das raízes dos nervos envolvidos, tração manual ou mecânica, mobilização articular e/ou tecidos moles adjacentes as raízes com déficits de mobilidade, mobilização neural em amplitude livre da dor para a melhora da mobilidade de elementos neurais centrais e periféricos."); 
                                   $("#diagnostico").html("Lombalgia aguda com dor irradiada");
                                   
                                   //Desfecho 8
                            } else if (localStorage.getItem('quintaEscolha') == 1){
                                 $("#diagnostico").html("Lombalgia aguda associada a disturbios afetivos e/ou cogitivos");
                                $("#tratamento").html("Educação e encaminhamento específico para o estado cognitivo apresentado pelo paciente, isto é, depressão, medo e catastrofização");
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
                                    $("#diagnostico").html("Lombalgia subaguda com diminuição da mobilidade");
                                   $("#tratamento").html("Foco na prevenção da lombalgia recorrente através de exercícios terapêuticos para reabilitação de prejuízos coexistentes na coordenação de movimento, diminuição da força muscular e/ou resistência bem como estimular o paciente a mantar um estilo de vida ativo.")
                                   
                                   //Desfecho 12
                               } else if (localStorage.getItem('quintaEscolha') == 1){
                                    $("#diagnostico").html("Lombalgia subaguda associada a disturbios afetivos e/ou cognitivos");
                                   $("#tratamento").html("Educação do paciente e aconselhamento voltado para classificação específica do componente cognitivo envolvido (depressão, medo, catastrofização da dor)");
                               }
                          }
                     }
                 //Desfecho 10
             } else if (localStorage.getItem('segundaEscolha') == 2){
                     if (localStorage.getItem('terceiraEscolha') == 2){
                          if (localStorage.getItem('quartaEscolha') == 2){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                    $("#diagnostico").html("Lombalgia subaguda com diminuição da coordenação");
                                   $("#tratamento").html("Reeducação neuromuscular do movimento para melhorar a estabilidade dinâmica com o objetivo de manter as estruturas lombopelvicas evolvidas em situação assintomática durante as atitudes que envolvam movimentos na metade da amplitude em atividades funcionais e de cuidados pessoais. Procedimentos de terapia manual e exercícios terapêuticos voltados para defícitis de mobilidade identificados na coluna torácica, costelas. Exercícios terapêuticos voltados para recuperar a força e resistência de músculos do tronco e da pelve. Auto cuidados e treino para manter posições dos segmentos envolvidos em de metade da amplitude em situação menos sintomáticos. Estimular o início da reintegração social e ao trabalho com estratégias de controle da dor durante estas atividades.")
                                   //Desfecho 13
                               } else if (localStorage.getItem('quintaEscolha') == 1){
                                    $("#diagnostico").html("Lombalgia subaguda associada a disturbios afetivos e/ou cognitivos");
                                   $("#tratamento").html("Educação do paciente e aconselhamento voltado para classificação específica do componente cognitivo envolvido (depressão, medo, catastrofização da dor)");
                               } 
                          }
                     }
                 //Desfecho 11
             } else if (localStorage.getItem('segundaEscolha') == 3){
                     if (localStorage.getItem('terceiraEscolha') == 3){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                    $("#diagnostico").html("Lombalgia subaguda com dor irradiada");
                                   $("#tratamento").html("Terapia manual para mobilizar as articulações e tecidos moles adjacentes ao nervo envolvido bem como os tecidos nervosos que exibiriem diminuição da Mobilidade. Tração Manual ou Mecânica. Mobilidade neural e eercícios de 'Slump' do meio para o fim da amplitude para melhorar a mobilidade dural e de nervos periféricos.");
                               //Desfecho 14
                               } else if (localStorage.getItem('quintaEscolha') == 1){
                                    $("#diagnostico").html("Lombalgia subaguda associada a disturbios afetivos e/ou cognitivos");
                                   $("#tratamento").html("Educação do paciente e aconselhamento voltado para classificação específica do componente cognitivo envolvido (depressão, medo, catastrofização da dor)");
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
                                  $("#diagnostico").html("Lombalgia crônica com diminuição da coordenação do movimento");
                                  $("#tratamento").html("Reeducação neuromuscular para melhorar a estabilidade dinâmica com o objetivo de manter as estruturas lombopelvicas envolvidas em situação assintomática em situações de cuidado pessoais na metade da amplitude de movimento em atividades funcionais, procedimnetos de terapia manual e exercicios terapêutico voltado para  déficits de mobilidade identificados na coluna torácica, segmentos envolvidos em metade da amplitude em situação menos sintomáticas,  estimular o início da reintegração social e ao trabalho com estratégias de controle da dor durante estas atividades.")
                               }
                          }
                     }
                    //Desfecho 16
                } else if (localStorage.getItem('segundaEscolha') == 2){
                     if (localStorage.getItem('terceiraEscolha') == 2){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 2){
                                 $("#diagnostico").html("Lombalgia crônica com dor irradiada");
                                   $("#tratamento").html("Terapia manual e exercícios terapêuticos para a região tóracolombar e diminuição de mobilidade nervosa do quadrante inferior, educação para estratégias de manejo da dor.")
                               }
                          }
                     }
                    //Desfecho 17
                } else if (localStorage.getItem('segundaEscolha') == 3){
                     if (localStorage.getItem('terceiraEscolha') == 3){
                          if (localStorage.getItem('quartaEscolha') == 1){
                               if (localStorage.getItem('quintaEscolha') == 1){
                                  $("#diagnostico").html("Lombalgia crônica com dor generalizada");
                                    $("#tratamento").html("Educação do paciente e aconselhamento voltado para classificação específica do componente cognitivo envolvido(depressão, medo, catastrofização da dor, orientações para realização de exercícios aeróbicos prolongados de baixa intensidade");
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