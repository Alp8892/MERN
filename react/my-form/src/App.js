import {useState} from 'react';
import {v4} from 'uuid';

//I ran out of time but I wanted to let you know that I got this to show the error
//messages for each individual input of the form but I could not get it to show
//all of them at the same time.

const App = () => {
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [ferror, setFerror] = useState("");
    const [lerror, setLerror] = useState("");
    const [eerror, setEerror] = useState("");
    const [perror, setPerror] = useState("");
    const [cerror, setCerror] = useState("");

    const handleName = (e) => {
      e.preventDefault();
      if(name.length < 2) {
        setFerror("First Name must be more than 2 characters");
      } else {
        setFerror("");
      }
    }
    const handleLname = (e) => {
      e.preventDefault();
      if(lname.length < 2) {
        setLerror("Last Name must be more than 2 characters");
      } else {
        setLerror("");
      }
    }
    const handleEmail = (e) => {
      e.preventDefault();
      if(email.length < 5) {
        setEerror("Email must be more than 5 characters");
      } else {
        setEerror("");
      }
    }
    const handlePassword = (e) => {
      e.preventDefault();
      if(password.length < 8 && password == cpassword) {
        setPerror("Passwords must match and be at least 8 characters");
      } else {
        setPerror("");
      }
    }
    const handleCpassword = (e) => {
      e.preventDefault();
      if(cpassword.length < 8 && cpassword == password) {
        setCerror("Passwords must match and be at least 8 characters");
      } else {
        setCerror("");
      }
    }

  return (
    <div>
  <form onSubmit={handleLname}>
  
  <div>
    <label htmlFor='name'>First Name:</label>
    <input type='text' id='name' value={name} onChange={(e) => {
        setName(e.target.value);
    }}
    />
    <p>{ ferror }</p>
    </div>
    <div>
    <label htmlFor='lname'>Last Name:</label>
    <input type ='text' id='lname' value={lname} onChange={(e) => {
        setLname(e.target.value);
    }}
    />
    <p>{ lerror }</p>
    </div>
    <div>
    <label htmlFor='email'>Email:</label>
    <input type ='text' id='email' value={email} onChange={(e) => {
        setEmail(e.target.value);
    }}
    />
    <p>{ eerror }</p>
    </div>
    <div>
    <label htmlFor='password'>Password:</label>
    <input type ='text' id='password' value={password} onChange={(e) => {
        setPassword(e.target.value);
    }}
    />
    <p>{ perror }</p>
    </div>
    <div>
    <label htmlFor='cpassword'>Confirm Password:</label>
    <input type ='text' id='cpassword' value={cpassword} onChange={(e) => {
        setCpassword(e.target.value);
    }}
    />
    <p>{ cerror }</p>
    </div>
    <input type='submit' value='Submit'></input>
  </form>
  </div>
  );
};

export default App