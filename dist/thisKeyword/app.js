"use strict";
class Team {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Team ${this.name}`);
    }
}
const newTeam = new Team("developers");
newTeam.describe();
const newTeamCopy = { name: "designers", describe: newTeam.describe };
newTeamCopy.describe();
