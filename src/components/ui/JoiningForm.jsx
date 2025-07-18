import React, { useState } from 'react'

const JoiningForm = () => {

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [bdate, setBdate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        required
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email' />

      <input
        required
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name' />

      <input
        required
        type="date"
        name="bdate"
        id="bdate"
        value={bdate}
        onChange={(e) => setBdate(e.target.value)}
        placeholder='Enter Birth Date' />

      <select name="gender" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button type="submit">Join</button>

    </form>
  )
}

export default JoiningForm;