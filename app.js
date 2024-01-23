// successfully setup react. 

// const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",container);

// convert it as a functional component.

// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// const cont = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),cont);

// working with class components.

class ReactContainer extends React.Component{
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);

  