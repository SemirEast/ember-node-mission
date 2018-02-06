export default function(server) {
    let users = server.createList('user', 20);
    let blogs = server.createList('blog', 100);
    let comments = server.createList('comment', 100);
    
    var counter = 0;

    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < 5; j++) {
            blogs[counter].update('author', users[i]);
            //blogs[counter].update('comments', comments[counter]);
            //users[i].update('comments', comments[counter]);
            comments[counter].update('author', users[i]);
            comments[counter].update('blog', blogs[counter]);
            counter++;
        }
    }
}