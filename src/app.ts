class Team {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
const newTeam = new Team("developers");

console.log(newTeam);
