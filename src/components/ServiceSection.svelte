<script>
  export let color;
  export let bgImage;
</script>

<section class={`bg-${bgImage} w-1/2 pt-100 px-48`}>
  <div class="space-y-8">
    <h2 class={`title text-dark-${color}`}>
      <slot name="title"/>
    </h2>
    <h5 class={`content text-mid-${color}`}>
      <slot name="content"/>
    </h5>
  </div>
</section>

<style>
  .title {
    font-family: Fraunces;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 35px;
    letter-spacing: -0.20000000298023224px;
    text-align: center;
  }

  .content {
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: -0.11428571492433548px;
    text-align: center;
  }
</style>