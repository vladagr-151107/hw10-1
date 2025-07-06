function getName(){
    const users = [
        {
            name: "Lee",
            age: 25,
            currentCity: "Los Angeles"
        },
        {
            name: "Kate",
            age: 21,
            currentCity: "Milan"
        }
    ];
    users.forEach(user => {
        console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.currentCity}`);
    });
}
getName();