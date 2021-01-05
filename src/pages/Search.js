import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import { useHistory } from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
function Search({hideButtons=false}) {
    const history=useHistory();
    const [{term},dispatch]=useStateValue();
    const [input,setInput]=useState('')
    const search=e=>{
        e.preventDefault();
        dispatch({
            type: "SET_SEARCH_TERM",
            term: input
        })
        history.push('/search')
    }
    
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <img src="https://seeklogo.com/images/G/google-mic-logo-33133A4F5F-seeklogo.com.png"/>
            </div>
            {!hideButtons?(
                <div className="search_buttons">
                <Button type="submit" onClick={search}>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </div>
            ):(
                <div className="search_buttons">
                <Button className="search_buttonHidden" type="submit" onClick={search}>Google Search</Button>
                <Button className="search_buttonHidden">I'm Feeling Lucky</Button>
            </div>
            )}
            
        </form>
    )
}

export default Search 
