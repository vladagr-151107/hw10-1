function getName() {
    const users = [
        {
            name: "Lee",
            age: 25,
            currentCity: "Los Angeles",
            getInfo() {
                console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.currentCity}`);
            }
        },
        {
            name: "Kate",
            age: 21,
            currentCity: "Milan",
            getInfo() {
                console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.currentCity}`);
            }
        }
    ];
    users.forEach(user => {
        user.getInfo();
    });
}

getName();