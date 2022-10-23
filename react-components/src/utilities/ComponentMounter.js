import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react/cjs/react.production.min";
import { BehaviorSubject } from 'rxjs'

const componentSubscription = new BehaviorSubject();

const WrapperComponent = ({ Component, props }) => {
    const [outerState, setOuterState] = useState({});

    useEffect(() => {
        componentSubscription.subscribe(props => {
            setOuterState(props);
        });
    },[]);

    return <Component {...outerState} />;
}


export const ComponentMounter = ({ Component, root }) => {

    

    const mount = () => {
        const root = ReactDOM.createRoot(root);
        root.render(<WrapperComponent />
        );
    }





    return { mount, componentSubscription }

}