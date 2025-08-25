<script setup lang="ts">
import { useMovesStore } from '../../stores/moves'

const store = useMovesStore()
</script>

<template>
  <div style="padding: 2rem; font-family: sans-serif;">
    <h1>Dance Moves 💃</h1>
    <p>Total moves: {{ store.moveCount }}</p>

    <input
      v-model="store.newMove"
      placeholder="Add a new move"
      @keyup.enter="store.addMove"
    />
    <button @click="store.addMove">Add</button>

    <ul>
      <li v-for="(move, index) in store.moves" :key="index">
        {{ move }}
        <button @click="store.removeMove(index)">❌</button>
      </li>
    </ul>
  </div>
</template>
