import React from "react";
import { Wrapper, Card, Templetes, Form, Button} from "./style";

import logo from '../../images/logo.svg'

export default function Home() {
    return (
    <Wrapper>
         <img src={logo} alt="logo"/>
         <Card>
             <h2> Selecione um template</h2>
             <Templetes>
                 <button type="button">
                     <img src="" alt="Templete1" />
                 </button>
                 <button type="button">
                     <img src="" alt="Templete1" />
                 </button>
                 <button type="button">
                     <img src="" alt="Templete1" />
                 </button>
                 <button type="button">
                     <img src="" alt="Templete1" />
                 </button>
                 <button type="button">
                     <img src="" alt="Templete1" />
                 </button>
             </Templetes>

             <h2>Textos</h2>
             <Form>
                 <input placeholder="Texto #1" />
                 <input placeholder="Texto #2" />

                 <Button type="submit">MakeMyMeme</Button>
             </Form>
         </Card>
    </Wrapper>
    );
}