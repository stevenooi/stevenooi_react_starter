import axios from 'axios';

axios.post('http://localhost:8081/calSalary', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
	  this.setState(
	  {test : 'halo'}
	  );
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  