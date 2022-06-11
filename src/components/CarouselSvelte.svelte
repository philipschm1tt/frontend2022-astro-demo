<script>
  import Carousel from '@beyonk/svelte-carousel'

  let items = [1,2,3,4,5]
</script>

<template>
  <Carousel perPage=1 autoplay=5000>
    {#each items as index}
      <div class="h-40 bg-blue-400 relative">
        <h3 class="my-0 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{index}</h3>
      </div>
    {/each}
  </Carousel>
</template>
