export default function(server) {
    let users = server.createList('user', 20);
    let blogs = server.createList('blog', 100);
    
    var counter = 0;

    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < 5; j++) {
            blogs[counter].update('author', users[i]);
            counter++;
        }
    }
}