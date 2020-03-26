# 仿小米商城

## Project setup
```
npm install
```
## 项目开发笔记
```
1、组件中的data不能写成data{}，这种写法属于全局定义，存在问题。只能写成函数的形式data(){ return{ } },保证每个data各不干扰
2、vuex的使用：
（1）vuex主要分为mutation，action，module。其中action主要用于异步处理，然后提交给mutation更改数据，所有数据的修改都需要经过
 mutation的，这是便于追踪到数据的变化。module其实就是存在多个仓储时的分模块。
（2）为什么mutation中是一个同步函数，这是为了方便devtools方便追踪到前后的状态对比，假若是异步函数，即使被调用，但不知道回调函数
 什么时候被调用，实质上任何在回调函数中进行的状态的改变都是不可追踪的。
 (3)辅助函数map，这里引用官方的例子：
 import { mapMutations } from 'vuex'

    export default {
      // ...
      methods: {
        ...mapMutations([
          'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

          // `mapMutations` 也支持载荷：
          'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
        ]),
        ...mapMutations({
          add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        })
      }
    }
 如果传值的时候，如两个写法那样`this.incrementBy(amount)`进行传值。
 （4）Action的使用：
    Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
    eg(解构赋值):
    actions: {
         increment ({ commit }) {
           commit('increment')
         }
    }

    多个action的时候可以使用mapActions，使用情况跟上面提及的map函数一样。
    有一个重要的点就是，通过store.dispatch分发处理action事件，但是store.dispatch是异步的，怎么知道什么时候完成，
    官方的说法是store.dispatch可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise,所以说实际上是返回一个Promise，
    那么我们就可以使用Promise.then()。
```
## 项目优化
```

```