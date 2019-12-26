<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../../public/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="http://www.radiomm.club" target="_blank">RadiomM的未完成凑合看主页</a><span>|</span>
            <a href="https://blog.csdn.net/qq_41559229" target="_blank">CSDN(准备废弃的)</a><span>|</span>
            <a href="https://segmentfault.com/u/radiomm_5d22c22757383" target="_blank">segmentfault(准备投靠)</a><span>|</span>
            <a href="https://juejin.im/user/5d47ded55188257f4d36b0fb" target="_blank">掘金(等待入坑)</a>
        </div>
        <div class="conpyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
    </div>
</template>
<script>
   export default {
      name: 'nav-footer'
   }
</script>
<style lang="scss" scoped>
    @import "../assets/scss/config";

    .footer {
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: $colorB;
        color: $colorD;
        font-size: $fontI;
        text-align: center;

        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;

            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }

        .footer-link {
            margin-bottom: 13px;
            a {
                color: $colorD;
                display: inline-block;
            }

            span {
                margin: 0 10px;
            }
        }

        .conpyright {
            .domain {
                color: $colorA;
            }
        }
    }
</style>