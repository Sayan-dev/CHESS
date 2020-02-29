import React from 'react';
import {Switch,Route} from 'react-router-dom'
import main from './components/main/main';
import Register from './components/register/register';
import Login from './components/register/login';
import Details from './components/main/details';
import Layout from './components/hoc';
import Award from './components/main/awardrec';
import Show from './components/main/show';
import Error from './components/main/404'
import Disp from './components/main/display';
import Education from './components/main/qualification';
import Forgot from './components/main/forgotpass';
import Forget from './components/main/forget'
import Allalum from './components/main/allcards'
import Subject from './components/main/subject';
import Facad from './components/main/facad';
import Auth from './components/hoc/auth'
const Routes = () => {
    return (
        <Layout>
        <Switch>
            

            <Route exact component={Auth(main,null)} path="/"/>

            <Route exact component={Auth(Subject,null)} path="/subject"/>
            
            
            <Route exact component={Auth(Facad,null)} path="/facad"/>
            <Route exact component={Auth(Register,null)} path="/register"/>
        
            <Route exact component={Auth(Login,null)} path="/login"/>

            <Route exact component={Auth(Show,true)} path="/show"/>

            <Route exact component={Auth(Award,true)} path="/award"/>
            
            <Route exact component={Auth(Education,true)} path="/qualify"/>

            
            <Route exact component={Auth(Forgot,null)} path="/resetpass"/>
            
            <Route exact component={Auth(Details,true)} path="/details"/>

            <Route exact component={Auth(Disp,true)} path="/display"/>
            
            <Route exact component={Auth(Forget,null)} path="/forget"/>

            <Route exact component={Auth(Allalum,true)} path="/allalum"/>
            
            <Route component={Error} /> 

        
        </Switch>
        </Layout>
    );
};

export default Routes;