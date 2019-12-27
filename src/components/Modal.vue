<template>
    <transition name="slider">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" @click="$emit('submit')" v-show="btnType==1">{{sureText}}</a>
                    <a href="javascript:;" class="btn" @click="$emit('cancel')" v-show="btnType==2">{{cancelText}}</a>
                    <div class="btn-group" v-show="btnType==3">
                        <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn" @click="$emit('cancel')">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
   export default {
      name: 'modal',
      props: {
         modalType: {
            type: String,
            defalut: 'form'
         },
         title: String,
         btnType: String,
         sureText: {
            type: String,
            default: '确定'
         },
         cancelText: {
            type: String,
            default: '取消'
         },
         showModal: Boolean
      }
   }
</script>

<style scoped lang="scss">
    @import "../assets/scss/config";
    @import "../assets/scss/mixin";
    @import "../assets/scss/modal";
    @import "../assets/scss/button";
</style>