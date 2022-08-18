import React from "react";
import ReactDOM from "react-dom";

function Card(props){
    return (
        <div className="my-style">
            <h2>{props.name}</h2>
            <img src={props.img} alt="avatar.img"/>
            <div><a href= {props.insta} target= "_blank" >Instagram Account {props.name}</a></div>
            
        </div>
    );
}

ReactDOM.render(<div>
    <h1 className="heading">BlackPink</h1>
    {/* here in card we can define its own property which store as a object in its properties i.e props */}
    <Card name= "Lalisa Manoban" img= "https://www.celebsofworld.com/wp-content/uploads/2021/04/lalisa-manoban-instagram-photos-march-27-31-2021-0.jpg" insta= "https://www.instagram.com/lalalalisa_m/?igshid=YmMyMTA2M2Y=" />
    <Card name= "Jennie Kim" img= "https://english.sakshi.com/visual-stories/entertainment/2022-07-02/JK%201_1656719910.jpg" insta= "https://instagram.com/jennierubyjane?igshid=YmMyMTA2M2Y=" />
    <Card name= "Jisoo" img= "https://www.iwmbuzz.com/wp-content/uploads/2020/10/blackpink-jisoos-hot-and-unseen-sexy-photos-goes-viral-on-the-internet-920x613.jpg" insta= "https://instagram.com/sooyaaa__?igshid=YmMyMTA2M2Y=" />
    <Card name= "Roseanne Park" img= "https://scontent.flko1-1.fna.fbcdn.net/v/t1.6435-9/187395722_117500580483818_6466720888528116811_n.jpg?stp=cp0_dst-jpg_e15_p480x480_q65&_nc_cat=111&ccb=1-7&_nc_sid=dd9801&_nc_ohc=pOQpnTkjVGYAX-HYbF2&_nc_ht=scontent.flko1-1.fna&oh=00_AT_wWGbTWG4QulCVakeMH8B4Xk-XVxvOKj2ZTZLm4TdoWg&oe=63225303" insta= "https://instagram.com/roses_are_rosie?igshid=YmMyMTA2M2Y=" />
</div>, document.getElementById("root"));