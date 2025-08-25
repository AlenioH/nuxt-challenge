import { defineStore } from 'pinia'

export const useMovesStore = defineStore('moves', {
  state: () => ({
    moves: ['Hair Whip', 'Body Roll'], // initial moves
    newMove: ''
  }),
  getters: {
    moveCount: (state) => state.moves.length
  },
  actions: {
    addMove() {
      if (this.newMove.trim() !== '') {
        this.moves.push(this.newMove.trim())
        this.newMove = ''
      }
    },
    removeMove(index: number) {
      this.moves.splice(index, 1)
    }
  }
})
