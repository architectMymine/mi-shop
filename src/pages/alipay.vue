<template>
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <Loading v-if="loading"></Loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      loading: true
    };
  },
  components: {
    OrderHeader,
    Loading
  },
  mounted() {
    this.aliPay();
  },
  methods: {
    aliPay() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "vue高仿小米商城",
          amount: 100,
          payType: 1
        })
        .then( (res) => {
          this.content = res.content;
          setTimeout(() => {
            document.getElementById("bestPayForm").submit();
          }, 100);
        });
    }
  }
};
</script>