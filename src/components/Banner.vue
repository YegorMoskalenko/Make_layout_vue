<template>
  <div class="banner">
    <div class="banner__left-side">
      <div class="vip-clinker">
        <div class="vip-clinker__home vip-clinker__content"><button><img src="@/assets/house.png" alt=""></button></div>
        <div class="vip-clinker__title vip-clinker__content"><p class="vip-clinker__title__text">О Вип Клинкер</p></div>
        <div class="vip-clinker__arrow vip-clinker__content"><img src="@/assets/arrow.png" alt=""></div>
      </div>
      <div class="about-company-title">
        <p>О компании</p>
      </div>
    </div>
    <div class="banner__right-side">
      <div class="row-1">
        <div class="row-1__child-row-1">
          <div class="row-1__child-row-1__block-1"></div>
          <div class="row-1__child-row-1__block-2"></div>
        </div>
        <div class="row-1__child-row-2">
          <div class="row-1__child-row-2__block-1"></div>
          <div class="row-1__child-row-2__block-2">
            <p class="row-1__child-row-2__block-2__text">
              Закрываем весь ваш объект по керамике под ключ
            </p>
          </div>
        </div>
      </div>
      <div class="row-2">
        <div class="row-2__content">
          <div class="row-2__content__block-1">
            <p class="text-1">Эксклюзивно в Украине</p>
          </div>
          <div class="row-2__content__block-2">
            <div class="num-1">1</div>
            <div class="num-8">8</div>
          </div>
          <div class="row-2__content__block-3">
            <p class="text-2">европейских брендов</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
