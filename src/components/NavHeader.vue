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
                    <a href="javascript:void(0)">登录</a>
                    <a href="javascript:void(0)">注册</a>
                    <a href="javascript:void(0)" class="my-cart"><span class="icon-cart"></span>购物车</a>
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
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90"
                                                 alt="">
                                        </div>
                                        <div class="pro-name">小米CCp Pro</div>
                                        <div class="pro-price">2799元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90"
                                                 alt="">
                                        </div>
                                        <div class="pro-name">小米CCp Pro</div>
                                        <div class="pro-price">2799元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90"
                                                 alt="">
                                        </div>
                                        <div class="pro-name">小米CCp Pro</div>
                                        <div class="pro-price">2799元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90"
                                                 alt="">
                                        </div>
                                        <div class="pro-name">小米CCp Pro</div>
                                        <div class="pro-price">2799元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90"
                                                 alt="">
                                        </div>
                                        <div class="pro-name">小米CCp Pro</div>
                                        <div class="pro-price">2799元起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90"
                                                 alt="">
                                        </div>
                                        <div class="pro-name">小米CCp Pro</div>
                                        <div class="pro-price">2799元起</div>
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
                        <input type="text" name="keyword">
                        <a href="javascript:void(0)"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   export default {
      name: 'nav-header',
      data() {
         return {
            phoneList: []
         }
      },
      mounted() {
         this.getProductList()
      },
      methods: {
         getProductList() {
            this.axios.get('/products', {
               params: {
                  categoryId: '100012'
               }
            }).then((res) => {
               this.phoneList = res
            })
         }
      }
   }
</script>
<style lang="scss" scoped>
    @import "../assets/scss/base";
    @import "../assets/scss/mixin";
    @import "../assets/scss/config";

    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;

            .container {
                @include flex();

                a {
                    display: inline-block;
                    color: #B0B0B0;
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
                        background: url("../../public/imgs/icon-cart-checked.png") no-repeat center;
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
                            content: '';
                            @include bgImg(55px, 55px, "../../public/imgs/mi-logo.png");
                            transition: all .2s;
                        }

                        &:after {
                            content: '';
                            @include bgImg(55px, 55px, "../../public/imgs/mi-home.png");
                        }

                        &:hover:before {
                            margin-left: -55px;
                            transition: all .2s;
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
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, .11);
                            z-index: 10;
                            transition: all 1s;

                            .product {
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                position: relative;

                                &:after {
                                    content: '';
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
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;

                        input {
                            border: none;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            box-sizing: border-box;
                            padding-left: 14px;
                        }

                        a {
                            @include bgImg(18px, 18px, "../../public/imgs/icon-search.png");
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>