<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  let items = [1,2,3,4,5]
</script>

<template>
  <Splide>
    {#each items as index}
      <SplideSlide>
        <div class="h-40 bg-blue-400 relative">
          <h3 class="my-0 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{index}</h3>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</template>
