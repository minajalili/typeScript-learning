class Team {
  name: string;
  private member: string[] = [];
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Team) {
    console.log(`Team ${this.name}`);
  }

  addMember(member: string) {
    this.member.push(member);
  }

  showMember() {
    console.log(this.member.length);
    console.log(this.member);
  }
}
const newTeam = new Team("developers");

newTeam.describe();

newTeam.addMember("u1");
newTeam.addMember("u2");
newTeam.addMember("u3");
// newTeam.member[3] = "2020";  we have error on here
newTeam.showMember();

// const newTeamCopy = { name: "designers", describe: newTeam.describe };

// newTeamCopy.describe();
