import React from "react";
import API from "./utils/API";
import Directory from "./components/Directory";
import Search from "./components/Search";
import Header from './components/Header'

class App extends React.Component {
  state = {
    employees: [],
    search: "",
  };

  filterEmployees = (employee) => {
    if (employee.name.includes(this.state.search)) {
      return true;
    }
    if (employee.phone.includes(this.state.search)) {
      return true;
    }
    if (employee.email.includes(this.state.search)) {
      return true;
    }
    if (employee.dob.includes(this.state.search)) {
      return true;
    }
    return false;

    // for (const key in employee) {
    // if(key === 'image') continue;
    //   if(employee[key].includes(this.state.search)){
    //     return true;
    //   }
    // }
  };

  filterByNameAsc = (arr) => {
    return arr.sort((a,b) => {
      let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
  }
  filterByNameDesc = (arr) => {
    return arr.sort((a,b) => {
      let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
  
      if (fb < fa) {
          return -1;
      }
      if (fb > fa) {
          return 1;
      }
      return 0;
  });
  }

  handleSortBtn = (event) => {
    event.preventDefault();
    if(event.target.getAttribute("name")=== "ascend") this.setState( {employees: this.filterByNameAsc(this.state.employees)});
    if(event.target.getAttribute("name")=== "desc")this.setState( {employees: this.filterByNameDesc(this.state.employees)});
    
  }

  handleSearchChange = (event) => {
    //name is the name on the search input
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formatDate = (day) => {
    return new Date(day).toDateString();
  } 

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    const employees = data.results.map((item) => {
      return{
        name: `${item.name.first} ${item.name.last}`,
        phone: item.cell,
        email: item.email,
        dob: this.formatDate(item.dob.date),
        image: item.picture.thumbnail,
        id: item.login.uuid,
        gender: item.gender
      }
    })
    this.setState({ employees: employees });
  };

  render() {
    // console.log(this.state);
    // return <h1>Employees go here</h1>;
    let employees = this.state.employees.filter(this.filterEmployees);
    // console.log(employees.filter(this.filterEmployees))
    return (
      <>
      <Header/>
        <Search
          searchValue={this.state.search}
          handleSearchChange={this.handleSearchChange}
        />
        <Directory employees={employees} handleSortBtn={this.handleSortBtn}/>
      </>
    );
  }
}

export default App;
