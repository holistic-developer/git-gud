<template>
  <div class="relative h-full w-full">
    <div class="absolute slidev-layout">
      <slot name="default"/>
    </div>
    <div class="absolute bottom-0 w-full">
      <div class="slidev-layout">
        <slot name="bottom"/>
      </div>
    </div>
  </div>
</template>