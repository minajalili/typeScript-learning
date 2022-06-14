class Team {
  // id:string
  // name: string;
  private member: string[] = [];
  constructor(private id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  describe(this: Team) {
    console.log(`Team ${this.id} ${this.name}`);
  }

  addMember(member: string) {
    this.member.push(member);
  }

  showMember() {
    console.log(this.member.length);
    console.log(this.member);
  }
}
const newTeam = new Team("id1", "developers");

newTeam.describe();

newTeam.addMember("u1");
newTeam.addMember("u2");
// newTeam.member[3] = "2020";  we have error on here
newTeam.showMember();

// const newTeamCopy = { name: "designers", describe: newTeam.describe };

// newTeamCopy.describe();
