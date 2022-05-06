import React from 'react'

interface IHelloProps {
    messeage?: string;
}

const Hello: React.FunctionComponent<IHelloProps>= (props) => {
    return <h2>{props.messeage }</h2>
}

Hello.defaultProps = {
    messeage: 'Hello world'
}

export default Hello;