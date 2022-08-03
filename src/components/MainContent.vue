<template>
  <div class="main-content">
    <div class="main-content__vip-clinker">
      <div class="main-content__vip-clinker__title">
        <p class="main-content__vip-clinker__title__text">Большой и дружелюбный салон клинкера</p>
      </div>
      <div class="main-content__vip-clinker__about">
        <div class="main-content__vip-clinker__about__block-1">
          <p class="main-content__vip-clinker__about__block-1__text">VIP Клинкер - это единственное место в Украине, где собраны лучшие мировые бренды, производящие элитные клинкерные материалы. Мы смогли объединить изыск, эксклюзив, надежность и широкий ассортимент.</p>
        </div>
        <div class="main-content__vip-clinker__about__block-2">
          <div class="main-content__vip-clinker__about__block-2__text">
            <p class="main-content__vip-clinker__about__block-2__text__1">Свою деятельность компания начала в 2001 году. Ее основатель – Устенко М. М. – был одним из первых импортеров качественного европейского клинкера в Украину и сумел заработать безупречную репутацию в бизнес-среде.
              Его усилиями компания стала одним из крупнейших импортеров продукции концерна CRH и завода St. Joris.</p>
            <p class="main-content__vip-clinker__about__block-2__text__2">Сейчас VIP Клинкер - это дизайнерская отделочная плитка, клинкерный кирпич, кирпич и плитка ручной формовки и прочие необходимые для строительства и ремонта материалы из экологически чистых натуральных материалов, отобранные среди лучших по эстетике и качеству.</p></div>
        </div>
      </div>
    </div>
    <div class="main-content__our-brands">
      <div class="main-content__our-brands__left-side">
        <p class="main-content__our-brands__left-side__text-1">
          нам есть чем гордицца <img class="slash-img" src="@/assets/slash.png" alt="">
        </p>
        <p class="our-brands-title">Наши бренды</p>
        <p class="main-content__our-brands__left-side__text-2">У нас есть плитка, которой обустроены все салоны Audi в мире. Брусчатка, которая лежит на центральной площади в Абу-Даби. Старинная черепица, по которой консервативные британцы сходят с ума, а американцы кричат fucking amazing, give it to me. И много всего интересного.</p>
      </div>
      <div class="main-content__our-brands__right-side">
        <img class="hand-img" src="@/assets/hand.png" alt="">
        <div class="go-watch">
          <p class="go-watch__text">перейти и смотреть</p>
          <button class="go-watch__btn-arrow"><img class="arrow-img" src="@/assets/Vector.png" alt=""></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
