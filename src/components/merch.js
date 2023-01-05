import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
const merch = () => {
    return (
        <div id='merch'>
            <div className="banner">
                <h1>Merch</h1>
            </div>
            <div className="merchandise">
                <div className="item">
                    <h3>Item 1</h3>
                    <Image src={process.env.PUBLIC_URL + '/images/IG/311906474_632504035076193_3940616914846406325_n.jpg'}></Image>
                <p>Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                    consequuntur!<br></br><br></br><Button>Buy</Button></p>
                    
                </div>
                <div className="item">
                    <h3>Item 2</h3>
                    <Image src={process.env.PUBLIC_URL + '/images/IG/311906474_632504035076193_3940616914846406325_n.jpg'}></Image>
                <p>Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                    consequuntur!<br></br><br></br><Button>Buy</Button></p>
                    
                </div>

            </div>
        </div>)
}

export default merch;