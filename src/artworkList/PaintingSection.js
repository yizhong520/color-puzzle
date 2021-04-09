import 'firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export function RenderPainting(props) {
    let paintArray = props.paintArray;
    let inputtedValue = props.inputtedValue;
    let paintings = paintArray.map((p) => {
        if (inputtedValue.toLowerCase().replaceAll(/\s/g,'') === p.author.toLowerCase()
            || inputtedValue.toLowerCase().replaceAll(/\s/g,'') === p.name.toLowerCase()) {
            return <RenderPaintInSearch painting={p} key={p.name} />
        }
        return (<div></div>);
    });
    return (
        <div className="row my-4 painting-section">
            {paintings}
        </div>
    );
}

export function RenderPaintingAll(props) {
    let paintArray = props.paintArray;
    let paintings = paintArray.map((p) => {
        return <RenderPaint painting={p} key={p.alt+"_"}/>
    });
    return (
        <div className="row my-4 painting-section">
            {paintings}
        </div>
    );
}

export function RenderPaint(props) {
    const [count_likes, setCountLikes] = useState(0);

    useEffect(() => {
        const curr_count = firebase.database().ref("painting_"+props.painting.number);
        curr_count.on("value", (snapshot)=>{
            const theValue = snapshot.val();
            setCountLikes(theValue);
        })
    })

    //an event handling callback
    const handleClick = (event) => {
        const curr_count = firebase.database().ref("painting_"+props.painting.number);
        console.log(curr_count);

        curr_count.set(count_likes+1);
        setCountLikes(count_likes+1); //update the state to be a new value
    }

    let imgUrl = "./img/"+ props.painting.painting + ".jpg";
    return (
        <div className="col-12 col-xl-6">
            <div className="card card-no-shadow">
                <div className="card-body">
                    <img src={imgUrl} alt={props.painting.alt} className="card-img-top" />
                    <h3 className="card-title">
                        <a href={props.painting.link}>{props.painting.title}</a>
                    </h3>
                    <p className="card-text">{props.painting.text}</p>
                    <div className="likes">
                        <FontAwesomeIcon onClick={handleClick} icon={faHeart} className="fa-2x" color="tomato"></FontAwesomeIcon>
                        <p className="likes-count">Can't believe people liked me {count_likes} times (๑•̀ㅂ•́)و✧</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function RenderPaintInSearch(props) {
    const [count_likes, setCountLikes] = useState(0);

    useEffect(() => {
        const curr_count = firebase.database().ref("painting_"+props.painting.number);
        curr_count.on("value", (snapshot)=>{
            const theValue = snapshot.val();
            console.log("valueChange:" + theValue);
            setCountLikes(theValue);
        })
    })

    //an event handling callback
    const handleClick = (event) => {
        const curr_count = firebase.database().ref("painting_"+props.painting.number);
        console.log(curr_count);

        curr_count.set(count_likes+1);
        setCountLikes(count_likes+1); //update the state to be a new value
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let imgUrl = "./img/"+ props.painting.painting + ".jpg";
    return (
        <div className="col-12 col-xl-6">
            <div className="card card-no-shadow">
                <div className="card-body">
                    <img src={imgUrl} alt={props.painting.alt} className="card-img-top" />
                    <h3 className="card-title">
                        <a href={props.painting.link}>{props.painting.title}</a>
                    </h3>
                    <div className="detail-button-section">
                        <Button className="more-detail-button" color="info" onClick={toggle}>Check for More Detail</Button>
                        <Collapse isOpen={isOpen}>
                            <Card>
                            <CardBody>
                                <p className="card-text">{props.painting.text}</p>
                            </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                    <div className="likes">
                        <FontAwesomeIcon onClick={handleClick} icon={faHeart} className="fa-2x" color="tomato"></FontAwesomeIcon>
                        <p className="likes-count">Can't believe people liked me {count_likes} times (๑•̀ㅂ•́)و✧</p>
                    </div>
                </div>
            </div>
        </div>
    );
}