.banner{
  height: 800px;
  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../assets/PHS_0432-min2.jpg") no-repeat;
  display: flex;
  justify-content: space-between;
  margin-top: 96px;

  .banner__left-side{
    margin-left: 100px;
    margin-top: 33px;
    width: 67%;

    .vip-clinker{
      display: flex;

      .vip-clinker__home{
        width: 40px;
        height: 40px;
        background: #ffffff;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);

        display: flex;
        align-items: center;
        padding: 14px;
      }
      .vip-clinker__title{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        margin: 0 1px;

        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        .vip-clinker__title__text{
          font-family: 'Ubuntu';
          font-size: 14px;
          line-height: 16px;
          font-style: normal;
          color: #ffffff;
        }
      }
      .vip-clinker__arrow{
        width: 40px;
        height: 40px;

        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .about-company-title{
      color: #ffffff;
      margin-top: 268px;

      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 128px;
      line-height: 128px
    }
  }
  .banner__right-side {
    display: flex;
    flex-direction: column;
    width: 33%;

    .row-1 {
      display: flex;
      flex-direction: column;

      .row-1__child-row-1 {
        display: flex;

        .row-1__child-row-1__block-1 {
          height: 200px;
          width: 50%;
          background-color: rgba(0, 0, 0, 0.1);
        }

        .row-1__child-row-1__block-2 {
          height: 200px;
          width: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }
      }

      .row-1__child-row-2 {
        display: flex;

        .row-1__child-row-2__block-1 {
          height: 200px;
          width: 50%;
          background: url("../assets/image9.jpg");
        }

        .row-1__child-row-2__block-2 {
          height: 200px;
          width: 50%;

          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);

          display: flex;
          justify-content: center;
          align-items: center;

          .row-1__child-row-2__block-2__text {
            width: 205px;

            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.02em;

            color: #FFFFFF;

            text-shadow: 0 0 2px rgba(13, 13, 15, 0.3);
          }
        }
      }
    }

    .row-2 {
      height: 400px;
      background: rgba(273, 37, 63, .5);

      display: flex;
      justify-content: center;
      align-items: center;

      .row-2__content {
        display: flex;
        position: relative;
        top: -10px;

        .row-2__content__block-1 {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 55px;
          position: relative;
          right: -66px;

          .text-1 {
            color: #FFFFFF;
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            height: 48px;

            text-align: right;
            letter-spacing: 0.2em;
            text-transform: uppercase;

            transform: rotate(-90deg);
          }
        }

        .row-2__content__block-2{
            position: relative;
            left: 65px;
            color: #FFFFFF;
            text-shadow: 0 0 2px rgba(13, 13, 15, 0.3);
            letter-spacing: -0.1em;
            display: flex;
            align-items: flex-end;

            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 700;
            font-size: 256px;

            .num-8{
              overflow: hidden;
              width: 139px;
              position: relative;
              height: 205px;
              top: -84px;
            }
        }

        .row-2__content__block-3{
          display: flex;
          align-items: flex-end;

          .text-2{
            width: 208px;
            height: 80px;

            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 40px;

            letter-spacing: 0.02em;

            color: #FFFFFF;

            text-shadow: 0 0 2px rgba(13, 13, 15, 0.3);

            position: relative;
            left: -62px;
          }
        }
      }
    }
  }
}

/* Media requests */

@media (max-width: 1720px) {
  .banner {
    .banner__left-side{
      .about-company-title{
        font-size: 100px;
      }
    }
  }
}
@media (max-width: 1520px) {
  .banner {
    height: 650px;

    .banner__left-side{
      .about-company-title{
        margin-top: 168px;
      }
    }

    .banner__right-side {
      .row-1 {
        .row-1__child-row-1 {
          .row-1__child-row-1__block-1 {
            height: 162.5px;
          }

          .row-1__child-row-1__block-2 {
            height: 162.5px;
          }
        }

        .row-1__child-row-2 {
          .row-1__child-row-2__block-1 {
            height: 162.5px;
          }

          .row-1__child-row-2__block-2 {
            height: 162.5px;

            .row-1__child-row-2__block-2__text{
              font-size: 18px;
              line-height: 24px;
            }
          }
        }
      }
      .row-2 {
        height: 325px;

        .row-2__content{
          .row-2__content__block-1{
            right: -92px;
          }

          .row-2__content__block-2{
            font-size: 190px;
            left: 85px;

            .num-8{
              height: 154px;
              top: -61px;
            }
          }

          .row-2__content__block-3 .text-2{
            font-size: 24px;
            top: 20px;
            left: -45px;
          }
        }
      }
    }
  }
}
@media (max-width: 1440px) {
  .banner {
    .banner__right-side {
      .row-1 .row-1__child-row-2 {
        .row-1__child-row-2__block-2 {
          .row-1__child-row-2__block-2__text {
            width: 150px;
          }
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .banner {
    height: 550px;

    .banner__left-side{
      margin-left: 50px;
      .about-company-title{
        margin-top: 110px;
        font-size: 75px;
      }
    }

    .banner__right-side {
      .row-1 {
        .row-1__child-row-1 {
          .row-1__child-row-1__block-1 {
            height: 137.5px;
          }

          .row-1__child-row-1__block-2 {
            height: 137.5px;
          }
        }

        .row-1__child-row-2 {
          .row-1__child-row-2__block-1 {
            height: 137.5px;
          }

          .row-1__child-row-2__block-2 {
            height: 137.5px;
          }
        }
      }
      .row-2 {
        height: 275px;

        .row-2__content{
          .row-2__content__block-1{
            right: -105px;

            .text-1{
              font-size: 14px;
            }
          }

          .row-2__content__block-2{
            font-size: 135px;
            left: 100px;

            .num-8{
              height: 110px;
              top: -45px;
            }
          }

          .row-2__content__block-3{
            .text-2 {
              font-size: 24px;
              top: 35px;
              left: -35px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .banner {
    .banner__left-side{
      width: 60%;
      .about-company-title{
        margin-top: 75px;
        font-size: 55px;
      }
    }

    .banner__right-side {
      width: 40%;
    }
  }
}
@media (max-width: 767px) {
  .banner{
    flex-direction: column;
    height: 672px;

    .banner__left-side{
      height: 40%;
      width: 100%;
      margin-left: 70px;

      .about-company-title{
        font-size: 65px;
        margin-top: 20px;
      }
    }

    .banner__right-side{
      height: 60%;
      width: 100%;

      .row-1{
        .row-1__child-row-1{
          display: none;
        }
      }

      .row-2{
        .row-2__content{
          .row-2__content__block-1{
            right: -85px;
          }

          .row-2__content__block-2{
            font-size: 125px;

            .num-8{
              height: 100px;
              top: -44px;
            }
          }
          .row-2__content__block-3{
            .text-2{
              width: 100px;
              font-size: 20px;
              top: 32px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .banner {
    .banner__left-side {
      .about-company-title {
        font-size: 55px;
      }
    }
  }
}
@media (max-width: 425px) {
  .banner {
    background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../assets/PHS_0432-min2-mobile.jpg") no-repeat;

    .banner__left-side {
      margin-left: 40px;

      .about-company-title {
        font-size: 48px;
      }
    }

    .banner__right-side {
      .row-1{
        .row-1__child-row-2{
          .row-1__child-row-2__block-2{
            .row-1__child-row-2__block-2__text{
              width: 125px;
              font-size: 14px;
            }
          }
        }
      }

      .row-2 {
        .row-2__content{
          .row-2__content__block-1{
            right: -14px;
          }

          .row-2__content__block-2{
            font-size: 140px;
            left: 90px;
            top: -10px;

            .num-8{
              height: 114px;
              top: -45px;
            }
          }

          .row-2__content__block-3{
            .text-2{
              top: 27px;
              line-height: 25px;
              left: -43px;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 380px) {
  .banner {
    .banner__left-side {
      .about-company-title {
        font-size: 44px;
      }
    }
  }
}
@media (max-width: 345px) {
  .banner {
    .banner__left-side {
      .about-company-title {
        margin-top: 60px;
      }
    }
  }
}
@media (min-width: 1901px) {
  .banner{
    background-size: 100vw;

    .banner__right-side{
      .row-1{
        .row-1__child-row-2{
          .row-1__child-row-2__block-1{
            background: url("../assets/image9.jpg") no-repeat;
            background-size: 100%;
          }
        }
      }
    }
  }
}
@media (min-width: 400px) and (max-width: 425px) {
  .banner{
    background-size: 100vw;
  }
}
</style>