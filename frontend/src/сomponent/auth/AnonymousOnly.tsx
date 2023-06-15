import React, {ReactNode} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../storage/model";

interface Props {
    redirectOnAuthorized?: string
    children: ReactNode
}

export const AnonymousOnly: React.FC<Props> = (props) => {

    const authState = useSelector((state: RootState) => state.auth)

    if (authState?.isAuthenticated) window.location.replace(props.redirectOnAuthorized || '/')

    return (
        <>{props.children}</>
    )
}
