import styled from 'styled-components'


const Wrapper = styled.div`
padding: 1em;
`
const DUMMY_PEEPS = [
  { 
    "gender": "male", 
    "name": {
      "title": "mr",
      "first": "george",
      "last": "fawcett"
    },
    "location": {
      "street": "1245 some road",
      "city": "austin",
      "state": "texas",
      "postcode": "78745"
  },
    "email": "george.dibbs@saluki.com",
    "dob": {
      "date": "2013-07-20T09:44:18.674Z",
      "age": 7
    },
    "phone": "512-962-7516",
    "cell": "512-454-0666",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/75.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
  },
  { 
    "gender": "male", 
    "name": {
      "title": "mr",
      "first": "spike",
      "last": "dibbs"
    },
    "location": {
      "street": "11203 fancy street",
      "city": "garland",
      "state": "texas",
      "postcode": "75040"
  },
    "email": "mister.dibbs@goodboi.com",
    "dob": {
      "date": "2014-12-03T02:20:18.674Z",
      "age": 6
    },
    "phone": "214-357-5289",
    "cell": "214-373-3793",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/15.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
    },
  },
  { 
    "gender": "female", 
    "name": {
      "title": "ms",
      "first": "haddy",
      "last": "pants"
    },
    "location": {
      "street": "7377 foster avenue",
      "city": "dallas",
      "state": "texas",
      "postcode": "75229"
  },
    "email": "haddy.haddypants@fosters.com",
    "dob": {
      "date": "2018-03-15T19:23:18.674Z",
      "age": 3
    },
    "phone": "214-739-0883",
    "cell": "214-521-4789",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/10.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
    },
  }
]

const App = () => {
  const title = "I am the title";
  const message = "I am the fancy message";
  const handleClick =()=>{
    alert("Boop")
  }
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{message}</p>
      <p onClick={handleClick}>I am the boop</p>
    </Wrapper>
  );
};

export default App;
