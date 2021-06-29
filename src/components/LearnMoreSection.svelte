<script>
  export let color;

</script>

<section class="bg-smokey-white w-full sm:w-1/2 px-6 py-16 sm:p-40 sm:pr-28 text-center sm:text-left sm:h-150">
  <h2 class="title text-darkest-blue mb-6 sm:mb-8">
    <slot name="title"/>
  </h2>
  <p class="content text-smokey-gray mb-8 sm:mb-10">
    <slot name="content"/>
  </p>
  <div class="group w-full flex flex-col items-center sm:items-start">
    <button class="text-center sm:text-left uppercase z-20">
      <span>
        Learn more
      </span>
    </button>
    <div class={`w-32 h-2 rounded-3xl opacity-25 group-hover:opacity-100 z-10 -mt-2 bg-${color}`}></div>
  </div>
</section>
<style>
  .title {
    font-family: Fraunces;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 49px;  
    letter-spacing: -0.2857142984867096px;
  }

  .content {
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.12857143580913544px;
  }

  button {
    font-family: Fraunces;
    font-size: 15px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    letter-spacing: 1px;
  }
</style>