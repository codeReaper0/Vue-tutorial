<template>
    <div>
      <h1 class="text-center">{{ title }}: {{clubsCount}}</h1>
      <ul>
        <li v-for="(team, index) in clubs" :key="team.name">
          <div>{{ team.name }} <button @click="remove(index)">x</button></div>
        </li>
      </ul>
      <form @submit.prevent="addClubs">
        <input v-model="newClub" placeholder="Type your club">
        <button type="submit" >Add Club</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newClub: "",
      title: "Clubs",
      clubs: [
        {name: "Chelsea"},
        {name: "Man U"},
        {name: "Arsenal"},
        {name: "Man City"},
        {name: "Liverpool"},
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
