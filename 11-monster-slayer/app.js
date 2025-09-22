function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      logs: [],
      currentRound: 0,
      winner: null,
    };
  },
  computed: {
    monsterHealthBar() {
      return {
        width: this.monsterHealth + "%",
      };
    },
    playerHealthBar() {
      return {
        width: this.playerHealth + "%",
      };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    restartGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logs = [];
      this.logMonsterAttack("restart", "Player", 0);
      this.logMonsterAttack("restart", "Monster", 0);
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      this.logMonsterAttack("attack", "Player", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
      }
      this.logMonsterAttack("attack", "Monster", attackValue);
    },
    logMonsterAttack(action, who, value) {
      const log = {
        id: Math.random().toString(),
        playerHealth: this.playerHealth,
        monsterHealth: this.monsterHealth,
        who: who,
        action: action,
        value: value,
      };
      this.logs.unshift(log);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.logMonsterAttack("attack", "Player", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.logMonsterAttack("heal", "Player", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
      this.logMonsterAttack("surrender", "Player", 0);
    },
  },
});

app.mount("#game");
