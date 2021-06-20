<script>
  export let src;
  export let alt;
</script>
<div class="text-center w-1/3 flex-col items-center">
  <div class="w-full flex justify-center mb-14">
    <img {src} {alt} class="rounded-full" />
  </div>
  <p class='content mb-16'>
    <slot name="description"/>
  </p>
  <div class="mt-16">
    <h4 class="name mb-2">
      <slot name="name"/>
    </h4>
    <h6 class="position">
      <slot name="position"/>
    </h6>
  </div>
</div>
<style>
  .content {
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.12857143580913544px;
    text-align: center;
    color: #5B636D;
  }

  .name {
    font-family: Fraunces;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
    letter-spacing: -0.12857143580913544px;
    text-align: center;
    color: #24303E;
  }

  .position {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.10000000149011612px;
    text-align: center;
    color: #A7AAAD;
  }
</style>