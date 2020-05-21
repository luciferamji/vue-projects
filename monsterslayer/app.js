new Vue({
  el: "#app",
  data: {
    playerHealth: 0,
    monsterHealth: 0,
    gameIsRunning: false,
    turns: [],
    c: 0,
    show: false
  },
  methods: {
    startgame: function() {
      this.turns = [];
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.show = false;
      this.c = 0;
    },
    attack: function() {
      var damage = this.calculateDamage(20, 10);
      this.c++;
      this.monsterHealth -= damage;
      this.turns.unshift({
        isplayer: true,
        text: "Player hits Monster for " + damage
      });

      if (this.checkwin()) {
        return;
      }
      this.monsterDamage();
      if (this.c == 5) {
        this.show = true;
      }
    },
    spclattack: function() {
      var damage = this.calculateDamage(30, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isplayer: true,
        text: "Player hits Monster with heavy damage for " + damage
      });
      if (this.checkwin()) return;
      this.monsterDamage();
      this.checkwin();
      this.show = false;
      this.c = 0;
    },
    heal: function() {
      var h = this.calculateDamage(25, 10);
      if (this.playerHealth <= 80) this.playerHealth += h;
      else this.playerHealth = 100;

      this.turns.unshift({
        isplayer: true,
        text: "Player heals himself for " + h
      });

      this.monsterDamage();
    },
    giveup: function() {
      this.gameIsRunning = false;
      
    },
    calculateDamage: function(max, min) {
      var damage = Math.floor(Math.random() * (max - min + 1)) + min;

      return damage;
    },
    checkwin: function() {
      if (this.playerHealth <= 0) {
        this.startgame();
        if (!confirm("you lost! wanna play again")) this.gameIsRunning = false;

        return true;
      } else if (this.monsterHealth <= 0) {
        this.startgame();
        if (!confirm("you won! wanna play again")) this.gameIsRunning = false;

        return true;
      } else {
        console.log("in else block");
        return false;
      }
    },
    monsterDamage: function() {
      damage = this.calculateDamage(25, 10);
      this.playerHealth -= damage;

      this.turns.unshift({
        isplayer: false,
        text: "Monster hits Player for " + damage
      });
      this.checkwin();
    },
    disable: function(value) {
      if (value) return { display: "inline-block" };
      else return { display: "none" };
    }
  }
});
