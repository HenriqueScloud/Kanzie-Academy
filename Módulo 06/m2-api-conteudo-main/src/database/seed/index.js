import database from "./../index.js";
import populateMovies from "./populateMovies.js";
import populateUser from "./createUser.js";
import createPersonalMovie from "./createPersonalMovie.js";

(async () => {
  try {
    await database.sync();

    const user = await populateUser();

    await populateMovies();

    await createPersonalMovie({
      title: "Sobrenatural",
      image:
        "https://br.web.img2.acsta.net/medias/nmedia/18/87/35/24/19874611.jpg",
      category: "Suspense",
      rating: 4,
      synopsis:
        "A família Lambert, formada por Josh (Patrick Wilson), Renai (Rose Byrne) e os filhos Dalton (Ty Simpkins) e Foster (Andrew Astor), acaba de se mudar. Logo, uma das crianças entra em coma de forma inexplicável, o que faz os pais pensarem que a nova casa abriga algum tipo de espírito do mal. Mas eles logo se mudam do local e nos dias seguintes acabam descobrindo que o problema não estava na casa e sim no próprio filho.",
      user_id: user.id,
    });

    await createPersonalMovie({
      title: "Thor: Amor e Trovão",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg",
      category: "Ação",
      rating: 2,
      synopsis:
        "O filme apresenta Thor em uma jornada diferente de tudo que ele já enfrentou – uma busca pela paz interior. Mas sua aposentadoria é interrompida por um assassino galático conhecido como Gorr, o Carniceiro dos Deuses, que busca a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda do Rei Valquíria, Korg e da ex-namorada Jane Foster, que – para surpresa de Thor – inexplicavelmente carrega seu martelo mágico, Mjolnir, como a Poderosa Thor. Juntos, eles embarcam em uma alucinante aventura para descobrir o mistério da vingança do Carniceiro dos Deuses e detê-lo antes que seja tarde demais.",
      user_id: user.id,
    });
  } catch (error) {
    console.log(error);
  }
})();
