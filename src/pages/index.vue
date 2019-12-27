<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <div class="children">
                                <ul v-for="(item,index) in menulist" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="'/#/product/'+sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in sliderList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35">
                            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(item,i) in phoneList" :key="i">
                            <div class="item" v-for="(sub,index) in item" :key="index">
                                <span class="new-pro">新品</span>
                                <div class="item-img">
                                    <img v-lazy="sub.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{sub.name}}</h3>
                                    <p>{{sub.subtitle}}</p>
                                    <p class="price" @click="addCart(sub.id)">{{sub.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal
                title="提示"
                sure-text="查看购物车"
                btn-type="1"
                modal-type="middle"
                :showModal="showModal"
                @submit="submit"
                @cancel="showModal=false">
            <template v-slot:body>
                <p>商品添加成功</p>
            </template>
        </modal>
    </div>
</template>
<script>
   import 'swiper/dist/css/swiper.css'
   import ServiceBar from './../components/ServiceBar'
   import Modal from './../components/Modal'
   import {swiper, swiperSlide} from 'vue-awesome-swiper'

   export default {
      name: 'index',
      data() {
         return {
            swiperOption: {
               autoplay: true,
               loop: true,
               effect: 'cube',
               cubeEffect: {
                  slideShadows: true,
                  shadow: true,
                  shadowOffset: 100,
                  shadowScale: 0.6
               },
               pagination: {
                  el: '.swiper-pagination',
                  clickable: true
               },
               navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
               },
            },
            sliderList: [
               {
                  id: '42',
                  img: '/imgs/slider/slide-1.jpg'
               },
               {
                  id: '45',
                  img: "/imgs/slider/slide-2.jpg"
               },
               {
                  id: '46',
                  img: "/imgs/slider/slide-3.jpg"
               },
               {
                  id: '42',
                  img: "/imgs/slider/slide-4.jpg"
               },
               {
                  id: '42',
                  img: "/imgs/slider/slide-5.jpg"
               }
            ],
            menulist: [
               [
                  {
                     id: 30,
                     img: '/imgs/item-box-1.png',
                     name: '小米CC9'
                  },
                  {
                     id: 31,
                     img: '/imgs/item-box-2.png',
                     name: 'Redmi K20 Pro'
                  },
                  {
                     id: 32,
                     img: '/imgs/item-box-3.jpg',
                     name: '小米8青春版'
                  },
                  {
                     id: 33,
                     img: '/imgs/item-box-4.jpg',
                     name: '移动4G专区'
                  }
               ],
               [
                  {
                     id: 30,
                     img: '/imgs/item-box-1.png',
                     name: '小米CC9'
                  },
                  {
                     id: 31,
                     img: '/imgs/item-box-2.png',
                     name: 'Redmi K20 Pro'
                  },
                  {
                     id: 32,
                     img: '/imgs/item-box-3.jpg',
                     name: '小米8青春版'
                  },
                  {
                     id: 33,
                     img: '/imgs/item-box-4.jpg',
                     name: '移动4G专区'
                  }
               ],
               [
                  {
                     id: 30,
                     img: '/imgs/item-box-1.png',
                     name: '小米CC9'
                  },
                  {
                     id: 31,
                     img: '/imgs/item-box-2.png',
                     name: 'Redmi K20 Pro'
                  },
                  {
                     id: 32,
                     img: '/imgs/item-box-3.jpg',
                     name: '小米8青春版'
                  },
                  {
                     id: 33,
                     img: '/imgs/item-box-4.jpg',
                     name: '移动4G专区'
                  }
               ],
               [
                  {
                     id: 30,
                     img: '/imgs/item-box-1.png',
                     name: '小米CC9'
                  },
                  {
                     id: 31,
                     img: '/imgs/item-box-2.png',
                     name: 'Redmi K20 Pro'
                  },
                  {
                     id: 32,
                     img: '/imgs/item-box-3.jpg',
                     name: '小米8青春版'
                  },
                  {
                     id: 33,
                     img: '/imgs/item-box-4.jpg',
                     name: '移动4G专区'
                  }
               ],
               [
                  {
                     id: 30,
                     img: '/imgs/item-box-1.png',
                     name: '小米CC9'
                  },
                  {
                     id: 31,
                     img: '/imgs/item-box-2.png',
                     name: 'Redmi K20 Pro'
                  },
                  {
                     id: 32,
                     img: '/imgs/item-box-3.jpg',
                     name: '小米8青春版'
                  },
                  {
                     id: 33,
                     img: '/imgs/item-box-4.jpg',
                     name: '移动4G专区'
                  }
               ],
               [
                  {
                     id: 30,
                     img: '/imgs/item-box-1.png',
                     name: '小米CC9'
                  },
                  {
                     id: 31,
                     img: '/imgs/item-box-2.png',
                     name: 'Redmi K20 Pro'
                  },
                  {
                     id: 32,
                     img: '/imgs/item-box-3.jpg',
                     name: '小米8青春版'
                  },
                  {
                     id: 33,
                     img: '/imgs/item-box-4.jpg',
                     name: '移动4G专区'
                  }
               ]
            ],
            adsList: [
               {
                  id: 33,
                  img: '/imgs/ads/ads-1.png'
               },
               {
                  id: 48,
                  img: '/imgs/ads/ads-2.jpg'
               },
               {
                  id: 45,
                  img: '/imgs/ads/ads-3.png'
               },
               {
                  id: 47,
                  img: '/imgs/ads/ads-4.jpg'
               },
            ],
            phoneList: [],
            showModal: false
         }
      },
      components: {
         swiper,
         swiperSlide,
         ServiceBar,
         Modal
      },
      mounted() {
         this.init()
      },
      methods: {
         init() {
            this.axios.get('/products', {
               params: {
                  categoryId: 100012,
                  pageSize: 14
               }
            }).then((res) => {
               this.phoneList = [res.list.slice(6, 10), res.list.slice(10, 14)]
            })
         },
         submit(){
           this.$router.push('/cart')
         },
         addCart(id) {
            this.showModal = true
            return
            // this.axios.post('/carts', {
            //    productId: id,
            //    selected: true
            // }).then(() => {
            //
            // }).catch(() => {
            //    this.showModal = true
            // })
         }
      }
   }
</script>
<style lang="scss" scoped>
    @import "../assets/scss/mixin";
    @import "../assets/scss/config";
    @import "../assets/scss/base";

    .index {
        .swiper-box {
            position: relative;

            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585a7a;
                box-sizing: border-box;

                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;

                        &:hover {
                            background-color: $colorA;

                            .children {
                                width: 962px;
                                opacity: 1;
                            }
                        }

                        > a {
                            display: block;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;
                            position: relative;

                            &:after {
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content: '';
                                @include bgImg(10px, 15px, '/imgs/icon-arrow.png')
                            }
                        }

                        .children {
                            overflow: hidden;
                            width: 0;
                            height: 451px;
                            opacity: 0;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;
                            box-sizing: border-box;
                            transition: all .8s;

                            ul {
                                display: flex;
                                justify-content: space-between;
                                height: 75px;

                                li {
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                }

                                a {
                                    color: $colorB;
                                    font-size: $fontJ;
                                }

                                img {
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }

            .swiper-container {
                height: 451px;

                img {
                    width: 100%;
                    height: 100%;
                }

                .swiper-button-prev {
                    left: 274px;
                }
            }
        }

        .ads-box {
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;

            a {
                width: 296px;
                height: 167px;
            }
        }

        .banner {
            margin-bottom: 50px;
        }

        .product-box {
            background-color: $colorJ;
            padding: 30px 0 50px;

            h2 {
                font-size: $fontF;
                font-weight: 200;
                line-height: 58px;
                color: $colorB;
            }

            .wrapper {
                display: flex;

                .banner-left {
                    z-index: 2;
                    transition: all .2s linear;

                    &:hover {
                        box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                        transform: translate3d(0, -2px, 0);
                    }

                    img {
                        width: 224px;
                        height: 619px;
                        vertical-align: middle;
                    }

                }

                .list-box {
                    .list {
                        @include flex();
                        flex: 1;
                        margin-bottom: 14px;

                        &:last-child {
                            margin-bottom: 0;
                        }

                        .item {
                            width: 236px;
                            height: 302px;
                            margin-left: 14px;
                            background-color: $colorG;
                            text-align: center;
                            position: relative;
                            transition: all .2s linear;

                            &:hover {
                                box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                                transform: translate3d(0, -2px, 0);
                            }

                            span {
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                line-height: 24px;
                                color: $colorG;

                                &.new-pro {
                                    background-color: #7ecf68;
                                }

                                &.kill-pro {
                                    background-color: #e82626;
                                }

                            }

                            .item-img {
                                img {
                                    width: 100%;
                                    height: 195px;

                                }
                            }

                            .item-info {
                                h3 {
                                    font-size: $fontJ;
                                    color: $colorB;
                                    line-height: $fontJ;
                                    font-weight: bold;
                                }

                                p {
                                    color: $colorD;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }
                            }

                            .price {
                                color: #f20a0a;
                                font-size: $fontJ;
                                font-weight: bold;
                                cursor: pointer;

                                &:after {
                                    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                                    content: '';
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
</style>