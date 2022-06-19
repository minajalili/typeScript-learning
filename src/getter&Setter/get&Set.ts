class Group {
  private member: string[] = [];
  constructor(protected readonly id: string, public name: string) {}
  describe(this: Group) {
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

class TestGroup extends Group {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, "testGroup");
    this.lastReport = reports[0];
  }

  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw Error("no report found!");
  }

  set recentReport(value: string) {
    if (!value) {
      throw Error("no value found!");
    }
    this.addReport(value);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log("Reports List:", this.reports);
    console.log("Recent Report:", this.recentReport);
  }
}

const newTestGroup = new TestGroup("u1", []);

newTestGroup.recentReport = "test1";
newTestGroup.recentReport = "test2";
newTestGroup.addReport("test3");

newTestGroup.printReports();
