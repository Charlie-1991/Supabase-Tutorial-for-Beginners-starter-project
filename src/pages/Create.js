import {useState} from "react"
import supabase from "../config/supabaseClient"
import supabase from "../config/supabaseClient"


const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !rating){
      setFormError('Please fill in all the fields correctly')
      return
    }

    const {data, error } = await supabase
      .from ('smoothies')
      .insert([{title, method, rating}])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly')
    }

    if (error) {
      console.log(data)
      setFormError(null)
    }
  }
    return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title:</label>
        <input 
        type="text"
        id="title"
        value = {title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea 
          id="method"
          value={method}
          onChange={(e) => setMethod (e.targe.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <textarea 
          id="number"
          value={rating}
          onChange={(e) => setMethod (e.targe.value)}
        />
        <button>Create Smothie Recipe</button>
        {formError && <p className="error">{formError}</p>}


      </form>
    </div>
  )
}

export default Create