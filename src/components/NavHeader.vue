<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:void(0)">小米商城</a>
          <a href="javascript:void(0)">MIUI</a>
          <a href="javascript:void(0)">loT</a>
          <a href="javascript:void(0)">云服务</a>
          <a href="javascript:void(0)">金融</a>
          <a href="javascript:void(0)">有品</a>
          <a href="javascript:void(0)">资质证照</a>
          <a href="javascript:void(0)">协议规则</a>
          <a href="javascript:void(0)">小爱开放平台</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:void(0)" v-if="username">{{username}}</a>
          <a href="javascript:void(0)" v-if="!username" @click="login">登录</a>
          <a href="javascript:void(0)" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:void(0)" class="my-cart" @click="GotoCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-hearder">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:void(0)"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: []
    };
  },
  computed: {
    //  username(){
    //      return this.$store.state.username
    //  },
    //  cartCount(){
    //    return this.$store.state.cartCount
    //  }
    ...mapState(["username", "cartCount"])
  },
  mounted() {
    this.getProductList();
    let params = this.$route.params;
    if (params && params.from === "login") {
      this.getCartCount();
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
    logout() {
      this.axios.post("/user/logout").then(() => {
        this.$cookie.set("userId", "", { expires: "-1" });
        this.$store.dispatch("saveUserName", "");
        this.$store.dispatch("saveCartCount", "0");
        this.$message.success("退出成功");
      });
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6
          }
        })
        .then(res => {
          this.phoneList = res.list;
        });
    },
    GotoCart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixin";
@import "../assets/scss/config";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;

    .container {
      @include flex();

      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;

        &:hover {
          color: #ffffff;
        }
      }

      .my-cart {
        margin-right: 0;
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #ffffff;

        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }

  .nav-hearder {
    .container {
      position: relative;
      height: 112px;
      @include flex();

      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: $colorA;

        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &:before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: all 0.2s;
          }

          &:after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
          }

          &:hover:before {
            margin-left: -55px;
            transition: all 0.2s;
          }
        }
      }

      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;

        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }

          &:hover {
            color: $colorA;

            .children {
              height: 220px;
              opacity: 1;
            }
          }

          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 1s;
            background-color: #ffffff;

            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;

              &:after {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }

              &:last-child:after {
                display: none;
              }

              a {
                display: inline-block;
              }

              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }

              .pro-img {
                height: 137px;
              }

              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }

              .pro-price {
                color: $colorA;
              }
            }
          }
        }
      }

      .header-search {
        width: 319px;

        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;

          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            box-sizing: border-box;
            padding-left: 14px;
          }

          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>