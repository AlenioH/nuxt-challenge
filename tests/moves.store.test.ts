import { setActivePinia, createPinia } from 'pinia'
import { useMovesStore } from '../stores/moves'
import { beforeEach, expect, test } from 'vitest'

beforeEach(() => {
  setActivePinia(createPinia()) // resets pinia for each test
})

test('adding a move increases move count', () => {
  const store = useMovesStore()
  store.addMove('Moonwalk')
  expect(store.moveCount).toBe(3)
})
