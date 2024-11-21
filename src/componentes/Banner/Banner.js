import './Banner.css'



export const Banner = ({image}) => {
    // JSX
    return (
        <header className="banner">
            <img src={image} alt="O banner"/>
        </header>
    )
}