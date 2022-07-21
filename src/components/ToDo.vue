<template>
    <div class="max-w-sm mx-auto p-4 shadow-md my-5">
      <h1 class="text-center font-bold text-xl mb-5">{{ title }}: {{clubsCount}}</h1>
      <ul class="space-y-4 mb-5">
        <li class="font-semibold" v-for="(team, index) in clubs" :key="team.name">
          <div class="flex items-center basis-1/2 px-7">{{ team.name }} <button @click="remove(index)" class="ml-auto py-2 px-4 bg-gray-200 rounded-md">x</button></div>
        </li>
      </ul>
      <form @submit.prevent="addClubs">
        <input v-model="newClub" placeholder="Add a new task" class="border border-gray-500 rounded-md p-3 mr-3">
        <button type="submit" class="bg-black text-white font-bold rounded-md p-[9px] hover:bg-white hover:text-black border-[3px] border-black" >Add Task</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newClub: "",
      title: "Task for the day",
      clubs: [
        {name: "Wake Up and Pray"},
        {name: "Clean Up"},
        {name: "Review what you did Yesterday"},
        {name: "Set your new task"},
        {name: "Start Working"},
      ],
    };
  },
  
  computed: {
    clubsCount() {
      return this.clubs.length;
    }
  },

  methods:{
    addClubs() {
      if (this.newClub !== '') {
        this.clubs.push({name: this.newClub});
        this.newClub = '';
      }
    },
    remove(index) {
      this.clubs = this.clubs.filter((team, i) => i != index)
    },
  }

}
</script>
