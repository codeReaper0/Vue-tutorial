<template>
  <div class="m-auto px-4 py-8">
    <h1 class="text-2xl my-2 text-center font-bold">Calendar Project</h1>
    <div class="flex justify-between px-8">
      <h2 class="text-xl font-semibold mx-3">{{currentMonthText}}</h2>
      <h2 class="text-xl font-semibold mx-3">{{currentYear}}</h2>
    </div>
    <section class="flex my-2">
      <p v-for="day in days" :key="day" class="p-2 w-[14.28%] text-center font-semibold text-lg">{{ day }}</p>
    </section>
    <section class="flex flex-wrap">
      <p v-for="day in startDay()" :key="day" class="p-2 w-[14.28%] text-center border border-black"></p>
      <p v-for="num in daysInMonth(currentYear, currentMonth)" :key="num" class="p-2 w-[14.28%] text-center border border-black font-semibold" :class="currentDateClass(num)"> {{num}}</p>
    </section>
    <section class="flex justify-between text-xl font-semibold px-10 mt-4">
      <button class="p-2 border rounded" @click="prev">Prev</button>
      <button class="p-2 border rounded" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    }, 
    methods: {
      daysInMonth(year, month) {
        return new Date(year, month +1, 0).getDate()
      },
      startDay(){
        return new Date(this.currentYear, this.currentMonth, 1).getDay()
      },
      next() {
        if(this.currentMonth === 11){
          this.currentMonth = 0;
          this.currentYear++;
        } else {
          this.currentMonth++;
        }
      },
      prev() {
        if(this.currentMonth === 0){
          this.currentMonth = 11;
          this.currentYear--;
        } else {
          this.currentMonth--;
        }
      },
      currentDateClass(num) {
        const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
        const currentFullDate = new Date().toDateString();
        return calendarFullDate === currentFullDate ? "bg-gray-200" : "";
      }
    },
    computed: {
      currentMonthText() {
        return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month:'long'})
      }
    }
  }
</script>