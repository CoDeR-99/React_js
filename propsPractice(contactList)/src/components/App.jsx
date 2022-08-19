import React from "react";
import Card from './Card';
import Contact from "../Contacts";

function App(){
    return (
        <div>
            <h1 className="heading">BlackPink</h1>
            <Card name= {Contact[0].name} imgURL= {Contact[0].imgURL} phone= {Contact[0].phone} insta= {Contact[0].insta} />
            <Card name= {Contact[1].name} imgURL= {Contact[1].imgURL} phone= {Contact[1].phone} insta= {Contact[1].insta} />
            <Card name= {Contact[2].name} imgURL= {Contact[2].imgURL} phone= {Contact[2].phone} insta= {Contact[2].insta} />
            <Card name= {Contact[3].name} imgURL= {Contact[3].imgURL} phone= {Contact[3].phone} insta= {Contact[3].insta} />
        </div>
    );
}

export default App;