import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import CardComponent from '../../components/CardComponent/CardComponent'
import SmallCard from '../../components/SmallCard/SmallCard'
import './MainPage.scss'
import {Link} from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

class MainPage extends Component {
    state={
        burgerMenuIsOpen:false,
        lock:false
    }
    handleOpenMenu = ()=>{
        this.setState({
            burgerMenuIsOpen: !this.state.burgerMenuIsOpen,
            lock:true
        })
    }

    render() {
        return (
                <div>
                    <Header 
                        handleOpenMenu={this.handleOpenMenu} 
                        burgerMenuIsOpen={this.state.burgerMenuIsOpen}
                        lock ={this.state.lock}
                    />
                    <main className="mainpage-content">
                        <section className="card-component-container">
                            <h1 className="mainpage-content__title">Oferujemy naszym klientom</h1>
                            <CardComponent />
                        </section>

                        <section className="plan-your-weeding">
                            <h2 className="header-title header-title__medium-nunder">Sprawdź ile kosztowałby Twój wymarzony ślub</h2>
                            <Link className=" btn__main btn__main--plan" to="/wesele">Zaplanuj swoje wesele</Link>
                        </section>

                        <section className="mainpage-organize-also">
                            <h1 className="mainpage-content mainpage-content__title">Organizujemy również</h1>
                            <span className="small-card-container">
                                <SmallCard/>
                            </span>
                        </section>
                    </main>
                    <Footer/>
                </div>
        );
    }
}

export default MainPage;
