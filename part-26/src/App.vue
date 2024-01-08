<script>
import SlotsBase from './components/SlotsBase.vue';
import SlotsSecond from './components/SlotsSecond.vue';
import SlotsThird from './components/SlotsThird.vue';
import SlotsFourth from './components/SlotsFourth.vue';
import SlotsFifth from './components/SlotsFifth.vue';
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  components: {
    SlotsBase,
    SlotsSecond,
    SlotsThird,
    SlotsFourth,
    SlotsFifth
}
}
</script>
<template>
  <SlotsBase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </SlotsBase>
  <hr>
  <SlotsSecond>
    <h3>
      {{ message }}
    </h3>
  </SlotsSecond>
  <hr>
  <SlotsThird></SlotsThird>
  <hr>
  <SlotsFourth>
    <template v-slot:header>
      <p>内容 header</p>
    </template>
    <template v-slot:body>
      <p>内容 body</p>
    </template>
    <template #footer>
      <p>内容 footer</p>
    </template>
  </SlotsFourth>
  <hr>
  <SlotsFifth>
    <template #header="slotProps">
      <p>{{ message }}</p>
      <p>{{ slotProps.msg }}</p>
    </template>
  </SlotsFifth>
</template>

<style>
</style>