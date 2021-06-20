<script>
  export let color;
</script>

<section class="bg-smokey-white w-1/2 p-40 pr-28 space-y-8">
  <h2 class="title text-darkest-blue">
    <slot name="title"/>
  </h2>
  <p class="content text-smokey-gray">
    <slot name="content"/>
  </p>
  <button class="group uppercase">
    <h5>
      Learn more
    </h5>
    <div class={`w-32 h-2 rounded-3xl opacity-25 group-hover:opacity-100 bg-${color} -mt-2`}></div>
  </button>
</section>
<style>
  .title {
    font-family: Fraunces;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 49px;
    letter-spacing: -0.2857142984867096px;
    text-align: left;
  }

  .content {
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.12857143580913544px;
    text-align: left;
  }

  button {
    font-family: Fraunces;
    font-size: 15px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    letter-spacing: 1px;
    text-align: left;
  }
</style>