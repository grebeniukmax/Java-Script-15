//1
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
  };
  
  console.log(calculateTotalBalance(users))


//2
const getUsersWithFriend = (users, friendName) => {
    return users
      .filter(user => user.friends.includes(friendName))
      .map(user => user.name)
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker'))
  console.log(getUsersWithFriend(users, 'Goldie Gentry'));



//3
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name)
}
console.log(getNamesSortedByFriendsCount(users));



//4
const getSortedUniqueSkills = users => {
    return [...new Set(users.flatMap(user => user.skills))].sort()
  };
  console.log(getSortedUniqueSkills(users));
