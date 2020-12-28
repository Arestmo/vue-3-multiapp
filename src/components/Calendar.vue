<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-3xl my-2 text-center"> Calendar </h1>
      <section class="flex justify-between">
        <label for="myDate">Choose Date:</label>
        <input type="date" v-model="myDate" id="myDate" class="border">
      </section>
      <section class="flex flex-wrap justify-between my-4">
        <button class="px-3 border rounded" @click="prevMonth">Prev</button>
        <button class="px-3 border rounded" @click="nextMonth">Next</button>
      </section>
      <section class="flex justify-between">
        <h2 class="text-2xl my-2 text-center"> {{ currentMonthName }} </h2>
        <h2 class="text-2xl my-2 text-center"> {{ currentYear }} </h2>
      </section>
      <section class="flex calendar-row">
        <p v-for="day in days" :key="day" class="calendar-item">{{ day }}</p>
      </section>
      <section class="flex flex-wrap calendar-row">
        <p v-for="num in startDay()" :key="num" class="calendar-item"></p>
        <p v-for="num in daysInMonth()"
           :key="num"
           class="calendar-item calendar-item-day"
           :class="currentDateClass(num) ? 'calendar-item-day-highlight' : ''"
        >
          {{ num }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      myDate: "2020-06-10",
      currentDate: new Date(),
    }
  },
  computed: {
    currentMonth() {
      return this.currentDate.getMonth();
    },
    currentMonthName() {
      return this.currentDate.toLocaleString('en-US', {month: 'long'});
    },
    currentYear() {
      return this.currentDate.getFullYear();
    }
  },
  mounted() {
    this.currentDate = new Date(Date.parse(this.myDate));
  },
  watch: {
    myDate(newValue) {
      this.currentDate = new Date(Date.parse(newValue))
    }
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentMonth + 1);
      this.currentDate = new Date(this.currentDate.getTime())
      this.myDate = this.currentDate.toISOString().split('T')[0];
    },
    prevMonth() {
      this.currentDate.setMonth(this.currentMonth - 1);
      this.currentDate = new Date(this.currentDate.getTime())
      this.myDate = this.currentDate.toISOString().split('T')[0];
    },
    currentDateClass(num) {
      // console.log(new Date(this.currentYear, this.currentMonth, num).toDateString())
      // console.log(this.currentDate.toDateString())
      if (new Date(this.currentYear, this.currentMonth, num).toDateString() === this.currentDate.toDateString()) {
        // console.log("MATCH !!!" + this.currentDate.toDateString())
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  &-row {
    width: 280px;
  }

  &-item {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: -0.5px;

    &-day {
      cursor: pointer;
      transition: .3s all ease-in-out;

      &:hover {
        background-color: rgba(#2f2f2f,0.4);
        opacity: 0.8;

      }

      &-highlight {
        background-color: rgba(#2f2f2f,0.2);
      }
    }
  }
}
</style>
