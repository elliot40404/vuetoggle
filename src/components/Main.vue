<template>
  <div class="con">
    <input class="input" placeholder="Enter your Name" type="text" />
    <div class="toggle">
      <h3>Personal</h3>
      <label class="switch">
        <input @click="toggle" type="checkbox" />
        <span class="slider round"></span>
      </label>
      <h3>Group</h3>
    </div>
    <input :class="[show ? 'input' : 'none', 'animate__animated animate__fadeInDown']" placeholder="Name your group" type="text" />
    <button @click="submit">CREATE ROOM</button>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
      return {
      }
  },
  methods: {
      toggle(e) {
        this.$store.dispatch('toggle', e.originalTarget.checked)
      }
  },
  computed: {
      show() {
          return this.$store.state.toggle
      }
  }
};
</script>

<style lang="scss" scoped>
.none {
    transition: all 300ms ease;
    display: none;
}
.con {
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5em;
  border: 2px solid rgb(21, 255, 0);
  border-radius: 36px;
}
.input {
  height: 50px;
  width: 80%;
  padding: 10px 20px 10px 50px;
  font-size: 1.5rem;
  border-radius: 15px;
  outline: none;
  border: none;
  font-family: sans-serif;
  font-weight: 500;
  background: rgb(223, 223, 223);
  box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.24);
  transition: all 300ms ease;
}
.toggle {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
      margin: 0px 20px;
  }
}
button {
  padding: 20px;
  color: white;
  background: #ff8f80;
  outline: none;
  border: none;
  font-size: 20px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.24);
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
