function bestFriend(array){
    let myBestFriend = "";
    for(let i = 0; i < array.length; i++){
        const friend = array[i];
        if(friend.length > myBestFriend.length){
            myBestFriend = friend;
        }
    }
    return myBestFriend;
}


const array = ['Rejwanur Rahman', 'Aminur Rahman', 'Ariful Islam', 'Sakib Hossain', 'Mahabubur Rahman', 'Biplob', 'Torun'];

const myBestFriend = bestFriend(array);
console.log(myBestFriend);
console.log(typeof myBestFriend);