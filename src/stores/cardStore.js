import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => ({
    cards: [
       {id:1,title: 'Card one',content: 'Content of Card one '},
       {id: 2, title: 'Card two', content: 'Content of Card two' },
       {id:3,title: 'Card three',content: 'Content of Card three'},
    ]  
  }),
  // actions: {
  //   // 切换卡片的展开/折叠状态
  //   toggleCards(cardId) {
  //     if (this.cards[cardId] === undefined) {
  //       this.cards[cardId] = true
  //     } else {
  //       this.cards[cardId] = !this.cards[cardId]
  //     }
  //   }
  // },
  //   // 获取卡片的状态
  // isCardOpen(cardId) {
  //   return this.cards[cardId] || false;
  // },

})
