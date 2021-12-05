class Group {
    constructor() {
        this.members = []
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value)
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value)
    }

    has(value) {
        return this.members.includes(value)
    }

    static from(arr) {
        let group = new Group()
        for (let a of arr) {
            group.add(a)
        }
        return group
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false