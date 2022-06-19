class Comunity {
  private member: string[] = [];
  constructor(private id: string, public name: string) {}

  static createName(name: string) {
    return { name };
  }

  describe(this: Comunity) {
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

const team1 = Comunity.createName("team1");
console.log(team1);
