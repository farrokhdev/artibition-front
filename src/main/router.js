import React from 'react'
import {Routes, Route} from 'react-router-dom'

const RouterConfig = (props) => {
    return (
        <Routes>
            <>
                <Route exact path={`/`} component={(router) =>
                    <div {...props} {...router} />
                }/>
                <Route exact path={`/result/:id`} component={(router) =>
                    <div {...props} {...router} />
                }/>

                <Route path="/samples"
                       render={({match: {url}}) => (
                           <>
                               <Route exact path={`${url}/`}
                                      component={(router) =>
                                          <div {...props} {...router} />
                                      }
                               />
                           </>
                       )}
                />
            </>

        </Routes>
    )
}

export default RouterConfig
