import Button from 'react-bootstrap/Button';

const shows = () => {
    return (
        <div id='shows'>
            <div className='banner'>
                <h1>Shows</h1>
            </div>
            <div className='event'>
                <img src={process.env.PUBLIC_URL + "/images/IG/310159502_503923617884933_8729406778848083505_n.jpg"} alt='october show'></img>
                <div className='eventDetails'>
                <Button className='tickets' href=''>Tickets</Button>
                </div>
            </div>
        </div>
    )
};

export default shows;