import './App.css';
import { useState } from 'react';

const App = () => {

  const [res, SetRes] = useState('')
  const [passwordLength, SetpasswordLength] = useState(50);
  const [includeUpperCase, SetIncludeUpperCase] = useState(false);
  const [includeLowerCase, SetIncludeLowerCase] = useState(false);
  const [includeNumbers, SetIncludeNumbers] = useState(false);
  const [includeSymbols, SetIncludeSymbols] = useState(false);

  const numbers = '123456789';
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*(){}[]=<>/,.";


  const handleGeneratePassword = (e) => {
    let characterList = ''

    if (includeLowerCase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (includeUpperCase) {
      characterList = characterList + upperCaseLetters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }
    if (includeSymbols) {
      characterList = characterList + symbols;
    }

    SetRes(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let password = '';
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const handleResetForm = () => {
    SetRes('');
    SetpasswordLength();
    SetIncludeUpperCase();
    SetIncludeLowerCase();
    SetIncludeNumbers();
    SetIncludeSymbols();
  }




  return (
    <div className="app">
      <h3>Generate your password!</h3>
      <div className="container d-flex">
        <div className="generator">

          <div className="password">
            <input className="main-input input-group-text" type="text" name="result" readOnly value={res} />
            <button className="generatePsw btn" onClick={handleGeneratePassword}>Generate random password</button>
          </div>
          <div className="last_passwords">
            <table></table>
          </div>
        </div>
        <div className="side">
          <div className="settings">
            <ul>
              <li>
                <div className="input-group mb-3">
                  <input type="number"
                    className="length-input form-control"
                    id="psw-lenght"
                    name="psw-length"
                    min="4" max="50"
                    defaultValue={passwordLength}
                    onChange={(e) => SetpasswordLength(e.target.value)}
                  />
                  <span className="length-span input-group-text" id="basic-addon2">Length</span>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="lower-case"
                    name="lower-case"
                    checked={includeLowerCase}
                    onChange={(e) => SetIncludeLowerCase(e.target.checked)} />
                  <label className="upperCase">Lowercase letters</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="upper-case"
                    name="upper-case"
                    checked={includeUpperCase}
                    onChange={(e) => SetIncludeUpperCase(e.target.checked)} />
                  <label className="upperCase">Uppercase letters</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="numbers"
                    name="numbers"
                    checked={includeNumbers}
                    onChange={(e) => SetIncludeNumbers(e.target.checked)} />
                  <label className="upperCase">Numbers</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="symbols"
                    name="symbols"
                    checked={includeSymbols}
                    onChange={(e) => SetIncludeSymbols(e.target.checked)} />
                  <label className="upperCase">Symbols</label>
                </div>
              </li>
            </ul>
          </div>
          <button className="reset btn" onClick={handleResetForm}>Reset</button>
        </div>
      </div>
      <div className="container">
        <table></table>
      </div>
    </div>
  );
}
// const getRandomLower = () => {
//   const letters = "abcdefghijklmnopqrstuvwxyz";
//   return letters[Math.floor(Math.random() * letters.length)];
// }

// const getRandomUpper = (letter) => {
//   const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   return upperLetters[Math.floor(Math.random() * upperLetters.length)]
// }

// const getRandomNumber = (number) => {
//   const numbers = "1234567890";
//   return numbers[Math.floor(Math.random() * numbers.length)]
// }

// const getRandomSymbol = (symbol) => {
//   const symbols = "!@#$%^&*(){}[]=<>/,.";
//   return symbols[Math.floor(Math.random() * symbols.length)]
// }

// const generatePassword = (number, symbol, letter, length) => {
//   let generatedPassword = "";
//   let variationsCount = [letter, number, symbol].length;
//   for (let i = 0; i < length; i += variationsCount) {
//     if (number) {
//       setRes(generatedPassword += getRandomNumber());
//     }
//     if (symbol) {
//       generatedPassword += getRandomSymbol();
//     }
//     if (letter) {
//       generatedPassword += getRandomUpper();
//     } else {
//       getRandomLower()
//     }
//     return console.log(generatedPassword)
//   }
// }

export default App;