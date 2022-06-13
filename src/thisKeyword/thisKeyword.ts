class Team {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Team) {
    console.log(`Team ${this.name}`);
  }
}
const newTeam = new Team("developers");

newTeam.describe();

const newTeamCopy = { name: "designers", describe: newTeam.describe };

newTeamCopy.describe();
