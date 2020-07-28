import React from 'react';
import logo from './logo.svg';
import './App.css';

class Navigation {
    render(){
        return(
            <img src="#" alt="#"></img>
{/* 
            <ul>
                <li><a href="#">ISSUES</a></li>
                <li><a href="#">TOPICS</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">NEWSLETTER</a></li>
            </ul>    */}

            <div className="box">
                <img src="/Naut/images/clover_card.jpeg" alt="">
                    <p className="header">THE NAUTILUS SPOTLIGHT</p>
                    <h1 className="title">WHY THE LAWS OF PHYSICS ARE INEVITABLE</h1>
                    <button class="btn">Read Now</button>
                </img>
            </div>
        );
    }
}
