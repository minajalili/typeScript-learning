interface Product {
  title: string;
  price: number;

  pInfo(describe: string): void;
}

let product11: Product;

product11 = {
  title: "phone1",
  price: 200,

  pInfo(describe: string) {
    console.log(`${describe}: ${this.title}`);
  },
};

product11.pInfo("Info");

interface User {
  name: string;
  role: string;
  info(describe: string): void;
}

class Role implements User {
  name: string;
  role = "admin";

  constructor(n: string) {
    this.name = n;
  }

  info(describe: string) {
    console.log(`${describe}: ${this.name}`);
  }
}

const user: User = new Role("Test User");

user.info("Info");
