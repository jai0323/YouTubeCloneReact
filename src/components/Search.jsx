
import { InputGroup,Form,Button } from "react-bootstrap"
const Search = ({handleSubmit,setSearchTerm}) =>{

const submitHandler = async (e) =>{
  e.preventDefault()
  handleSubmit()

}

return    <Form onSubmit={submitHandler}>
<InputGroup className="mt-3">

<Form.Control
  placeholder="Search here..."
  onChange={e => setSearchTerm(e.target.value)}
/>
<Button variant="primary" type="submit">Search</Button>
</InputGroup>
</Form>
}

export default Search