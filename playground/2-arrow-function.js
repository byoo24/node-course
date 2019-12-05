const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        // Regular function binds this
        console.log('Guest list for ' + this.name);
        
        this.guestList.forEach((guest) => {
            // Don't want this inner function to bind its separate this,
            // so we use arrow function instead
            console.log(guest + ' is attending ' + this.name);
        })
    }
}
