import React, { Component } from 'react';
import { Route, NavLink, Switch  } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

const AscyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {

    state= {
        auth: true,
    }

    componentDidMount(){
        console.log(this.props)
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/posts" 
                                    exact 
                                    activeClassName="active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>
                                        Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname:  '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route  path="/" exact render={() => <h1>Home</h1>}/>
                <Route  path="/" render={() => <h1>Home 2</h1>}/> */}
                <Switch>
                    {/* {this.state.auth ? <Route  path="/new-post" component={NewPost}/> : null} eagerly loaded*/}
                    {this.state.auth ? <Route  path="/new-post" component={AscyncNewPost}/> : null} {/*lazely loaded*/}
                    <Route  path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not Found</h1>}/>}
                    {/* <Redirect from="/" to="/posts"/> */}
                    {/* <Route  path="/" component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;