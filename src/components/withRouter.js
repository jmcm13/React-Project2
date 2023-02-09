import React from 'react';
import { useParams } from 'react-router';


//HOC - withRouter
export const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent {...params} params={params} />
    );
}


export default withRouter;