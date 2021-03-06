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
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        $("#tela").hide();
        $("#second").hide();
        $("#third").hide();
        $("#thirdsec").hide();
        $("#thirdthi").hide();
        $("#fourth").hide();
        $("#fourthsec").hide();
        $("#fourththi").hide();
        $("#fifth").hide();
        $("#sixty").hide();
        $("#seventh").hide();
        this.receivedEvent('deviceready');
        $(document.body).css({
            "background-color": "#e2dbcc"
        });

    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        //Evento de apagar a seta
      $(".arrow").bind("scroll", function() {
        if ($(this).scrollTop() >= $(this)[0].scrollY) {
          $(".arrow").hide();
        }
      });



        //Apresentação Clique
        $("#pri").click(function () {
            $("#first").fadeOut();
            $("#tela").fadeIn();
        });

        //Verificar RedFlag
        $("#ayuda").click(function () {
            $('#redflag').modal('show');
        });

        //Sobre
        $("#sobre").click(function () {
            $('#about').modal('show');
        });


        //Escolha da Apresentação -certa
        $("#telafin").click(function () {
            $("#tela").fadeOut();
            $('#introducao').modal('show');
            $("#second").fadeIn();

            //Variavél de Verificação
            localStorage.respostaCorreta = false;
        });

        //Escolha errada
        $("#urgencia").click(function () {
            $('#alerta').modal('show');
        });


        //Segundo Clique - Opções 1
        $("#sec1").click(function () {
            $("#second").fadeOut();
            localStorage.primeiraEscolha = 1;
            $("#third").fadeIn();
        });

        //Segundo Clique - Opções 2
        $("#sec2").click(function () {
            $("#second").fadeOut();
            localStorage.primeiraEscolha = 2;
            $("#thirdsec").fadeIn();
        });

        //Segundo Clique - Opções 3
        $("#sec3").click(function () {
            $("#second").fadeOut();
            localStorage.primeiraEscolha = 3;
            $("#thirdthi").fadeIn();
        });

        //Terceiro Clique - Opções 1
        $("#thi1").click(function () {
            $("#third").fadeOut();
            localStorage.segundaEscolha = 1;
            $("#fourth").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Opções 2
        $("#thi2").click(function () {
            $("#third").fadeOut();
            localStorage.segundaEscolha = 2;
            $("#fourth").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Opções 3
        $("#thi3").click(function () {
            $("#third").fadeOut();
            localStorage.segundaEscolha = 3;
            $("#fourth").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Opções 4
        $("#thi4").click(function () {
            $("#third").fadeOut();
            localStorage.segundaEscolha = 4;
            $("#fourth").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Caminho 2, Opções 1
        $("#thi5").click(function () {
            $("#thirdsec").fadeOut();
            localStorage.segundaEscolha = 1;
            $("#fourthsec").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Caminho 2, Opções 2
        $("#thi6").click(function () {
            $("#thirdsec").fadeOut();
            localStorage.segundaEscolha = 2;
            $("#fourthsec").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Caminho 2, Opções 3
        $("#thi7").click(function () {
            $("#thirdsec").fadeOut();
            localStorage.segundaEscolha = 3;
            $("#fourthsec").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Caminho 3, Opções 1
        $("#thi8").click(function () {
            $("#thirdthi").fadeOut();
            localStorage.segundaEscolha = 1;
            $("#fourththi").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Caminho 3, Opções 2
        $("#thi9").click(function () {
            $("#thirdthi").fadeOut();
            localStorage.segundaEscolha = 2;
            $("#fourththi").fadeIn();
            localStorage.flag = true;
        });

        //Terceiro Clique - Caminho 3, Opções 3
        $("#thi10").click(function () {
            $("#thirdthi").fadeOut();
            localStorage.segundaEscolha = 3;
            $("#fourththi").fadeIn();
            localStorage.flag = true;
        });

        //Quarto Clique - Opções 1
        $("#fou1").click(function () {
            $("#fourth").fadeOut();
            localStorage.terceiraEscolha = 1;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Opções 2
        $("#fou2").click(function () {
            $("#fourth").fadeOut();
            localStorage.terceiraEscolha = 2;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Opções 3
        $("#fou3").click(function () {
            $("#fourth").fadeOut();
            localStorage.terceiraEscolha = 3;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Opções 4
        $("#fou4").click(function () {
            $("#fourth").fadeOut();
            localStorage.terceiraEscolha = 4;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Caminho 2, Opções 1
        $("#fou5").click(function () {
            $("#fourthsec").fadeOut();
            localStorage.terceiraEscolha = 1;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Caminho 2, Opções 2
        $("#fou6").click(function () {
            $("#fourthsec").fadeOut();
            localStorage.terceiraEscolha = 2;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Caminho 2, Opções 3
        $("#fou7").click(function () {
            $("#fourthsec").fadeOut();
            localStorage.terceiraEscolha = 3;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Caminho 3, Opções 1
        $("#fou8").click(function () {
            $("#fourththi").fadeOut();
            localStorage.terceiraEscolha = 1;
            $("#fifth").fadeIn();
        });

        //Quarto Clique - Caminho 3, Opções 2
        $("#fou9").click(function () {
            $("#fourththi").fadeOut();
            localStorage.terceiraEscolha = 2;
            $("#fifth").fadeIn();
        });


        //Quarto Clique - Caminho 3, Opções 3
        $("#fou10").click(function () {
            $("#fourththi").fadeOut();
            localStorage.terceiraEscolha = 3;
            $("#fifth").fadeIn();
        });




        //Quinto Clique - Opções 1
        $("#fif1").click(function () {
            $("#fifth").fadeOut();
            localStorage.quartaEscolha = 1;
            $("#sixty").fadeIn();
        });

        //Quinto Clique - Opções 2
        $("#fif2").click(function () {
            $("#fifth").fadeOut();
            localStorage.quartaEscolha = 2;
            $("#sixty").fadeIn();
        });

        //Sexto Clique - Opções 1
        $("#six1").click(function () {
            $("#sixty").fadeOut();
            localStorage.quintaEscolha = 1;
            teste();
            $("#seventh").fadeIn();
        });

        //Sexto Clique - Opções 2
        $("#six2").click(function () {
            $("#sixty").fadeOut();
            localStorage.quintaEscolha = 2;
            teste();
            $("#seventh").fadeIn();
        });

        //Função para determinar o final
        function teste() {
            //Desfecho 1
            if (localStorage.getItem('primeiraEscolha') == 1) {
                if (localStorage.getItem('segundaEscolha') == 1) {
                    if (localStorage.getItem('terceiraEscolha') == 1) {
                        if (localStorage.getItem('quartaEscolha') == 2) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                //Desfecho 1
                                $("#tratamento").html("Manipulação ou mobilização articular ou outra técnica que seja eficaz na melhora da dor e do movimento vertebral segmentar ou lombopélvico, exercícios terapêuticos para melhora ou manutenção da mobilidade espinhal, aconselhamento para que o paciente mantenha um estilo de vida ativo.");
                                $("#diagnostico").html("Lombalgia aguda com diminuição da mobilidade");

                                localStorage.respostaCorreta = true;
                                //Desfecho 5
                            } else if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia aguda associada a distúrbios afetivos e/ou cognitivos");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;
                            }
                        }
                    }
                    //Desfecho 2
                } else if (localStorage.getItem('segundaEscolha') == 2) {
                    if (localStorage.getItem('terceiraEscolha') == 2) {
                        if (localStorage.getItem('quartaEscolha') == 2) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#tratamento").html("Exercícios específicos de estabilização segmentar e reeducação de movimentos fisiológicos ativos sintomáticos, para realização destes de forma assintomática nas amplitudes que vão da metade para o final do movimento. Podem ser utilizadas órteses restritivas para manter as estruturas lombossacrais em menor condição sintomática nas amplitudes de movimento que vão da metade para o final do movimento. Recomendações para cuidados domiciliares como posições de conforto e alívio da dor, transferências seguras, e recomendações para a manutenção de um estilo de vida ativo.");
                                $("#diagnostico").html("Lombalgia aguda com diminuição da coordenação");
                                localStorage.respostaCorreta = true;
                                //Desfecho 6
                            } else if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia aguda associada a distúrbios afetivos e/ou cognitivos");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;

                            }
                        }
                    }
                    //Desfecho 3
                } else if (localStorage.getItem('segundaEscolha') == 3) {
                    if (localStorage.getItem('terceiraEscolha') == 3) {
                        if (localStorage.getItem('quartaEscolha') == 2) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#tratamento").html("Exercícios terapêuticos, mobilizações articulares ou trações que promovam a centralização da dor e melhore o movimento de extensão lombar, orientações quanto a utilização de posicionamentos que promovem a centralização dos sintomas, progresso para intervenções consistentes com a dor subaguda ou estratégias de intervenção para dor lombar crônica com diminuição da coordenação do movimento. Progredir para intervenções consistentes com casos de lombalgia subaguda ou crônica com diminuição da coordenação dos movimentos.");
                                $("#diagnostico").html("Lombalgia aguda com dor referida para membros inferiores");
                                localStorage.respostaCorreta = true;
                                //Desfecho 7
                            } else if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia aguda associada a distúrbios afetivos e/ou cognitivos");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;
                            }
                        }
                    }

                    // Desfecho 4
                } else if (localStorage.getItem('segundaEscolha') == 4) {
                    if (localStorage.getItem('terceiraEscolha') == 4) {
                        if (localStorage.getItem('quartaEscolha') == 1) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#tratamento").html("Aconselhamento ao paciente para adoção de posições e posturas que diminuem a tensão e a compressão das raízes dos nervos envolvidos, tração manual ou mecânica, mobilização articular e/ou de tecidos moles adjacentes às raízes com déficits de mobilidade, mobilização neural em amplitude livre da dor para a melhora da mobilidade de elementos neurais centrais e periféricos.");
                                $("#diagnostico").html("Lombalgia aguda com dor irradiada");
                                localStorage.respostaCorreta = true;

                                //Desfecho 8
                            } else if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia aguda associada a distúrbios afetivos e/ou cognitivos");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;
                            }

                        }
                    }
                }
                //Desfecho 9
            } else if (localStorage.getItem('primeiraEscolha') == 2) {
                if (localStorage.getItem('segundaEscolha') == 1) {
                    if (localStorage.getItem('terceiraEscolha') == 1) {
                        if (localStorage.getItem('quartaEscolha') == 2) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#diagnostico").html("Lombalgia subaguda com diminuição da mobilidade");
                                $("#tratamento").html("Foco na prevenção da lombalgia recorrente através de exercícios terapêuticos para reabilitação de prejuízos coexistentes na coordenação de movimento, diminuição da força muscular e/ou resistência bem como estimular o paciente a manter um estilo de vida ativo.");
                                localStorage.respostaCorreta = true;

                                //Desfecho 12
                            } else if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia subaguda associada a distúrbios afetivos e/ou cognitivos");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;
                            }
                        }
                    }
                    //Desfecho 10
                } else if (localStorage.getItem('segundaEscolha') == 2) {
                    if (localStorage.getItem('terceiraEscolha') == 2) {
                        if (localStorage.getItem('quartaEscolha') == 2) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#diagnostico").html("Lombalgia subaguda com diminuição da coordenação");
                                $("#tratamento").html("Reeducação neuromuscular do movimento para melhorar a estabilidade dinâmica com o objetivo de manter as estruturas lombopélvicas envolvidas em situação assintomática durante as atitudes que envolvam movimentos na metade da amplitude em atividades funcionais e de cuidados pessoais. Procedimentos de terapia manual e exercícios terapêuticos voltados para defícitis de mobilidade identificados na coluna torácica, costelas. Exercícios terapêuticos voltados para recuperar a força e resistência de músculos do tronco e da pelve. Auto cuidado e treino para manter a posição dos segmento envolvidos na metade da amplitude em situação menos sintomática. Estimular o início da reintegração social e ao trabalho com estratégias de controle da dor durante estas atividades.");
                                localStorage.respostaCorreta = true;
                                //Desfecho 13
                            } else if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia subaguda associada a distúrbios afetivos e/ou cognitivos");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;
                            }
                        }

                    }
                    //Desfecho 11
                } else if (localStorage.getItem('segundaEscolha') == 3) {
                    if (localStorage.getItem('terceiraEscolha') == 3) {
                        if (localStorage.getItem('quartaEscolha') == 1) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#diagnostico").html("Lombalgia subaguda com dor irradiada");
                                $("#tratamento").html("Terapia manual para mobilizar as articulações e tecidos moles adjacentes ao nervo envolvido bem como os tecidos nervosos que exibirem diminuição da Mobilidade. Tração Manual ou Mecânica. Mobilidade neural e exercícios de 'Slump' do meio para o fim da amplitude para melhorar a mobilidade dural e de nervos periféricos.");
                                localStorage.respostaCorreta = true;
                                //Desfecho 14
                            } else if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia subaguda associada a distúrbios afetivos e/ou cognitivos");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;
                            }
                        }

                    }
                }
                //Desfecho 15
            } else if (localStorage.getItem('primeiraEscolha') == 3) {
                if (localStorage.getItem('segundaEscolha') == 1) {
                    if (localStorage.getItem('terceiraEscolha') == 1) {
                        if (localStorage.getItem('quartaEscolha') == 2) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#diagnostico").html("Lombalgia crônica com diminuição da coordenação do movimento");
                                $("#tratamento").html("Reeducação neuromuscular para melhorar a estabilidade dinâmica com o objetivo de manter as estruturas lombopélvicas envolvidas em situação assintomática em situações de cuidado pessoal na metade da amplitude de movimento em atividades funcionais, procedimentos de terapia manual e exercícios terapêuticos voltados para  déficits de mobilidade identificados na coluna torácica,  estimular o início da reintegração social e ao trabalho com estratégias de controle da dor durante estas atividades.");
                                localStorage.respostaCorreta = true;
                            }
                        }

                    }
                    //Desfecho 16
                } else if (localStorage.getItem('segundaEscolha') == 2) {
                    if (localStorage.getItem('terceiraEscolha') == 2) {
                        if (localStorage.getItem('quartaEscolha') == 1) {
                            if (localStorage.getItem('quintaEscolha') == 2) {
                                $("#diagnostico").html("Lombalgia crônica com dor irradiada");
                                $("#tratamento").html("Terapia manual e exercícios terapêuticos para a região toracolombar e diminuição de mobilidade nervosa do quadrante inferior, educação para estratégias de manejo da dor.");
                                localStorage.respostaCorreta = true;
                            }
                        }

                    }
                    //Desfecho 17
                } else if (localStorage.getItem('segundaEscolha') == 3) {
                    if (localStorage.getItem('terceiraEscolha') == 3) {
                        if (localStorage.getItem('quartaEscolha') == 1) {
                            if (localStorage.getItem('quintaEscolha') == 1) {
                                $("#diagnostico").html("Lombalgia crônica com dor generalizada");
                                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física.\nSecundariamente: Tratamento fisioterapêutico associado com o psicológico (Exercícios estruturados e redução do stress por “mindfulness” ou terapia cognitiva comportamental).");
                                localStorage.respostaCorreta = true;

                            }
                        }

                    }
                }
            }
            if (localStorage.getItem('respostaCorreta') == "false") {
                erro();
            }

        }

        //Voltar ao ínicio
        $("#inicio").click(function () {
            localStorage.clear();
            $("#seventh").fadeOut();
            $("#first").fadeIn();
            $("#setaIcon").show();
            $("#diagnostico").html("");
            $("#tratamento").html("");
        });

        //Mensagem de erro
        function erro() {
            if (localStorage.getItem('primeiraEscolha') == 1 || localStorage.getItem('primeiraEscolha') == 2) {
                $("#diagnostico").html("<strong>Informações inconsistentes!</strong><br>Reavalie as condições de mobilidade e o envolvimento neurológico, se o diagnóstico persistir, considerar a possibilidade de uma lombalgia inespecífica e, neste caso, seguir as orientações de para o tratamento abaixo.");
                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física (Reavaliar em duas semanas). <br>Secundariamente: Calor superficial, massoterapia, manipulação vertebral e acupuntura.");
                $("#setaIcon").hide();
            } else if (localStorage.getItem('primeiraEscolha') == 3) {
                $("#diagnostico").html("<strong>Informações inconsistentes!</strong><br>Reavalie as condições de mobilidade e o envolvimento neurológico, se o diagnóstico persistir, considerar a possibilidade de uma lombalgia inespecífica e, neste caso, seguir as orientações de para o tratamento abaixo.");
                $("#tratamento").html("Primeiramente: Aconselhamentos, segurança, autocuidado, retorno ao trabalho e encorajar a prática de atividade física (Reavaliar em duas semanas). <br>Secundariamente:  Massoterapia, manipulação vertebral, exercícios em grupo.");
                $("#setaIcon").hide();
            }
        }

        console.log('Received Event: ' + id);
    }
};

app.initialize();