.main-content{
  margin: 192px 200px;
  display: flex;
  flex-direction: column;

  .main-content__vip-clinker{
    .main-content__vip-clinker__title{
      .main-content__vip-clinker__title__text{
        width: 700px;

        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 72px;

        letter-spacing: 0.03em;

        color: #0D0D0F;
      }
    }

    .main-content__vip-clinker__about{
      display: flex;
      justify-content: space-between;
      position: relative;
      top: 72px;

      .main-content__vip-clinker__about__block-1{
        .main-content__vip-clinker__about__block-1__text{
          height: auto;
          width: auto;
          border-left: 5px solid #ED5555;

          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
          line-height: 32px;

          letter-spacing: 0.02em;

          color: #0D0D0F;

          padding: 0 0 0 50px;
        }
      }

      .main-content__vip-clinker__about__block-2{
        margin-left: 6%;

        .main-content__vip-clinker__about__block-2__text{
          width: auto;
          height: auto;

          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;

          letter-spacing: 0.02em;

          color: #6A6B73;

          .main-content__vip-clinker__about__block-2__text__2{
            padding-top: 20px;
          }
        }
      }
    }
  }

  .main-content__our-brands{
    display: flex;
    margin: 192px 100px 0 100px;

    .main-content__our-brands__left-side{
      z-index: 2;
      width: 35%;
      display: flex;
      flex-direction: column;
      padding: 88px 0 96px 0;

      .main-content__our-brands__left-side__text-1{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #A2A4A9;
      }

      .our-brands-title{
        width: 700px;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 96px;
        line-height: 96px;
        letter-spacing: 0.02em;
        color: #0D0D0F;
        margin: 32px 0 168px 0;
      }

      .main-content__our-brands__left-side__text-2{
        width: 700px;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #0D0D0F;
      }
    }

    .main-content__our-brands__right-side{
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      width: 65%;
      height: 640px;
      background: #EFEFF1;

      .hand-img{
        width: 479px;
        height: 408px;
        position: relative;
        top: 75px;
        z-index: 1;
      }

      .go-watch{
        z-index: 2;
        width: 300px;
        height: 200px;
        background: #ED5555;
        padding: 40px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .go-watch__text{
          width: 200px;
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .go-watch__btn-arrow{
          background: #ED5555;
          text-align: left;
        }
      }
    }
  }
}

/* Media requests */

@media (max-width: 1720px) {
  .main-content {
    .main-content__our-brands {
      .main-content__our-brands__left-side {
        .our-brands-title {
          font-size: 76px;
        }

        .main-content__our-brands__left-side__text-2{
          width: 600px;
        }
      }
    }
  }
}
@media (max-width: 1620px) {
  .main-content {
    .main-content__our-brands {
      margin: 192px 50px 0 50px;

      .main-content__our-brands__right-side {
        .hand-img{
          width: 409px;
          height: 358px;
        }
      }
    }
  }
}
@media (max-width: 1520px) {
  .main-content {
    .main-content__our-brands {
      .main-content__our-brands__left-side {
        .our-brands-title {
          font-size: 65px;
          margin: 32px 0 120px 0;
        }

        .main-content__our-brands__left-side__text-2{
          width: 500px;
        }
      }
    }
  }
}
@media (max-width: 1420px) {
  .main-content {
    margin: 192px 150px;

    .main-content__our-brands {
      margin: 192px 0 0 0;
    }
  }
}
@media (max-width: 1220px) {
  .main-content {
    .main-content__our-brands {
      .main-content__our-brands__left-side{
        width: 25%;
        padding: 20px 0 0 0;

        .our-brands-title{
          font-size: 57px;
          margin: 0 0 15px 0;
        }

        .main-content__our-brands__left-side__text-2{
          width: 400px;
        }
      }

      .main-content__our-brands__right-side {
        width: 75%;
        height: 550px;

        .hand-img{
          width: 309px;
          height: 258px;
          top: 33px;
        }

        .go-watch{
          width: 250px;
          height: 150px;
          padding: 25px 30px;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .main-content {
    .main-content__our-brands {
      .main-content__our-brands__left-side{
        .our-brands-title{
          margin: 0 0 35px 0;
        }

        .main-content__our-brands__left-side__text-2{
          width: 310px;
        }
      }

      .main-content__our-brands__right-side {
        height: 650px;

        .hand-img{
          width: 259px;
          height: 208px;
          top: 26px;
        }

        .go-watch{
          width: 220px;
        }
      }
    }
  }
}
@media (max-width: 870px) {
  .main-content {
    .main-content__our-brands {
      .main-content__our-brands__left-side{
        .main-content__our-brands__left-side__text-2{
          width: 240px;
        }
      }
      .main-content__our-brands__right-side {
        height: 830px;
      }
    }
  }
}
@media (max-width: 767px) {
  .main-content{
    margin: 96px 0 0 0;

    .main-content__vip-clinker{
      margin: 0 40px;

      .main-content__vip-clinker__title{
        display: flex;
        justify-content: center;

        .main-content__vip-clinker__title__text{
          width: 520px;
          font-size: 32px;
          line-height: 40px;
        }
      }

      .main-content__vip-clinker__about{
        flex-direction: column;

        .main-content__vip-clinker__about__block-1{
          .main-content__vip-clinker__about__block-1__text{
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
          }
        }

        .main-content__vip-clinker__about__block-2{
          margin: 40px 0 0 0;
        }
      }
    }

    .main-content__our-brands{
      margin: 192px 0 125px 40px;

      .main-content__our-brands__left-side{
        width: 40%;
        padding: 64px 0;

        .main-content__our-brands__left-side__text-1{
          font-size: 14px;
          width: 270px;
        }

        .our-brands-title{
          font-size: 32px;
          margin: -20px 0 105px 0;
        }

        .main-content__our-brands__left-side__text-2{
          font-size: 14px;
          width: 200px;
          line-height: 20px;
        }
      }

      .main-content__our-brands__right-side{
        height: 544px;
        width: 60%;

        .hand-img{
          width: 213px;
          height: 181px;
          top: -100px;
        }

        .go-watch{
          width: 120px;
          height: 96px;
          justify-content: center;
          align-items: center;

          .go-watch__text{
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 550px) {
  .main-content {
    .main-content__vip-clinker {
      .main-content__vip-clinker__title {
        .main-content__vip-clinker__title__text {
          width: 320px;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .main-content {
    .main-content__our-brands{
      margin: 192px 0 125px 15px;
    }
  }
}
</style>