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
    addMove(newMove?: string) {
      const moveToAdd = newMove ?? this.newMove;
      if (moveToAdd.trim() !== '') {
        this.moves.push(moveToAdd.trim())
        this.newMove = ''
      }
    },
    removeMove(index: number) {
      this.moves.splice(index, 1)
    }
  }
})
