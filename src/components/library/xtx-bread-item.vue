<template>
  <div class="bread-item">
    <RouterLink v-if="path" :to="path">
      <slot></slot>
    </RouterLink>
    <span v-else><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: [String, Object]
    }
  }
}
</script>
