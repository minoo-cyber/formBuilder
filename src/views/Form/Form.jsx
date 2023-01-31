import React,{useState} from "react"
import styled from "styled-components";

function Form() {

const[inputLabel,setInputLabel]=useState()
const[inputType,setInputType]=useState("text")
const[checkRequired,setCheckRequired]=useState(false)
const[showSaveForm,setShowSaveForm]=useState(false)

const handleinputLabel=(e)=>{
  setInputLabel(e.target.value)
}

const handleInputType=()=>{
  setInputType(document.getElementById("inputType").value) 
}

const handleCheckRequired=(e)=>{
  setCheckRequired(e.target.checked)
}

const handleCreateForm=(e)=>{
   e.preventDefault();
   setShowSaveForm(true)

}


const handleSaveForm=(e)=>{
  e.preventDefault();
  const data={inputLabel:inputLabel,type:inputType,require:checkRequired}
  localStorage.setItem('data', JSON.stringify(data));

}

  return (
    <StyledWrapper>
      <h1>Form Builder</h1>
      <div>
    <StyledWrapperLeft>
<StyledForm onSubmit={handleCreateForm}>
  <StyledItem>
    <input placeholder="please enter title" type="text" onChange={handleinputLabel} required/>
  </StyledItem>
  <StyledItem>
    <select id="inputType" onChange={handleInputType}>
      <option value="text">
        text
      </option>
         <option value="password">
       password
      </option>
      <option value="date">
    date
      </option>
    </select>
  </StyledItem>
  <Styledcheck>
  <input type="checkbox" onChange={handleCheckRequired}/>
    <label>
      Required
    </label>
  </Styledcheck>
  <button type="submit">
Create Form
  </button>
</StyledForm>
    </StyledWrapperLeft>
    <StyledWrapperRight>
      {showSaveForm &&
    <StyledForm  onSubmit={handleSaveForm}>
  <StyledNew>
    <label>
      {inputLabel}
    </label>
    <br/>
    <input  type={inputType} required={checkRequired}/>
  </StyledNew>
  <button type="submit" className="saveButton">
Save
  </button>
</StyledForm>
}
        </StyledWrapperRight>
        </div>
        </StyledWrapper>

  );
}

const StyledWrapper= styled.main`
padding-top:100px;
h1{
  color: #fff;
  text-align: center;
  letter-spacing: 6px;
  font-size: 2.8rem;
}
background:#081229;
min-height:100vh;
  >div{
    display:flex;
  justify-content:center;
  margin:0 auto;
  @media(max-width:768px){
    display:unset;
    >div{
      width:100%;
    }
        }
  >div{
    margin:20px;
  }
  }

`
const StyledWrapperLeft = styled.div`
`
const StyledForm = styled.form` 
width:300px;
max-width:100%;
margin:0 auto;
padding-top:15px;
button{
  width:100%;
  padding: 10px;
  border-radius: 5px;
  background: #000;
    border: 1px solid #ec5990;
    color: #fff;
    cursor:pointer;
    font-size:20px;
}
.saveButton{
  position:relative;
  top:74px;
}
`
const StyledItem = styled.div` 
width: 100%;
margin: 20px auto;
background: #fff;
border-radius: 5px;
input,select{
  width:100%;
  padding: 10px;
  background: none;
  box-shadow: none;
  font-size:16px;
}
`

const StyledWrapperRight = styled.div`
`
const Styledcheck = styled.div`
width: 100%;
margin: 20px auto;
color:#ec5990;
label{
  margin-left:7px;
}
`
const StyledNew = styled.div`
width: 100%;
margin: 15px auto;
input{
  background: #fff;
  border-radius: 5px;
  margin:10px auto;
  width:100%;
  padding: 10px;
}
label{
  color:#ec5990;
}
`

export default Form;
