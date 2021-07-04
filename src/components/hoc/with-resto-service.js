import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (WrappedComp) => {
    
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <WrappedComp {...props} RestoService= {RestoService} />
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;