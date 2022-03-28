import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss"

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                <select name="genre" id="genre">
                    <option>Genres</option>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="mystery">Mystery</option>
                    <option value="thriller">Thriller</option>
                </select>
            </div>
        )}
        <img 
        width= '100%'
        src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/The-Best-Movie-Franchises-To-Binge-Watch.jpg" alt="" />
        <div className="info">
            <img src="https://starwarsblog.starwars.com/wp-content/uploads/2017/01/sw-the-last-jedi-tall-1200x630.jpg" alt="" />

            <span className='description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut molestias nostrum illum quidem. Tempora, saepe illum tenetur odit, excepturi fugiat modi amet quos temporibus debitis accusamus id. Placeat, assumenda sit?
            </span>
            <div className="buttons">
                <button className='play-button'>
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>

                <button className='more-button'>
                    <InfoOutlinedIcon/>
                    <span>More Info</span>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Featured