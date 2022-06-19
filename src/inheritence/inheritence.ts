class Team12 {
  private member: string[] = [];
  constructor(private id: string, public name: string) {}

  describe(this: Team12) {
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

class devTem extends Team12 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "devTeam");
    this.admins = admins;
  }
}
const newTeam12 = new devTem("id1", ["user3"]);

newTeam12.describe();

newTeam12.addMember("u1");
newTeam12.addMember("u2");
newTeam12.showMember();

// export default {};
