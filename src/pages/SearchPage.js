import React from 'react'
import './SearchPage.css'
import useGoogleSearch from '../useGoogleSearch'
import {useStateValue} from '../StateProvider'
import Response from '../response'
import {Link} from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined'
import ImageIcon from '@material-ui/icons/ImageOutlined'
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined'
import RoomIcon from '@material-ui/icons/RoomOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined'
function SearchPage() {
    const [{term},dispatch]=useStateValue();
    const { data } = useGoogleSearch(term)
    // const data=Response
    console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                </Link>
               <div className="searchPage_headerBody">
                    <Search hideButtons/>
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                    <SearchIcon/>
                                    <Link to="/all">ALL</Link>
                            </div>
                            <div className="searchPage_option">
                                    <DescriptionIcon/>
                                    <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                    <ImageIcon/>
                                    <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                    <LocalOfferIcon/>
                                    <Link to="/shopping">Shopping</Link>
                            </div>
                            
                            <div className="searchPage_option">
                                    <RoomIcon/>
                                    <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                    <MoreVertIcon/>
                                    <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                        
                                    <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                
                                    <Link to="/tools">Tools</Link>
                            </div>
                        </div>

                    </div>
               </div>
            </div>
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term?term:"Tesla"}
                    </p>
                    {data?.items.map(item=>(
                        <div className="searchPage_result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src &&(
                                    <img className="searchPage_resultImage" src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src}>
                                    </img>
                                )}
                             {item.displayLink}
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                            <h2> {item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>

                    ))}
                </div>
            )}

            
        </div>
    )
}

export default SearchPage 
