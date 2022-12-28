import React, { useState } from 'react'


// two-way data binding : đồng bộ dữ liệu 2 chiều
// - state -> input : value
// - input -> state : onChange()
function Content() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [languages, setLanguages] = useState([]);

    const handleChooseLanguage = language => {
        if(languages.includes(language)) {
            const newLanguages = languages.filter(l => l !== language)
            setLanguages(newLanguages)
        } else {
            const newLanguages = [...languages, language];
            setLanguages(newLanguages)
        }
    }
  return (
    <div>
        <label>Tên</label>
        <input 
            type='text'
            placeholder='Enter name ...'
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <br/>

        <label>Giới tính:</label>
        <label htmlFor='male'>Nam</label>
        <input type="radio" value={"male"} id="male" checked={gender === "male"} onChange={e => setGender(e.target.value)}/>
        <label htmlFor='female'>Nữ</label>
        <input type="radio" value={"female"} id="female" checked={gender === "female"} onChange={e => setGender(e.target.value)}/>
        <br/>

        <label>Ngôn ngữ:</label>
        <label htmlFor='vn'>VN</label>
        <input type="checkbox" value={"vn"} id="vn" checked={languages.includes("vn")} onChange={e => handleChooseLanguage(e.target.value)}/>
        <label htmlFor='cn'>CN</label>
        <input type="checkbox" value={"cn"} id="cn" checked={languages.includes("cn")} onChange={e => handleChooseLanguage(e.target.value)}/>
        <label htmlFor='jp'>JP</label>
        <input type="checkbox" value={"jp"} id="jp" checked={languages.includes("jp")} onChange={e => handleChooseLanguage(e.target.value)}/> 
    </div>
  )
}

export default Content