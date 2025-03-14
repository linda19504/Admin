import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => ({
    cards: [
       {id:1,title: 'Card 1',content: 'Content of Card 1 Content of Card 1'},
       {id: 2, title: 'Card 2', content: 'Content of Card 2Content of Card 2' },
       {id:3,title: 'Card 3',content: 'Content of Card 3Content of Card 3'},
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
