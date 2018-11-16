const people = {
  status: 'ok',
  peopleList: [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
  ],
};

export const getPeopleList  = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}