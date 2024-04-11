import Movie from "../models/movie.js";

const populateMovies = async () => {
  return await Movie.bulkCreate([
    {
      title: "Quebrando Regras",
      image: "https://br.web.img3.acsta.net/pictures/16/06/13/17/43/340414.jpg",
      category: "Ação",
      rating: 4,
      synopsis:
        "O adolescente Jake Tyler (Sean Faris) é um rebelde por natureza. Sua vida muda completamente quando ele se envolve com o clube de luta secreto de sua escola, tendo como mentor um veterano das artes marciais. Após perceber que sua família e amigos estão com a segurança sob ameaça ele decide se concentrar na luta contra seu principal algoz Ryan McCarthy (Cam Gigandet)",
    },
    {
      title: "Vingadores Ultimato",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035",
      category: "Ação",
      rating: 5,
      synopsis:
        "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
    },
    {
      title: "Ace Ventura",
      image:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/8/84/Ace_ventura_pet_detective.jpg/230px-Ace_ventura_pet_detective.jpg",
      category: "Comédia",
      rating: 3,
      synopsis:
        "Após não conseguir salvar um guaxinim, Ace Ventura (Jim Carrey) impõe a si mesmo um exílio entre os monges no Himalaia. Após isso, ele viaja para o continente africano, a fim de tentar recuperar o grande morcego branco sagrado, que foi prometido como dote quando a princesa dos Wachati, uma tribo pacífica, se casar com o filho mais velho dos Wachootoo, uma tribo sanguinária. Se o morcego não for recuperado em tempo hábil isto ocasionará uma guerra e os Wachati serão massacrados, pois os Wachootoo vão considerar isto um insulto e o desaparecimento do morcego uma maldição. Ace tenta ajudar da melhor maneira possível, mas para ele a melhor forma implica em várias confusões.",
    },
    {
      title: "Jujutsu Kaisen 0",
      image:
        "https://br.web.img2.acsta.net/pictures/21/10/27/11/49/5430171.jpg",
      category: "Aventura",
      rating: 5,
      synopsis:
        "Yuuta Okkotsu está assombrada. Desde que sua amiga de infância Rika morreu em um acidente de trânsito, seu fantasma ficou preso com ele. Mas seu espírito não aparece como a doce menina que Yuuta conheceu. Em vez disso, ela se manifesta como uma entidade monstruosa e poderosa que o protege ferozmente. Incapaz de controlar o comportamento violento de Rika, Yuuta é incapaz de impedir o derramamento de sangue que se segue à sua vingança brutal. Como resultado, quando apreendido por feiticeiros 'Jujutsu' - os guardiões secretos do mundo, treinados para combater forças como Rika - Yuuta deseja ficar completamente isolado para que ninguém mais possa se machucar. No entanto, seu apreensor, o mestre feiticeiro Satoru Gojou, tem planos diferentes para ele: ele entrará na Escola de Ensino Médio Jujutsu e aprenderá a controlar Rika para ajudar as pessoas. Agora no primeiro ano da escola, Yuuta começa a aprender as artes do Jujutsu e a combater seres malignos. Ao lado de seus novos colegas de classe Maki Zenin, um especialista em armas de Jujutsu; Toge Inumaki, um feiticeiro que usa suas palavras como armas; e Panda, um urso panda aparentemente ambulante e falante, Yuuta começa a encontrar seu lugar no mundo e, pela primeira vez, a se sentir confortável com suas habilidades. No entanto, conforme seu treititlento progride, Yuuta aprende que os perigos do mundo do Jujutsu vão muito além dos espíritos malignos.",
    },
    {
      title: "Kung Fu Panda",
      image:
        "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/83/19/19962001.jpg",
      category: "Animação",
      rating: 4,
      synopsis:
        "Po (Jack Black) é um urso panda desajeitado, que trabalha no restaurante de macarrão de sua família. Um dia ele é surpreendido ao saber que foi escolhido para cumprir uma antiga profecia, o que faz com que treine ao lado de seus ídolos no kung fu: os mestres Shifu (Dustin Hoffman), Garça (David Cross), Tigresa (Angelina Jolie), Louva-deus (Seth Rogen), Macaco (Jackie Chan) e Víbora (Lucy Liu). Quando o traiçoeiro leopardo da neve Tai Lung (Ian McShane) retorna, cabe a Po defender o Vale da Paz.",
    },
    {
      title: "De Volta para o Futuro",
      image:
        "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/62/20122008.jpg",
      category: "Comédia",
      rating: 5,
      synopsis:
        "Marty McFly viaja acidentalmente ao passado. Agora, ele precisará bancar o cupido e fazer os pais se apaixonarem para não deixar de existir.",
    }
  ]);
};

export default populateMovies;
